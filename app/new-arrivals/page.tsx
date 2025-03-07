import NewArrivalsHero from "@/components/new-arrivals/NewArrivalsHero"
import NewArrivalsList from "@/components/new-arrivals/NewArrivalsList"
import TrendingCategories from "@/components/new-arrivals/TrendingCategories"
import ComingSoon from "@/components/new-arrivals/ComingSoon"

export default function NewArrivalsPage() {
  return (
    <div className="bg-gray-50">
      <NewArrivalsHero />
      <TrendingCategories />
      <NewArrivalsList />
      <ComingSoon />
    </div>
  )
}

