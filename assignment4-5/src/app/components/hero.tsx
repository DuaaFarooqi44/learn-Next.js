import React from "react";

export default function Hero() {
  return (
    <div
      className="hero w-full min-h-[90vh] flex items-center"
      style={{
        backgroundImage:
          "url(https://cdn.create.vista.com/api/media/small/80661458/stock-photo-shopping-girl)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      aria-label="A young stylish girl wearing sunglasses, walking with multi-colored shopping bags"
    >
      {/* Overlay with dynamic opacity */}
      <div className="hero-overlay bg-black bg-opacity-60 md:bg-opacity-70"></div>

      {/* Hero Content */}
      <div className="hero-content text-neutral-content text-left">
        <div className="max-w-md p-4">
          {/* Left-aligned and vertically centered */}
          <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold text-gray-700">
            Shop best-selling Categories
          </h2>
        </div>
      </div>
    </div>
  );
}
