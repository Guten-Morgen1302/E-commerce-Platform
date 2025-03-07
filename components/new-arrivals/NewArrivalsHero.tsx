import { Button } from "@/components/ui/button"

export default function NewArrivalsHero() {
  return (
    <div className="relative h-[500px] overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
        alt="New Arrivals"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-transparent flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Discover What's New</h1>
            <p className="text-xl text-purple-100 mb-8">
              Be the first to shop our latest collections and newest products.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-700 hover:text-white">
                Shop New Arrivals
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white hover:text-purple-600"
              >
                View Collections
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

