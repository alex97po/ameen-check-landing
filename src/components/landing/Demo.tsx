import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause } from "lucide-react";

// Placeholder data for demos - in a real scenario these would be video URLs
const demos = [
    {
        id: "parsing",
        label: "CV Parsing",
        video: "/1.mp4",
        poster: "/api/placeholder/800/450"
    },
    {
        id: "whatsapp",
        label: "WhatsApp Bot",
        video: "/2.mp4",
        poster: "/api/placeholder/800/450"
    },
    {
        id: "enhance",
        label: "CV Enhancement",
        video: "/3.mp4",
        poster: "/api/placeholder/800/450"
    }
];

const Demo = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 2.0;
        }
    }, [activeTab]);

    return (
        <section id="demo" className="py-24 bg-secondary/20 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                        See It in Action
                    </h2>
                    <p className="text-muted-foreground text-lg mb-8">
                        Watch how our AI handles the heavy lifting in your recruitment process.
                    </p>

                    {/* Tabs */}
                    <div className="flex flex-wrap justify-center gap-2 mb-12">
                        {demos.map((demo, index) => (
                            <button
                                key={demo.id}
                                onClick={() => {
                                    setActiveTab(index);
                                    setIsPlaying(false);
                                }}
                                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === index
                                    ? "bg-primary text-white shadow-lg shadow-primary/25 scale-105"
                                    : "bg-secondary text-muted-foreground hover:bg-secondary/80 hover:text-white"
                                    }`}
                            >
                                {demo.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Video Player Display */}
                <div className="max-w-5xl mx-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.05 }}
                            className="relative aspect-video bg-black/80 rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
                        >
                            <video
                                ref={videoRef}
                                src={demos[activeTab].video}
                                autoPlay
                                muted
                                loop
                                playsInline
                                controls
                                className="w-full h-full object-cover"
                                onLoadedMetadata={() => {
                                    if (videoRef.current) {
                                        videoRef.current.playbackRate = 2.0;
                                    }
                                }}
                            />
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default Demo;
