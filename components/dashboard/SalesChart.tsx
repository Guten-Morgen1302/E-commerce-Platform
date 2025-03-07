"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"

export default function SalesChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const ctx = canvasRef.current.getContext("2d")
    if (!ctx) return

    // Mock data
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"]
    const revenue = [4500, 5200, 4800, 5800, 6000, 6500]
    const orders = [120, 150, 135, 160, 180, 200]

    // Chart dimensions
    const width = canvasRef.current.width
    const height = canvasRef.current.height
    const padding = 40
    const chartWidth = width - padding * 2
    const chartHeight = height - padding * 2

    // Clear canvas
    ctx.clearRect(0, 0, width, height)

    // Draw axes
    ctx.beginPath()
    ctx.moveTo(padding, padding)
    ctx.lineTo(padding, height - padding)
    ctx.lineTo(width - padding, height - padding)
    ctx.strokeStyle = "#e5e7eb"
    ctx.stroke()

    // Draw grid lines
    const gridLines = 5
    ctx.beginPath()
    for (let i = 0; i <= gridLines; i++) {
      const y = padding + (chartHeight / gridLines) * i
      ctx.moveTo(padding, y)
      ctx.lineTo(width - padding, y)
    }
    ctx.strokeStyle = "#f3f4f6"
    ctx.stroke()

    // Draw revenue line
    const maxRevenue = Math.max(...revenue)
    ctx.beginPath()
    revenue.forEach((value, index) => {
      const x = padding + (chartWidth / (revenue.length - 1)) * index
      const y = height - padding - (value / maxRevenue) * chartHeight

      if (index === 0) {
        ctx.moveTo(x, y)
      } else {
        ctx.lineTo(x, y)
      }
    })
    ctx.strokeStyle = "#8b5cf6"
    ctx.lineWidth = 3
    ctx.stroke()

    // Draw revenue points
    revenue.forEach((value, index) => {
      const x = padding + (chartWidth / (revenue.length - 1)) * index
      const y = height - padding - (value / maxRevenue) * chartHeight

      ctx.beginPath()
      ctx.arc(x, y, 6, 0, Math.PI * 2)
      ctx.fillStyle = "#8b5cf6"
      ctx.fill()
      ctx.beginPath()
      ctx.arc(x, y, 4, 0, Math.PI * 2)
      ctx.fillStyle = "#ffffff"
      ctx.fill()
    })

    // Draw orders line
    const maxOrders = Math.max(...orders)
    ctx.beginPath()
    orders.forEach((value, index) => {
      const x = padding + (chartWidth / (orders.length - 1)) * index
      const y = height - padding - (value / maxOrders) * chartHeight

      if (index === 0) {
        ctx.moveTo(x, y)
      } else {
        ctx.lineTo(x, y)
      }
    })
    ctx.strokeStyle = "#3b82f6"
    ctx.lineWidth = 3
    ctx.stroke()

    // Draw orders points
    orders.forEach((value, index) => {
      const x = padding + (chartWidth / (orders.length - 1)) * index
      const y = height - padding - (value / maxOrders) * chartHeight

      ctx.beginPath()
      ctx.arc(x, y, 6, 0, Math.PI * 2)
      ctx.fillStyle = "#3b82f6"
      ctx.fill()
      ctx.beginPath()
      ctx.arc(x, y, 4, 0, Math.PI * 2)
      ctx.fillStyle = "#ffffff"
      ctx.fill()
    })

    // Draw month labels
    ctx.textAlign = "center"
    ctx.fillStyle = "#6b7280"
    ctx.font = "12px sans-serif"
    months.forEach((month, index) => {
      const x = padding + (chartWidth / (months.length - 1)) * index
      ctx.fillText(month, x, height - padding + 20)
    })
  }, [])

  return (
    <div className="bg-white rounded-lg shadow-md p-6 h-full">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Sales Overview</h2>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm" className="text-purple-600 border-purple-600 hover:bg-purple-50">
            Monthly
          </Button>
          <Button variant="outline" size="sm">
            Weekly
          </Button>
          <Button variant="outline" size="sm">
            Daily
          </Button>
        </div>
      </div>

      <div className="flex items-center mb-6">
        <div className="mr-8">
          <p className="text-gray-500 text-sm">Total Revenue</p>
          <p className="text-2xl font-bold">$32,800</p>
        </div>
        <div>
          <p className="text-gray-500 text-sm">Total Orders</p>
          <p className="text-2xl font-bold">945</p>
        </div>
      </div>

      <div className="relative h-80">
        <canvas ref={canvasRef} width={800} height={400} className="w-full h-full"></canvas>
      </div>

      <div className="flex justify-center mt-4">
        <div className="flex items-center mr-6">
          <div className="w-3 h-3 rounded-full bg-purple-600 mr-2"></div>
          <span className="text-sm text-gray-600">Revenue</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-blue-600 mr-2"></div>
          <span className="text-sm text-gray-600">Orders</span>
        </div>
      </div>
    </div>
  )
}

