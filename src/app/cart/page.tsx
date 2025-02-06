// src/app/cart/page.tsx
"use client";
import Image from "next/image";
import { Heart, Trash2, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { userPostSanity } from "@/services/userId";
import Header from "@/components/header";

interface IProduct {
  name: string;
  price: string;
  description: string;
  image: string;
  quantity: number;
  userID: string | null | undefined;
}

export default function ShoppingCart() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [cartItems, setCartItems] = useState<IProduct[]>([]);

  // Load cart items from localStorage on component mount
  useEffect(() => {
    const cart = localStorage.getItem("cart");
    const updatedCart = cart ? JSON.parse(cart) : [];
    setCartItems(updatedCart);
  }, []);

  // Handle adding new items to the cart from URL search params
  useEffect(() => {
    const fetchUserIdAndUpdateCart = async () => {
      const sanityUserId = await userPostSanity();
      const cart = localStorage.getItem("cart");
      const updatedCart = cart ? JSON.parse(cart) : [];

      const name = searchParams.get("name");
      const price = searchParams.get("price");
      const description = searchParams.get("description");
      const image = searchParams.get("image");

      if (name && price && description && image) {
        const isDuplicate = updatedCart.some((item: IProduct) => item.name === name);

        if (!isDuplicate) {
          updatedCart.push({ name, price, description, image, quantity: 1, userID: sanityUserId });
        }

        localStorage.setItem("cart", JSON.stringify(updatedCart));
        setCartItems(updatedCart);
        router.replace("/cart"); 
      }
    };

    fetchUserIdAndUpdateCart();
  }, [searchParams, router]);

  // Remove an item from the cart
  const handleRemoveItem = (index: number) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartItems(updatedCart);
  };

  // Update the quantity of an item in the cart
  const handleQuantityChange = (index: number, value: number) => {
    const updatedCart = [...cartItems];
    updatedCart[index].quantity = value;

    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartItems(updatedCart);
  };

  // Add an item to the wishlist
  const handleAddToWishlist = (index: number) => {
    const wishlistItem = cartItems[index];
    const localWishlist = localStorage.getItem("wishlist");
    const updatedWishlist = localWishlist ? JSON.parse(localWishlist) : [];
    updatedWishlist.push(wishlistItem);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  // Calculate the total price of all items in the cart
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + Number(item.price) * item.quantity, 0).toFixed(2);
  };

  return (
    <>
      <Header />
    <div className="container mx-auto px-4 py-8 mt-[99px]">
      {/* Free Delivery Banner */}
      <div className="mb-8 bg-gray-50 p-4 rounded-lg">
        <div className="flex items-center gap-2">
          <p className="text-sm font-medium">Free Delivery</p>
          <p className="text-sm text-gray-600">Applies to orders of ₹ 14,000.00 or more.</p>
          <Link href="/shipment">
            <Button variant="link" className="text-sm">
              View details
            </Button>
          </Link>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <h1 className="text-2xl font-medium mb-6">My Cart</h1>
          <div className="space-y-6">
            {cartItems.map((item, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex gap-6">
                    <div className="w-24 h-24 bg-gray-100 rounded-md">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={96}
                        height={96}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <div>
                          <h3 className="font-medium">{item.name}</h3>
                          <p className="text-sm text-gray-600">{item.userID}</p>
                          <div className="mt-2 space-y-1">
                            <p className="text-sm">Size: L</p>
                            <div className="flex gap-4">
                              <p className="text-sm">Quantity:</p>
                              <input
                                type="number"
                                min={1}
                                value={item.quantity}
                                onChange={(e) => handleQuantityChange(index, +e.target.value)}
                                className="bg-slate-200 rounded pl-2 text-black w-12"
                              />
                            </div>
                          </div>
                        </div>
                        <p className="text-sm">MRP: ₹ {(+item.price * item.quantity).toLocaleString()}</p>
                      </div>
                      <div className="flex gap-4 mt-4">
                        <Link href='wishlist'>
                        <Button variant="ghost" size="sm" onClick={() => handleAddToWishlist(index)}>
                          <Heart className="w-4 h-4" />
                        </Button>
                        </Link>
                        <Button variant="ghost" size="sm" onClick={() => handleRemoveItem(index)}>
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Favorites Section */}
          <div className="mt-12">
            <h2 className="text-xl font-medium mb-4">Favourites</h2>
            <p className="text-sm text-gray-600">There are no items saved to your favourites.</p>
          </div>

          {/* You Might Also Like Section */}
          <div className="mt-12">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-medium">You Might Also Like</h2>
              <div className="flex gap-2">
                <Button variant="outline" size="icon">
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-0">
                  <div className="aspect-square bg-gray-100">
                    <Image
                      src="/card3.jpg"
                      alt="Formal Attire"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium">Formal Attire</h3>
                    <p className="text-sm text-gray-600">Women clothing</p>
                    <p className="text-sm font-medium mt-2">MRP: ₹ 12,295.00</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div>
          <Card className="sticky top-8">
            <CardContent className="p-6">
              <h2 className="text-xl font-medium mb-4">Summary</h2>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-sm">Subtotal</span>
                  <span className="text-sm">₹ {cartItems.reduce((total, item) => total + Number(item.price) * item.quantity, 0).toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Estimated Delivery & Handling</span>
                  <span className="text-sm">Free</span>
                </div>
                <Separator />
                <div className="flex justify-between font-medium">
                  <span>Total</span>
                  <span>₹ {calculateTotal()}</span>
                </div>
                <Link href="/checkout">
                  <Button className="w-full">Member Checkout</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
    </>
  );
}

//  "use client";

// import Image from "next/image";
// import { Heart, Trash2 } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import Link from "next/link";
// import { useSearchParams } from "next/navigation";
// import { useEffect, useState } from "react";
// import Header from "@/components/header";
// import { Separator } from "@radix-ui/react-separator";

// interface IProduct {
//   name: string;
//   price: string;
//   description: string;
//   image: string;
//   quantity: number;
// }

// export default function ShoppingCart() {
//   const searchParam = useSearchParams();
//   const [cartItems, setCartItems] = useState<IProduct[]>([]);
//   const [wishlistItems, setWishlistItems] = useState<IProduct[]>([]);

//   // Load cart and wishlist from localStorage on component mount
//   useEffect(() => {
//     const cart = localStorage.getItem("cart");
//     const wishlist = localStorage.getItem("wishlist");

//     if (cart) setCartItems(JSON.parse(cart));
//     if (wishlist) setWishlistItems(JSON.parse(wishlist));
//   }, []);

//   // Add items to cart from URL parameters
//   useEffect(() => {
//     const newItems: IProduct[] = [];
//     const names = searchParam.getAll("name");
//     const prices = searchParam.getAll("price");
//     const descriptions = searchParam.getAll("description");
//     const images = searchParam.getAll("image");

//     for (let i = 0; i < names.length; i++) {
//       if (names[i] && prices[i] && descriptions[i] && images[i]) {
//         newItems.push({
//           name: names[i],
//           price: prices[i],
//           description: descriptions[i],
//           image: images[i],
//           quantity: 1,
//         });
//       }
//     }

//     // Filter out duplicates and update cart
//     const updatedCart = [...cartItems];
//     newItems.forEach((newItem) => {
//       const existingItemIndex = updatedCart.findIndex(
//         (item) => item.name === newItem.name
//       );
//       if (existingItemIndex === -1) {
//         updatedCart.push(newItem);
//       }
//     });

//     setCartItems(updatedCart);
//     localStorage.setItem("cart", JSON.stringify(updatedCart));
//   }, [searchParam, cartItems]);

//   // Remove item from cart
//   const handleRemoveItem = (index: number) => {
//     const updatedCart = [...cartItems];
//     updatedCart.splice(index, 1);
//     setCartItems(updatedCart);
//     localStorage.setItem("cart", JSON.stringify(updatedCart));
//   };

//   // Move item from cart to wishlist
//   const handleAddToWishlist = (item: IProduct) => {
//     const updatedWishlist = [...wishlistItems];
//     const existingItemIndex = updatedWishlist.findIndex(
//       (wishItem) => wishItem.name === item.name
//     );

//     if (existingItemIndex === -1) {
//       updatedWishlist.push(item);
//       setWishlistItems(updatedWishlist);
//       localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
//     }

//     handleRemoveItem(cartItems.indexOf(item));
//   };

//   // Update item quantity in cart
//   const handleQuantity = (index: number, quantity: number) => {
//     if (quantity < 1) return;
//     const updatedCart = [...cartItems];
//     updatedCart[index].quantity = quantity;
//     setCartItems(updatedCart);
//     localStorage.setItem("cart", JSON.stringify(updatedCart));
//   };

//   // Calculate total price
//   const calculateTotal = () => {
//     return cartItems
//       .reduce((total, item) => total + Number(item.price) * item.quantity, 0)
//       .toFixed(2);
//   };

//   return (
//     <>
//       <Header />
//       <div className="container mx-auto px-4 py-8 mt-[99px]">
//         <div className="mb-8 bg-gray-50 p-4 rounded-lg">
//           <div className="flex flex-col sm:flex-row items-center gap-2">
//             <p className="text-sm font-medium">Free Delivery</p>
//             <p className="text-sm text-gray-600">
//               Applies to orders of ₹ 14,000.00 or more.
//             </p>
//             <Button variant="link" className="text-sm">
//               View details
//             </Button>
//           </div>
//         </div>

//         <div className="grid lg:grid-cols-3 gap-8">
//           {/* Cart Items */}
//           <div className="lg:col-span-2">
//             <h1 className="text-2xl font-medium mb-6">Your Cart</h1>
//             <div className="space-y-6">
//               {cartItems.map((item, index) => (
//                 <Card key={index}>
//                   <CardContent className="p-6">
//                     <div className="flex flex-col sm:flex-row gap-6">
//                       <div className="w-24 h-24 bg-gray-100 rounded-md">
//                         <Image
//                           src={item.image}
//                           alt={item.image}
//                           width={96}
//                           height={96}
//                           className="object-cover"
//                         />
//                       </div>
//                       <div className="flex-1">
//                         <div className="flex justify-between">
//                           <div>
//                             <h3 className="font-medium">{item.name}</h3>
//                             <p className="text-sm text-gray-600">
//                               {item.description}
//                             </p>
//                             <div className="mt-2 space-y-1">
//                               <p className="text-sm">Size: L</p>
//                               <div className="flex gap-4">
//                                 <p className="text-sm">Quantity:</p>
//                                 <input
//                                   className="bg-slate-200 rounded pl-2 text-black w-12"
//                                   type="number"
//                                   min={1}
//                                   value={item.quantity}
//                                   onChange={(e) =>
//                                     handleQuantity(index, +e.target.value)
//                                   }
//                                 />
//                               </div>
//                             </div>
//                           </div>
//                           <p className="text-sm text-black">
//                             MRP: $ {(Number(item.price) * item.quantity).toFixed(2)}
//                           </p>
//                         </div>

//                         <div className="flex gap-4 mt-4">
//                           <Link href='/wishlist'>
//                           <Button
//                             variant="ghost"
//                             size="sm"
//                             onClick={() => handleAddToWishlist(item)}
//                           >
//                             <Heart className="w-4 h-4" />
//                           </Button>
//                           </Link>
//                           <Button
//                             variant="ghost"
//                             size="sm"
//                             onClick={() => handleRemoveItem(index)}
//                           >
//                             <Trash2 className="w-4 h-4" />
//                           </Button>
//                         </div>
//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>
//           </div>

//           {/* Order Summary */}
//           <div>
//             <Card className="sticky top-8">
//               <CardContent className="p-6">
//                 <h2 className="text-xl font-medium mb-4">Summary</h2>
//                 <div className="space-y-4">
//                   <div className="flex justify-between">
//                     <span className="text-sm">Subtotal</span>
//                     <span className="text-sm">$ {calculateTotal()}</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span className="text-sm">
//                       Estimated Delivery & Handling
//                     </span>
//                     <span className="text-sm">Free</span>
//                   </div>
//                   <Separator />
//                   <div className="flex justify-between font-medium">
//                     <span>Total</span>
//                     <span>$ {calculateTotal()}</span>
//                   </div>
//                   <Link href={"/checkout"}>
//                     <Button className="w-full bg-[#23A6F0] hover:bg-[#23A6F0]/90">
//                       Member Checkout
//                     </Button>
//                   </Link>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }




