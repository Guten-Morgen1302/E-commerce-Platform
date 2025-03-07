import DealsHero from "@/components/deals/DealsHero"
import DealsList from "@/components/deals/DealsList"
import DealCategories from "@/components/deals/DealCategories"
import LimitedTimeOffers from "@/components/deals/LimitedTimeOffers"

export default function DealsPage() {
  return (
    <div className="bg-gray-50">
      <DealsHero />
      <DealCategories />
      <DealsList />
      <LimitedTimeOffers />
    </div>
  )
}

