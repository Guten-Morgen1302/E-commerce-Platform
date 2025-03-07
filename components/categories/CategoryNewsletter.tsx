import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function CategoryNewsletter() {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-blue-500 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Stay Updated on New Arrivals</h2>
          <p className="text-purple-100 mb-8">
            Subscribe to our newsletter to receive updates on new products, exclusive offers, and more.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Your email address"
              className="bg-white border-0 focus:ring-2 focus:ring-purple-300"
            />
            <Button className="bg-white text-purple-600 hover:bg-purple-800 hover:text-white">Subscribe</Button>
          </div>

          <p className="text-purple-200 text-sm mt-4">
            By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
          </p>
        </div>
      </div>
    </div>
  )
}

