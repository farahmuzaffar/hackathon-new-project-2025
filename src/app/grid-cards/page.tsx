import React from "react";

import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  ChevronRight,
  Eye,
  Heart,
  Star,
  Trash2,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { client } from "@/sanity/lib/client";
import Link from "next/link";

interface res {
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
}

async function OurProducts() {
  const res: res[] = await client.fetch(`*[_type == 'product'][]{
  id,title,price,description,tags,discountPercentage,isNew,colors,
   'image': image.asset->url
   
}`);
  return (
    <>
      <section className=" w-full mt-[71px]">
        {/* category */}
        <div className="flex justify-between items-end">
          <div className="mt-[24px] flex items-center">
            <h2 className="inline-block text-[36px] leading-[48px] font-semibold">
              Explore Our Products
            </h2>
          </div>

          <div className="flex gap-2">
            <Button size={"icon"} variant={"outline"} className="rounded-full">
              <ChevronLeft size={24} />
            </Button>

            <Button size={"icon"} variant={"outline"} className="rounded-full">
              <ChevronRight size={24} />
            </Button>
          </div>
        </div>

        <div className="w-full h-full grid gap-[30px] grid-cols-4 mt-[60px]">
          {res.slice(0, 20).map((item: res, index: number) => {
            return (
              <Card
                className="w-full h-100 overflow-hidden grow-0 shrink-5"
                key={index}
              >
                <Link
                  href={`./grid-cards/ProductDetail/?id=${item.id}&title=${item.title}&image=${item.image}&description=${item.description}&price=${item.price}`}
                >
                  <div className="relative w-full h-[250px] bg-[#F5F5F5] p-3 flex justify-center items-center">
                    <Image
                      src={item.image}
                      alt="image"
                      width={172}
                      height={152}
                      className="object-cover"
                    />
                  </div>

                  <Badge className="bg-green-400 py-1 px-3 absolute top-3 left-3"></Badge>

                  <div className="absolute top-3 right-3 flex flex-col gap-2">
                    <Button
                      size={"icon"}
                      variant={"outline"}
                      className="rounded-full w-[34px] h-[34px]"
                    >
                      <Trash2 size={24} />
                    </Button>

                    <Button
                      size={"icon"}
                      variant={"outline"}
                      className="rounded-full w-[34px] h-[34px]"
                    >
                      <Heart size={24} />
                    </Button>

                    <Button
                      size={"icon"}
                      variant={"outline"}
                      className="rounded-full w-[34px] h-[34px]"
                    >
                      <Eye size={24} />
                    </Button>
                  </div>

                  <div className="w-full flex flex-col gap-[6px] text-[16px] leading-[24px] font-medium pl-[3px]">
                    <p className="mt-[10px]">{item.title}</p>

                    <div className="flex gap-3">
                      <span className="text-black-500">${item.price}</span>
                      <div className="flex gap-1 items-center">
                        {[...Array(item.id)].map((_, index) => {
                          return (
                            <Star key={index} size={20} fill="#FFAD33" color="#FFAD33" />
                          
                          );
                        })}
                        

                        <p className="text-gray-500">({item.description})</p>
                      </div>
                    </div>
                    <div className="m-4">
                      <h3 className="text-sm font-semibold text-gray-700">
                        {item.colors}
                      </h3>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="h-6 w-6 rounded-full bg-blue-500 border border-gray-300 cursor-pointer"></span>
                        <span className="h-6 w-6 rounded-full bg-green-500 border border-gray-300 cursor-pointer"></span>
                        <span className="h-6 w-6 rounded-full bg-orange-500 border border-gray-300 cursor-pointer"></span>
                        <span className="h-6 w-6 rounded-full bg-black border border-gray-300 cursor-pointer"></span>
                      </div>
                    </div>
                  </div>
                </Link>
              </Card>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default OurProducts;


