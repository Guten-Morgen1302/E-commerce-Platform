import { Shield, RefreshCw, Lock, HeadphonesIcon } from "lucide-react"

export default function WhyChooseUs() {
  const features = [
    {
      icon: <Shield className="text-purple-600 w-8 h-8" />,
      title: "Authentic Products",
      description: "We guarantee 100% authentic products sourced directly from brands or authorized distributors.",
    },
    {
      icon: <RefreshCw className="text-purple-600 w-8 h-8" />,
      title: "Easy Returns",
      description: "Not satisfied with your purchase? Return within 30 days for a full refund or exchange.",
    },
    {
      icon: <Lock className="text-purple-600 w-8 h-8" />,
      title: "Secure Payments",
      description: "Your payment information is always secure with our encrypted payment processing.",
    },
    {
      icon: <HeadphonesIcon className="text-purple-600 w-8 h-8" />,
      title: "24/7 Customer Support",
      description: "Our friendly support team is available around the clock to assist you with any questions.",
    },
  ]

  return (
    <section className="mb-20 bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose ShopEase</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're dedicated to providing you with the best shopping experience possible. Here's why customers love
            shopping with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
            >
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

