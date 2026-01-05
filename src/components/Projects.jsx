import { Link } from "react-router-dom";
import {
  FaExternalLinkAlt,
  FaGithub,
  FaEye,
  FaArrowRight,
} from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";

// Import project images from assets
import carDoctorImg from "../assets/car-doctor.jpg";
import movieMasterImg from "../assets/movie-master.jpg";
import clubSphereImg from "../assets/club-sphere.jpg";

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "Car Doctor",
      image: carDoctorImg,
      shortDesc:
        "A complete automotive service booking platform with appointment scheduling, service catalog, and user dashboard.",
      technologies: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
      liveLink: "https://mahmudanasrin078.github.io/card-doctor/",
      githubLink: "https://github.com/mahmudanasrin078/card-doctor",
      color: "from-red-500 to-orange-500",
    },
    {
      id: 2,
      name: "Movie Master",
      image: movieMasterImg,
      shortDesc:
        "A movie discovery platform with trending films, detailed info, ratings, and personalized watchlist features.",
      technologies: ["React", "TMDB API", "Tailwind CSS", "Firebase"],
      liveLink: "https://assignment-10-movie-master.web.app/",
      githubLink: "https://github.com/mahmudanasrin078/Movie-Master-Project",
      color: "from-purple-500 to-indigo-500",
    },
    {
      id: 3,
      name: "Club Sphere",
      image: clubSphereImg,
      shortDesc:
        "A community club management system with event organization, member profiles, and activity tracking.",
      technologies: ["React", "Firebase", "Tailwind CSS", "DaisyUI"],
      liveLink: "https://club-sphere-client.web.app/",
      githubLink: "https://github.com/mahmudanasrin078/club-sphere-client1",
      color: "from-emerald-500 to-teal-500",
    },
  ];

  return (
    <section
      id="projects"
      className="py-28 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, rgba(168, 85, 247, 0.03) 0%, rgba(236, 72, 153, 0.08) 50%, rgba(99, 102, 241, 0.03) 100%)",
      }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-[10%] w-80 h-80 bg-violet-500/10 rounded-full blur-[100px] floating"></div>
        <div
          className="absolute bottom-20 right-[10%] w-96 h-96 bg-pink-500/10 rounded-full blur-[120px] floating"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-violet-500/10 via-purple-500/20 to-violet-500/10 rounded-full mb-6 backdrop-blur-xl border border-violet-500/20">
            <HiSparkles className="text-2xl text-violet-400 animate-pulse" />
            <span className="text-violet-400 font-bold tracking-widest uppercase text-sm">
              My Work
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4">
            Featured{" "}
            <span className="bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-base-content/60 max-w-xl mx-auto text-lg">
            Showcasing my recent work and creative solutions
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div key={project.id} className="group relative">
              {/* Card Glow */}
              <div
                className={`absolute -inset-1 bg-gradient-to-r ${project.color} rounded-[2rem] blur-lg opacity-25 group-hover:opacity-50 transition-opacity duration-500`}
              ></div>

              <div className="relative bg-base-100 rounded-[1.75rem] overflow-hidden border border-white/10 h-full flex flex-col">
                {/* Project Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-base-100 via-transparent to-transparent"></div>

                  {/* Overlay Actions */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/40 backdrop-blur-sm">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-gray-900 hover:scale-110 transition-transform shadow-lg"
                    >
                      <FaExternalLinkAlt />
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-gray-900 hover:scale-110 transition-transform shadow-lg"
                    >
                      <FaGithub />
                    </a>
                  </div>

                  {/* Project Number Badge */}
                  <div className="absolute top-4 right-4">
                    <span
                      className={`w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-r ${project.color} text-white font-black shadow-lg`}
                    >
                      0{index + 1}
                    </span>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-violet-500 transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-base-content/60 text-sm mb-5 line-clamp-2 flex-1">
                    {project.shortDesc}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-base-200 text-base-content/70"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-3 py-1 text-xs font-medium rounded-full bg-base-200 text-base-content/70">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* View Details Button */}
                  <Link
                    to={`/project/${project.id}`}
                    className={`inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r ${project.color} text-white font-semibold text-sm hover:shadow-lg transition-all duration-300 group/btn`}
                  >
                    View Details
                    <FaArrowRight className="transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
