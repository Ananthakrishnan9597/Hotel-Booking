import { useNavigate } from "react-router-dom";

const experiences = [
  {
    title: "Handpicked Premium Stays",
    description:
      "Luxury resorts to cozy budget rooms — every stay is quality-checked for comfort, safety, and style.",
    icon: "🏨",
  },
  {
    title: "Local Experiences",
    description:
      "Explore local culture, food walks, guided tours, and adventure activities around your stay.",
    icon: "🌍",
  },
  {
    title: "Personalized Comfort",
    description:
      "Perfect stays for couples, families, and solo travelers — tailored to your travel style.",
    icon: "🛎️",
  },
  {
    title: "Smooth & Secure Booking",
    description:
      "Instant confirmation, secure payments, and transparent pricing with no hidden charges.",
    icon: "⚡",
  },
];

export default function Experience() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-50 mt-10">
      {/* Hero Section */}
      <section className="bg-black text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Experience the Stay, Not Just the Room
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          More than hotel bookings — we create unforgettable travel experiences
          designed around you.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <button onClick={() => navigate('/explore-experiences')} className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
            Explore Experiences
          </button>
          <button onClick={() => { navigate('/rooms'); window.scrollTo(0, 0); }} className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition">
            Book Your Stay
          </button>
        </div>
      </section>

      {/* Experience Cards */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {experiences.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-white py-16 text-center px-6">
        <h2 className="text-3xl font-bold mb-4">
          Stay Smart. Travel Better.
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-6">
          From check-in to check-out, we make sure your journey is smooth,
          secure, and memorable.
        </p>
        <button onClick={() => { navigate('/offers/all'); window.scrollTo(0, 0); }} className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition">
          Discover Destinations
        </button>
      </section>
    </div>
  );
}
