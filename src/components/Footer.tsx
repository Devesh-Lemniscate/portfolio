import { FaTwitter, FaMedium, FaGithub, FaLinkedin } from "react-icons/fa";

const socialLinks = [
  { href: "https://github.com/Devesh-Lemniscate", icon: <FaGithub /> },
  { href: "https://linkedin.com/in/devesh-tiwari", icon: <FaLinkedin /> },
  { href: "https://twitter.com/devesh_codes", icon: <FaTwitter /> },
  { href: "https://medium.com/@deveshtiwari", icon: <FaMedium /> },
];

const Footer = () => {
  return (
    <footer className="w-screen bg-gray-500 py-4 text-black">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm font-light md:text-left">
          ©Devesh Tiwari 2024. All rights reserved
        </p>

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

        <a
          href="#privacy-policy"
          className="text-center text-sm font-light hover:underline md:text-right"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
