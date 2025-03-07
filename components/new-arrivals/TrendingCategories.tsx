import Link from "next/link"

export default function TrendingCategories() {
  const categories = [
    {
      name: "Women's Fashion",
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b",
      href: "/categories/womens-fashion",
    },
    {
      name: "Men's Fashion",
      image: "https://images.unsplash.com/photo-1617137968427-85924c800a22",
      href: "/categories/mens-fashion",
    },
    {
      name: "Electronics",
      image: "https://images.unsplash.com/photo-1550009158-9ebf69173e03",
      href: "/categories/electronics",
    },
    {
      name: "Home Decor",
      image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace",
      href: "/categories/home-decor",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-8">Trending Categories</h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <Link
            href={category.href}
            key={index}
            className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <div className="h-64 overflow-hidden">
              <img
                src={category.image || "/placeholder.svg"}
                alt={category.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <h3 className="text-white font-semibold text-xl p-6 w-full text-center">{category.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

