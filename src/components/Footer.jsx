import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaHeart,
  FaArrowUp,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <FaGithub size={18} />,
      url: "https://github.com/mahmudanasrin078",
      name: "GitHub",
      color: "hover:bg-gray-700",
    },
    {
      icon: <FaLinkedin size={18} />,
      url: "https://www.linkedin.com/in/mahmudanasrin/",
      name: "LinkedIn",
      color: "hover:bg-blue-600",
    },
    {
      icon: <FaTwitter size={18} />,
      url: "https://twitter.com/mahmudanasrin",
      name: "Twitter",
      color: "hover:bg-sky-500",
    },
    {
      icon: <FaFacebook size={18} />,
      url: "https://facebook.com/mahmudanasrin",
      name: "Facebook",
      color: "hover:bg-blue-500",
    },
  ];

  const quickLinks = [
    { name: "Home", path: "/#" },
    { name: "About", path: "/#about" },
    { name: "Skills", path: "/#skills" },
    { name: "Projects", path: "/#projects" },
    { name: "Contact", path: "/#contact" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-base-200 via-base-300 to-base-300"></div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-pink-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Top Wave */}
      <div className="relative">
        <svg
          className="w-full h-16 text-base-200"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-5">
              <div className="mb-6">
                <h3 className="text-3xl font-black mb-2">
                  <span className="bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                    Mahmuda
                  </span>
                  <span className="text-base-content"> Nasrin</span>
                </h3>
                <p className="text-base-content/50 text-sm font-medium flex items-center gap-2">
                  <HiSparkles className="text-violet-500" />
                  Frontend Developer
                </p>
              </div>

              <p className="text-base-content/60 leading-relaxed mb-8 max-w-md">
                Passionate about crafting beautiful, responsive, and
                user-friendly web experiences. Let's turn your ideas into
                stunning digital reality!
              </p>

              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-11 h-11 rounded-xl bg-base-content/5 flex items-center justify-center text-base-content/60 ${social.color} hover:text-white transition-all duration-300 hover:scale-110`}
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-3">
              <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
                <span className="w-8 h-8 bg-gradient-to-r from-violet-500 to-pink-500 rounded-lg flex items-center justify-center text-white text-sm">
                  →
                </span>
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.path}
                      className="group flex items-center gap-2 text-base-content/60 hover:text-violet-500 transition-all duration-300"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-violet-500/30 group-hover:bg-violet-500 group-hover:scale-150 transition-all duration-300"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-4">
              <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
                <span className="w-8 h-8 bg-gradient-to-r from-pink-500 to-violet-500 rounded-lg flex items-center justify-center text-white text-sm">
                  <FaPaperPlane />
                </span>
                Get In Touch
              </h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href="mailto:mahmudanasrin078@gmail.com"
                    className="group flex items-center gap-3 text-base-content/60 hover:text-violet-500 transition-colors"
                  >
                    <span className="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center text-violet-500 group-hover:bg-violet-500 group-hover:text-white transition-all duration-300">
                      <FaEnvelope />
                    </span>
                    <span className="text-sm">mahmudanasrin078@gmail.com</span>
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+8801767884539"
                    className="group flex items-center gap-3 text-base-content/60 hover:text-pink-500 transition-colors"
                  >
                    <span className="w-10 h-10 rounded-xl bg-pink-500/10 flex items-center justify-center text-pink-500 group-hover:bg-pink-500 group-hover:text-white transition-all duration-300">
                      <FaPhone />
                    </span>
                    <span className="text-sm">+880 1767-884539</span>
                  </a>
                </li>
                <li className="flex items-center gap-3 text-base-content/60">
                  <span className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500">
                    <FaMapMarkerAlt />
                  </span>
                  <span className="text-sm">Dhaka, Bangladesh</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-base-content/10 to-transparent"></div>

        {/* Bottom Bar */}
        <div className="py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <div className="flex items-center text-center justify-center gap-2 text-base-content/50 text-sm">
            <span>© {currentYear}</span>
            <span className="font-semibold text-base-content/70">
              Mahmuda Nasrin
            </span>
            <span>• All Credit Reserved.</span>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-3 px-4 py-2 rounded-xl bg-base-content/5 hover:bg-gradient-to-r hover:from-violet-500 hover:to-pink-500 transition-all duration-300"
          >
            <span className="text-sm text-base-content/60 group-hover:text-white transition-colors">
              Back to top
            </span>
            <span className="w-8 h-8 rounded-lg bg-base-content/10 group-hover:bg-white/20 flex items-center justify-center text-base-content/60 group-hover:text-white transition-all duration-300">
              <FaArrowUp size={12} />
            </span>
          </button>
        </div>
      </div>

      {/* Bottom Gradient Line */}
      <div className="h-1 bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500"></div>
    </footer>
  );
};

export default Footer;
