import Link from "next/link"
import { Smartphone, ShoppingBag, Home, Sparkles, Dumbbell, Gamepad } from "lucide-react"

export default function FeaturedCategories() {
  const categories = [
    {
      name: "Electronics",
      icon: <Smartphone className="w-12 h-12 text-purple-600" />,
      count: 128,
      bgColor: "bg-purple-100",
      href: "/categories/electronics",
    },
    {
      name: "Clothing",
      icon: <ShoppingBag className="w-12 h-12 text-pink-600" />,
      count: 256,
      bgColor: "bg-pink-100",
      href: "/categories/clothing",
    },
    {
      name: "Home Goods",
      icon: <Home className="w-12 h-12 text-yellow-600" />,
      count: 192,
      bgColor: "bg-yellow-100",
      href: "/categories/home-goods",
    },
    {
      name: "Beauty",
      icon: <Sparkles className="w-12 h-12 text-green-600" />,
      count: 145,
      bgColor: "bg-green-100",
      href: "/categories/beauty",
    },
    {
      name: "Sports",
      icon: <Dumbbell className="w-12 h-12 text-blue-600" />,
      count: 78,
      bgColor: "bg-blue-100",
      href: "/categories/sports",
    },
    {
      name: "Toys & Games",
      icon: <Gamepad className="w-12 h-12 text-purple-600" />,
      count: 112,
      bgColor: "bg-purple-100",
      href: "/categories/toys-games",
    },
  ]

  return (
    <section className="mt-36 mb-20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold">Popular Categories</h2>
          <Link
            href="/categories"
            className="text-purple-600 hover:text-purple-800 flex items-center transition-colors duration-300"
          >
            View All Categories
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category, index) => (
            <Link
              href={category.href}
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className={`h-32 ${category.bgColor} flex items-center justify-center`}>
                <div className="group-hover:scale-110 transition-transform duration-300">{category.icon}</div>
              </div>
              <div className="p-4 text-center">
                <h3 className="font-semibold">{category.name}</h3>
                <p className="text-gray-500 text-sm">{category.count} Products</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

