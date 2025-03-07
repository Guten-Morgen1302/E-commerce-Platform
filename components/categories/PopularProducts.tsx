import Link from "next/link"
import { Button } from "@/components/ui/button"

interface Product {
  name: string
  image: string
  price: number
}

interface PopularProductsProps {
  products: Product[]
}

export default function PopularProducts({ products }: PopularProductsProps) {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">Popular Products</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <Link href="#" key={index} className="group">
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="h-48 overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium group-hover:text-purple-600 transition-colors duration-300">
                    {product.name}
                  </h3>
                  <p className="text-purple-600 font-bold mt-2">${product.price}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button className="bg-purple-600 hover:bg-purple-700">View All Popular Products</Button>
        </div>
      </div>
    </div>
  )
}

