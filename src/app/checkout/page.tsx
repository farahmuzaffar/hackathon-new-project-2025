// "use client"
// import * as React from "react"
// import { Card } from "@/components/ui/card"
// import { Label } from "@/components/ui/label"
// import { Input } from "@/components/ui/input"
// import { Button } from "@/components/ui/button"
// import { Checkbox } from "@/components/ui/checkbox"
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select"
// import Image from 'next/image'
// import { useEffect, useState } from "react"

// interface ICart{
//   name: string
//   image: string
//   price: number
//   quantity: number
// }

// export default function CheckoutForm() {
  
//   const [cartItem, setCartItem] = useState<ICart[]>([])
//   const [shipCost, setShipCost] = useState(0)


//   useEffect(()=>{
//     const data = localStorage.getItem("cart")
//     const cart = data ? JSON.parse(data) : []
//     setCartItem(cart)
    
//     const ShipmentData = localStorage.getItem("ShipmentData")
//     const shipData = ShipmentData ? JSON.parse(ShipmentData) : []
//     const shipCost = shipData.shipment_cost.amount.toFixed(2)
//     setShipCost(shipCost)
//   },[])
  

//   function handlePayment(){
//     alert("payment successfull ✅")
    
//     localStorage.setItem("cart", JSON.stringify([]))
//     setCartItem([])
//   }

//  const totalAmount = Number(cartItem.reduce((acc: number, item: ICart) => acc + Number(item.price * item.quantity), 0)) + Number(shipCost ? shipCost : 0)


//   return (
//     <div className="min-h-screen bg-gray-50 p-4 md:p-6 mt-[99px]">
//       <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
//         {/* Left Column - Form */}
//         <div className="space-y-6">
//           <div className="space-y-4">
//             <h2 className="text-xl font-medium">How would you like to get your order?</h2>
//             <p className="text-sm text-gray-500">
//               Customs regulation for India require a copy of the recipient&apos;s KYC. The address on the KYC needs to match the
//               shipping address.
//             </p>
//             <Button variant="outline" className="w-full justify-start gap-4 rounded-xl border-2 py-6">
//               <div className="h-6 w-6 rounded-full border-2" />
//               Deliver It
//             </Button>
//           </div>

//           <div className="space-y-4">
//             <h2 className="text-xl font-medium">Enter your name and address:</h2>
//             <div className="grid gap-4">
//               <div className="grid gap-2">
//                 <Input className="rounded-md py-6" placeholder="First Name" />
//               </div>
//               <div className="grid gap-2">
//                 <Input className="rounded-md py-6" placeholder="Last Name" />
//               </div>
//               <div className="grid gap-2">
//                 <Input className="rounded-md py-6" placeholder="Address Line 1" />
//                 <p className="text-xs text-gray-500">We do not ship to P.O. boxes</p>
//               </div>
//               <div className="grid gap-2">
//                 <Input className="rounded-md py-6" placeholder="Address Line 2" />
//               </div>
//               <div className="grid gap-2">
//                 <Input className="rounded-md py-6" placeholder="Address Line 3" />
//               </div>
//               <div className="grid grid-cols-2 gap-4">
//                 <Input className="rounded-md py-6" placeholder="Postal Code" />
//                 <Input className="rounded-md py-6" placeholder="Locality" />
//               </div>
//               <div className="grid grid-cols-2 gap-4">
//                 <Select>
//                   <SelectTrigger className="rounded-md py-6">
//                     <SelectValue placeholder="State/Territory" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="delhi">Delhi</SelectItem>
//                     <SelectItem value="maharashtra">Maharashtra</SelectItem>
//                     <SelectItem value="karnataka">Karnataka</SelectItem>
//                   </SelectContent>
//                 </Select>
//                 <Input className="rounded-md py-6" placeholder="India" disabled />
//               </div>
//             </div>
//             <div className="space-y-4">
//               <div className="flex items-center space-x-2">
//                 <Checkbox id="save-address" />
//                 <Label htmlFor="save-address">Save this address to my profile</Label>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <Checkbox id="preferred-address" />
//                 <Label htmlFor="preferred-address">Make this my preferred address</Label>
//               </div>
//             </div>
//           </div>

//           <div className="space-y-4">
//             <h2 className="text-xl font-medium">What&apos;s your contact information?</h2>
//             <div className="grid gap-4">
//               <div className="grid gap-2">
//                 <Input className="rounded-md py-6" placeholder="Email" type="email" />
//                 <p className="text-xs text-gray-500">A confirmation email will be sent after checkout.</p>
//               </div>
//               <div className="grid gap-2">
//                 <Input className="rounded-md py-6" placeholder="Phone Number" type="tel" />
//                 <p className="text-xs text-gray-500">A carrier might contact you to confirm delivery.</p>
//               </div>
//             </div>
//           </div>

//           <div className="space-y-4">
//             <h2 className="text-xl font-medium">What&apos;s your PAN?</h2>
//             <div className="grid gap-4">
//               <div className="grid gap-2">
//                 <Input className="rounded-md py-6" placeholder="PAN" />
//                 <p className="text-xs text-gray-500">
//                   Enter your PAN to enable payment with UPI, Net Banking or local card methods
//                 </p>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <Checkbox id="save-pan" />
//                 <Label htmlFor="save-pan" className="text-sm text-gray-500">
//                   Save PAN details to Nike Profile
//                 </Label>
//               </div>
//             </div>
//           </div>

//           <div className="space-y-4">
//             <div className="flex items-start space-x-2">
//               <Checkbox id="terms" className="mt-1" />
//               <Label htmlFor="terms" className="text-sm text-gray-500">
//                 I have read and consent to eShopWorld processing my information in accordance with the Privacy Statement and
//                 Cookie Policy. eShopWorld is a trusted Nike partner.
//               </Label>
//             </div>
//             <Button className="w-full rounded-full py-6" disabled>
//               Continue
//             </Button>
//           </div>
//         </div>

//         {/* Right Column - Order Summary */}
//         <Card className="h-fit p-6">
//           <h2 className="text-xl font-medium">Order Summary</h2>
//           <div className="mt-4 space-y-4">
//             <div className="flex justify-between text-sm text-gray-600">
//               <span>Subtotal</span>
//               <span>₹ {cartItem.reduce((acc: number, item: ICart) => acc + Number(item.price * item.quantity), 0)}</span>
//             </div>
//             <div className="flex justify-between text-sm text-gray-600">
//               <span>Delivery/Shipping</span>
//               <span>{shipCost ? "₹ " + shipCost : "Free"}</span>
//             </div>
//             <div className="border-t pt-4">
//               <div className="flex justify-between font-medium">
//                 <span>Total</span>
//                 <span>₹ {totalAmount}</span>
//               </div>
//               <p className="mt-1 text-xs text-gray-500">
//                 (The total reflects the price of your order, including all duties and taxes)
//               </p>
//             </div>

//             <div className="space-y-4 pt-6">
             
//               {cartItem.map((item: ICart, index: number)=>{return (
//                 <div className="flex gap-4 relative" key={index}>
//                 <Image
//                   src={item.image}
//                   alt="image"
//                   width={80}
//                   height={80}
//                 />
//                 <div className="w-full space-y-1">
//                   <p className="text-sm">{item.name}</p>
//                   <p className="text-sm text-gray-500">Qty {item.quantity}</p>
//                   <p className="text-sm text-gray-500">₹ {item.price * item.quantity}</p>
//                 </div>
//               </div>
//               )})}

//               <Button className="w-full rounded-full py-6" onClick={handlePayment}>
//                 Let's Pay
//               </Button>

//             </div>
//           </div>
//         </Card>
//       </div>
//     </div>
//   )
// }


"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input"; 
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label"; 
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"; 
import Link from "next/link";


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
          <Link href='/shipment'>
          <Button className=" ml-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-md">
            Shipment
          </Button>
          </Link>
         
         
          
        </div>
      </div>
    </div>
  );
}
