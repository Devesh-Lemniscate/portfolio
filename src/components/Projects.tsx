import { useState, useRef } from "react";
import { TiLocationArrow } from "react-icons/ti";
import AnimateTitle from "./AnimateTitle";
import { BentoTilt } from "./Skills";

interface ProjectCardProps {
  src: string;
  title: React.ReactNode;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export const ProjectCard = ({ src, title, description, technologies, githubUrl, liveUrl }: ProjectCardProps) => {
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
      <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute left-0 top-0 size-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300" />
      
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className="bento-title special-font mb-3">{title}</h1>
          <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
          <div className="mt-4">
            <p className="text-xs uppercase tracking-wider opacity-70 mb-2">Technologies:</p>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <span key={index} className="rounded-full bg-blue-50/20 px-2 py-1 text-xs">
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
          <BentoTilt className="border-hsla relative h-96 overflow-hidden rounded-md">
            <ProjectCard
              src="videos/feature-1.mp4"
              title={
                <>
                  Zook<b>a</b>Lab
                </>
              }
              description="A movie recommendation system using React, Node.js, and MongoDB with real-time search capabilities."
              technologies={["React", "Node.js", "MongoDB", "Express", "JavaScript"]}
              githubUrl="https://github.com/Devesh-Lemniscate/ZookaLab"
              liveUrl="https://zookalab.netlify.app"
            />
          </BentoTilt>

          <BentoTilt className="border-hsla relative h-96 overflow-hidden rounded-md">
            <ProjectCard
              src="videos/feature-2.mp4"
              title={
                <>
                  Smart<b>C</b>ab
                </>
              }
              description="An AI-powered ride-booking platform with real-time tracking and optimized route planning."
              technologies={["React Native", "Python", "Machine Learning", "Firebase"]}
              githubUrl="https://github.com/Devesh-Lemniscate/SmartCab"
            />
          </BentoTilt>

          <BentoTilt className="border-hsla relative h-96 overflow-hidden rounded-md">
            <ProjectCard
              src="videos/feature-3.mp4"
              title={
                <>
                  Port<b>f</b>olio
                </>
              }
              description="This very portfolio website built with React, TypeScript, GSAP animations, and modern web technologies."
              technologies={["React", "TypeScript", "GSAP", "Tailwind CSS", "Vite"]}
              githubUrl="https://github.com/Devesh-Lemniscate/portfolio"
              liveUrl="#"
            />
          </BentoTilt>

          <BentoTilt className="border-hsla relative h-96 overflow-hidden rounded-md">
            <ProjectCard
              src="videos/feature-4.mp4"
              title={
                <>
                  Data<b>V</b>iz
                </>
              }
              description="Interactive data visualization dashboard using Python, Pandas, and Matplotlib for complex data analysis."
              technologies={["Python", "Pandas", "Matplotlib", "Jupyter", "NumPy"]}
              githubUrl="https://github.com/Devesh-Lemniscate/DataViz"
            />
          </BentoTilt>

          <BentoTilt className="border-hsla relative h-96 overflow-hidden rounded-md">
            <ProjectCard
              src="videos/feature-5.mp4"
              title={
                <>
                  Chat<b>A</b>pp
                </>
              }
              description="Real-time chat application with user authentication, file sharing, and responsive design."
              technologies={["Socket.io", "Node.js", "React", "MongoDB", "JWT"]}
              githubUrl="https://github.com/Devesh-Lemniscate/ChatApp"
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
              <div className="flex items-center gap-2 rounded-full bg-black px-4 py-2 text-xs uppercase text-white">
                <TiLocationArrow />
                <span>GitHub Profile</span>
              </div>
            </div>
          </BentoTilt>
        </div>
      </div>
    </section>
  );
};

export default Projects;
