import CategoryHero from "@/components/categories/CategoryHero"
import ProductGrid from "@/components/categories/ProductGrid"
import CategoryFilters from "@/components/categories/CategoryFilters"
import FeaturedBrands from "@/components/categories/FeaturedBrands"
import PopularProducts from "@/components/categories/PopularProducts"
import CategoryNewsletter from "@/components/categories/CategoryNewsletter"

export default function ClothingPage() {
  const categoryData = {
    name: "Clothing",
    description:
      "Discover the latest fashion trends for all seasons. From casual wear to formal attire, find your perfect style.",
    image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2070",
    products: [
      {
        id: 1,
        name: "Classic Denim Jacket",
        price: 89.99,
        rating: 4.7,
        reviews: 128,
        image: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531",
        badge: "Best Seller",
        category: "Outerwear",
      },
      {
        id: 2,
        name: "Cotton T-Shirt",
        price: 24.99,
        rating: 4.5,
        reviews: 210,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
        category: "T-Shirts",
      },
      {
        id: 3,
        name: "Slim Fit Chinos",
        price: 59.99,
        rating: 4.6,
        reviews: 95,
        image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a",
        category: "Pants",
      },
      {
        id: 4,
        name: "Summer Floral Dress",
        price: 79.99,
        rating: 4.8,
        reviews: 112,
        image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c",
        badge: "New",
        category: "Dresses",
      },
      {
        id: 5,
        name: "Wool Sweater",
        price: 69.99,
        rating: 4.4,
        reviews: 87,
        image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea",
        category: "Sweaters",
      },
      {
        id: 6,
        name: "Leather Boots",
        price: 149.99,
        rating: 4.7,
        reviews: 156,
        image: "https://images.unsplash.com/photo-1520639888713-7851133b1ed0",
        category: "Footwear",
      },
      {
        id: 7,
        name: "Formal Blazer",
        price: 129.99,
        rating: 4.6,
        reviews: 78,
        image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf",
        category: "Formal Wear",
      },
      {
        id: 8,
        name: "Athletic Shorts",
        price: 34.99,
        rating: 4.5,
        reviews: 92,
        image: "https://images.unsplash.com/photo-1565084888279-aca607ecce0c",
        badge: "Sale",
        category: "Activewear",
      },
      {
        id: 9,
        name: "Silk Scarf",
        price: 39.99,
        rating: 4.3,
        reviews: 45,
        image: "https://images.unsplash.com/photo-1606173424347-fb1fdc1d607a",
        category: "Accessories",
      },
      {
        id: 10,
        name: "Knit Beanie",
        price: 19.99,
        rating: 4.4,
        reviews: 67,
        image: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9",
        category: "Accessories",
      },
      {
        id: 11,
        name: "Linen Button-Up Shirt",
        price: 54.99,
        rating: 4.6,
        reviews: 83,
        image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10",
        category: "Shirts",
      },
      {
        id: 12,
        name: "High-Waisted Jeans",
        price: 79.99,
        rating: 4.7,
        reviews: 124,
        image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246",
        badge: "Top Rated",
        category: "Jeans",
      },
    ],
    subcategories: [
      "T-Shirts",
      "Shirts",
      "Sweaters",
      "Jeans",
      "Pants",
      "Dresses",
      "Outerwear",
      "Activewear",
      "Formal Wear",
      "Accessories",
      "Footwear",
    ],
    brands: [
      { name: "Nike", logo: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1470" },
      { name: "Adidas", logo: "https://images.unsplash.com/photo-1518002171953-a080ee817e1f?q=80&w=1470" },
      { name: "Zara", logo: "https://images.unsplash.com/photo-1589363460779-cd717d2ed8fa?q=80&w=1470" },
      { name: "H&M", logo: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=1470" },
      { name: "Levi's", logo: "https://images.unsplash.com/photo-1565084888279-aca607ecce0c?q=80&w=1470" },
      { name: "Calvin Klein", logo: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?q=80&w=1470" },
    ],
    popularProducts: [
      {
        name: "Denim Jacket",
        image: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531",
        price: 89.99,
      },
      {
        name: "Summer Dress",
        image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c",
        price: 79.99,
      },
      {
        name: "Leather Boots",
        image: "https://images.unsplash.com/photo-1520639888713-7851133b1ed0",
        price: 149.99,
      },
      {
        name: "Cotton T-Shirt",
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
        price: 24.99,
      },
    ],
  }

  const filters = [
    {
      name: "Category",
      options: [
        "T-Shirts",
        "Shirts",
        "Sweaters",
        "Jeans",
        "Pants",
        "Dresses",
        "Outerwear",
        "Activewear",
        "Formal Wear",
        "Accessories",
        "Footwear",
      ],
    },
    {
      name: "Brand",
      options: [
        "Nike",
        "Adidas",
        "Zara",
        "H&M",
        "Levi's",
        "Calvin Klein",
        "Gap",
        "Uniqlo",
        "Ralph Lauren",
        "Tommy Hilfiger",
      ],
    },
    {
      name: "Price",
      options: ["Under $25", "$25 - $50", "$50 - $100", "$100 - $200", "Over $200"],
    },
    {
      name: "Size",
      options: ["XS", "S", "M", "L", "XL", "XXL"],
    },
    {
      name: "Color",
      options: ["Black", "White", "Blue", "Red", "Green", "Yellow", "Purple", "Brown", "Gray", "Multi"],
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

