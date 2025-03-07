import CategoryHero from "@/components/categories/CategoryHero"
import ProductGrid from "@/components/categories/ProductGrid"
import CategoryFilters from "@/components/categories/CategoryFilters"
import FeaturedBrands from "@/components/categories/FeaturedBrands"
import PopularProducts from "@/components/categories/PopularProducts"
import CategoryNewsletter from "@/components/categories/CategoryNewsletter"

export default function BeautyPage() {
  const categoryData = {
    name: "Beauty & Health",
    description:
      "Discover premium beauty and health products for your self-care routine. From skincare and makeup to wellness essentials.",
    image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=2035",
    products: [
      {
        id: 1,
        name: "Vitamin C Serum",
        price: 49.99,
        rating: 4.8,
        reviews: 156,
        image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be",
        badge: "Best Seller",
        category: "Skincare",
      },
      {
        id: 2,
        name: "Luxury Eyeshadow Palette",
        price: 59.99,
        rating: 4.7,
        reviews: 124,
        image: "https://images.unsplash.com/photo-1599733589046-833caccbbd03",
        category: "Makeup",
      },
      {
        id: 3,
        name: "Natural Hair Shampoo & Conditioner Set",
        price: 34.99,
        rating: 4.6,
        reviews: 98,
        image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc",
        category: "Hair Care",
      },
      {
        id: 4,
        name: "Aromatherapy Essential Oil Diffuser",
        price: 39.99,
        rating: 4.5,
        reviews: 87,
        image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108",
        badge: "New",
        category: "Wellness",
      },
      {
        id: 5,
        name: "Hydrating Face Mask Set",
        price: 24.99,
        rating: 4.7,
        reviews: 112,
        image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881",
        category: "Skincare",
      },
      {
        id: 6,
        name: "Luxury Perfume",
        price: 89.99,
        rating: 4.8,
        reviews: 76,
        image: "https://images.unsplash.com/photo-1594035910387-fea47794261f",
        category: "Fragrance",
      },
      {
        id: 7,
        name: "Organic Body Lotion",
        price: 29.99,
        rating: 4.6,
        reviews: 93,
        image: "https://images.unsplash.com/photo-1611930022073-84f7f0981e5e",
        category: "Body Care",
      },
      {
        id: 8,
        name: "Premium Makeup Brush Set",
        price: 49.99,
        rating: 4.7,
        reviews: 108,
        image: "https://images.unsplash.com/photo-1631214503851-a60a2b6d1e1d",
        badge: "Sale",
        category: "Makeup",
      },
      {
        id: 9,
        name: "Multivitamin Supplements",
        price: 32.99,
        rating: 4.5,
        reviews: 67,
        image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae",
        category: "Supplements",
      },
      {
        id: 10,
        name: "Jade Facial Roller",
        price: 24.99,
        rating: 4.4,
        reviews: 85,
        image: "https://images.unsplash.com/photo-1628602040839-02c3d0a8ce14",
        category: "Tools",
      },
      {
        id: 11,
        name: "Natural Deodorant",
        price: 14.99,
        rating: 4.3,
        reviews: 72,
        image: "https://images.unsplash.com/photo-1607006483224-56338f0c0f4f",
        category: "Body Care",
      },
      {
        id: 12,
        name: "Collagen Peptides Powder",
        price: 39.99,
        rating: 4.6,
        reviews: 94,
        image: "https://images.unsplash.com/photo-1610725664285-7c57e6eeac3f",
        badge: "Top Rated",
        category: "Supplements",
      },
    ],
    subcategories: [
      "Skincare",
      "Makeup",
      "Hair Care",
      "Fragrance",
      "Body Care",
      "Wellness",
      "Tools",
      "Supplements",
      "Men's Grooming",
      "Natural & Organic",
    ],
    brands: [
      { name: "Sephora", logo: "https://images.unsplash.com/photo-1599733589046-833caccbbd03?q=80&w=1470" },
      { name: "Fenty Beauty", logo: "https://images.unsplash.com/photo-1631214503851-a60a2b6d1e1d?q=80&w=1470" },
      { name: "The Ordinary", logo: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1470" },
      { name: "Kiehl's", logo: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1470" },
      { name: "L'Oréal", logo: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?q=80&w=1470" },
      { name: "Glossier", logo: "https://images.unsplash.com/photo-1611930022073-84f7f0981e5e?q=80&w=1470" },
    ],
    popularProducts: [
      {
        name: "Vitamin C Serum",
        image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be",
        price: 49.99,
      },
      {
        name: "Luxury Eyeshadow Palette",
        image: "https://images.unsplash.com/photo-1599733589046-833caccbbd03",
        price: 59.99,
      },
      {
        name: "Aromatherapy Diffuser",
        image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108",
        price: 39.99,
      },
      {
        name: "Luxury Perfume",
        image: "https://images.unsplash.com/photo-1594035910387-fea47794261f",
        price: 89.99,
      },
    ],
  }

  const filters = [
    {
      name: "Category",
      options: [
        "Skincare",
        "Makeup",
        "Hair Care",
        "Fragrance",
        "Body Care",
        "Wellness",
        "Tools",
        "Supplements",
        "Men's Grooming",
        "Natural & Organic",
      ],
    },
    {
      name: "Brand",
      options: [
        "Sephora",
        "Fenty Beauty",
        "The Ordinary",
        "Kiehl's",
        "L'Oréal",
        "Glossier",
        "Estée Lauder",
        "Clinique",
        "MAC",
        "Neutrogena",
      ],
    },
    {
      name: "Price",
      options: ["Under $25", "$25 - $50", "$50 - $100", "Over $100"],
    },
    {
      name: "Concerns",
      options: ["Anti-Aging", "Acne", "Dryness", "Sensitive Skin", "Oily Skin", "Redness", "Dark Spots", "Fine Lines"],
    },
    {
      name: "Ingredient Preference",
      options: ["Vegan", "Cruelty-Free", "Paraben-Free", "Sulfate-Free", "Natural", "Organic", "Fragrance-Free"],
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

