import Link from "next/link"
import { Star, ShoppingCart, Heart, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface Product {
  id: number
  name: string
  price: number
  rating: number
  reviews: number
  image: string
  badge?: string
  category: string
}

interface ProductGridProps {
  products: Product[]
}

export default function ProductGrid({ products }: ProductGridProps) {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold">Products</h2>
          <p className="text-gray-500">{products.length} products found</p>
        </div>
        <div className="flex items-center">
          <span className="mr-2 text-gray-600">Sort by:</span>
          <select className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-600">
            <option>Featured</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Customer Rating</option>
            <option>Newest</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-xl transition-all duration-300"
          >
            <div className="relative h-64 overflow-hidden">
              {product.badge && <Badge className="absolute top-3 left-3 bg-purple-600">{product.badge}</Badge>}
              <Badge variant="outline" className="absolute top-3 right-3 bg-white text-gray-700">
                {product.category}
              </Badge>
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="flex space-x-2">
                  <Button variant="secondary" size="icon" className="rounded-full">
                    <Eye size={18} />
                  </Button>
                  <Button variant="secondary" size="icon" className="rounded-full">
                    <Heart size={18} />
                  </Button>
                  <Button variant="secondary" size="icon" className="rounded-full">
                    <ShoppingCart size={18} />
                  </Button>
                </div>
              </div>
            </div>

            <div className="p-4">
              <div className="flex text-yellow-400 mb-2">
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

              <Link href={`/products/${product.id}`}>
                <h3 className="font-semibold mb-2 hover:text-purple-600 transition-colors">{product.name}</h3>
              </Link>

              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-purple-600">${product.price}</span>
                <Button variant="ghost" size="sm" className="text-purple-600 hover:text-purple-800">
                  <ShoppingCart size={18} />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <div className="flex space-x-2">
          <Button variant="outline" size="icon" className="rounded-md">
            <span>1</span>
          </Button>
          <Button variant="outline" size="icon" className="rounded-md">
            <span>2</span>
          </Button>
          <Button variant="outline" size="icon" className="rounded-md">
            <span>3</span>
          </Button>
          <Button variant="outline" size="icon" className="rounded-md">
            <span>...</span>
          </Button>
          <Button variant="outline" size="icon" className="rounded-md">
            <span>8</span>
          </Button>
        </div>
      </div>
    </div>
  )
}

