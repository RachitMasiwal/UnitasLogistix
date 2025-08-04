import { useState } from "react";
import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { GetQuoteModal } from "@/components/get-quote-modal";
import { Truck, Menu, User, LogOut } from "lucide-react";
import { useAuth, useSignOut } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";

export function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const { user, isAuthenticated, isLoading } = useAuth();
  const signOutMutation = useSignOut();
  const { toast } = useToast();

  const navigationItems = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/tracking", label: "Tracking" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/" && location === "/") return true;
    if (href !== "/" && location.startsWith(href)) return true;
    return false;
  };

  const handleSignOut = async () => {
    try {
      await signOutMutation.mutateAsync();
      toast({
        title: "Signed out successfully",
        description: "See you next time!",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Sign out failed",
        description: "Please try again",
      });
    }
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/">
            <motion.div
              className="flex items-center gap-2 font-bold text-xl text-blue-600 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Truck className="w-8 h-8" />
              Unitas LogistiX
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigationItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <motion.span
                  className={`font-medium transition-colors relative cursor-pointer ${
                    isActive(item.href)
                      ? "text-blue-600"
                      : "text-gray-700 hover:text-blue-600"
                  }`}
                  whileHover={{ scale: 1.05 }}
                >
                  {item.label}
                  {isActive(item.href) && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600"
                      layoutId="activeIndicator"
                    />
                  )}
                </motion.span>
              </Link>
            ))}
            
            <div className="flex items-center gap-3">
              <Button 
                className="btn-logistics-primary"
                onClick={() => setIsQuoteModalOpen(true)}
              >
                Get Quote
              </Button>
              
              {!isLoading && (
                isAuthenticated ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="rounded-full">
                        <User className="w-5 h-5" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-48">
                      <div className="px-2 py-1.5 text-sm font-medium text-gray-900">
                        {user?.firstName || "User"}
                      </div>
                      <div className="px-2 py-1.5 text-xs text-gray-500">
                        {user?.email}
                      </div>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem 
                        onClick={handleSignOut}
                        className="text-red-600 focus:text-red-600"
                      >
                        <LogOut className="w-4 h-4 mr-2" />
                        Sign Out
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link href="/signin">
                    <Button className="btn-logistics-primary">
                      SignIn/SignUp
                    </Button>
                  </Link>
                )
              )}
            </div>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-64">
                <div className="flex flex-col gap-4 mt-8">
                  {navigationItems.map((item) => (
                    <Link key={item.href} href={item.href}>
                      <motion.span
                        className={`block py-2 px-4 rounded-lg font-medium transition-colors cursor-pointer ${
                          isActive(item.href)
                            ? "bg-blue-100 text-blue-600"
                            : "text-gray-700 hover:bg-gray-100"
                        }`}
                        onClick={() => setIsOpen(false)}
                        whileTap={{ scale: 0.95 }}
                      >
                        {item.label}
                      </motion.span>
                    </Link>
                  ))}
                  <Button 
                    className="btn-logistics-primary w-full mt-4"
                    onClick={() => {
                      setIsOpen(false);
                      setIsQuoteModalOpen(true);
                    }}
                  >
                    Get Quote
                  </Button>
                  
                  {!isLoading && (
                    isAuthenticated ? (
                      <div className="border-t pt-4 mt-4">
                        <div className="px-4 py-2 text-sm font-medium text-gray-900">
                          {user?.firstName || "User"}
                        </div>
                        <div className="px-4 py-1 text-xs text-gray-500">
                          {user?.email}
                        </div>
                        <Button 
                          variant="ghost" 
                          className="w-full mt-2 text-red-600 hover:text-red-700 hover:bg-red-50"
                          onClick={() => {
                            setIsOpen(false);
                            handleSignOut();
                          }}
                        >
                          <LogOut className="w-4 h-4 mr-2" />
                          Sign Out
                        </Button>
                      </div>
                    ) : (
                      <div className="border-t pt-4 mt-4">
                        <Link href="/signin">
                          <Button 
                            className="btn-logistics-primary w-full"
                            onClick={() => setIsOpen(false)}
                          >
                            SignIn/SignUp
                          </Button>
                        </Link>
                      </div>
                    )
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
      
      <GetQuoteModal 
        isOpen={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)} 
      />
    </motion.nav>
  );
}
