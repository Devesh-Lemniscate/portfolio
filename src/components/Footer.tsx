import { FaTwitter, FaMedium, FaGithub, FaLinkedin } from "react-icons/fa";

const socialLinks = [
  { href: import.meta.env.VITE_GITHUB_PROFILE, icon: <FaGithub /> },
  { href: import.meta.env.VITE_LINKEDIN_PROFILE, icon: <FaLinkedin /> },
  { href: import.meta.env.VITE_TWITTER_PROFILE, icon: <FaTwitter /> },
  { href: import.meta.env.VITE_MEDIUM_PROFILE, icon: <FaMedium /> },
];

const Footer = () => {
  return (
    <footer className="w-screen bg-gray-500 py-4 text-black">
      <div className="container mx-auto flex flex-col items-center justify-center gap-4 px-4 md:flex-row">

        <div className="flex justify-center gap-4  md:justify-start">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black transition-colors duration-500 ease-in-out hover:text-white"
            >
              {link.icon}
            </a>
          ))}
        </div>

        
      </div>
    </footer>
  );
};

export default Footer;
