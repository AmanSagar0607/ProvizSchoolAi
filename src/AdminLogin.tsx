import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
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

    // Basic validation for username and password
    if (!credentials.username || !credentials.password) {
      setError("Please fill in both fields.");
      return;
    }

    // Check for hardcoded username and password
    if (
      credentials.username === "admin" &&
      credentials.password === "admin123"
    ) {
      try {
        // You can simulate a successful API response with the token
        const data: LoginResponse = {
          token: "your-generated-token-here", // Replace with the actual token if needed
          message: "Login successful",
        };

        // Set the token in localStorage
        localStorage.setItem("adminToken", data.token);

        // Redirect to dashboard
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
    if (error) setError(""); // Clear error when user starts typing
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/50 p-4">
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
  );
};

export default AdminLogin;
