import { Button } from "@/components/ui/button"

interface CategoryHeroProps {
  title: string
  description: string
  image: string
}

export default function CategoryHero({ title, description, image }: CategoryHeroProps) {
  return (
    <div className="relative h-[400px] overflow-hidden">
      <img src={image || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-transparent flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{title}</h1>
            <p className="text-xl text-purple-100 mb-8">{description}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-700 hover:text-white">
                Shop All {title}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white hover:text-purple-600"
              >
                View Deals
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

