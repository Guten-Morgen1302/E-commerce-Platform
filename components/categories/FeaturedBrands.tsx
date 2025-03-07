import { Button } from "@/components/ui/button"

interface Brand {
  name: string
  logo: string
}

interface FeaturedBrandsProps {
  brands: Brand[]
}

export default function FeaturedBrands({ brands }: FeaturedBrandsProps) {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8 text-center">Featured Brands</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-6 flex items-center justify-center h-32 hover:shadow-md transition-shadow duration-300"
            >
              <img
                src={brand.logo || "/placeholder.svg"}
                alt={brand.name}
                className="max-h-16 max-w-full object-contain"
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">
            View All Brands
          </Button>
        </div>
      </div>
    </div>
  )
}

