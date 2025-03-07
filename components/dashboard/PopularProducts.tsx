export default function PopularProducts() {
  const products = [
    {
      name: "Wireless Headphones",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
      sold: 245,
      revenue: "$19,600",
    },
    {
      name: "Smart Watch",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
      sold: 189,
      revenue: "$30,240",
    },
    {
      name: "Running Sneakers",
      image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d",
      sold: 176,
      revenue: "$22,880",
    },
    {
      name: "Wireless Earbuds",
      image: "https://images.unsplash.com/photo-1560343090-f0409e92791a",
      sold: 154,
      revenue: "$13,860",
    },
  ]

  return (
    <div className="bg-white rounded-lg shadow-md p-6 h-full">
      <h2 className="text-xl font-semibold mb-6">Popular Products</h2>

      <div className="space-y-6">
        {products.map((product, index) => (
          <div key={index} className="flex items-center">
            <img
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              className="w-12 h-12 rounded-md object-cover mr-4"
            />
            <div className="flex-grow">
              <h3 className="font-medium">{product.name}</h3>
              <div className="flex justify-between text-sm text-gray-500 mt-1">
                <span>{product.sold} sold</span>
                <span>{product.revenue}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

