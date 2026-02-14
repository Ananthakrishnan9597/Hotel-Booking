import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-50 mt-10">
      {/* Hero Section */}
      <section className="bg-black text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          About Us
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          We make hotel booking simple, secure, and unforgettable.
        </p>
      </section>

      {/* About Content */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left */}
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Who We Are
            </h2>
            <p className="text-gray-600 mb-4">
              TravelNest is a modern hotel booking platform designed to help
              travelers find the perfect stay with ease and confidence.
              From luxury resorts to budget-friendly rooms, we bring the
              best options together in one place.
            </p>
            <p className="text-gray-600">
              Our goal is to turn every trip into a smooth and memorable
              experience by combining comfort, convenience, and trust.
            </p>
          </div>

          {/* Right */}
          <div>
            <h2 className="text-3xl font-bold mb-4">
              What We Offer
            </h2>
            <ul className="space-y-3 text-gray-600">
              <li>✅ Handpicked quality hotels</li>
              <li>✅ Secure and fast booking</li>
              <li>✅ Best prices with no hidden charges</li>
              <li>✅ Local experiences & destinations</li>
              <li>✅ 24/7 customer support</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Our Mission
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          To make travel booking effortless and enjoyable by connecting
          people with trusted stays and meaningful experiences — anytime,
          anywhere.
        </p>
      </section>

      {/* CTA */}
      <section className="bg-white py-16 text-center px-6">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Travel?
        </h2>
        <p className="text-gray-600 mb-6">
          Discover destinations, explore experiences, and book your stay
          with confidence.
        </p>
        <button onClick={() => { navigate('/offers/all'); window.scrollTo(0, 0); }} className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition">
          Discover Destinations
        </button>
      </section>
    </div>
  );
}
