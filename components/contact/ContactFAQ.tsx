"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

interface FAQItem {
  question: string
  answer: string
}

export default function ContactFAQ() {
  const faqs: FAQItem[] = [
    {
      question: "What are your shipping options?",
      answer:
        "We offer standard shipping (3-5 business days), express shipping (1-2 business days), and same-day delivery in select areas. Shipping costs vary based on location and chosen method. Free shipping is available on orders over $50.",
    },
    {
      question: "How can I track my order?",
      answer:
        "Once your order ships, you'll receive a confirmation email with a tracking number. You can use this number on our website under 'Order Tracking' or directly on the carrier's website to monitor your package's journey.",
    },
    {
      question: "What is your return policy?",
      answer:
        "We accept returns within 30 days of purchase for most items in new, unused condition with original packaging. Some products like intimate apparel, opened software, and personalized items cannot be returned. Refunds are processed within 5-7 business days after we receive the returned items.",
    },
    {
      question: "Do you ship internationally?",
      answer:
        "Yes, we ship to over 100 countries worldwide. International shipping times vary by location, typically ranging from 7-21 business days. Additional customs fees and taxes may apply depending on your country's import regulations.",
    },
    {
      question: "How do I apply a discount code?",
      answer:
        "You can apply discount codes during checkout. After adding items to your cart, proceed to checkout and you'll see a field labeled 'Discount Code' or 'Promo Code' where you can enter your code before completing your purchase.",
    },
  ]

  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <button
              className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              <span className="font-medium text-gray-900">{faq.question}</span>
              {openIndex === index ? (
                <ChevronUp className="h-5 w-5 text-purple-600" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-500" />
              )}
            </button>

            {openIndex === index && (
              <div className="px-6 pb-4">
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

