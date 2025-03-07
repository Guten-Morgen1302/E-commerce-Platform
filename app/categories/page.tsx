import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CategoriesPage() {
  const mainCategories = [
    {
      name: "Electronics",
      description: "Discover the latest tech gadgets and electronics.",
      image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?q=80&w=2070",
      href: "/categories/electronics",
      subcategories: ["Smartphones", "Laptops", "TVs", "Audio", "Cameras"],
    },
    {
      name: "Clothing",
      description: "Discover the latest fashion trends for all seasons.",
      image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2070",
      href: "/categories/clothing",
      subcategories: ["T-Shirts", "Shirts", "Sweaters", "Jeans", "Dresses"],
    },
    {
      name: "Home Goods",
      description: "Transform your living space with our stylish and functional home goods collection.",
      image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=2070",
      href: "/categories/home-goods",
      subcategories: ["Furniture", "Decor", "Kitchenware", "Bedding", "Lighting"],
    },
    {
      name: "Beauty & Health",
      description: "Discover premium beauty and health products for your self-care routine.",
      image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=2035",
      href: "/categories/beauty",
      subcategories: ["Skincare", "Makeup", "Hair Care", "Fragrance", "Wellness"],
    },
    {
      name: "Sports & Outdoors",
      description: "Gear up for your active lifestyle with our sports and outdoor equipment.",
      image: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=2070",
      href: "/categories/sports",
      subcategories: ["Fitness", "Hiking", "Camping", "Team Sports", "Cycling"],
    },
  ]

  const featuredCategories = [
    {
      name: "Smart Home",
      image: "https://images.unsplash.com/photo-1558002038-1055e2e28ed1?q=80&w=1470",
      href: "/categories/electronics?subcategory=smart-home",
    },
    {
      name: "Outdoor Furniture",
      image: "https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=1374",
      href: "/categories/home-goods?subcategory=outdoor-furniture",
    },
    {
      name: "Men's Fashion",
      image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=1374",
      href: "/categories/clothing?subcategory=mens-fashion",
    },
    {
      name: "Women's Fashion",
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1470",
      href: "/categories/clothing?subcategory=womens-fashion",
    },
    {
      name: "Skincare",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1470",
      href: "/categories/beauty?subcategory=skincare",
    },
    {
      name: "Fitness Equipment",
      image: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=1470",
      href: "/categories/sports?subcategory=fitness",
    },
  ]

  return (
    <div className="bg-gray-50">
      <div className="bg-gradient-to-r from-purple-600 to-blue-500 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Shop by Category</h1>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto">
            Explore our wide range of products across different categories to find exactly what you're looking for.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8">Main Categories</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mainCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-xl transition-all duration-300"
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <h3 className="text-white font-bold text-2xl p-6">{category.name}</h3>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-600 mb-4">{category.description}</p>

                <div className="mb-6">
                  <h4 className="font-medium mb-2">Popular Subcategories:</h4>
                  <div className="flex flex-wrap gap-2">
                    {category.subcategories.map((subcategory, subIndex) => (
                      <Link
                        key={subIndex}
                        href={`${category.href}?subcategory=${subcategory.toLowerCase().replace(" ", "-")}`}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-purple-100 hover:text-purple-700 transition-colors"
                      >
                        {subcategory}
                      </Link>
                    ))}
                  </div>
                </div>

                <Button asChild className="w-full bg-purple-600 hover:bg-purple-700">
                  <Link href={category.href}>Explore {category.name}</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-3xl font-bold mt-16 mb-8">Featured Categories</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {featuredCategories.map((category, index) => (
            <Link href={category.href} key={index} className="group">
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="h-40 overflow-hidden">
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-medium group-hover:text-purple-600 transition-colors duration-300">
                    {category.name}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

