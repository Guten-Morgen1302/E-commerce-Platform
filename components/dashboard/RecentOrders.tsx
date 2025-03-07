import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function RecentOrders() {
  const orders = [
    {
      id: "#ORD-7352",
      customer: "John Smith",
      date: "Mar 5, 2025",
      amount: "$235.89",
      status: "Delivered",
      statusColor: "bg-green-100 text-green-800",
    },
    {
      id: "#ORD-7351",
      customer: "Emma Johnson",
      date: "Mar 4, 2025",
      amount: "$125.99",
      status: "Processing",
      statusColor: "bg-blue-100 text-blue-800",
    },
    {
      id: "#ORD-7350",
      customer: "Michael Brown",
      date: "Mar 4, 2025",
      amount: "$432.25",
      status: "Shipped",
      statusColor: "bg-purple-100 text-purple-800",
    },
    {
      id: "#ORD-7349",
      customer: "Sophia Williams",
      date: "Mar 3, 2025",
      amount: "$89.99",
      status: "Delivered",
      statusColor: "bg-green-100 text-green-800",
    },
    {
      id: "#ORD-7348",
      customer: "James Davis",
      date: "Mar 3, 2025",
      amount: "$149.50",
      status: "Cancelled",
      statusColor: "bg-red-100 text-red-800",
    },
  ]

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Recent Orders</h2>
        <Button variant="outline" className="text-purple-600 border-purple-600 hover:bg-purple-50">
          View All
        </Button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left text-gray-500 border-b">
              <th className="pb-3 font-medium">Order ID</th>
              <th className="pb-3 font-medium">Customer</th>
              <th className="pb-3 font-medium">Date</th>
              <th className="pb-3 font-medium">Amount</th>
              <th className="pb-3 font-medium">Status</th>
              <th className="pb-3 font-medium">Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index} className="border-b last:border-b-0">
                <td className="py-4 font-medium">{order.id}</td>
                <td className="py-4">{order.customer}</td>
                <td className="py-4">{order.date}</td>
                <td className="py-4 font-medium">{order.amount}</td>
                <td className="py-4">
                  <Badge variant="outline" className={order.statusColor}>
                    {order.status}
                  </Badge>
                </td>
                <td className="py-4">
                  <Button variant="ghost" size="sm" className="text-purple-600 hover:text-purple-800">
                    Details
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

