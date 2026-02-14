import { useNavigate } from "react-router-dom";

const experienceList = [
  {
    title: "City Sightseeing",
    location: "Chennai",
    description:
      "Discover famous landmarks, beaches, and heritage spots tours.",
    image:
      "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Local Food Walk",
    location: "Madurai",
    description:
      "Taste authentic street food and traditional local dishes with experts.",
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Adventure Activities",
    location: "Ooty",
    description:
      "Trekking, camping, and outdoor fun experiences surrounded by nature.",
    image:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Cultural Experience",
    location: "Thanjavur",
    description:
      "Explore temples, art, music, and traditional cultural performances.",
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80",
  },
];

export default function ExploreExperience() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-white-50 px-6 py-16 justify-center mt-20">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-3">
          Explore Experiences
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          Discover local activities, culture, and unforgettable moments
          around your stay.
        </p>
      </div>

      {/* Experience Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {experienceList.map((exp, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
          >
            <img
              src={exp.image}
              alt={exp.title}
              className="h-48 w-full object-cover"
            />

            <div className="p-5">
              <h3 className="text-lg font-semibold mb-1">
                {exp.title}
              </h3>
              <p className="text-sm text-gray-500 mb-2">
                📍 {exp.location}
              </p>
              <p className="text-sm text-gray-600 mb-4">
                {exp.description}
              </p>

              <button onClick={() => { navigate('/rooms'); window.scrollTo(0, 0); }} className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
