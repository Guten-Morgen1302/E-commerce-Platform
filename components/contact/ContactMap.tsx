export default function ContactMap() {
  return (
    <div className="mt-12 mb-12">
      <h2 className="text-2xl font-semibold mb-6">Our Location</h2>
      <div className="bg-white p-2 rounded-lg shadow-md">
        <div className="aspect-video w-full h-[400px] bg-gray-200 rounded-md overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30591910525!2d-74.25986432970718!3d40.697149422113014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1647281018805!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="ShopEase Store Location"
          ></iframe>
        </div>
      </div>
    </div>
  )
}

