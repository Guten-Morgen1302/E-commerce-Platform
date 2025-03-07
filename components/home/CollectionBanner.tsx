import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CollectionBanner() {
  return (
    <section className="mb-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-xl overflow-hidden relative group">
            <img
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b"
              alt="Women's Fashion"
              className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/70 to-transparent flex flex-col justify-center p-10">
              <h3 className="text-white text-3xl font-bold mb-2">Women's Fashion</h3>
              <p className="text-purple-100 mb-6 max-w-xs">
                Discover the latest trends in women's clothing and accessories.
              </p>
              <Button
                asChild
                className="bg-white text-purple-600 hover:bg-purple-600 hover:text-white w-max transform group-hover:translate-x-2 transition-all duration-300"
              >
                <Link href="/categories/womens-fashion">Shop Collection</Link>
              </Button>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden relative group">
            <img
              src="https://images.unsplash.com/photo-1617137968427-85924c800a22"
              alt="Men's Fashion"
              className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/70 to-transparent flex flex-col justify-center p-10">
              <h3 className="text-white text-3xl font-bold mb-2">Men's Fashion</h3>
              <p className="text-purple-100 mb-6 max-w-xs">
                Elevate your style with our premium men's clothing collection.
              </p>
              <Button
                asChild
                className="bg-white text-purple-600 hover:bg-purple-600 hover:text-white w-max transform group-hover:translate-x-2 transition-all duration-300"
              >
                <Link href="/categories/mens-fashion">Shop Collection</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

