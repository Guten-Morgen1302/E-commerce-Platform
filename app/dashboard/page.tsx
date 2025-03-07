import DashboardStats from "@/components/dashboard/DashboardStats"
import RecentOrders from "@/components/dashboard/RecentOrders"
import PopularProducts from "@/components/dashboard/PopularProducts"
import SalesChart from "@/components/dashboard/SalesChart"

export default function DashboardPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
      <DashboardStats />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <div className="lg:col-span-2">
          <SalesChart />
        </div>
        <div>
          <PopularProducts />
        </div>
      </div>
      <RecentOrders />
    </div>
  )
}

