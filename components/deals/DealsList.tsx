import { Star, ShoppingCart, Heart, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function DealsList() {
  const deals = [
    {
      id: 1,
      name: "Wireless Noise-Cancelling Headphones",
      originalPrice: 299.99,
      salePrice: 179.99,
      discount: "40% OFF",
      rating: 4.8,
      reviews: 256,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
      timeLeft: "2 days",
      badge: "Best Seller",
    },
    {
      id: 2,
      name: 'Smart 4K Ultra HD TV - 55"',
      originalPrice: 699.99,
      salePrice: 499.99,
      discount: "29% OFF",
      rating: 4.6,
      reviews: 189,
      image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575",
      timeLeft: "3 days",
      badge: "Hot Deal",
    },
    {
      id: 3,
      name: "Robot Vacuum Cleaner with Mapping",
      originalPrice: 399.99,
      salePrice: 249.99,
      discount: "38% OFF",
      rating: 4.5,
      reviews: 142,
      image: "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73",
      timeLeft: "1 day",
      badge: "Limited Stock",
    },
    {
      id: 4,
      name: "Professional Blender - 1000W",
      originalPrice: 199.99,
      salePrice: 129.99,
      discount: "35% OFF",
      rating: 4.7,
      reviews: 203,
      image: "https://images.unsplash.com/photo-1570222094114-d054a817e56b",
      timeLeft: "4 days",
      badge: "Top Rated",
    },
    {
      id: 5,
      name: "Wireless Charging Pad - 15W",
      originalPrice: 49.99,
      salePrice: 29.99,
      discount: "40% OFF",
      rating: 4.4,
      reviews: 178,
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07",
      timeLeft: "2 days",
      badge: "Great Value",
    },
    {
      id: 6,
      name: "Smart Watch with Heart Rate Monitor",
      originalPrice: 249.99,
      salePrice: 169.99,
      discount: "32% OFF",
      rating: 4.6,
      reviews: 215,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
      timeLeft: "5 days",
      badge: "Popular",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-8">Hot Deals</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {deals.map((deal) => (
          <div
            key={deal.id}
            className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-xl transition-all duration-300"
          >
            <div className="relative">
              <img
                src={deal.image || "/placeholder.svg"}
                alt={deal.name}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <Badge className="absolute top-3 left-3 bg-purple-600">{deal.badge}</Badge>
              <div className="absolute top-3 right-3 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                {deal.discount}
              </div>
            </div>

            <div className="p-6">
              <div className="flex text-yellow-400 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    fill={i < Math.floor(deal.rating) ? "currentColor" : "none"}
                    className={i < Math.floor(deal.rating) ? "text-yellow-400" : "text-gray-300"}
                  />
                ))}
                <span className="text-gray-500 ml-1 text-sm">({deal.reviews})</span>
              </div>

              <h3 className="font-semibold text-lg mb-2">{deal.name}</h3>

              <div className="flex items-center mb-4">
                <span className="text-xl font-bold text-purple-600">${deal.salePrice}</span>
                <span className="text-gray-400 line-through ml-2">${deal.originalPrice}</span>
              </div>

              <div className="flex items-center text-sm text-gray-500 mb-4">
                <Clock size={16} className="mr-1" />
                <span>Ends in: {deal.timeLeft}</span>
              </div>

              <div className="flex space-x-2">
                <Button className="flex-1 bg-purple-600 hover:bg-purple-700">
                  <ShoppingCart size={16} className="mr-2" /> Add to Cart
                </Button>
                <Button variant="outline" size="icon">
                  <Heart size={16} />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
          View All Deals
        </Button>
      </div>
    </div>
  )
}

