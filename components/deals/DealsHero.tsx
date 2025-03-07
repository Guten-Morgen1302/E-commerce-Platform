import { Button } from "@/components/ui/button"

export default function DealsHero() {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-blue-500 py-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Exclusive Deals & Offers</h1>
        <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
          Discover incredible savings on top products. Limited-time offers you don't want to miss!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-100">
            Shop All Deals
          </Button>
          <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-purple-600">
            Today's Flash Sales
          </Button>
        </div>
      </div>
    </div>
  )
}

