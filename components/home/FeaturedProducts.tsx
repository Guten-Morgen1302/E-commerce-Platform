import Link from "next/link"
import { Star, ShoppingCart, Heart, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function FeaturedProducts() {
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      description: "Premium Sound Quality",
      price: 79.99,
      originalPrice: 99.99,
      rating: 4.5,
      reviews: 120,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
      badge: { text: "-20%", color: "bg-red-500" },
      href: "/products/wireless-headphones",
    },
    {
      id: 2,
      name: "Smart Watch Gen 5",
      description: "Fitness & Health Tracking",
      price: 159.99,
      rating: 5,
      reviews: 86,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
      badge: { text: "New", color: "bg-green-500" },
      href: "/products/smart-watch-gen-5",
    },
    {
      id: 3,
      name: "Running Sneakers",
      description: "Lightweight & Breathable",
      price: 129.99,
      rating: 4,
      reviews: 54,
      image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d",
      href: "/products/running-sneakers",
    },
    {
      id: 4,
      name: "Wireless Earbuds Pro",
      description: "Noise Cancelling",
      price: 89.99,
      originalPrice: 119.99,
      rating: 4.5,
      reviews: 210,
      image: "https://images.unsplash.com/photo-1560343090-f0409e92791a",
      badge: { text: "Best Seller", color: "bg-amber-500" },
      href: "/products/wireless-earbuds-pro",
    },
  ]

  return (
    <section className="mb-20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold">Featured Products</h2>
          <div className="flex space-x-2">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-purple-100 text-purple-600 hover:bg-purple-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-purple-100 text-purple-600 hover:bg-purple-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-xl transition-all duration-300"
            >
              <div className="h-64 overflow-hidden relative">
                {product.badge && (
                  <div
                    className={`absolute top-3 left-3 z-10 ${product.badge.color} text-white px-2 py-1 rounded-md text-sm font-medium`}
                  >
                    {product.badge.text}
                  </div>
                )}
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button
                    variant="secondary"
                    size="icon"
                    className="mx-1 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-purple-600 hover:text-white"
                  >
                    <Eye size={18} />
                  </Button>
                  <Button
                    variant="secondary"
                    size="icon"
                    className="mx-1 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75 hover:bg-purple-600 hover:text-white"
                  >
                    <Heart size={18} />
                  </Button>
                  <Button
                    variant="secondary"
                    size="icon"
                    className="mx-1 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-150 hover:bg-purple-600 hover:text-white"
                  >
                    <ShoppingCart size={18} />
                  </Button>
                </div>
              </div>
              <div className="p-4">
                <div className="flex text-yellow-400 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      fill={i < Math.floor(product.rating) ? "currentColor" : "none"}
                      className={i < Math.floor(product.rating) ? "text-yellow-400" : "text-gray-300"}
                    />
                  ))}
                  <span className="text-gray-500 ml-1 text-sm">({product.reviews})</span>
                </div>
                <Link href={product.href}>
                  <h3 className="font-semibold mb-1 hover:text-purple-600 transition-colors">{product.name}</h3>
                </Link>
                <p className="text-gray-500 text-sm mb-2">{product.description}</p>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-lg font-bold">${product.price}</span>
                    {product.originalPrice && (
                      <span className="text-gray-400 line-through ml-2">${product.originalPrice}</span>
                    )}
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-purple-600 hover:text-purple-800 transition-colors duration-300"
                  >
                    <ShoppingCart size={18} />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

