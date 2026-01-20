import { Star } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  text: string;
  rating: number;
  category: "parent" | "student" | "teacher";
}

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export default function Testimonials({ testimonials }: TestimonialsProps) {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? "fill-current" : "fill-gray-300"
        }`}
        style={{ color: i < rating ? "#FF8C42" : "#D1D5DB" }}
      />
    ));
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case "parent":
        return "👨‍👩‍👧 Родитель";
      case "student":
        return "🎬 Ученик";
      case "teacher":
        return "👨‍🏫 Педагог";
      default:
        return category;
    }
  };

  return (
    <div className="space-y-8">
      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4"
            style={{ borderColor: "#FF8C42" }}
          >
            {/* Header with Avatar and Info */}
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold text-white"
                  style={{ backgroundColor: "#0099CC" }}
                >
                  {testimonial.avatar}
                </div>
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-sm" style={{ color: "#0099CC" }}>
                  {testimonial.name}
                </h4>
                <p className="text-xs" style={{ color: "#6B7280" }}>
                  {getCategoryLabel(testimonial.category)}
                </p>
              </div>
            </div>

            {/* Rating */}
            <div className="flex gap-1 mb-3">
              {renderStars(testimonial.rating)}
            </div>

            {/* Review Text */}
            <p style={{ color: "#6B7280" }} className="text-sm leading-relaxed mb-4">
              "{testimonial.text}"
            </p>

            {/* Role Badge */}
            <div className="flex gap-2 flex-wrap">
              <span
                className="text-xs font-semibold px-3 py-1 rounded-full"
                style={{ backgroundColor: "#E0F2FE", color: "#0099CC" }}
              >
                {testimonial.role}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Trust Indicators */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-8 border-t" style={{ borderColor: "#E5E7EB" }}>
        {[
          { number: "150+", label: "Выпускников", icon: "🎓" },
          { number: "8+", label: "Лет опыта", icon: "⭐" },
          { number: "50+", label: "Проектов", icon: "🎬" },
        ].map((indicator, index) => (
          <div key={index} className="text-center">
            <div className="text-4xl mb-2">{indicator.icon}</div>
            <div className="text-3xl font-bold" style={{ color: "#0099CC" }}>
              {indicator.number}
            </div>
            <p style={{ color: "#6B7280" }} className="text-sm">
              {indicator.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
