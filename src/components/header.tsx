// src\components\grid-cards.tsx

import Link from "next/link";
import {
  User,
  Phone,
  Mail,
  Instagram,
  Youtube,
  Facebook,
  Twitter,
  Search,
  ShoppingCart,
  Heart,
} from "lucide-react";

export default function Header() {
  return (
    <>
      {/* Top Header */}
      <div className="w-full bg-[#252B42] px-4 sm:px-6 md:px-20 py-2">
        <div className="text-white flex flex-wrap items-center gap-4 justify-between max-w-screen-xl mx-auto">
          <div className="flex items-center gap-2">
            <Phone size={16} />
            <p className="text-sm">(225) 555-0118</p>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={16} />
            <p className="text-sm">michelle.rivera@example.com</p>
          </div>
          <span className="font-bold text-sm text-center hidden lg:block">
            Follow Us and get a chance to win 80% off
          </span>
          <div className="flex items-center gap-2 ml-auto lg:ml-0">
            <p className="hidden sm:block text-sm">Follow Us :</p>
            <Instagram size={16} />
            <Youtube size={16} />
            <Facebook size={16} />
            <Twitter size={16} />
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-white shadow-sm">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 sm:px-6 py-4">
          <Link href="/" className="text-2xl font-bold text-[#252B42]">
            Bandage
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <ul className="flex items-center gap-6">
              <li>
                <Link href="/home">Home</Link>
              </li>
              <li>
                <Link href="/productListing">Shop</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/team">Blog</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li>
                <Link href="/pricing">Pages</Link>
              </li>
              <li>
                <Link href="/grid-cards">Our Products</Link>
              </li>
            </ul>
          </nav>
          <div className="flex items-center gap-4 overflow-hidden">
            <Link href='/login'>
            <button className="flex items-center gap-2 bg-[#23A6F0] px-4 py-2 rounded hover:bg-gray-200 transition">
              <User size={20} />
              <span className="bg-gray-100 font-bold text-black px-2 py-1 rounded">
                Login/Register
              </span>
            </button>
            </Link>
            <Link
              href="/searchbar"
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition"
              aria-label="View Searchbar"
            >
              <Search size={20} />
            </Link>

            <Link
              href="/grid-cards"
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition"
              aria-label="View Cart"
            >
              <ShoppingCart size={20} />
            </Link>

            <Link
              href="/wishlist"
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition"
              aria-label="View Cart"
            >
              <Heart size={20} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
