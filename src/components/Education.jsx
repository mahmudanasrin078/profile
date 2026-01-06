import { useState } from "react";
import {
  FaGraduationCap,
  FaUniversity,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaBookReader,
  FaAward,
} from "react-icons/fa";
import { HiAcademicCap } from "react-icons/hi";

const Education = () => {
  const [activeCard, setActiveCard] = useState(0);

  const educationData = [
    {
      id: 1,
      degree: "BBA",
      field: "Human Resource Management",
      institution: "State University of Bangladesh",
      location: "Dhaka, Bangladesh",
      // duration: "2020 - Present",
      status: "Completed",
      description:
        "Pursuing Bachelor of Business Administration with specialization in Human Resource Management. Learning organizational behavior, talent acquisition, employee relations, and strategic HR management.",
      highlights: ["HR Management", "Business Strategy", "Leadership"],
      gradient: "from-violet-500 via-purple-500 to-indigo-500",
      bgGlow: "bg-violet-500",
      icon: HiAcademicCap,
    },
    {
      id: 2,
      degree: "HSC",
      field: "Higher Secondary Certificate",
      institution: "Banchbaria Degree College",
      location: "Bangladesh",
      // duration: "2017 - 2019",
      status: "Completed",
      description:
        "Successfully completed Higher Secondary Certificate education with focus on core academic subjects and developed strong foundational knowledge.",
      highlights: [
        "Academic Excellence",
        "Core Subjects",
        "Foundation Building",
      ],
      gradient: "from-emerald-500 via-teal-500 to-cyan-500",
      bgGlow: "bg-emerald-500",
      icon: FaGraduationCap,
    },
  ];

  return (
    <section
      id="education"
      className="py-24 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, rgba(99, 102, 241, 0.03) 0%, rgba(168, 85, 247, 0.08) 50%, rgba(236, 72, 153, 0.03) 100%)",
      }}
    >
      {/* Animated Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-[10%] w-72 h-72 bg-purple-500/20 rounded-full blur-[100px] floating"></div>
        <div
          className="absolute bottom-20 right-[10%] w-96 h-96 bg-indigo-500/15 rounded-full blur-[120px] floating"
          style={{ animationDelay: "2s" }}
        ></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-violet-500/10 to-pink-500/10 rounded-full blur-[150px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header with unique styling */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-violet-500/10 via-purple-500/20 to-violet-500/10 rounded-full mb-6 backdrop-blur-xl border border-violet-500/20 shadow-lg shadow-violet-500/10">
            <FaBookReader className="text-2xl text-violet-400 animate-pulse" />
            <span className="text-violet-400 font-bold tracking-widest uppercase text-sm">
              Academic Journey
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-violet-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          <p className="text-base-content/60 max-w-xl mx-auto text-lg">
            Building expertise through continuous learning
          </p>
        </div>

        {/* Interactive Card Tabs */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {educationData.map((edu, index) => (
            <button
              key={edu.id}
              onClick={() => setActiveCard(index)}
              className={`group relative px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-500 transform hover:scale-105 overflow-hidden ${
                activeCard === index
                  ? "text-white shadow-2xl scale-105"
                  : "bg-base-200/50 text-base-content/70 hover:bg-base-200 border border-base-content/10"
              }`}
            >
              {activeCard === index && (
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${edu.gradient}`}
                ></div>
              )}
              <span className="relative flex items-center gap-3">
                <edu.icon className="text-2xl" />
                {edu.degree}
              </span>
            </button>
          ))}
        </div>

        {/* Main Education Display */}
        <div className="max-w-5xl mx-auto relative min-h-[400px]">
          {educationData.map((edu, index) => (
            <div
              key={edu.id}
              className={`transition-all duration-700 ease-out ${
                activeCard === index
                  ? "opacity-100 transform translate-y-0 scale-100"
                  : "opacity-0 absolute inset-0 transform translate-y-8 scale-95 pointer-events-none"
              }`}
            >
              {/* Card Container */}
              <div className="relative group">
                {/* Glow effect */}
                <div
                  className={`absolute -inset-1 ${edu.bgGlow}/20 blur-xl rounded-[2.5rem] opacity-60 group-hover:opacity-80 transition-opacity duration-500`}
                ></div>

                <div className="relative backdrop-blur-2xl bg-base-100/60 border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl">
                  {/* Top gradient bar */}
                  <div className={`h-2 bg-gradient-to-r ${edu.gradient}`}></div>

                  <div className="p-8 md:p-12">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                      {/* Left Column - Icon & Status */}
                      <div className="lg:col-span-3 flex flex-col items-center text-center">
                        <div className={`relative w-28 h-28 mb-6`}>
                          {/* Rotating ring */}
                          <div
                            className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${edu.gradient} animate-spin-slow opacity-50`}
                            style={{ animationDuration: "8s" }}
                          ></div>
                          <div
                            className={`absolute inset-1 rounded-xl bg-gradient-to-br ${edu.gradient} flex items-center justify-center shadow-2xl transform rotate-6 group-hover:rotate-0 transition-transform duration-500`}
                          >
                            <edu.icon className="text-5xl text-white" />
                          </div>
                        </div>

                        {/* Status Badge */}
                        <div
                          className={`px-5 py-2 rounded-full font-bold text-sm ${
                            edu.status === "Ongoing"
                              ? "bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-400 border border-green-500/30"
                              : "bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-400 border border-blue-500/30"
                          }`}
                        >
                          <span className="flex items-center gap-2">
                            <span
                              className={`w-2 h-2 rounded-full ${
                                edu.status === "Ongoing"
                                  ? "bg-green-400 animate-pulse"
                                  : "bg-blue-400"
                              }`}
                            ></span>
                            {edu.status}
                          </span>
                        </div>
                      </div>

                      {/* Middle Column - Main Content */}
                      <div className="lg:col-span-6">
                        <div className="mb-6">
                          <h3
                            className={`text-3xl md:text-4xl font-black mb-3 bg-gradient-to-r ${edu.gradient} bg-clip-text text-transparent leading-tight`}
                          >
                            {edu.degree} in {edu.field}
                          </h3>
                          <div className="flex items-center gap-2 text-lg text-base-content/80">
                            <FaUniversity className="text-violet-500" />
                            <span className="font-semibold">
                              {edu.institution}
                            </span>
                          </div>
                        </div>

                        <p className="text-base-content/70 text-lg leading-relaxed mb-8">
                          {edu.description}
                        </p>

                        {/* Skill Highlights */}
                        <div className="flex flex-wrap gap-3">
                          {edu.highlights.map((highlight, i) => (
                            <span
                              key={i}
                              className={`px-5 py-2.5 rounded-xl font-semibold text-sm bg-gradient-to-r ${edu.gradient} text-white shadow-lg transform hover:scale-105 transition-transform duration-300`}
                            >
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Right Column - Meta Cards */}
                      <div className="lg:col-span-3 space-y-4">
                        <div className="p-5 rounded-2xl bg-gradient-to-br from-base-200/80 to-base-200/40 border border-white/5 backdrop-blur-sm">
                          <div className="flex items-center gap-3 text-base-content/60 mb-2">
                            <div
                              className={`w-10 h-10 rounded-xl bg-gradient-to-r ${edu.gradient} flex items-center justify-center`}
                            >
                              <FaCalendarAlt className="text-white" />
                            </div>
                            <span className="text-sm font-medium">
                              Duration
                            </span>
                          </div>
                          <p className="font-bold text-xl text-base-content">
                            {edu.duration}
                          </p>
                        </div>

                        <div className="p-5 rounded-2xl bg-gradient-to-br from-base-200/80 to-base-200/40 border border-white/5 backdrop-blur-sm">
                          <div className="flex items-center gap-3 text-base-content/60 mb-2">
                            <div
                              className={`w-10 h-10 rounded-xl bg-gradient-to-r ${edu.gradient} flex items-center justify-center`}
                            >
                              <FaMapMarkerAlt className="text-white" />
                            </div>
                            <span className="text-sm font-medium">
                              Location
                            </span>
                          </div>
                          <p className="font-bold text-xl text-base-content">
                            {edu.location}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="mt-10 flex justify-center">
          <div className="flex items-center gap-4 p-3 bg-base-200/50 rounded-full backdrop-blur-sm border border-white/10">
            {educationData.map((edu, index) => (
              <button
                key={index}
                onClick={() => setActiveCard(index)}
                className={`transition-all duration-500 rounded-full ${
                  activeCard === index
                    ? `w-10 h-4 bg-gradient-to-r ${edu.gradient}`
                    : "w-4 h-4 bg-base-content/20 hover:bg-base-content/40"
                }`}
                aria-label={`View ${edu.degree}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
