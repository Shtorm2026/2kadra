import { useState } from "react";
import { X } from "lucide-react";

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: "filming" | "studio" | "editing" | "festival";
  title: string;
  description: string;
}

interface GalleryProps {
  images: GalleryImage[];
}

export default function Gallery({ images }: GalleryProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "Все", icon: "🎬" },
    { id: "filming", label: "Съемки", icon: "📹" },
    { id: "studio", label: "Студия", icon: "🎥" },
    { id: "editing", label: "Монтаж", icon: "✂️" },
    { id: "festival", label: "Фестивали", icon: "🏆" },
  ];

  const filteredImages =
    activeCategory === "all"
      ? images
      : images.filter((img) => img.category === activeCategory);

  return (
    <div className="space-y-8">
      {/* Category Filter */}
      <div className="flex flex-wrap gap-3 justify-center">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
              activeCategory === cat.id
                ? "text-white shadow-lg transform scale-105"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
            style={{
              backgroundColor:
                activeCategory === cat.id ? "#FF8C42" : undefined,
            }}
          >
            <span>{cat.icon}</span>
            {cat.label}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredImages.map((image) => (
          <div
            key={image.id}
            className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer h-64"
            onClick={() => setSelectedImage(image)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            {/* Overlay */}
            <div
              className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex flex-col justify-end p-4"
              style={{
                backgroundColor:
                  "rgba(0, 0, 0, " +
                  (0 + ")" || "0.6)") /* Fallback for older browsers */,
              }}
            >
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                <h3 className="text-white font-bold text-lg mb-1">
                  {image.title}
                </h3>
                <p className="text-gray-200 text-sm">{image.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-200 transition-colors z-10"
            >
              <X className="w-6 h-6" style={{ color: "#0099CC" }} />
            </button>

            {/* Image */}
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full rounded-lg shadow-2xl"
            />

            {/* Info */}
            <div className="mt-4 text-white">
              <h2 className="text-2xl font-bold mb-2">{selectedImage.title}</h2>
              <p className="text-gray-300">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
