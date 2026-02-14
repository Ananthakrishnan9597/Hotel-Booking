import React from "react";

const offers = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
    badge: "Members Only",
    title: "Exclusive Offer 🔒",
    description: "Book direct and enjoy special rates, free breakfast, and late check-out.",
    discount: "20% OFF",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80",
    badge: "Limited Time",
    title: "Weekend Getaway 🌴",
    description: "Escape for the weekend with our special package including spa access.",
    discount: "15% OFF",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=800&q=80",
    badge: "Family Deal",
    title: "Family Fun 👨‍👩‍👧‍👦",
    description: "Kids stay free! Enjoy complimentary activities for the whole family.",
    discount: "25% OFF",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80",
    badge: "Early Bird",
    title: "Advance Purchase 📅",
    description: "Book 60 days in advance and save big on your luxury stay.",
    discount: "30% OFF",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=800&q=80",
    badge: "Last Minute",
    title: "Last Minute Deal ⏳",
    description: "Spontaneous plans? Save big on bookings made within 48 hours.",
    discount: "40% OFF",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80",
    badge: "Extended Stay",
    title: "Stay Longer 🏡",
    description: "Stay 7+ nights and enjoy deep discounts on your accommodation.",
    discount: "35% OFF",
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=800&q=80",
    badge: "Romantic",
    title: "Honeymoon Special 💍",
    description: "Celebrate love with champagne, chocolates, and a suite upgrade.",
    discount: "20% OFF",
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=800&q=80",
    badge: "Business",
    title: "Corporate Saver 💼",
    description: "Streamlined check-in and workspace access for business travelers.",
    discount: "10% OFF",
  },
];

const ExclusiveOfferCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-40 mb-20 px-6 md:px-16 lg:px-24">
      {offers.map((offer) => (
        <div key={offer.id} className="max-w-md w-full overflow-hidden rounded-2xl bg-white shadow-xl flex flex-col">
          {/* Image */}
          <div className="relative">
            <img
              src={offer.image}
              alt={offer.title}
              className="h-48 w-full object-cover"
            />
            <span className="absolute top-3 right-3 rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold text-black">
              {offer.badge}
            </span>
          </div>

          {/* Content */}
          <div className="p-5 flex flex-col flex-grow">
            <h2 className="text-xl font-semibold text-gray-900">
              {offer.title}
            </h2>

            <p className="mt-2 text-sm text-gray-600 flex-grow">
              {offer.description}
            </p>

            <div className="mt-4 flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-500">Save up to</p>
                <p className="text-2xl font-bold text-yellow-500">{offer.discount}</p>
              </div>

              <button onClick={() => alert("Deal Unlocked!")} className="rounded-full bg-yellow-400 px-5 py-2 text-sm font-semibold text-black transition hover:bg-yellow-300 cursor-pointer">
                Unlock Deal
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExclusiveOfferCard;
