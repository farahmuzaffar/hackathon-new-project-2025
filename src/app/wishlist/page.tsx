"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface WishlistItem {
  id: number;
  name: string;
  image: string;
  price: string;
}

const initialWishlist: WishlistItem[] = [
  {
    id: 1,
    name: "coffee mugs",
    image: "/coffee.png", // Replace with a valid image path
    price: "₹ 12,295",
  },
  {
    id: 2,
    name: "forkset",
    image: "/fork.png", // Replace with a valid image path
    price: "₹ 3,495",
  },
];

export default function Wishlist() {
  const [wishlist, setWishlist] = useState<WishlistItem[]>(initialWishlist);

  const handleRemove = (id: number) => {
    setWishlist((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Your Wishlist</h1>

      {wishlist.length === 0 ? (
        <p className="text-gray-600 text-center">Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlist.map((item) => (
            <Card key={item.id} className="shadow-md">
              <CardHeader>
                <Image
                  src={item.image}
                  alt={item.name}
                  height={500}
                  width={500}
                  className="object-cover"
                />
              </CardHeader>
              <CardContent className="p-4 flex flex-col items-start">
                <CardTitle className="text-lg font-medium">{item.name}</CardTitle>
                <p className="text-gray-700 mt-1">{item.price}</p>
                <Link href='/cart'>
                <Button
                  variant="destructive"
                  className="mt-4 flex items-center"
                  onClick={() => handleRemove(item.id)}
                >
                  <Trash className="mr-2 h-4 w-4" />
                  Remove
                </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}