import type React from "react"
import Chatbot from '../components/Chatbot/Chatbot'; // Adjust path based on your actual file structure
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ShopEase - Your One-Stop Shopping Destination",
  description: "Shop the latest trends at unbeatable prices with fast delivery.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        {children}
        <Chatbot /> 
      </body>
    </html>
  )
}



import './globals.css'