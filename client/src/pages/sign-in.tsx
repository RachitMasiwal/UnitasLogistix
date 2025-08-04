import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Truck, Eye, EyeOff, RefreshCw } from "lucide-react";
import { signInSchema, type SignIn } from "@shared/schema";
import { useSignIn } from "@/hooks/useAuth";

// Generate random validation code (6 chars, excluding confusing characters)
const generateValidationCode = () => {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // Excluding 0, O, I, 1
  let result = '';
  for (let i = 0; i < 6; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
};

export default function SignInPage() {
  const [, setLocation] = useLocation();
  const [showPassword, setShowPassword] = useState(false);
  const [validationCode, setValidationCode] = useState('');
  const [userCode, setUserCode] = useState('');
  const { toast } = useToast();
  const signInMutation = useSignIn();

  // Generate validation code on component mount
  useEffect(() => {
    setValidationCode(generateValidationCode());
  }, []);

  const form = useForm<SignIn>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
      recaptcha: "test-token", // In real app, this would be from reCAPTCHA
    },
  });

  const refreshValidationCode = () => {
    setValidationCode(generateValidationCode());
    setUserCode('');
  };

  const onSubmit = async (data: SignIn) => {
    // Validate the code first
    if (userCode.toUpperCase() !== validationCode) {
      toast({
        variant: "destructive",
        title: "Validation failed",
        description: "Please enter the correct validation code",
      });
      return;
    }

    try {
      await signInMutation.mutateAsync(data);
      toast({
        title: "Welcome back!",
        description: "You have been signed in successfully",
      });
      setLocation("/");
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Sign in failed",
        description: error.message || "Please check your credentials",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4 pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <Card className="shadow-xl border-0">
          <CardHeader className="text-center pb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Truck className="w-8 h-8 text-blue-600" />
              <span className="text-xl font-bold text-blue-600">Unitas LogistiX</span>
            </div>
            <CardTitle className="text-2xl font-bold text-gray-900">Welcome Back</CardTitle>
            <CardDescription className="text-gray-600">
              Sign in to access your account and manage your shipments
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  {...form.register("email")}
                  className="h-11"
                />
                {form.formState.errors.email && (
                  <p className="text-sm text-red-600">{form.formState.errors.email.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    {...form.register("password")}
                    className="h-11 pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                {form.formState.errors.password && (
                  <p className="text-sm text-red-600">{form.formState.errors.password.message}</p>
                )}
              </div>

              {/* Validation Code */}
              <div className="space-y-2">
                <Label>Validation Code</Label>
                <div className="flex items-center gap-3">
                  <div className="flex-1 bg-gray-100 border border-gray-300 rounded-lg p-3 font-mono text-lg text-center tracking-widest font-bold text-gray-800">
                    {validationCode}
                  </div>
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    onClick={refreshValidationCode}
                    className="flex-shrink-0"
                  >
                    <RefreshCw className="w-4 h-4" />
                  </Button>
                </div>
                <Input
                  type="text"
                  placeholder="Enter the code above"
                  value={userCode}
                  onChange={(e) => setUserCode(e.target.value.toUpperCase())}
                  className="h-11 text-center font-mono tracking-widest"
                  maxLength={6}
                />
              </div>

              <Button
                type="submit"
                className="w-full btn-logistics-primary h-11"
                disabled={signInMutation.isPending}
              >
                {signInMutation.isPending ? "Signing In..." : "Sign In"}
              </Button>

              <div className="text-center text-sm text-gray-600">
                Don't have an account?{" "}
                <Link href="/signup">
                  <a className="text-blue-600 hover:text-blue-800 font-medium">
                    Sign Up
                  </a>
                </Link>
              </div>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}