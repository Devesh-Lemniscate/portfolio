import gsap from "gsap";
import { useRef } from "react";

import Button from "./Button";
import AnimateTitle from "./AnimateTitle";
import RoundedCorners from "./RoundedCorners";

const Experience = () => {
  const frameRef = useRef<HTMLImageElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const element = frameRef.current;

    if (!element) return;

    const rect = element.getBoundingClientRect();
    const xPos = clientX - rect.left;
    const yPos = clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((yPos - centerY) / centerY) * -30;
    const rotateY = ((xPos - centerX) / centerX) * 30;

    gsap.to(element, {
      duration: 0.3,
      rotateX,
      rotateY,
      transformPerspective: 500,
      ease: "power1.inOut",
    });
  };

  const handleMouseLeave = () => {
    const element = frameRef.current;

    if (element) {
      gsap.to(element, {
        duration: 0.3,
        rotateX: 0,
        rotateY: 0,
        ease: "power1.inOut",
      });
    }
  };

  return (
    <div id="experience" className="min-h-dvh w-screen bg-black text-blue-50">
      <div className="flex size-full flex-col items-center py-10 pb-24">
        <p className="font-general text-sm uppercase md:text-[20px]">
          Professional Journey
        </p>

        <div className="relative size-full">
          <AnimateTitle
            title="My prof<b>e</b>ssional <br /> exp<b>e</b>rience story"
            containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10 text-9xl"
          />

          <div className="story-img-container">
            <div className="story-img-mask">
              <div className="story-img-content">
                <img
                  ref={frameRef}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  onMouseUp={handleMouseLeave}
                  onMouseEnter={handleMouseLeave}
                  src={import.meta.env.VITE_ENTRANCE_IMAGE_URL}
                  alt="Experience"
                  className="object-contain"
                />
              </div>
            </div>
            <RoundedCorners/>
          </div>
        </div>

        <div className="-mt-80 flex w-full justify-center md:-mt-64 md:me-44 md:justify-end">
          <div className="flex h-full w-fit flex-col items-center md:items-start">
            <div className="max-w-sm space-y-4 text-center md:text-start">
              <div className="bg-blue-50/10 p-4 rounded-lg">
                <h3 className="font-robert-medium text-blue-50">Current</h3>
                <p className="text-sm text-violet-50">Computer Science Student</p>
                <p className="text-xs text-gray-400">Graphic Era Hill University</p>
                <p className="text-xs text-gray-400">2023 - 2027</p>
              </div>
              
              <div className="bg-blue-50/10 p-4 rounded-lg">
                <h3 className="font-robert-medium text-blue-50">Education</h3>
                <p className="text-sm text-violet-50">Intermediate (Science)</p>
                <p className="text-xs text-gray-400">Sidhartha Public School</p>
                <p className="text-xs text-gray-400">2021 - 2022</p>
              </div>
            </div>

            <Button
              id="experience-btn"
              title="View Full Resume"
              containerClass="mt-5"
              onClick={() => window.open(import.meta.env.VITE_RESUME_URL, '_blank')}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
