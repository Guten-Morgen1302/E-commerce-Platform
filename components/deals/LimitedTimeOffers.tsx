import { Button } from "@/components/ui/button"

export default function LimitedTimeOffers() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="bg-gradient-to-r from-purple-600 to-blue-500 rounded-xl overflow-hidden">
        <div className="p-8 md:p-12 flex flex-col md:flex-row items-center">
          <div className="md:w-2/3 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold text-white mb-4">Flash Sale - 24 Hours Only!</h2>
            <p className="text-purple-100 text-lg mb-6">Take an extra 15% off all sale items with code: FLASH15</p>
            <div className="grid grid-cols-4 gap-4 mb-6">
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4 text-center">
                <span className="block text-3xl font-bold text-white">12</span>
                <span className="text-purple-100 text-sm">Hours</span>
              </div>
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4 text-center">
                <span className="block text-3xl font-bold text-white">45</span>
                <span className="text-purple-100 text-sm">Minutes</span>
              </div>
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4 text-center">
                <span className="block text-3xl font-bold text-white">32</span>
                <span className="text-purple-100 text-sm">Seconds</span>
              </div>
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4 text-center">
                <span className="block text-3xl font-bold text-white">05</span>
                <span className="text-purple-100 text-sm">Milliseconds</span>
              </div>
            </div>
            <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-100">
              Shop Flash Sale
            </Button>
          </div>
          <div className="md:w-1/3">
            <img
              src="https://images.unsplash.com/photo-1607082350899-7e105aa886ae"
              alt="Flash Sale"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

