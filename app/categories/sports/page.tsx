import CategoryHero from "@/components/categories/CategoryHero"
import ProductGrid from "@/components/categories/ProductGrid"
import CategoryFilters from "@/components/categories/CategoryFilters"
import FeaturedBrands from "@/components/categories/FeaturedBrands"
import PopularProducts from "@/components/categories/PopularProducts"
import CategoryNewsletter from "@/components/categories/CategoryNewsletter"

export default function SportsPage() {
  const categoryData = {
    name: "Sports & Outdoors",
    description:
      "Gear up for your active lifestyle with our sports and outdoor equipment. From fitness gear to camping essentials and everything in between.",
    image: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=2070",
    products: [
      {
        id: 1,
        name: "Premium Yoga Mat",
        price: 59.99,
        rating: 4.7,
        reviews: 128,
        image: "https://images.unsplash.com/photo-1599447292180-45fd84092ef4",
        badge: "Best Seller",
        category: "Fitness",
      },
      {
        id: 2,
        name: "Adjustable Dumbbell Set",
        price: 249.99,
        rating: 4.8,
        reviews: 95,
        image: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2",
        category: "Fitness",
      },
      {
        id: 3,
        name: "Waterproof Hiking Backpack",
        price: 89.99,
        rating: 4.6,
        reviews: 112,
        image: "https://images.unsplash.com/photo-1622260614153-03223fb72052",
        category: "Hiking",
      },
      {
        id: 4,
        name: "2-Person Camping Tent",
        price: 129.99,
        rating: 4.5,
        reviews: 87,
        image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4",
        badge: "New",
        category: "Camping",
      },
      {
        id: 5,
        name: "Basketball - Official Size",
        price: 29.99,
        rating: 4.7,
        reviews: 76,
        image: "https://images.unsplash.com/photo-1519861531473-9200262188bf",
        category: "Team Sports",
      },
      {
        id: 6,
        name: "GPS Running Watch",
        price: 199.99,
        rating: 4.8,
        reviews: 143,
        image: "https://images.unsplash.com/photo-1557935728-e6d1eaabe558",
        category: "Fitness",
      },
      {
        id: 7,
        name: "Tennis Racket",
        price: 119.99,
        rating: 4.6,
        reviews: 68,
        image: "https://images.unsplash.com/photo-1617083934555-ac7d9cda2b1a",
        category: "Racket Sports",
      },
      {
        id: 8,
        name: "Insulated Water Bottle",
        price: 34.99,
        rating: 4.7,
        reviews: 156,
        image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8",
        badge: "Sale",
        category: "Accessories",
      },
      {
        id: 9,
        name: "Mountain Bike",
        price: 799.99,
        rating: 4.9,
        reviews: 54,
        image: "https://images.unsplash.com/photo-1511994298241-608e28f14fde",
        category: "Cycling",
      },
      {
        id: 10,
        name: "Fishing Rod and Reel Combo",
        price: 149.99,
        rating: 4.5,
        reviews: 72,
        image: "https://images.unsplash.com/photo-1611095973763-414019e72400",
        category: "Fishing",
      },
      {
        id: 11,
        name: "Compression Running Shorts",
        price: 39.99,
        rating: 4.6,
        reviews: 93,
        image: "https://images.unsplash.com/photo-1515186913263-de63a93c29e3",
        category: "Apparel",
      },
      {
        id: 12,
        name: "Snowboard with Bindings",
        price: 399.99,
        rating: 4.8,
        reviews: 47,
        image: "https://images.unsplash.com/photo-1522056615691-da7b8106c665",
        badge: "Top Rated",
        category: "Winter Sports",
      },
    ],
    subcategories: [
      "Fitness",
      "Hiking",
      "Camping",
      "Team Sports",
      "Cycling",
      "Fishing",
      "Winter Sports",
      "Water Sports",
      "Racket Sports",
      "Apparel",
      "Accessories",
    ],
    brands: [
      { name: "Nike", logo: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1470" },
      { name: "Adidas", logo: "https://images.unsplash.com/photo-1518002171953-a080ee817e1f?q=80&w=1470" },
      { name: "The North Face", logo: "https://images.unsplash.com/photo-1622260614153-03223fb72052?q=80&w=1470" },
      { name: "Patagonia", logo: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=1470" },
      { name: "Columbia", logo: "https://images.unsplash.com/photo-1519861531473-9200262188bf?q=80&w=1470" },
      { name: "Under Armour", logo: "https://images.unsplash.com/photo-1515186913263-de63a93c29e3?q=80&w=1470" },
    ],
    popularProducts: [
      {
        name: "Premium Yoga Mat",
        image: "https://images.unsplash.com/photo-1599447292180-45fd84092ef4",
        price: 59.99,
      },
      {
        name: "GPS Running Watch",
        image: "https://images.unsplash.com/photo-1557935728-e6d1eaabe558",
        price: 199.99,
      },
      {
        name: "2-Person Camping Tent",
        image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4",
        price: 129.99,
      },
      {
        name: "Mountain Bike",
        image: "https://images.unsplash.com/photo-1511994298241-608e28f14fde",
        price: 799.99,
      },
    ],
  }

  const filters = [
    {
      name: "Category",
      options: [
        "Fitness",
        "Hiking",
        "Camping",
        "Team Sports",
        "Cycling",
        "Fishing",
        "Winter Sports",
        "Water Sports",
        "Racket Sports",
        "Apparel",
        "Accessories",
      ],
    },
    {
      name: "Brand",
      options: [
        "Nike",
        "Adidas",
        "The North Face",
        "Patagonia",
        "Columbia",
        "Under Armour",
        "Wilson",
        "Yeti",
        "Coleman",
        "REI",
      ],
    },
    {
      name: "Price",
      options: ["Under $50", "$50 - $100", "$100 - $250", "$250 - $500", "Over $500"],
    },
    {
      name: "Activity",
      options: [
        "Running",
        "Yoga",
        "Hiking",
        "Camping",
        "Basketball",
        "Soccer",
        "Tennis",
        "Swimming",
        "Cycling",
        "Fishing",
      ],
    },
    {
      name: "User Rating",
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

