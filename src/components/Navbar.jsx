import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState("synthwave");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "synthwave" ? "cupcake" : "synthwave");
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/#about" },
    { name: "Skills", path: "/#skills" },
    { name: "Education", path: "/#education" },
    { name: "Projects", path: "/#projects" },
    { name: "Contact", path: "/#contact" },
  ];

  const handleNavClick = (path) => {
    setIsOpen(false);
    if (path.includes("#")) {
      const element = document.getElementById(path.split("#")[1]);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-base-100/95 backdrop-blur-lg shadow-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="relative group">
            <span className="text-2xl font-black tracking-tight">
              <span className="gradient-text">Mahmuda</span>
              <span className="text-base-content ml-1">Nasrin</span>
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300"></span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.path}
                onClick={() => handleNavClick(link.path)}
                className="relative px-4 py-2 text-sm font-medium text-base-content/80 hover:text-primary transition-all duration-300 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-3/4 transition-all duration-300"></span>
              </a>
            ))}

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="ml-4 btn btn-circle btn-ghost btn-sm hover:bg-primary/20"
            >
              {theme === "synthwave" ? (
                <FaSun size={18} />
              ) : (
                <FaMoon size={18} />
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="btn btn-circle btn-ghost btn-sm"
            >
              {theme === "synthwave" ? (
                <FaSun size={18} />
              ) : (
                <FaMoon size={18} />
              )}
            </button>
            <button
              className="btn btn-ghost btn-circle"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 space-y-2 bg-base-100/95 backdrop-blur-lg rounded-2xl mb-4">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.path}
                onClick={() => handleNavClick(link.path)}
                className="block px-6 py-3 text-base-content/80 hover:text-primary hover:bg-primary/10 rounded-xl transition-all duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
