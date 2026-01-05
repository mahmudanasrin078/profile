import {
  FaCode,
  FaPalette,
  FaMusic,
  FaBookReader,
  FaQuoteLeft,
  FaCheckCircle,
  FaRocket,
} from "react-icons/fa";
import { HiSparkles, HiLocationMarker, HiAcademicCap } from "react-icons/hi";
import profileImg from "../assets/mahmuda-nasrin.jpg";

const About = () => {
  const interests = [
    { icon: <FaCode />, title: "Coding", color: "from-blue-500 to-cyan-500" },
    {
      icon: <FaPalette />,
      title: "Design",
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: <FaMusic />,
      title: "Music",
      color: "from-purple-500 to-violet-500",
    },
    {
      icon: <FaBookReader />,
      title: "Reading",
      color: "from-amber-500 to-orange-500",
    },
  ];

  const highlights = [
    "Passionate about clean code & modern UI",
    "Specialized in React.js ecosystem",
    "Love creating pixel-perfect designs",
    "Always eager to learn new technologies",
  ];

  const stats = [
    { value: "1+", label: "Years Coding", icon: "💻" },
    { value: "10+", label: "Projects", icon: "🚀" },
    { value: "5+", label: "Technologies", icon: "⚡" },
    { value: "100%", label: "Dedication", icon: "❤️" },
  ];

  return (
    <section id="about" className="py-28 relative overflow-hidden">
      {/* Unique Background */}
      <div className="absolute inset-0 bg-base-200">
        {/* Gradient Orbs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-violet-500/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-pink-500/10 to-transparent rounded-full blur-3xl"></div>

        {/* Decorative Shapes */}
        <div className="absolute top-20 left-20 w-20 h-20 border-2 border-violet-500/20 rounded-full"></div>
        <div className="absolute bottom-32 right-32 w-16 h-16 border-2 border-pink-500/20 rotate-45"></div>
        <div className="absolute top-1/2 right-20 w-4 h-4 bg-violet-500/30 rounded-full floating"></div>
        <div
          className="absolute bottom-1/3 left-32 w-3 h-3 bg-pink-500/30 rounded-full floating"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-violet-500/10 via-purple-500/20 to-violet-500/10 rounded-full mb-6 backdrop-blur-xl border border-violet-500/20">
            <HiSparkles className="text-2xl text-violet-400 animate-pulse" />
            <span className="text-violet-400 font-bold tracking-widest uppercase text-sm">
              About Me
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4">
            Get To Know{" "}
            <span className="bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Me Better
            </span>
          </h2>
          <p className="text-base-content/60 max-w-xl mx-auto text-lg">
            The story behind the developer and the passion that drives me
          </p>
        </div>

        {/* Main Content - Bento Grid Layout */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {/* Profile Card - Large */}
          <div className="lg:col-span-5 row-span-2">
            <div className="relative h-full group">
              <div className="absolute -inset-1 bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500 rounded-[2rem] blur-lg opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
              <div className="relative h-full bg-base-100 rounded-[1.75rem] overflow-hidden border border-white/10">
                {/* Image */}
                <div className="relative h-80 lg:h-[60%]">
                  <img
                    src={profileImg}
                    alt="Mahmuda Nasrin"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-base-100 via-transparent to-transparent"></div>

                  {/* Floating Badge */}
                  <div className="absolute top-4 right-4 px-4 py-2 bg-gradient-to-r from-violet-500 to-pink-500 rounded-full text-white text-sm font-bold shadow-lg">
                    Available for Work
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 -mt-10 relative">
                  <h3 className="text-2xl font-black mb-2">Mahmuda Nasrin</h3>
                  <p className="text-violet-500 font-semibold mb-4 flex items-center gap-2">
                    <FaRocket className="text-sm" />
                    Frontend Developer
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="flex items-center gap-2 text-sm text-base-content/60">
                      <HiLocationMarker className="text-pink-500" />
                      Dhaka, Bangladesh
                    </span>
                    <span className="flex items-center gap-2 text-sm text-base-content/60">
                      <HiAcademicCap className="text-violet-500" />
                      BBA Student
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Story Card */}
          <div className="lg:col-span-7">
            <div className="relative h-full group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-[2rem] blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
              <div className="relative h-full p-8 bg-base-100 rounded-[1.75rem] border border-white/10">
                <FaQuoteLeft className="text-4xl text-violet-500/20 mb-4" />
                <h4 className="text-xl font-bold mb-4">My Journey</h4>
                <p className="text-base-content/70 leading-relaxed mb-4">
                  Hello! I'm{" "}
                  <span className="font-bold text-violet-500">
                    Mahmuda Nasrin
                  </span>
                  , a passionate Frontend Developer from Dhaka, Bangladesh. My
                  journey into programming started with pure curiosity about how
                  websites work.
                </p>
                <p className="text-base-content/70 leading-relaxed">
                  Today, I specialize in building beautiful, responsive
                  interfaces using
                  <span className="font-semibold text-cyan-500"> React.js</span>
                  ,
                  <span className="font-semibold text-teal-500">
                    {" "}
                    Tailwind CSS
                  </span>
                  , and
                  <span className="font-semibold text-yellow-500">
                    {" "}
                    JavaScript
                  </span>
                  . I believe in writing clean code and creating seamless user
                  experiences.
                </p>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-violet-500 to-pink-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                <div className="relative p-5 bg-base-100 rounded-xl border border-white/10 text-center hover:scale-105 transition-transform duration-300">
                  <span className="text-2xl mb-2 block">{stat.icon}</span>
                  <p className="text-2xl font-black bg-gradient-to-r from-violet-500 to-pink-500 bg-clip-text text-transparent">
                    {stat.value}
                  </p>
                  <p className="text-xs text-base-content/60 mt-1">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Highlights Card */}
          <div className="lg:col-span-6">
            <div className="relative h-full group">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-[2rem] blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
              <div className="relative h-full p-8 bg-base-100 rounded-[1.75rem] border border-white/10">
                <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <span className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center text-white">
                    ✓
                  </span>
                  What Defines Me
                </h4>
                <div className="space-y-4">
                  {highlights.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 group/item"
                    >
                      <FaCheckCircle className="text-emerald-500 flex-shrink-0" />
                      <span className="text-base-content/70 group-hover/item:text-base-content transition-colors">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Interests Card */}
          <div className="lg:col-span-6">
            <div className="relative h-full group">
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-[2rem] blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
              <div className="relative h-full p-8 bg-base-100 rounded-[1.75rem] border border-white/10">
                <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <span className="w-10 h-10 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl flex items-center justify-center text-white">
                    ❤️
                  </span>
                  My Interests
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  {interests.map((interest, index) => (
                    <div
                      key={index}
                      className="group/interest flex items-center gap-3 p-3 rounded-xl hover:bg-base-200/50 transition-colors cursor-pointer"
                    >
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${interest.color} flex items-center justify-center text-white text-xl shadow-lg group-hover/interest:scale-110 transition-transform`}
                      >
                        {interest.icon}
                      </div>
                      <span className="font-semibold">{interest.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
