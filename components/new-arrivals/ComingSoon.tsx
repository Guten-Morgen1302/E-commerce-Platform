import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function ComingSoon() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="bg-gradient-to-r from-purple-600 to-blue-500 rounded-xl overflow-hidden">
        <div className="p-8 md:p-12 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold text-white mb-4">Coming Soon</h2>
            <p className="text-purple-100 text-lg mb-6">
              Be the first to know when our new collection drops. Sign up for early access and exclusive offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-white border-0 focus:ring-2 focus:ring-purple-300"
              />
              <Button className="bg-white text-purple-600 hover:bg-purple-800 hover:text-white">Notify Me</Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d"
              alt="Coming Soon"
              className="rounded-lg shadow-lg max-w-full md:max-w-md"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

