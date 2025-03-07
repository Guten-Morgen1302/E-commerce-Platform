import ContactForm from "@/components/contact/ContactForm"
import ContactInfo from "@/components/contact/ContactInfo"
import ContactMap from "@/components/contact/ContactMap"
import ContactFAQ from "@/components/contact/ContactFAQ"

export default function ContactPage() {
  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <ContactInfo />
          <ContactForm />
        </div>
        <ContactMap />
        <ContactFAQ />
      </div>
    </div>
  )
}

