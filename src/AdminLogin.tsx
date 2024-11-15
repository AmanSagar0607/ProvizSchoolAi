import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Brain, Menu } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  // SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import type { LoginCredentials, LoginResponse } from "../types/admin";

const AdminLogin: React.FC = () => {
  const [credentials, setCredentials] = useState<LoginCredentials>({
    username: "",
    password: "",
  });
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!credentials.username || !credentials.password) {
      setError("Please fill in both fields.");
      return;
    }

    if (
      credentials.username === "admin" &&
      credentials.password === "admin123"
    ) {
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
    <div className="min-h-screen bg-background text-foreground ">
      <header className="border-b sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Brain className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold">Proviz School of AI</span>
            </div>
            <div className="hidden md:flex space-x-4">
              <Button variant="ghost" onClick={() => navigate('/')}>Home</Button>
              <Button variant="ghost" onClick={() => navigate('/programs')}>Programs</Button>
              <Button variant="ghost" onClick={() => navigate('/about')}>About</Button>
              <Button variant="ghost" onClick={() => navigate('/contact')}>Contact</Button>
              <Button variant="ghost" onClick={() => navigate('/admin/dashboard')}>Admin</Button>
            </div>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                  {/* <SheetDescription>
                    Navigate through our site
                  </SheetDescription> */}
                </SheetHeader>
                <div className="mt-4 space-y-2">
                  <Button variant="ghost" onClick={() => navigate('/')} className="w-full justify-start">Home</Button>
                  <Button variant="ghost" onClick={() => navigate('/programs')} className="w-full justify-start">Programs</Button>
                  <Button variant="ghost" onClick={() => navigate('/about')} className="w-full justify-start">About</Button>
                  <Button variant="ghost" onClick={() => navigate('/contact')} className="w-full justify-start">Contact</Button>
                  <Button variant="ghost" onClick={() => navigate('/admin/dashboard')} className="w-full justify-start">Admin</Button>
                </div>
              </SheetContent>
            </Sheet>
          </nav>
        </div>
      </header>

      <div className="flex items-center justify-center  p-4 mt-24">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Admin Login</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  value={credentials.username}
                  onChange={(e) => handleChange(e, "username")}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={credentials.password}
                  onChange={(e) => handleChange(e, "password")}
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Login
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminLogin;