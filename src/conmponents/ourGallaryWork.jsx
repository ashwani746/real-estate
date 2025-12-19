import { useState } from "react";

const images = [
  // FALSE CEILING CATEGORY
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c", // Modern false ceiling
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3", // Designer false ceiling
  "https://images.unsplash.com/photo-1615873968403-89e068629265", // Geometric ceiling design
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0", // Decorative ceiling
  
  // DOORS CATEGORY
  "https://images.unsplash.com/photo-1563298723-dcfebaa392e3", // Modern metal door
  "https://images.unsplash.com/photo-1584622650111-993a426fbf0a", // Designer door
  "https://images.unsplash.com/photo-1600585154526-990dced4db0d", // Decorative door
  "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace", // Metal sheet door
  
  // GATES CATEGORY
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64", // Modern gate design
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c", // Laser cut gate
  "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d", // Designer main gate
  "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099", // CNC gate pattern
  
  // WALL PARTITION & PANELS
  "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87", // Wall partition design
  "https://images.unsplash.com/photo-1600210492493-0946911123ea", // Laser cut partition
  "https://images.unsplash.com/photo-1600566752355-35792bedcfea", // Decorative wall panel
  "https://images.unsplash.com/photo-1600573472592-401b489a3cdc", // Modern partition
  "https://images.unsplash.com/photo-1615874694520-474822394e73", // CNC wall design
  
  // RAILINGS CATEGORY
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0d", // Stair railing
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118d", // Balcony railing
  "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea", // Laser cut railing
  "https://images.unsplash.com/photo-1600573472549-e8c6e0b8f8b8", // Designer railing
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb1", // MS/SS railing
  
  // NAME PLATES CATEGORY
  "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4", // Metal name plate
  "https://images.unsplash.com/photo-1600566752355-35792bedcfeb", // Laser cut name plate
  "https://images.unsplash.com/photo-1615873968403-89e068629266", // Designer name plate
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0e", // Custom name plate
  "https://images.unsplash.com/photo-1600210492493-0946911123eb", // House name plate
  
  // TUBE WELL FITTINGS CATEGORY
  "https://images.unsplash.com/photo-1581092160562-40aa08e78837", // Metal fittings
  "https://images.unsplash.com/photo-1581093588401-fbb62a02f120", // MS pipes and fittings
  "https://images.unsplash.com/photo-1581092583537-20d51b4b4f1b", // Industrial fittings
  "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1", // Metal components
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158", // Tube well parts
  
  // WALL ARTS & DECOR CATEGORY
  "https://images.unsplash.com/photo-1513519245088-0e12902e35ca", // Metal wall art
  "https://images.unsplash.com/photo-1582037928769-181f2644ecb7", // Decorative wall art
  "https://images.unsplash.com/photo-1551028719-00167b16eac5", // Laser cut wall decor
  "https://images.unsplash.com/photo-1578926288207-a90a5366759d", // Geometric wall art
  "https://images.unsplash.com/photo-1561214115-f2f134cc4912", // Modern wall design
  "https://images.unsplash.com/photo-1544382937-e0d40dabdc18", // Architectural wall art
  "https://images.unsplash.com/photo-1515405295579-ba7b45403062", // Natural design wall art
  
  // RELIGIOUS ITEMS CATEGORY
  "https://images.unsplash.com/photo-1583623025817-d180a2221d0a", // Trishul design
  "https://images.unsplash.com/photo-1580674285054-bed31e145f59", // Lord Ganesha
  "https://images.unsplash.com/photo-1597679488944-c9c933fbf3d5", // Lord Shiva symbol
  "https://images.unsplash.com/photo-1603048588665-791ca8aea617", // Religious items
  "https://images.unsplash.com/photo-1609331834377-78eab50c4c34", // Diya decoration
  "https://images.unsplash.com/photo-1545486332-9e0999c535b2", // Om symbol
  
  // STATUES & SPIRITUAL DECOR
  "https://images.unsplash.com/photo-1587411768941-df30e7c4e323", // Lord Natraj statue
  "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5", // Ganesha statue
  "https://images.unsplash.com/photo-1611688720072-c1ae394f59e4", // Religious statue
  "https://images.unsplash.com/photo-1609331834377-78eab50c4c35", // Spiritual decor
  "https://images.unsplash.com/photo-1580674285054-bed31e145f60", // Hindu deity
  "https://images.unsplash.com/photo-1583623025817-d180a2221d0b", // Temple decor
  
  // WELDING & FABRICATION PROCESS
  "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789", // Welding sparks
  "https://images.unsplash.com/photo-1581092160562-40aa08e78837", // Welder at work
  "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952", // Metal fabrication
  "https://images.unsplash.com/photo-1565688534245-05d6b5be184a", // CNC machine
  "https://images.unsplash.com/photo-1581092800453-046b51f8f05c", // Laser cutting
  "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc", // Metal grinding
  
  // WORKSHOP & TOOLS
  "https://images.unsplash.com/photo-1572981779307-38b8cabb2407", // Workshop tools
  "https://images.unsplash.com/photo-1530124566582-a618bc2615dc", // Tool bench
  "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1", // Workshop interior
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158", // Industrial equipment
  
  // FINISHED PRODUCTS & MATERIALS
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0", // Metal sheets
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c", // Steel products
  "https://images.unsplash.com/photo-1615874694520-474822394e73", // Finished metalwork
  "https://images.unsplash.com/photo-1600566752355-35792bedcfea", // Metal designs
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
