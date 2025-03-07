import Hero from "@/components/home/Hero"
import FeaturedCategories from "@/components/home/FeaturedCategories"
import FeaturedProducts from "@/components/home/FeaturedProducts"
import CollectionBanner from "@/components/home/CollectionBanner"
import WhyChooseUs from "@/components/home/WhyChooseUs"
import Newsletter from "@/components/home/Newsletter"

export default function Home() {
  return (
    <div>
      <Hero />
      <FeaturedCategories />
      <FeaturedProducts />
      <CollectionBanner />
      <WhyChooseUs />
      <Newsletter />
    </div>
  )
}

