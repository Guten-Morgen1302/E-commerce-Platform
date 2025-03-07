"use client"

import { useState } from "react"
import Link from "next/link"
import { ShoppingCart, Heart, Search, User, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link
              href="/"
              className="text-2xl font-bold text-purple-600 mr-10 hover:scale-105 transition-transform duration-300"
            >
              ShopEase
            </Link>

            <nav className="hidden md:flex space-x-6">
              <Link
                href="/"
                className="py-2 px-1 border-b-2 border-transparent hover:border-purple-600 transition-all duration-300"
              >
                Home
              </Link>

              <DropdownMenu>
                <DropdownMenuTrigger className="py-2 px-1 border-b-2 border-transparent hover:border-purple-600 transition-all duration-300 flex items-center">
                  Categories <span className="ml-1">▼</span>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <Link href="/categories/electronics" className="w-full">
                      Electronics
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/categories/clothing" className="w-full">
                      Clothing
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/categories/home-goods" className="w-full">
                      Home Goods
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/categories/beauty" className="w-full">
                      Beauty & Health
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/categories/sports" className="w-full">
                      Sports & Outdoors
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Link
                href="/deals"
                className="py-2 px-1 border-b-2 border-transparent hover:border-purple-600 transition-all duration-300"
              >
                Deals
              </Link>

              <Link
                href="/new-arrivals"
                className="py-2 px-1 border-b-2 border-transparent hover:border-purple-600 transition-all duration-300"
              >
                New Arrivals
              </Link>

              <Link
                href="/contact"
                className="py-2 px-1 border-b-2 border-transparent hover:border-purple-600 transition-all duration-300"
              >
                Contact
              </Link>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative hidden md:block">
              <input
                type="text"
                placeholder="Search products..."
                className="py-2 px-4 pr-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all duration-300 w-64"
              />
              <Search
                className="absolute right-3 top-2.5 text-gray-500 hover:text-purple-600 cursor-pointer transition-colors duration-300"
                size={20}
              />
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-purple-100">
                  <User className="text-gray-700 hover:text-purple-600" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link href="/auth/signin" className="w-full">
                    Sign In
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/auth/register" className="w-full">
                    Register
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/dashboard" className="w-full">
                    My Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/orders" className="w-full">
                    Order History
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="ghost" size="icon" className="rounded-full hover:bg-purple-100 relative">
              <Heart className="text-gray-700 hover:text-purple-600" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                2
              </span>
            </Button>

            <Button variant="ghost" size="icon" className="rounded-full hover:bg-purple-100 relative">
              <ShoppingCart className="text-gray-700 hover:text-purple-600" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden rounded-full hover:bg-purple-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t">
            <div className="flex items-center mb-4">
              <input
                type="text"
                placeholder="Search products..."
                className="py-2 px-4 pr-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all duration-300 w-full"
              />
              <Search className="absolute right-8 text-gray-500" size={20} />
            </div>

            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="py-2 px-1 hover:bg-purple-50 rounded-md transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/deals"
                className="py-2 px-1 hover:bg-purple-50 rounded-md transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Deals
              </Link>
              <Link
                href="/new-arrivals"
                className="py-2 px-1 hover:bg-purple-50 rounded-md transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                New Arrivals
              </Link>
              <Link
                href="/contact"
                className="py-2 px-1 hover:bg-purple-50 rounded-md transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="py-2 px-1">
                <p className="font-medium mb-2">Categories</p>
                <div className="pl-4 flex flex-col space-y-2">
                  <Link
                    href="/categories/electronics"
                    className="hover:text-purple-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Electronics
                  </Link>
                  <Link
                    href="/categories/clothing"
                    className="hover:text-purple-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Clothing
                  </Link>
                  <Link
                    href="/categories/home-goods"
                    className="hover:text-purple-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Home Goods
                  </Link>
                  <Link
                    href="/categories/beauty"
                    className="hover:text-purple-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Beauty & Health
                  </Link>
                  <Link
                    href="/categories/sports"
                    className="hover:text-purple-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sports & Outdoors
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

