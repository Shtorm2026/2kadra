import { useState } from "react";
import { Play } from "lucide-react";

interface Video {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  embedUrl: string;
  duration: string;
  date: string;
}

interface VideoPlayerProps {
  videos: Video[];
}

export default function VideoPlayer({ videos }: VideoPlayerProps) {
  const [selectedVideo, setSelectedVideo] = useState(videos[0]);

  return (
    <div className="space-y-8">
      {/* Main Video Player */}
      <div className="bg-black rounded-lg overflow-hidden shadow-2xl">
        <div className="aspect-video bg-black relative">
          <iframe
            width="100%"
            height="100%"
            src={selectedVideo.embedUrl}
            title={selectedVideo.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </div>

      {/* Video Info */}
      <div className="space-y-4">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: "#0099CC" }}>
            {selectedVideo.title}
          </h3>
          <p style={{ color: "#6B7280" }} className="text-sm">
            {selectedVideo.date} • {selectedVideo.duration}
          </p>
        </div>
        <p style={{ color: "#6B7280" }} className="text-lg leading-relaxed">
          {selectedVideo.description}
        </p>
      </div>

      {/* Video Playlist */}
      <div className="space-y-4">
        <h4 className="text-xl font-bold" style={{ color: "#0099CC" }}>
          Другие выпуски
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {videos.map((video) => (
            <button
              key={video.id}
              onClick={() => setSelectedVideo(video)}
              className={`group relative overflow-hidden rounded-lg transition-all duration-300 transform hover:scale-105 ${
                selectedVideo.id === video.id ? "ring-4" : ""
              }`}
              style={{
                outlineColor: selectedVideo.id === video.id ? "#FCD34D" : "transparent",
              } as React.CSSProperties}
            >
              {/* Thumbnail */}
              <div className="relative aspect-video bg-gray-800 overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                  <div className="rounded-full p-3 transform group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: "#FF8C42" }}>
                    <Play className="w-6 h-6" style={{ color: "white" }} fill="white" />
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="bg-white p-3">
                <h5 className="font-semibold text-sm text-left line-clamp-2" style={{ color: "#0099CC" }}>
                  {video.title}
                </h5>
                <p className="text-xs text-gray-500 mt-1">{video.duration}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
