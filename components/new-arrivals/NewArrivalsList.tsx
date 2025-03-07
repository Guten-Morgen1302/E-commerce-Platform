import { Star, ShoppingCart, Heart, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function NewArrivalsList() {
  const products = [
    {
      id: 1,
      name: "Premium Wireless Earbuds",
      price: 129.99,
      rating: 4.9,
      reviews: 28,
      image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb",
      badge: "New",
      category: "Electronics",
    },
    {
      id: 2,
      name: "Slim Fit Cotton T-Shirt",
      price: 24.99,
      rating: 4.7,
      reviews: 42,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
      badge: "New",
      category: "Men's Fashion",
    },
    {
      id: 3,
      name: "Minimalist Ceramic Vase",
      price: 39.99,
      rating: 4.8,
      reviews: 16,
      image: "https://images.unsplash.com/photo-1612196808214-b7e239e5f6dc",
      badge: "New",
      category: "Home Decor",
    },
    {
      id: 4,
      name: "Leather Crossbody Bag",
      price: 79.99,
      rating: 4.6,
      reviews: 35,
      image: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c",
      badge: "New",
      category: "Women's Fashion",
    },
    {
      id: 5,
      name: "Smart Fitness Tracker",
      price: 89.99,
      rating: 4.8,
      reviews: 19,
      image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6",
      badge: "New",
      category: "Electronics",
    },
    {
      id: 6,
      name: "Organic Cotton Bedding Set",
      price: 149.99,
      rating: 4.9,
      reviews: 23,
      image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af",
      badge: "New",
      category: "Home Decor",
    },
    {
      id: 7,
      name: "Polarized Sunglasses",
      price: 59.99,
      rating: 4.7,
      reviews: 31,
      image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083",
      badge: "New",
      category: "Accessories",
    },
    {
      id: 8,
      name: "Wireless Charging Pad",
      price: 34.99,
      rating: 4.5,
      reviews: 47,
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07",
      badge: "New",
      category: "Electronics",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-8">Just Arrived</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-xl transition-all duration-300"
          >
            <div className="relative h-64 overflow-hidden">
              <Badge className="absolute top-3 left-3 bg-purple-600">{product.badge}</Badge>
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

              <h3 className="font-semibold mb-2">{product.name}</h3>

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

      <div className="text-center mt-12">
        <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
          View All New Arrivals
        </Button>
      </div>
    </div>
  )
}

