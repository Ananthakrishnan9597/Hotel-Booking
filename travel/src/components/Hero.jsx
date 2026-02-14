import React from "react";
import { useNavigate } from "react-router-dom";
import heroVideo from "../assets/heroImage.mp4";
import { assets, cities } from "../assets/assets";

function Hero() {
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate('/rooms');
    window.scrollTo(0, 0);
  }

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Optional overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-full text-white px-6 text-left">
        {/* ONE alignment container */}
        <div className="pl-0 md:pl-12 lg:pl-24 max-w-6xl mt-[20px]">

          {/* Badge */}
          <p className="inline-block bg-[#49B9FF]/50 px-3.5 py-1 rounded-full mt-10">
            The Ultimate Hotel Experience
          </p>

          {/* Heading */}
          <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-[56px] md:leading-[56px] font-bold md:font-extrabold max-w-xl mt-4">
            Discover Your Perfect Hotelstay Destination
          </h1>

          {/* Description */}
          <p className="max-w-xl mt-3 text-sm md:text-base">
            Our hotel offers comfortable rooms, friendly service, and a convenient location close to major attractions. Guests can enjoy free Wi-Fi, 24-hour front desk service, room service, and secure parking, making it an ideal choice for leisure and business travelers.
          </p>

          {/* Search Form */}
          <form onSubmit={handleSearch} className="bg-white text-gray-500 rounded-lg px-6 py-4 mt-10 flex flex-col md:flex-row gap-4 max-w-fit">

            {/* Destination */}
            <div>
              <div className="flex items-center gap-2">
                <img src={assets.locationIcon} alt="" className="h-4" />
                <label htmlFor="destinationInput">Destination</label>
              </div>
              <input
                list="destinations"
                id="destinationInput"
                type="text"
                className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
                placeholder="Type here"
                required
              />
              <datalist id="destinations">
                {cities.map((city, index) => (
                  <option value={city} key={index} />
                ))}
              </datalist>
            </div>

            {/* Check In */}
            <div>
              <div className="flex items-center gap-2">
                <img src={assets.calenderIcon} alt="" className="h-4" />
                <label htmlFor="checkIn">Check in</label>
              </div>
              <input
                id="checkIn"
                type="date"
                className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none" required
              />
            </div>

            {/* Check Out */}
            <div>
              <div className="flex items-center gap-2">
                <img src={assets.calenderIcon} alt="" className="h-4" />
                <label htmlFor="checkOut">Check out</label>
              </div>
              <input
                id="checkOut"
                type="date"
                className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none" required
              />
            </div>

            {/* Guests */}
            <div className="flex md:flex-col max-md:gap-2 max-md:items-center">
              <label htmlFor="guests">Guests</label>
              <input
                min={1}
                max={4}
                id="guests"
                type="number"
                className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none max-w-16"
                placeholder="1"
              />
            </div>

            {/* Search Button */}
            <button className="flex items-center justify-center gap-1 rounded-md bg-black py-3 px-4 text-white my-auto cursor-pointer max-md:w-full max-md:py-2">
              <img src={assets.searchIcon} alt="searchIcon" className="h-6" />
              <span>Search</span>
            </button>

          </form>
        </div>
      </div>
    </section>
  );
}

export default Hero;
