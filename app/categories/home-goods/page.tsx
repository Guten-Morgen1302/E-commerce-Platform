import CategoryHero from "@/components/categories/CategoryHero"
import ProductGrid from "@/components/categories/ProductGrid"
import CategoryFilters from "@/components/categories/CategoryFilters"
import FeaturedBrands from "@/components/categories/FeaturedBrands"
import PopularProducts from "@/components/categories/PopularProducts"
import CategoryNewsletter from "@/components/categories/CategoryNewsletter"

export default function HomeGoodsPage() {
  const categoryData = {
    name: "Home Goods",
    description:
      "Transform your living space with our stylish and functional home goods collection. Find furniture, decor, kitchenware, and more.",
    image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=2070",
    products: [
      {
        id: 1,
        name: "Modern Coffee Table",
        price: 249.99,
        rating: 4.6,
        reviews: 87,
        image: "https://images.unsplash.com/photo-1532372320572-cda25653a694",
        badge: "Best Seller",
        category: "Furniture",
      },
      {
        id: 2,
        name: "Ceramic Dinner Set",
        price: 89.99,
        rating: 4.7,
        reviews: 124,
        image: "https://images.unsplash.com/photo-1603199506016-b9a594b593c0",
        category: "Kitchenware",
      },
      {
        id: 3,
        name: "Decorative Throw Pillows (Set of 2)",
        price: 39.99,
        rating: 4.5,
        reviews: 156,
        image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2",
        category: "Decor",
      },
      {
        id: 4,
        name: "Luxury Bedding Set",
        price: 129.99,
        rating: 4.8,
        reviews: 93,
        image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af",
        badge: "New",
        category: "Bedding",
      },
      {
        id: 5,
        name: "Stainless Steel Cookware Set",
        price: 199.99,
        rating: 4.7,
        reviews: 78,
        image: "https://images.unsplash.com/photo-1584346133934-a3a4db4bf962",
        category: "Kitchenware",
      },
      {
        id: 6,
        name: "Accent Armchair",
        price: 349.99,
        rating: 4.6,
        reviews: 65,
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7",
        category: "Furniture",
      },
      {
        id: 7,
        name: "Wall Art Canvas Print",
        price: 79.99,
        rating: 4.5,
        reviews: 112,
        image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38",
        category: "Decor",
      },
      {
        id: 8,
        name: "Smart LED Floor Lamp",
        price: 149.99,
        rating: 4.4,
        reviews: 57,
        image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c",
        badge: "Sale",
        category: "Lighting",
      },
      {
        id: 9,
        name: "Luxury Bath Towel Set",
        price: 69.99,
        rating: 4.7,
        reviews: 89,
        image: "https://images.unsplash.com/photo-1563291074-2bf8677ac0e5",
        category: "Bath",
      },
      {
        id: 10,
        name: "Indoor Plant with Decorative Pot",
        price: 49.99,
        rating: 4.6,
        reviews: 103,
        image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411",
        category: "Plants",
      },
      {
        id: 11,
        name: "Scented Candle Set",
        price: 34.99,
        rating: 4.5,
        reviews: 76,
        image: "https://images.unsplash.com/photo-1603006905003-be475563bc59",
        category: "Decor",
      },
      {
        id: 12,
        name: "Storage Ottoman",
        price: 119.99,
        rating: 4.6,
        reviews: 68,
        image: "https://images.unsplash.com/photo-1551298370-9d3d53740c72",
        badge: "Top Rated",
        category: "Furniture",
      },
    ],
    subcategories: [
      "Furniture",
      "Decor",
      "Kitchenware",
      "Bedding",
      "Bath",
      "Lighting",
      "Storage",
      "Rugs",
      "Plants",
      "Wall Art",
      "Appliances",
    ],
    brands: [
      { name: "IKEA", logo: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1470" },
      { name: "West Elm", logo: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=1374" },
      { name: "Crate & Barrel", logo: "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1470" },
      { name: "Pottery Barn", logo: "https://images.unsplash.com/photo-1551298370-9d3d53740c72?q=80&w=1470" },
      { name: "Williams-Sonoma", logo: "https://images.unsplash.com/photo-1584346133934-a3a4db4bf962?q=80&w=1470" },
      { name: "Wayfair", logo: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1470" },
    ],
    popularProducts: [
      {
        name: "Modern Coffee Table",
        image: "https://images.unsplash.com/photo-1532372320572-cda25653a694",
        price: 249.99,
      },
      {
        name: "Luxury Bedding Set",
        image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af",
        price: 129.99,
      },
      {
        name: "Decorative Throw Pillows",
        image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2",
        price: 39.99,
      },
      {
        name: "Wall Art Canvas Print",
        image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38",
        price: 79.99,
      },
    ],
  }

  const filters = [
    {
      name: "Category",
      options: [
        "Furniture",
        "Decor",
        "Kitchenware",
        "Bedding",
        "Bath",
        "Lighting",
        "Storage",
        "Rugs",
        "Plants",
        "Wall Art",
        "Appliances",
      ],
    },
    {
      name: "Brand",
      options: [
        "IKEA",
        "West Elm",
        "Crate & Barrel",
        "Pottery Barn",
        "Williams-Sonoma",
        "Wayfair",
        "Target",
        "Amazon Basics",
        "CB2",
        "Anthropologie",
      ],
    },
    {
      name: "Price",
      options: ["Under $50", "$50 - $100", "$100 - $200", "$200 - $500", "Over $500"],
    },
    {
      name: "Color",
      options: ["Black", "White", "Gray", "Brown", "Beige", "Blue", "Green", "Red", "Yellow", "Multi"],
    },
    {
      name: "Material",
      options: ["Wood", "Metal", "Glass", "Plastic", "Ceramic", "Fabric", "Leather", "Marble", "Rattan"],
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

