import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Lock, User, Eye, EyeOff } from 'lucide-react';
import type { LoginCredentials, LoginResponse } from "../types/admin";

const AdminLogin: React.FC = () => {
  const [credentials, setCredentials] = useState<LoginCredentials>({
    username: "",
    password: "",
  });
  const [error, setError] = useState<string>("");
  const [showPassword, setShowPassword] = useState(true);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!credentials.username || !credentials.password) {
      setError("Please fill in both fields.");
      return;
    }

    if (credentials.username === "admin" && credentials.password === "admin123") {
      try {
        const data: LoginResponse = {
          token: "your-generated-token-here",
          message: "Login successful",
        };

        localStorage.setItem("adminToken", data.token);
        navigate("/admin/dashboard");
      } catch (err) {
        setError(err instanceof Error ? err.message : "Login failed");
      }
    } else {
      setError("Invalid username or password");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: keyof LoginCredentials
  ) => {
    setCredentials({ ...credentials, [field]: e.target.value });
    if (error) setError("");
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />

      <main className="flex-1 flex items-center justify-center p-4 my-8 sm:my-12 md:my-16">
        <div className="w-full max-w-md mx-4">
          <Card className="border-2 shadow-lg">
            <CardHeader className="space-y-1 pb-8">
              <CardTitle className="text-2xl md:text-3xl text-center font-bold">
                Admin Login
              </CardTitle>
              <p className="text-center text-muted-foreground">
                Enter your credentials to access the admin dashboard
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-6">
                {error && (
                  <div className="p-3 text-sm bg-destructive/10 border border-destructive/20 text-destructive rounded-md">
                    {error}
                  </div>
                )}
                
                <div className="space-y-2">
                  <Label htmlFor="username" className="text-base">Username</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                    <Input
                      id="username"
                      placeholder="Enter your username"
                      className="pl-10 h-12 text-base"
                      value={credentials.username}
                      onChange={(e) => handleChange(e, "username")}
                      required
                    />
                  </div>
                </div>
                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-base">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        className="pl-10 pr-10 h-12 text-base"
                        value={credentials.password}
                        onChange={(e) => handleChange(e, "password")}
                        required
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-1 top-1 h-10 w-10 p-0"
                        onClick={() => setShowPassword(!showPassword)}
                        aria-label={showPassword ? "Hide password" : "Show password"}
                      >
                        {showPassword ? (
                          <EyeOff className="h-5 w-5 text-muted-foreground" />
                        ) : (
                          <Eye className="h-5 w-5 text-muted-foreground" />
                        )}
                      </Button>
                    </div>
                  </div>
                <Button type="submit" className="w-full h-12 text-base">
                  Login to Dashboard
                </Button>
              </form>

              <div className="mt-6 text-center">
                <Button 
                  variant="link" 
                  className="text-primary text-base"
                  onClick={() => navigate('/')}
                >
                  Return to Homepage
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AdminLogin;
