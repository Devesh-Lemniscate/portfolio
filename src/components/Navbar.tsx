import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";
import { useWindowScroll } from "react-use";

import Button from "./Button";

<<<<<<< HEAD
const navItems = ["About", "Skills", "Experience", "Projects", "Contact"];
=======
const navItems = ["Nexus", "Vault", "Prologue", "About", "Contact"];
>>>>>>> feature/navbar

const NavBar = () => {
  // State for toggling audio and visual indicator
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isIndicatorActive, setIsIndicatorActive] = useState(false);

  // Refs for audio and navigation container
<<<<<<< HEAD
  const audioElementRef = useRef<HTMLAudioElement>(null);
  const navContainerRef = useRef<HTMLDivElement>(null);

  const {y: currentScrollY} = useWindowScroll();

  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Smooth scroll function
  const smoothScrollTo = (targetId: string) => {
    const element = document.getElementById(targetId.toLowerCase());
    if (element) {
      const offsetTop = element.offsetTop - 80; // Offset for navbar height
      
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

=======
  const audioElementRef = useRef(null);
  const navContainerRef = useRef(null);

  const {y: currentScrollY} = useWindowScroll();


  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

>>>>>>> feature/navbar

  useEffect(()=>{
    if(currentScrollY===0){
      setIsNavVisible(true);
<<<<<<< HEAD
      if (navContainerRef.current) {
        navContainerRef.current.classList.remove('floating-nav');
      }
    }else if(currentScrollY > lastScrollY){
      setIsNavVisible(false);
      if (navContainerRef.current) {
        navContainerRef.current.classList.add('floating-nav');
      }
    }else if(currentScrollY < lastScrollY){
      setIsNavVisible(true);
      if (navContainerRef.current) {
        navContainerRef.current.classList.add('floating-nav');
      }
=======
      navContainerRef.current.classList.remove('floating-nav');
    }else if(currentScrollY > lastScrollY){
      setIsNavVisible(false);
      navContainerRef.current.classList.add('floating-nav');
    }else if(currentScrollY < lastScrollY){
      setIsNavVisible(true);
      navContainerRef.current.classList.add('floating-nav');
>>>>>>> feature/navbar
    }

    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);
  
  useEffect(()=>{
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0: -100,
      opacity: isNavVisible ? 1: 0,
      duration: 0.2,
    })
  }, [isNavVisible]);

  // Toggle audio and visual indicator
  const toggleAudioIndicator = () => {
    setIsAudioPlaying((prev) => !prev);
    setIsIndicatorActive((prev) => !prev);
  };
    
  useEffect(()=>{
    if(isAudioPlaying){
<<<<<<< HEAD
      if (audioElementRef.current) {
        audioElementRef.current.play();
      }
    } else {
      if (audioElementRef.current) {
        audioElementRef.current.pause();
      }
=======
      audioElementRef.current.play();
    }else{

>>>>>>> feature/navbar
    }
  }, [isAudioPlaying])

  return (
    <div
      ref={navContainerRef}
      className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6"
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-4">
<<<<<<< HEAD
          <div className="flex items-center gap-7">
            <img src={import.meta.env.VITE_LOGO_URL} alt="logo" className="w-10 h-10 logo-circular object-cover" />

            <Button
              id="resume-button"
              title="Resume"
              rightIcon={<TiLocationArrow />}
              containerClass="bg-blue-50 md:flex hidden items-center justify-center gap-1"
              onClick={() => window.open(import.meta.env.VITE_RESUME_URL, '_blank')}
            />
          </div>

          <div className="flex h-full items-center">
            <div className="hidden md:block">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.preventDefault();
                    smoothScrollTo(item);
                  }}
                  className="nav-hover-btn"
                >
                  {item}
                </button>
=======
          {/* Logo and Product button */}
          <div className="flex items-center gap-7">
            <img src="/img/logo.png" alt="logo" className="w-10" />

            <Button
              id="product-button"
              title="Products"
              rightIcon={<TiLocationArrow />}
              containerClass="bg-blue-50 md:flex hidden items-center justify-center gap-1"
            />
          </div>

          {/* Navigation Links and Audio Button */}
          <div className="flex h-full items-center">
            <div className="hidden md:block">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={`#${item.toLowerCase()}`}
                  className="nav-hover-btn"
                >
                  {item}
                </a>
>>>>>>> feature/navbar
              ))}
            </div>

            <button
              onClick={toggleAudioIndicator}
              className="ml-10 flex items-center space-x-0.5"
            >
              <audio
                ref={audioElementRef}
                className="hidden"
<<<<<<< HEAD
                src={import.meta.env.VITE_AUDIO_LOOP_URL}
=======
                src="/audio/loop.mp3"
>>>>>>> feature/navbar
                loop
              />
              {[1, 2, 3, 4].map((bar) => (
                <div
                  key={bar}
                  className={`indicator-line ${isIndicatorActive ? 'active': ''}`}
                  style={{animationDelay: `${bar*0.1}s`}}
                />

              ))}
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
