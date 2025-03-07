import CategoryHero from "@/components/categories/CategoryHero"
import ProductGrid from "@/components/categories/ProductGrid"
import CategoryFilters from "@/components/categories/CategoryFilters"
import FeaturedBrands from "@/components/categories/FeaturedBrands"
import PopularProducts from "@/components/categories/PopularProducts"
import CategoryNewsletter from "@/components/categories/CategoryNewsletter"

export default function ElectronicsPage() {
  const categoryData = {
    name: "Electronics",
    description:
      "Discover the latest tech gadgets and electronics. From smartphones and laptops to smart home devices and audio equipment.",
    image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?q=80&w=2070",
    products: [
      {
        id: 1,
        name: "Wireless Noise-Cancelling Headphones",
        price: 249.99,
        rating: 4.8,
        reviews: 256,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
        badge: "Best Seller",
        category: "Audio",
      },
      {
        id: 2,
        name: 'Smart 4K Ultra HD TV - 55"',
        price: 699.99,
        rating: 4.6,
        reviews: 189,
        image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575",
        badge: "New",
        category: "TVs",
      },
      {
        id: 3,
        name: "Professional DSLR Camera",
        price: 1299.99,
        rating: 4.9,
        reviews: 124,
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
        category: "Cameras",
      },
      {
        id: 4,
        name: 'Ultrabook Laptop 15"',
        price: 1099.99,
        rating: 4.7,
        reviews: 203,
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
        category: "Computers",
      },
      {
        id: 5,
        name: "Wireless Charging Pad",
        price: 49.99,
        rating: 4.4,
        reviews: 178,
        image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07",
        badge: "Sale",
        category: "Accessories",
      },
      {
        id: 6,
        name: "Smart Watch with Heart Rate Monitor",
        price: 199.99,
        rating: 4.6,
        reviews: 215,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
        category: "Wearables",
      },
      {
        id: 7,
        name: "Bluetooth Portable Speaker",
        price: 89.99,
        rating: 4.5,
        reviews: 167,
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1",
        category: "Audio",
      },
      {
        id: 8,
        name: "Gaming Console",
        price: 499.99,
        rating: 4.8,
        reviews: 320,
        image: "https://images.unsplash.com/photo-1605901309584-818e25960a8f",
        category: "Gaming",
      },
      {
        id: 9,
        name: "Smartphone with Triple Camera",
        price: 799.99,
        rating: 4.7,
        reviews: 412,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
        badge: "Top Rated",
        category: "Phones",
      },
      {
        id: 10,
        name: "Wireless Earbuds",
        price: 129.99,
        rating: 4.5,
        reviews: 198,
        image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb",
        category: "Audio",
      },
      {
        id: 11,
        name: "Smart Home Hub",
        price: 149.99,
        rating: 4.3,
        reviews: 87,
        image: "https://images.unsplash.com/photo-1558002038-1055e2e28ed1",
        category: "Smart Home",
      },
      {
        id: 12,
        name: "Drone with 4K Camera",
        price: 799.99,
        rating: 4.6,
        reviews: 65,
        image: "https://images.unsplash.com/photo-1507582020474-9a35b7d455d9",
        category: "Cameras",
      },
    ],
    subcategories: [
      "Smartphones",
      "Laptops",
      "TVs",
      "Audio",
      "Cameras",
      "Wearables",
      "Gaming",
      "Smart Home",
      "Accessories",
      "Tablets",
      "Computers",
    ],
    brands: [
      { name: "Apple", logo: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=1470" },
      { name: "Samsung", logo: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?q=80&w=1471" },
      { name: "Sony", logo: "https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=1374" },
      { name: "Bose", logo: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?q=80&w=1528" },
      { name: "Microsoft", logo: "https://images.unsplash.com/photo-1614682835184-33082a66b087?q=80&w=1374" },
      { name: "LG", logo: "https://images.unsplash.com/photo-1622434641406-a158123450f9?q=80&w=1374" },
    ],
    popularProducts: [
      {
        name: "Wireless Headphones",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
        price: 249.99,
      },
      {
        name: "Smart Watch",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
        price: 199.99,
      },
      {
        name: "Smartphone",
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
        price: 799.99,
      },
      {
        name: "Wireless Earbuds",
        image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb",
        price: 129.99,
      },
    ],
  }

  const filters = [
    {
      name: "Category",
      options: [
        "Smartphones",
        "Laptops",
        "TVs",
        "Audio",
        "Cameras",
        "Wearables",
        "Gaming",
        "Smart Home",
        "Accessories",
        "Tablets",
        "Computers",
      ],
    },
    {
      name: "Brand",
      options: ["Apple", "Samsung", "Sony", "Bose", "Microsoft", "LG", "Google", "Asus", "Dell", "HP"],
    },
    {
      name: "Price",
      options: ["Under $100", "$100 - $300", "$300 - $500", "$500 - $1000", "Over $1000"],
    },
    {
      name: "Rating",
      options: ["4 Stars & Up", "3 Stars & Up", "2 Stars & Up", "1 Star & Up"],
    },
  ]

  return (
    <div className="bg-gray-50">
      <CategoryHero title={categoryData.name} description={categoryData.description} image={categoryData.image} />

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-1/4">
            <CategoryFilters filters={filters} />
          </div>

          <div className="w-full lg:w-3/4">
            <ProductGrid products={categoryData.products} />
          </div>
        </div>
      </div>

      <FeaturedBrands brands={categoryData.brands} />
      <PopularProducts products={categoryData.popularProducts} />
      <CategoryNewsletter />
    </div>
  )
}

