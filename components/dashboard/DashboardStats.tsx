import { TrendingUp, Users, ShoppingBag, DollarSign } from "lucide-react"

export default function DashboardStats() {
  const stats = [
    {
      title: "Total Revenue",
      value: "$12,426.75",
      change: "+12.5%",
      isPositive: true,
      icon: <DollarSign className="h-6 w-6 text-white" />,
      bgColor: "bg-purple-600",
    },
    {
      title: "Total Orders",
      value: "1,245",
      change: "+8.2%",
      isPositive: true,
      icon: <ShoppingBag className="h-6 w-6 text-white" />,
      bgColor: "bg-blue-600",
    },
    {
      title: "New Customers",
      value: "356",
      change: "+14.3%",
      isPositive: true,
      icon: <Users className="h-6 w-6 text-white" />,
      bgColor: "bg-green-600",
    },
    {
      title: "Conversion Rate",
      value: "3.2%",
      change: "-0.8%",
      isPositive: false,
      icon: <TrendingUp className="h-6 w-6 text-white" />,
      bgColor: "bg-amber-500",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <div className={`${stat.bgColor} p-3 rounded-full mr-4`}>{stat.icon}</div>
            <div>
              <h3 className="text-gray-500 text-sm">{stat.title}</h3>
              <p className="text-2xl font-bold">{stat.value}</p>
            </div>
          </div>
          <div className={`text-sm ${stat.isPositive ? "text-green-600" : "text-red-600"} flex items-center`}>
            <span>{stat.change}</span>
            <span className="ml-1">from last month</span>
          </div>
        </div>
      ))}
    </div>
  )
}

