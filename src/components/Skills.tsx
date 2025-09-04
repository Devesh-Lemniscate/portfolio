import { useState, useRef } from "react";
import { TiLocationArrow } from "react-icons/ti";

interface BentoTiltProps {
  children: React.ReactNode;
  className?: string;
}

export const BentoTilt = ({ children, className = "" }: BentoTiltProps) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (event: React.MouseEvent) => {
    if (!itemRef.current) return;

    const { left, top, width, height } = itemRef.current.getBoundingClientRect();

    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 12;
    const tiltY = (relativeX - 0.5) * -12;

    const newTransform = `perspective(350px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      ref={itemRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

interface SkillCardProps {
  src: string;
  title: React.ReactNode;
  description: string;
  skills: string[];
  level: string;
}

export const SkillCard = ({ src, title, description, skills, level }: SkillCardProps) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoverOpacity, setHoverOpacity] = useState(0);
  const hoverButtonRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (event: React.MouseEvent) => {
    if (!hoverButtonRef.current) return;
    const rect = hoverButtonRef.current.getBoundingClientRect();

    setCursorPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => setHoverOpacity(1);
  const handleMouseLeave = () => setHoverOpacity(0);

  return (
    <div className="relative size-full">
      <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute left-0 top-0 size-full object-cover object-center"
      />
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
          <div className="mt-4">
            <p className="text-xs uppercase tracking-wider opacity-70">Skills:</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span key={index} className="rounded-full bg-blue-50/20 px-2 py-1 text-xs">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div
          ref={hoverButtonRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="border-hsla relative flex w-fit cursor-pointer items-center gap-1 overflow-hidden rounded-full bg-black px-5 py-2 text-xs uppercase text-white/20"
        >
          <div
            className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
            style={{
              opacity: hoverOpacity,
              background: `radial-gradient(100px circle at ${cursorPosition.x}px ${cursorPosition.y}px, #656fe288, #00000026)`,
            }}
          />
          <TiLocationArrow className="relative z-20" />
          <p className="relative z-20">{level} level</p>
        </div>
      </div>
    </div>
  );
};

const Skills = () => (
  <section className="bg-black pb-52" id="skills">
    <div className="container mx-auto px-3 md:px-10">
      <div className="px-5 py-32">
        <p className="font-circular-web text-lg text-blue-50">
          Technical Expertise
        </p>
        <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
          A comprehensive toolkit of modern technologies and frameworks, 
          honed through hands-on projects and continuous learning.
        </p>
      </div>

      <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
        <SkillCard
          src="videos/feature-1.mp4"
          title={
            <>
              Full St<b>a</b>ck
            </>
          }
          description="Comprehensive web development skills covering both frontend and backend technologies."
          skills={["React", "Node.js", "Express", "MongoDB", "TypeScript"]}
          level="Advanced"
        />
      </BentoTilt>

      <div className="grid w-full grid-cols-1 gap-7 md:h-[135vh] md:grid-cols-2 md:grid-rows-3">
        <BentoTilt className="bento-tilt_1 !col-span-1 row-span-1 md:!col-span-1 md:!row-span-2">
          <SkillCard
            src="videos/feature-2.mp4"
            title={
              <>
                Mach<b>i</b>ne Learning
              </>
            }
            description="Data science and machine learning expertise with Python ecosystem."
            skills={["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"]}
            level="Intermediate"
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 !col-span-1 row-span-1">
          <SkillCard
            src="videos/feature-3.mp4"
            title={
              <>
                Mob<b>i</b>le Dev
              </>
            }
            description="Cross-platform mobile application development."
            skills={["React Native", "Flutter", "iOS", "Android"]}
            level="Intermediate"
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 !col-span-1">
          <SkillCard
            src="videos/feature-4.mp4"
            title={
              <>
                Dev<b>O</b>ps
              </>
            }
            description="Modern deployment and infrastructure management."
            skills={["Docker", "AWS", "CI/CD", "Git", "Linux"]}
            level="Intermediate"
          />
        </BentoTilt>

        
      </div>
    </div>
  </section>
);

export default Skills;
