// src\app\productListing\page.tsx

import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import GridCards from "@/components/grid-cards";


// interface Product {
//   id: number;
//   title: string;
//   department: string;
//   originalPrice: number;
//   salePrice: number;
//   imageUrl: string;
//   colors: string[];
// }

// const products:Product[] = [
//   {
//     id: 1,
//     title: "Graphic Design",
//     department: "English Department",
//     originalPrice: 16.48,
//     salePrice: 6.48,
//     imageUrl: "/edit1.png",
//     colors: ["#3B82F6", "#10B981", "#F97316", "#1F2937"],
//   },
//   {
//     id: 2,
//     title: "Graphic Design",
//     department: "English Department",
//     originalPrice: 16.48,
//     salePrice: 6.48,
//     imageUrl: "/edit2.png",
//     colors: ["#3B82F6", "#10B981", "#F97316", "#1F2937"],
//   },
//   {
//     id: 3,
//     title: "Graphic Design",
//     department: "English Department",
//     originalPrice: 16.48,
//     salePrice: 6.48,
//     imageUrl: "/edit3 (2).png",
//     colors: ["#3B82F6", "#10B981", "#F97316", "#1F2937"],
//   },
//   {
//     id: 4,
//     title: "Graphic Design",
//     department: "English Department",
//     originalPrice: 16.48,
//     salePrice: 6.48,
//     imageUrl: "/edit4.png",
//     colors: ["#3B82F6", "#10B981", "#F97316", "#1F2937"],
//   },
//   {
//     id: 5,
//     title: "Graphic Design",
//     department: "English Department",
//     originalPrice: 16.48,
//     salePrice: 6.48,
//     imageUrl: "/edit5.png",
//     colors: ["#3B82F6", "#10B981", "#F97316", "#1F2937"],
//   },
//   {
//     id: 6,
//     title: "Graphic Design",
//     department: "English Department",
//     originalPrice: 16.48,
//     salePrice: 6.48,
//     imageUrl: "/edit6.png",
//     colors: ["#3B82F6", "#10B981", "#F97316", "#1F2937"],
//   },
//   {
//     id: 7,
//     title: "Graphic Design",
//     department: "English Department",
//     originalPrice: 16.48,
//     salePrice: 6.48,
//     imageUrl: "/edit7.png",
//     colors: ["#3B82F6", "#10B981", "#F97316", "#1F2937"],
//   },
//   {
//     id: 8,
//     title: "Graphic Design",
//     department: "English Department",
//     originalPrice: 16.48,
//     salePrice: 6.48,
//     imageUrl: "/edit8.png",
//     colors: ["#3B82F6", "#10B981", "#F97316", "#1F2937"],
//   },
//   {
//     id: 9,
//     title: "Graphic Design",
//     department: "English Department",
//     originalPrice: 16.48,
//     salePrice: 6.48,
//     imageUrl: "/edit9.png",
//     colors: ["#3B82F6", "#10B981", "#F97316", "#1F2937"],
//   },
//   {
//     id: 10,
//     title: "Graphic Design",
//     department: "English Department",
//     originalPrice: 16.48,
//     salePrice: 6.48,
//     imageUrl: "/edit10.png",
//     colors: ["#3B82F6", "#10B981", "#F97316", "#1F2937"],
//   },
//   {
//     id: 11,
//     title: "Graphic Design",
//     department: "English Department",
//     originalPrice: 16.48,
//     salePrice: 6.48,
//     imageUrl: "/edit11.png",
//     colors: ["#3B82F6", "#10B981", "#F97316", "#1F2937"],
//   },
//   {
//     id: 12,
//     title: "Graphic Design",
//     department: "English Department",
//     originalPrice: 16.48,
//     salePrice: 6.48,
//     imageUrl: "/edit12.png",
//     colors: ["#3B82F6", "#10B981", "#F97316", "#1F2937"],
//   },
// ];

export default function ProductListing() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Bar */}
      <div className="bg-emerald-600 text-white px-4 py-2 flex justify-between items-center text-sm flex-wrap">
  <div className="flex items-center gap-4 mb-2 sm:mb-0">
    <span>(222) 555-0118</span>
    <span>michelle.rivera@example.com</span>
  </div>
  <div className="flex items-center gap-2">
    <span className="hidden sm:block">Follow Us and get a chance to win 80% off</span>
    <div className="flex items-center gap-2">
      <Link href="#" className="hover:text-emerald-200">
        <Facebook className="h-4 w-4" />
      </Link>
      <Link href="#" className="hover:text-emerald-200">
        <Instagram className="h-4 w-4" />
      </Link>
      <Link href="#" className="hover:text-emerald-200">
        <Twitter className="h-4 w-4" />
      </Link>
    </div>
  </div>
</div>


      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm mb-8">
          <Link href="/" className="text-gray-600">
            Home
          </Link>
          <span className="text-gray-400">/</span>
          <span className="text-gray-400">Shop</span>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
          <Image
            src="/card-item.png"
            alt="Category"
            className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
            width={300}
            height={300}
          />

          <Image
            src="/card2.png"
            alt="Category"
            className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
            width={300}
            height={300}
          />

          <Image
            src="/card3.png"
            alt="Category"
            className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
            width={300}
            height={300}
          />

          <Image
            src="/card4.png"
            alt="Category"
            className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
            width={300}
            height={300}
          />

          <Image
            src="/card5.png"
            alt="Category"
            className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
            width={300}
            height={300}
          />
        </div>

        {/* Filters and View Toggle */}
        <div className="flex justify-between items-center mb-8">
          <p className="text-sm text-gray-600">Showing all 12 results</p>
          <div className="flex items-center gap-4">
            <Select defaultValue="popularity">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popularity">Popularity</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>
            <Link href='/filter'>
            <Button variant="outline" size="icon">
              <svg
                xmlns=""
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <rect width="7" height="7" x="3" y="3" rx="1" />
                <rect width="7" height="7" x="14" y="3" rx="1" />
                <rect width="7" height="7" x="14" y="14" rx="1" />
                <rect width="7" height="7" x="3" y="14" rx="1" />
              </svg>
            </Button>
            </Link>
            <Button variant="outline" size="icon">
              <svg
                xmlns=""
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <line x1="21" x2="3" y1="6" y2="6" />
                <line x1="21" x2="3" y1="12" y2="12" />
                <line x1="21" x2="3" y1="18" y2="18" />
              </svg>
            </Button>
          </div>
        </div>
        <section className="bg-slate-50">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold">Big Companies Are Here</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics
            </p>
          </div>
 

          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center justify-items-center">
            <Image 
            src="/trust1.png" 
            alt="Hooli" 
            width={50} 
            height={50} 
            className="w-full object-cover" />
             <Image 
            src="/trust2.png" 
            alt="lyft" 
            width={50} 
            height={50} 
            className="w-full object-cover" />
           
           <Image 
            src="/vector.png" 
            alt="leaf" 
            width={50} 
            height={50} 
            className="w-full object-cover" />

<Image 
            src="/vector1.png" 
            alt="stripe" 
            width={50} 
            height={50} 
            className="w-full object-cover" />
            <Image 
            src="/trust3.png" 
            alt="aws" 
            width={50} 
            height={50} 
            className="w-full object-cover" />
             <Image 
            src="/trust4.png" 
            alt="image" 
            width={50} 
            height={50} 
            className="w-full object-cover" />
          </div>
        </div>
      </section>
    
        

        <GridCards/>

        {/* Pagination */}
        <div className="flex justify-center gap-2">
          <Button variant="outline" className="w-10 h-10 p-0">
            1
          </Button>
          <Button variant="outline" className="w-10 h-10 p-0">
            2
          </Button>
          <Button variant="outline" className="w-10 h-10 p-0">
            3
          </Button>
          <Button variant="outline" className="w-10 h-10 p-0">
            Next
          </Button>
        </div>

        
      </main>
      
    </div>
  );
}