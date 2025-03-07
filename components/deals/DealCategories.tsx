import Link from "next/link"

export default function DealCategories() {
  const categories = [
    { name: "Electronics", discount: "Up to 40% Off", href: "/deals/electronics", color: "bg-purple-100" },
    { name: "Fashion", discount: "Buy 1 Get 1 Free", href: "/deals/fashion", color: "bg-blue-100" },
    { name: "Home & Kitchen", discount: "Up to 30% Off", href: "/deals/home-kitchen", color: "bg-green-100" },
    { name: "Beauty", discount: "25% Off + Free Gift", href: "/deals/beauty", color: "bg-pink-100" },
    { name: "Sports", discount: "Up to 35% Off", href: "/deals/sports", color: "bg-yellow-100" },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-8">Shop Deals By Category</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {categories.map((category, index) => (
          <Link
            href={category.href}
            key={index}
            className={`${category.color} rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1 transform transition-transform`}
          >
            <h3 className="font-semibold text-lg mb-2">{category.name}</h3>
            <p className="text-purple-600 font-bold">{category.discount}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

