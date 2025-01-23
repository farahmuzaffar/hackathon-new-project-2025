

"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input"; 
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label"; 
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"; 


export default function CheckoutPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
    paymentMethod: "credit-card",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Checkout data:", formData);
    alert("Order placed successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">Checkout</h1>

        {/* Billing Details */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Billing Details</h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="John Doe"
                  className="mt-2"
                  required
                />
              </div>
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="john@example.com"
                  className="mt-2"
                  required
                />
              </div>
              <div className="col-span-2">
                <Label htmlFor="address">Address</Label>
                <Input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="123 Main St"
                  className="mt-2"
                  required
                />
              </div>
              <div>
                <Label htmlFor="city">City</Label>
                <Input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  placeholder="New York"
                  className="mt-2"
                  required
                />
              </div>
              <div>
                <Label htmlFor="postalCode">Postal Code</Label>
                <Input
                  type="text"
                  id="postalCode"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleInputChange}
                  placeholder="10001"
                  className="mt-2"
                  required
                />
              </div>
            </div>
          </form>
        </section>

        {/* Payment Methods */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
          <RadioGroup
            className="flex flex-col gap-3"
            onValueChange={(value) => setFormData({ ...formData, paymentMethod: value })}
            value={formData.paymentMethod}
          >
            <div className="flex items-center">
              <RadioGroupItem value="credit-card" id="credit-card" />
              <Label htmlFor="credit-card" className="ml-3">
                Credit Card
              </Label>
            </div>
            <div className="flex items-center">
              <RadioGroupItem value="paypal" id="paypal" />
              <Label htmlFor="paypal" className="ml-3">
                PayPal
              </Label>
            </div>
            <div className="flex items-center">
              <RadioGroupItem value="bank-transfer" id="bank-transfer" />
              <Label htmlFor="bank-transfer" className="ml-3">
                Bank Transfer
              </Label>
            </div>
          </RadioGroup>
        </section>

        {/* Order Summary */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <Card className="p-4">
            <div className="flex justify-between mb-2">
              <span>Product Name</span>
              <span>$50.00</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Shipping</span>
              <span>$5.00</span>
            </div>
            <div className="flex justify-between font-bold">
              <span>Total</span>
              <span>$55.00</span>
            </div>
          </Card>
        </section>

        {/* Submit Button */}
        <div className="text-right">
       
          <Button onClick={handleSubmit} className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-md">
            Place Order
          </Button>
         
          
        </div>
      </div>
    </div>
  );
}
