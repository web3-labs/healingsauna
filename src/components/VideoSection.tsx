import { Play } from "lucide-react";
import { useState } from "react";
import chipImage from "@/assets/chip.png";

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="section-dark py-20 md:py-28">
      <div className="container-section">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Experience the <span className="gradient-text">Difference</span>
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            See how the Healing Sauna GO transforms your recovery routine
          </p>
        </div>

        {/* Video Container */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative aspect-video rounded-2xl overflow-hidden glow-effect">
            {!isPlaying ? (
              <>
                <img
                  src={chipImage}
                  alt="Healing Sauna technology chip"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-primary flex items-center justify-center transition-transform hover:scale-110 active:scale-95"
                  >
                    <Play size={32} className="text-white ml-1" />
                  </button>
                </div>
                
                {/* Logo overlay */}
                <div className="absolute top-6 left-6">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center">
                      <span className="text-white font-bold">HS</span>
                    </div>
                    <span className="text-white font-bold text-xl">
                      Healing<span className="gradient-text">Sauna</span>™
                    </span>
                  </div>
                </div>
              </>
            ) : (
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/eGMu3vGQjs4?autoplay=1&rel=0"
                title="Healing Sauna Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
