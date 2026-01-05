import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaCode,
  FaLaptopCode,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiFirebase,
  SiVite,
  SiNetlify,
  SiVercel,
} from "react-icons/si";
import { HiSparkles } from "react-icons/hi";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Pagination,
  Navigation,
  EffectCoverflow,
} from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

const Skills = () => {
  const allSkills = [
    {
      name: "HTML5",
      icon: <FaHtml5 />,
      level: 90,
      color: "#E34F26",
      category: "Frontend",
    },
    {
      name: "CSS3",
      icon: <FaCss3Alt />,
      level: 85,
      color: "#1572B6",
      category: "Frontend",
    },
    {
      name: "JavaScript",
      icon: <FaJs />,
      level: 80,
      color: "#F7DF1E",
      category: "Frontend",
    },
    {
      name: "React.js",
      icon: <FaReact />,
      level: 85,
      color: "#61DAFB",
      category: "Frontend",
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss />,
      level: 90,
      color: "#06B6D4",
      category: "Frontend",
    },
    {
      name: "Node.js",
      icon: <FaNodeJs />,
      level: 70,
      color: "#339933",
      category: "Backend",
    },
    {
      name: "Express.js",
      icon: <SiExpress />,
      level: 65,
      color: "#ffffff",
      category: "Backend",
    },
    {
      name: "MongoDB",
      icon: <SiMongodb />,
      level: 70,
      color: "#47A248",
      category: "Backend",
    },
    {
      name: "Firebase",
      icon: <SiFirebase />,
      level: 75,
      color: "#FFCA28",
      category: "Backend",
    },
    {
      name: "Git",
      icon: <FaGitAlt />,
      level: 80,
      color: "#F05032",
      category: "Tools",
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
      level: 85,
      color: "#ffffff",
      category: "Tools",
    },
    {
      name: "Vite",
      icon: <SiVite />,
      level: 80,
      color: "#646CFF",
      category: "Tools",
    },
    {
      name: "Figma",
      icon: <FaFigma />,
      level: 70,
      color: "#F24E1E",
      category: "Tools",
    },
    {
      name: "Netlify",
      icon: <SiNetlify />,
      level: 75,
      color: "#00C7B7",
      category: "Tools",
    },
    {
      name: "Vercel",
      icon: <SiVercel />,
      level: 75,
      color: "#ffffff",
      category: "Tools",
    },
  ];

  const getCategoryGradient = (category) => {
    switch (category) {
      case "Frontend":
        return "from-blue-500 via-cyan-500 to-teal-500";
      case "Backend":
        return "from-green-500 via-emerald-500 to-lime-500";
      case "Tools":
        return "from-purple-500 via-pink-500 to-rose-500";
      default:
        return "from-gray-500 to-gray-600";
    }
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case "Frontend":
        return "🎨";
      case "Backend":
        return "⚙️";
      case "Tools":
        return "🛠️";
      default:
        return "💻";
    }
  };

  return (
    <section
      id="skills"
      className="py-24 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, rgba(99, 102, 241, 0.03) 0%, rgba(168, 85, 247, 0.08) 50%, rgba(236, 72, 153, 0.03) 100%)",
      }}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-[10%] w-72 h-72 bg-blue-500/10 rounded-full blur-[100px] floating"></div>
        <div
          className="absolute bottom-20 right-[10%] w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] floating"
          style={{ animationDelay: "2s" }}
        ></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-500/5 to-pink-500/5 rounded-full blur-[150px]"></div>

        {/* Floating code symbols */}
        <div
          className="absolute top-32 right-[20%] floating opacity-20"
          style={{ animationDelay: "0.5s" }}
        >
          <FaCode className="text-6xl text-cyan-500" />
        </div>
        <div
          className="absolute bottom-40 left-[15%] floating opacity-20"
          style={{ animationDelay: "1.5s" }}
        >
          <FaLaptopCode className="text-5xl text-purple-500" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-cyan-500/10 via-purple-500/20 to-cyan-500/10 rounded-full mb-6 backdrop-blur-xl border border-cyan-500/20 shadow-lg shadow-cyan-500/10">
            <HiSparkles className="text-2xl text-cyan-400 animate-pulse" />
            <span className="text-cyan-400 font-bold tracking-widest uppercase text-sm">
              My Expertise
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4">
            Skills &{" "}
            <span className="bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>
          <p className="text-base-content/60 max-w-xl mx-auto text-lg">
            Technologies I use to bring ideas to life and create amazing web
            experiences
          </p>
        </div>

        {/* Main Swiper - Coverflow Effect */}
        <div className="mb-16">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 20,
              stretch: 0,
              depth: 200,
              modifier: 1,
              slideShadows: false,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={true}
            modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
            className="skills-swiper py-12"
            style={{
              "--swiper-pagination-color": "#06b6d4",
              "--swiper-navigation-color": "#06b6d4",
            }}
          >
            {allSkills.map((skill, index) => (
              <SwiperSlide
                key={index}
                style={{ width: "280px", height: "380px" }}
              >
                <div className="h-full group">
                  {/* Card Glow */}
                  <div
                    className={`absolute -inset-1 bg-gradient-to-r ${getCategoryGradient(
                      skill.category
                    )} rounded-3xl blur-lg opacity-30 group-hover:opacity-60 transition-opacity duration-500`}
                  ></div>

                  <div className="relative h-full backdrop-blur-2xl bg-base-100/70 border border-white/10 rounded-3xl overflow-hidden flex flex-col">
                    {/* Top gradient bar */}
                    <div
                      className={`h-2 bg-gradient-to-r ${getCategoryGradient(
                        skill.category
                      )}`}
                    ></div>

                    {/* Category Badge */}
                    <div className="absolute top-6 right-6">
                      <span
                        className={`px-3 py-1.5 rounded-full text-xs font-bold bg-gradient-to-r ${getCategoryGradient(
                          skill.category
                        )} text-white shadow-lg`}
                      >
                        {getCategoryIcon(skill.category)} {skill.category}
                      </span>
                    </div>

                    {/* Icon */}
                    <div className="flex-1 flex flex-col items-center justify-center p-8">
                      <div className="relative mb-6">
                        <div
                          className="absolute inset-0 blur-2xl opacity-40"
                          style={{ backgroundColor: skill.color }}
                        ></div>
                        <div
                          className="relative text-8xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500"
                          style={{ color: skill.color }}
                        >
                          {skill.icon}
                        </div>
                      </div>

                      <h3 className="text-2xl font-black mb-2">{skill.name}</h3>

                      {/* Circular Progress */}
                      <div className="relative w-24 h-24 mt-4">
                        <svg className="w-full h-full transform -rotate-90">
                          <circle
                            cx="48"
                            cy="48"
                            r="40"
                            stroke="currentColor"
                            strokeWidth="8"
                            fill="transparent"
                            className="text-base-content/10"
                          />
                          <circle
                            cx="48"
                            cy="48"
                            r="40"
                            stroke={skill.color}
                            strokeWidth="8"
                            fill="transparent"
                            strokeDasharray={`${2 * Math.PI * 40}`}
                            strokeDashoffset={`${
                              2 * Math.PI * 40 * (1 - skill.level / 100)
                            }`}
                            strokeLinecap="round"
                            className="transition-all duration-1000"
                          />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span
                            className="text-xl font-black"
                            style={{ color: skill.color }}
                          >
                            {skill.level}%
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Category Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {["Frontend", "Backend", "Tools"].map((category, index) => {
            const categorySkills = allSkills.filter(
              (s) => s.category === category
            );
            const avgLevel = Math.round(
              categorySkills.reduce((acc, s) => acc + s.level, 0) /
                categorySkills.length
            );

            return (
              <div key={index} className="relative group">
                <div
                  className={`absolute -inset-1 bg-gradient-to-r ${getCategoryGradient(
                    category
                  )} rounded-2xl blur-md opacity-20 group-hover:opacity-40 transition-opacity duration-500`}
                ></div>

                <div className="relative backdrop-blur-xl bg-base-100/50 border border-white/10 rounded-2xl p-6 text-center">
                  <div className="text-4xl mb-3">
                    {getCategoryIcon(category)}
                  </div>
                  <h4
                    className={`text-xl font-bold bg-gradient-to-r ${getCategoryGradient(
                      category
                    )} bg-clip-text text-transparent mb-2`}
                  >
                    {category}
                  </h4>
                  <p className="text-base-content/60 text-sm mb-3">
                    {categorySkills.length} Technologies
                  </p>
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-20 h-2 bg-base-content/10 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${getCategoryGradient(
                          category
                        )} rounded-full`}
                        style={{ width: `${avgLevel}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-bold">{avgLevel}%</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Custom Swiper Styles */}
      <style>{`
        .skills-swiper {
          padding: 50px 0 70px 0 !important;
        }
        .skills-swiper .swiper-slide {
          transition: all 0.3s ease;
        }
        .skills-swiper .swiper-slide-active {
          transform: scale(1.05);
        }
        .skills-swiper .swiper-pagination {
          bottom: 10px !important;
        }
        .skills-swiper .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: linear-gradient(135deg, #06b6d4, #a855f7);
          opacity: 0.5;
        }
        .skills-swiper .swiper-pagination-bullet-active {
          opacity: 1;
          width: 30px;
          border-radius: 6px;
        }
        .skills-swiper .swiper-button-next,
        .skills-swiper .swiper-button-prev {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .skills-swiper .swiper-button-next:after,
        .skills-swiper .swiper-button-prev:after {
          font-size: 18px;
          font-weight: bold;
        }
        .skills-swiper .swiper-button-next:hover,
        .skills-swiper .swiper-button-prev:hover {
          background: rgba(6, 182, 212, 0.2);
          border-color: rgba(6, 182, 212, 0.3);
        }
      `}</style>
    </section>
  );
};

export default Skills;
