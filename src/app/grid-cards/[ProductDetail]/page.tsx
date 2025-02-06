// src\app\grid-cards\[ProductDetail]\page.tsx

import React from "react";
import { FaEye } from "react-icons/fa6";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Heart, ShoppingCart } from "lucide-react";
import PostCreator from "@/components/comments";

async function ProductDetail({
  searchParams,
}: {
  searchParams: Promise<{
    id: string;
    type: "product";
    title: string;
    price: number;
    image: string;
    tags: string[];
    discountPercentage: number;
    description: string;
    isNew: boolean;
    colors: string[];
  }>;
}) {
  const { title, price, image, colors, description } = await searchParams;
  return (
    <div>
      <section className="w-full bg-[#FFFFFF] flex  px-4 lg:px-[59px] items-center justify-center mt-10">
        <Image src={image} alt="logo" width={400} height={400} />

        <div className="ml-20 ">
          <h3 className="font-bold text-lg text-[24px] text-gray-800 mt-4 mb-3">
            {title}
          </h3>
          <h6 className="font-medium text-sm text-gray-600 mb-3">
            {description}
          </h6>
          <p className="font-normal text-sm text-gray-800 mb-3">{price}</p>

          <div className="mt-6">
            <h3 className="text-sm font-semibold text-gray-700">{colors}</h3>
            <div className="flex items-center gap-2 mt-2">
              <span className="h-6 w-6 rounded-full bg-blue-500 border border-gray-300 cursor-pointer"></span>
              <span className="h-6 w-6 rounded-full bg-green-500 border border-gray-300 cursor-pointer"></span>
              <span className="h-6 w-6 rounded-full bg-orange-500 border border-gray-300 cursor-pointer"></span>
              <span className="h-6 w-6 rounded-full bg-black border border-gray-300 cursor-pointer"></span>
            </div>
          </div>

          <Link
            href={`/cart?name=${title}&price=${price}&image=${image}&description=${description}`}
          >
            <Button className="mt-10 bg-[#23A6F0] text-white hover:bg-slate-300  p-[15px]  border-[1px] border-blue-400 mb-[50px]">
              ADD TO CART
            </Button>
          </Link>

          <div className="flex items-center gap-4">
            <Link
              href="/wishlist"
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition"
              aria-label="View Cart"
            >
              <Heart size={20} />
            </Link>
            <Link
              href="/cart"
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition"
              aria-label="View Cart"
            >
              <ShoppingCart size={20} />
            </Link>
            <Link
              href="/grid-cards"
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition"
              aria-label="View Cart"
            >
              <FaEye size={20} />
            </Link>
          </div>
        </div>
      </section>
      <PostCreator blog_id={0} />
    </div>
  );
}

export default ProductDetail;
