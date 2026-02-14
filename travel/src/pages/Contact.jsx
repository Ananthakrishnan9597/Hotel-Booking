import { useNavigate } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-50 mt-10">
      {/* Hero */}
      <section className="bg-black text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Contact Us
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          We’re here to help you plan a smooth and stress-free stay.
        </p>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Get in Touch
            </h2>

            <p className="text-gray-600 mb-6">
              Have questions about bookings, destinations, or experiences?
              Our support team is ready to assist you anytime.
            </p>

            <ul className="space-y-4 text-gray-700">
              <li>📧 Email: support@QuickStay.com</li>
              <li>📞 Phone: +91 98765 43210</li>
              <li>📍 Address: Chennai, Tamil Nadu, India</li>
            </ul>

            <p className="text-gray-500 text-sm mt-6">
              Available 24/7 for booking support and inquiries.
            </p>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-md p-8">
            <h3 className="text-2xl font-semibold mb-6">
              Send Us a Message
            </h3>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
              />

              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
              />

              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16 text-center px-6">
        <h2 className="text-3xl font-bold mb-4">
          Need Help Booking?
        </h2>
        <p className="text-gray-600 mb-6">
          Discover destinations, explore experiences, and book your stay
          with confidence.
        </p>
        <button onClick={() => { navigate('/offers/all'); window.scrollTo(0, 0); }} className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition">
          Book Your Stay
        </button>
      </section>
    </div>
  );
}
