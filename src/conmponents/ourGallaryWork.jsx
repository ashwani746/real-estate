import { useState } from "react";

const images = [
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  "https://images.unsplash.com/photo-1581090700227-1e37b190418e",
   "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  "https://images.unsplash.com/photo-1581090700227-1e37b190418e",
];

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(null);

  const closeImage = () => setActiveIndex(null);

  const nextImage = () => {
    setActiveIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setActiveIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <section className="py-16 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">
        Gallery
      </h2>

      {/* Gallery Grid */}
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            onClick={() => setActiveIndex(index)}
            className="cursor-pointer rounded-lg h-48 w-full object-cover"
            alt="gallery"
          />
        ))}
      </div>

      {/* Fullscreen Viewer */}
      {activeIndex !== null && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
          
          {/* Close Button */}
          <button
            onClick={closeImage}
            className="absolute top-5 right-6 text-white text-3xl"
          >
            ✕
          </button>

          {/* Previous Button */}
          <button
            onClick={prevImage}
            className="absolute left-5 text-white text-4xl"
          >
            ‹
          </button>

          {/* Image */}
          <img
            src={images[activeIndex]}
            className="max-w-[90%] max-h-[90%] rounded-lg"
            alt="preview"
          />

          {/* Next Button */}
          <button
            onClick={nextImage}
            className="absolute right-5 text-white text-4xl"
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
}
