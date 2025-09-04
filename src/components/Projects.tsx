import { useState, useRef } from "react";
import { TiLocationArrow } from "react-icons/ti";
import AnimateTitle from "./AnimateTitle";
import { BentoTilt } from "./Skills";

interface ProjectCardProps {
  title: React.ReactNode;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  gradientClass?: string;
}

export const ProjectCard = ({ title, description, technologies, githubUrl, liveUrl, gradientClass = "from-blue-600/20 via-purple-600/20 to-violet-600/20" }: ProjectCardProps) => {
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
    <div className="relative size-full group">
      <div className={`absolute left-0 top-0 size-full bg-gradient-to-br ${gradientClass} opacity-80 group-hover:opacity-60 transition-all duration-300`} />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-black/40 transition-all duration-300" />
      
      {/* Geometric decoration */}
      <div className="absolute top-4 right-4 w-16 h-16 border border-white/20 rounded-full opacity-30 group-hover:opacity-50 transition-all duration-300" />
      <div className="absolute bottom-8 left-6 w-8 h-8 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rotate-45 opacity-40 group-hover:opacity-60 transition-all duration-300" />
      <div className="absolute top-1/2 right-8 w-4 h-16 bg-gradient-to-b from-violet-400/20 to-transparent opacity-30 group-hover:opacity-50 transition-all duration-300" />
      
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-gray-800">
        <div>
          <h1 className="bento-title special-font mb-3 text-gray-900">{title}</h1>
          <p className="mt-3 max-w-64 text-xs md:text-base text-gray-700">{description}</p>
          <div className="mt-4">
            <p className="text-xs uppercase tracking-wider opacity-70 mb-2 text-gray-600">Technologies:</p>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <span key={index} className="rounded-full bg-gray-900/20 px-2 py-1 text-xs text-gray-800">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex gap-3">
          {githubUrl && (
            <div
              ref={hoverButtonRef}
              onMouseMove={handleMouseMove}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="border-hsla relative flex w-fit cursor-pointer items-center gap-1 overflow-hidden rounded-full bg-black px-4 py-2 text-xs uppercase text-white/70"
            >
              <div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
                style={{
                  opacity: hoverOpacity,
                  background: `radial-gradient(100px circle at ${cursorPosition.x}px ${cursorPosition.y}px, #656fe288, #00000026)`,
                }}
              />
              <TiLocationArrow className="relative z-20" />
              <p className="relative z-20">GitHub</p>
            </div>
          )}
          
          {liveUrl && (
            <div className="border-hsla relative flex w-fit cursor-pointer items-center gap-1 overflow-hidden rounded-full bg-yellow-300 px-4 py-2 text-xs uppercase text-black">
              <TiLocationArrow className="relative z-20" />
              <p className="relative z-20">Live Demo</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section className="bg-gray-350 py-32" id="projects">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-16">
          <AnimateTitle
            title="Featured Pr<b>o</b>jects"
            containerClass="text-black text-center text-5xl"
          />
          <p className="mt-5 text-center max-w-2xl mx-auto font-circular-web text-lg text-gray-600">
            A showcase of my recent work, demonstrating proficiency in modern web technologies 
            and creative problem-solving approaches.
          </p>
        </div>

        <div className="grid w-full grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          {/* Priority 1: DripChat */}
          <BentoTilt className="border-hsla relative h-96 overflow-hidden rounded-md">
            <ProjectCard
              gradientClass="from-blue-600/20 via-cyan-600/20 to-teal-600/20"
              title={
                <>
                  Drip<b>C</b>hat
                </>
              }
              description="Built a real-time chat application with instant messaging and media sharing capabilities. Features browser-based collaborative code execution."
              technologies={["React", "Node.js", "Socket.io", "WebSockets", "MongoDB"]}
              githubUrl={import.meta.env.VITE_DRIPCHAT_GITHUB}
            />
          </BentoTilt>

          {/* Priority 2: DripWallet */}
          <BentoTilt className="border-hsla relative h-96 overflow-hidden rounded-md">
            <ProjectCard
              gradientClass="from-emerald-600/20 via-green-600/20 to-lime-600/20"
              title={
                <>
                  Drip<b>W</b>allet
                </>
              }
              description="Developed a full-stack digital wallet application enabling users to manage money, transfer funds, and pay merchants securely."
              technologies={["React", "Node.js", "Express", "Database Transactions", "Authentication"]}
              githubUrl={import.meta.env.VITE_DRIPWALLET_GITHUB}
            />
          </BentoTilt>

          {/* Priority 3: NerdsByte */}
          <BentoTilt className="border-hsla relative h-96 overflow-hidden rounded-md">
            <ProjectCard
              gradientClass="from-purple-600/20 via-violet-600/20 to-indigo-600/20"
              title={
                <>
                  Nerds<b>B</b>yte
                </>
              }
              description="Developed a robust online question bank platform tailored for company-specific interview preparation with real user base and analytics."
              technologies={["React", "Node.js", "MongoDB", "Analytics", "Authentication"]}
              githubUrl={import.meta.env.VITE_NERDSBYTE_GITHUB}
            />
          </BentoTilt>

          {/* Priority 4: VideoStream */}
          <BentoTilt className="border-hsla relative h-96 overflow-hidden rounded-md">
            <ProjectCard
              gradientClass="from-orange-600/20 via-red-600/20 to-pink-600/20"
              title={
                <>
                  Video<b>S</b>tream
                </>
              }
              description="Engineered a scalable video streaming platform utilizing FFmpeg for segmenting and delivering video content in real-time with adaptive streaming."
              technologies={["FFmpeg", "Node.js", "React", "Video Processing", "REST APIs"]}
              githubUrl={import.meta.env.VITE_VIDEOSTREAM_GITHUB}
            />
          </BentoTilt>

          {/* Priority 5: MovieApp */}
          <BentoTilt className="border-hsla relative h-96 overflow-hidden rounded-md">
            <ProjectCard
              gradientClass="from-slate-600/20 via-gray-600/20 to-zinc-600/20"
              title={
                <>
                  Movie<b>A</b>pp
                </>
              }
              description="Created a cross-platform mobile movie discovery app using React Native with search, genre filtering, watchlists, and responsive design."
              technologies={["React Native", "Redux", "Third-party APIs", "iOS", "Android"]}
              githubUrl={import.meta.env.VITE_MOVIEAPP_GITHUB}
            />
          </BentoTilt>

          <BentoTilt className="border-hsla relative h-96 overflow-hidden rounded-md bg-gradient-to-br from-violet-300/20 to-blue-300/20">
            <div className="relative z-10 flex size-full flex-col items-center justify-center p-5 text-center">
              <h1 className="special-font text-4xl text-black mb-4">
                More Pr<b>o</b>jects
              </h1>
              <p className="max-w-48 text-sm text-gray-600 mb-6">
                Explore more of my work on GitHub and see what I'm currently building.
              </p>
              <a 
                href={import.meta.env.VITE_GITHUB_PROFILE}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full bg-black px-4 py-2 text-xs uppercase text-white hover:bg-gray-800 transition-colors"
              >
                <TiLocationArrow />
                <span>GitHub Profile</span>
              </a>
            </div>
          </BentoTilt>
        </div>
      </div>
    </section>
  );
};

export default Projects;
