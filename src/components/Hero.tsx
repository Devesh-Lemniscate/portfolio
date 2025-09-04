import { useEffect, useRef, useState } from "react";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [currIdx, setCurrIdx] = useState(1);
  const [loading, setLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(0);

  const totalVideos = 4;
  const nextVideoRef = useRef<HTMLVideoElement>(null);
  const mainVideoRef = useRef<HTMLVideoElement>(null);

  const heroTexts = [
    {
      title: "Portfolio",
      description: "Showcasing my finest creations in code and design."
    },
    {
      title: "Dave — Status: Online",
      description: "Always connected, always creating."
    },
    {
      title: "Coding in Motion",
      description: "Lines of code transforming into immersive worlds."
    },
    {
      title: "DEVESH",
      description: "The name behind the neon glow."
    }
  ];

  const handleVideoLoad = () => {
    setLoadedVideos((prev) => prev + 1);
  };

  useEffect(() => {
    if (loadedVideos >= totalVideos - 1) {
      setLoading(false);
    }
  }, [loadedVideos]);

  const handleMiniVdClick = () => {
    setCurrIdx((prevIndex) => (prevIndex % totalVideos) + 1);
  };

  const getVideoSrc = (index: number) => `videos/hero-${index}.mp4`;

  // Transition animation
  useGSAP(() => {
    gsap.set("#next-video", { visibility: "visible" });
    gsap.to("#next-video", {
      transformOrigin: "center center",
      scale: 1,
      width: "100%",
      height: "100%",
      duration: 1,
      ease: "power1.inOut",
      onStart: () => { nextVideoRef.current?.play(); },
    });

    gsap.from("#current-video", {
      transformOrigin: "center center",
      scale: 0.8,
      opacity: 0,
      duration: 1.2,
      ease: "power2.out",
    });
  }, { dependencies: [currIdx], revertOnUpdate: true });

  // Frame scroll animation
  useGSAP(() => {
    gsap.set("#video-frame", {
      clipPath: "polygon(14% 0%, 72% 0%, 90% 90%, 0% 100%)",
      borderRadius: "0 0 40% 10%",
    });

    gsap.from("#video-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0 0 0 0",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#video-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  });

  // Floating DEVESH drift
  useGSAP(() => {
    gsap.to("#floating-name", {
      x: 20,
      yoyo: true,
      repeat: -1,
      duration: 3,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden bg-black">
      {/* Loader */}
      {loading && (
        <div className="flex-center absolute z-[100] h-dvh w-screen bg-black">
          <div className="three-body">
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
          </div>
        </div>
      )}

      {/* Video Frame */}
      <div id="video-frame" className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-black">
        <div>
          {/* Mini Preview Video (hover kept exactly the same as your original) */}
          <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg shadow-lg">
            <div
              onClick={handleMiniVdClick}
              className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
            >
              <video
                ref={nextVideoRef}
                src={getVideoSrc((currIdx % totalVideos) + 1)}
                loop
                muted
                id="current-video"
                className="size-64 origin-center scale-125 object-cover rounded-lg"
                onLoadedData={handleVideoLoad}
              />
            </div>
          </div>

          {/* Transition Video */}
          <video
            ref={nextVideoRef}
            src={getVideoSrc(currIdx)}
            loop
            muted
            id="next-video"
            className="absolute-center invisible absolute z-20 size-64 object-cover rounded-lg"
            onLoadedData={handleVideoLoad}
          />

          {/* Main Background Video */}
          <video
            ref={mainVideoRef}
            src={getVideoSrc(currIdx === totalVideos - 1 ? 1 : currIdx)}
            autoPlay
            loop
            muted
            className="absolute left-0 top-0 size-full object-cover object-center brightness-[0.85]"
            onLoadedData={handleVideoLoad}
          />
        </div>

        {/* Floating DEVESH */}
        <h1
          id="floating-name"
          className="special-font absolute bottom-5 right-20  z-40 text-4xl font-extrabold text-transparent bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text drop-shadow-[0_0_10px_#00f0ff]"
        >
          DEV<b>E</b>SH
        </h1>

        {/* Title & Description */}
        <div className="absolute left-0 top-0 z-40 size-full">
          <div className="mt-24 px-5 sm:px-10">
            <h1
              className="special-font text-6xl font-bold bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(0,255,255,0.7)]"
              dangerouslySetInnerHTML={{ __html: heroTexts[currIdx - 1].title }}
            />
            <p className="mb-5 mt-3 max-w-lg text-lg text-white/80 drop-shadow-[0_0_15px_rgba(0,0,0,0.6)]">
              {heroTexts[currIdx - 1].description}
            </p>

            <Button
              id="view-work"
              title="View My Work"
              leftIcon={<TiLocationArrow />}
              containerClass="!bg-yellow-300 flex-center gap-1 rounded-lg shadow-[0_0_20px_#FFD700]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
