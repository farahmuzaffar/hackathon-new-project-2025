"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Alert } from "@/components/ui/alert";
import Link from "next/link";

export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(true); // Toggle between login and registration
  const [formData, setFormData] = useState({ userId: "", password: "" });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { userId, password } = formData;

    // Clear previous messages
    setMessage("");
    setError("");

    if (!userId || !password) {
      setError("User ID and Password are required.");
      return;
    }

    if (isLogin) {
      // Login logic (replace with actual authentication)
      if (userId === "test" && password === "password") {
        setMessage("Login successful!");
      } else {
        setError("Invalid credentials. Please try again.");
      }
    } else {
      // Registration logic (replace with actual registration logic)
      setMessage("Registration successful! You can now log in.");
      setIsLogin(true);
    }

    setFormData({ userId: "", password: "" });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <Card className="max-w-md w-full p-6">
        <h1 className="text-2xl font-bold mb-4 text-center">
          {isLogin ? "Login" : "Register"}
        </h1>

        {message && (
          <Alert className="mb-4" variant="destructive">
            {message}
          </Alert>
        )}

        {error && (
          <Alert className="mb-4" variant="destructive">
            {error}
          </Alert>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="userId" className="block text-sm font-medium mb-1">
              User ID
            </Label>
            <Input
              id="userId"
              name="userId"
              type="text"
              value={formData.userId}
              onChange={handleChange}
              placeholder="Enter your user ID"
              className="w-full"
            />
          </div>

          <div>
            <Label htmlFor="password" className="block text-sm font-medium mb-1">
              Password
            </Label>
            <Input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full"
            />
          </div>

          <Button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-600 text-white">
            {isLogin ? "Login" : "Register"}
          </Button>
        </form>

        <div className="text-center mt-4">
          <Link href="/"
            
              onClick={() => {
                setIsLogin(!isLogin);
                setMessage("");
                setError("");
              }}
              className="text-emerald-500 hover:underline">
            
              {isLogin ? "Don't have an account? Register" : "Already have an account? Login"}
            
          </Link>
        </div>
      </Card>
    </div>
  );
}



