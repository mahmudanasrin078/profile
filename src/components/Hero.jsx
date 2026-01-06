import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaDownload,
  FaArrowDown,
  FaPlay,
  FaStar,
} from "react-icons/fa";
import { HiSparkles, HiCode, HiLightningBolt } from "react-icons/hi";
import { Typewriter } from "react-simple-typewriter";
import profileImg from "../assets/mahmuda-nasrin.jpg";

const Hero = () => {
  const socialLinks = [
    {
      icon: <FaGithub size={20} />,
      url: "https://github.com/mahmudanasrin078",
      name: "GitHub",
      gradient: "from-gray-700 to-gray-900",
    },
    {
      icon: <FaLinkedin size={20} />,
      url: "https://www.linkedin.com/in/mahmudanasrin/",
      name: "LinkedIn",
      gradient: "from-blue-600 to-blue-800",
    },
    // {
    //   icon: <FaTwitter size={20} />,
    //   url: "https://twitter.com/mahmudanasrin",
    //   name: "Twitter",
    //   gradient: "from-sky-400 to-sky-600",
    // },
    {
      icon: <FaFacebook size={20} />,
      url: "https://facebook.com/mahmudanasrin",
      name: "Facebook",
      gradient: "from-blue-500 to-blue-700",
    },
  ];

  const floatingSkills = [
    { name: "React", color: "bg-cyan-500", delay: "0s" },
    { name: "JavaScript", color: "bg-yellow-500", delay: "0.5s" },
    { name: "Tailwind", color: "bg-teal-500", delay: "1s" },
    { name: "Node.js", color: "bg-green-500", delay: "1.5s" },
  ];

  return (
    <section className="min-h-screen relative overflow-hidden bg-base-100">
      {/* Unique Mesh Gradient Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 via-transparent to-pink-500/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-gradient-to-r from-purple-500/30 to-pink-500/30 blur-[120px]"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-gradient-to-r from-cyan-500/30 to-blue-500/30 blur-[120px]"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-gradient-to-r from-yellow-500/20 to-orange-500/20 blur-[100px]"></div>
        </div>
        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[
          { left: 15, top: 20, delay: 0.5, duration: 3.5 },
          { left: 85, top: 10, delay: 1.2, duration: 4.2 },
          { left: 45, top: 75, delay: 0.8, duration: 3.8 },
          { left: 25, top: 60, delay: 2.1, duration: 4.5 },
          { left: 70, top: 35, delay: 1.5, duration: 3.2 },
          { left: 10, top: 85, delay: 0.3, duration: 4.8 },
          { left: 90, top: 50, delay: 2.5, duration: 3.6 },
          { left: 55, top: 15, delay: 1.8, duration: 4.1 },
          { left: 35, top: 90, delay: 0.9, duration: 3.9 },
          { left: 80, top: 70, delay: 2.3, duration: 4.4 },
          { left: 5, top: 45, delay: 1.1, duration: 3.3 },
          { left: 65, top: 5, delay: 2.8, duration: 4.7 },
          { left: 40, top: 55, delay: 0.6, duration: 3.4 },
          { left: 95, top: 25, delay: 1.9, duration: 4.3 },
          { left: 20, top: 80, delay: 2.6, duration: 3.7 },
          { left: 75, top: 95, delay: 0.4, duration: 4.6 },
          { left: 50, top: 40, delay: 1.4, duration: 3.1 },
          { left: 30, top: 30, delay: 2.2, duration: 4.9 },
          { left: 60, top: 65, delay: 0.7, duration: 3.5 },
          { left: 12, top: 12, delay: 1.6, duration: 4.0 },
        ].map((particle, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-violet-500 to-pink-500 rounded-full opacity-20 floating"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center w-full py-20">
          {/* Left Content - Main Text */}
          <div className="lg:col-span-7 text-center lg:text-left order-2 lg:order-1">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-full mb-8 backdrop-blur-sm">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-sm font-medium text-green-400">
                Available for work
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 leading-[1.1]">
              <span className="block text-base-content/90">Building</span>
              <span className="block relative">
                <span className="bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Digital Dreams
                </span>
                <HiSparkles className="absolute -top-2 -right-2 text-2xl text-yellow-400 animate-pulse" />
              </span>
              <span className="block text-base-content/90">Into Reality</span>
            </h1>

            {/* Typewriter */}
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-8">
              <div className="w-12 h-1 bg-gradient-to-r from-violet-500 to-pink-500 rounded-full"></div>
              <span className="text-xl md:text-2xl font-semibold text-base-content/70">
                <Typewriter
                  words={[
                    "Frontend Developer",
                    "React.js Enthusiast",
                    "UI/UX Lover",
                    "Creative Thinker",
                  ]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={2000}
                />
              </span>
            </div>

            {/* Description */}
            <p className="text-base-content/60 text-lg max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed">
              Hi! I'm{" "}
              <span className="font-bold text-violet-500">Mahmuda Nasrin</span>{" "}
              — a passionate developer crafting pixel-perfect, responsive web
              experiences. I transform creative ideas into elegant digital
              solutions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <a
                href="/resume.pdf"
                download
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 overflow-hidden rounded-2xl font-bold transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className="relative flex items-center gap-2 text-white">
                  <FaDownload className="group-hover:animate-bounce" />
                  Download Resume
                </span>
              </a>

              <a
                href="#projects"
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-bold border-2 border-base-content/20 hover:border-violet-500/50 transition-all duration-300 overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-violet-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <FaPlay className="relative text-sm group-hover:text-violet-500 transition-colors" />
                <span className="relative group-hover:text-violet-500 transition-colors">
                  View Projects
                </span>
              </a>
            </div>

            {/* Social Links - Horizontal Pills */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r ${social.gradient} text-white font-medium text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg`}
                >
                  {social.icon}
                  <span className="hidden sm:inline">{social.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Right Content - Image & Floating Elements */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="relative max-w-md mx-auto">
              {/* Rotating Border Ring */}
              <div
                className="absolute inset-0 -m-4 rounded-[2rem] border-2 border-dashed border-violet-500/30 animate-spin-slow"
                style={{ animationDuration: "20s" }}
              ></div>

              {/* Main Image Container */}
              <div className="relative">
                {/* Background Glow */}
                <div className="absolute -inset-4 bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500 rounded-[2rem] blur-2xl opacity-40 animate-pulse"></div>

                {/* Image Frame */}
                <div className="relative p-1.5 rounded-[1.5rem] bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500">
                  <div className="relative rounded-[1.25rem] overflow-hidden bg-base-200">
                    <img
                      src={profileImg}
                      alt="Mahmuda Nasrin"
                      className="w-full aspect-[4/5] object-cover object-top"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-violet-900/60 via-transparent to-transparent"></div>

                    {/* Name overlay on image */}
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-2xl font-black text-white mb-1">
                        Mahmuda Nasrin
                      </h3>
                      <p className="text-white/80 text-sm flex items-center gap-2">
                        <HiCode className="text-violet-300" />
                        Frontend Developer
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating Skill Badges */}
                <div className="absolute -top-4 -right-4 px-4 py-2 bg-base-100 rounded-xl shadow-2xl border border-base-content/10 floating">
                  <div className="flex items-center gap-2">
                    <HiLightningBolt className="text-yellow-500" />
                    <span className="font-bold text-sm">Quick Learner</span>
                  </div>
                </div>

                <div
                  className="absolute -bottom-4 -left-4 px-4 py-2 bg-base-100 rounded-xl shadow-2xl border border-base-content/10 floating"
                  style={{ animationDelay: "1s" }}
                >
                  <div className="flex items-center gap-2">
                    <FaStar className="text-amber-500" />
                    <span className="font-bold text-sm">10+ Projects</span>
                  </div>
                </div>

                {/* Floating Tech Pills */}
                {floatingSkills.map((skill, index) => (
                  <div
                    key={index}
                    className={`absolute ${
                      index === 0
                        ? "top-1/4 -left-12"
                        : index === 1
                        ? "top-1/2 -right-10"
                        : index === 2
                        ? "bottom-1/3 -left-8"
                        : "bottom-1/4 -right-6"
                    } hidden lg:block floating`}
                    style={{ animationDelay: skill.delay }}
                  >
                    <span
                      className={`px-3 py-1.5 ${skill.color} text-white text-xs font-bold rounded-full shadow-lg`}
                    >
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <a href="#about" className="flex flex-col items-center group">
          <span className="text-sm text-base-content/50 mb-2 group-hover:text-violet-500 transition-colors">
            Explore More
          </span>
          <div className="w-6 h-10 rounded-full border-2 border-base-content/20 group-hover:border-violet-500/50 flex justify-center pt-2 transition-colors">
            <div className="w-1.5 h-1.5 bg-violet-500 rounded-full animate-bounce"></div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
