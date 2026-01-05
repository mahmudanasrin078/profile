import { useParams, Link } from "react-router-dom";
import {
  FaExternalLinkAlt,
  FaGithub,
  FaArrowLeft,
  FaCheckCircle,
  FaLightbulb,
  FaRocket,
  FaCogs,
  FaStar,
  FaCode,
} from "react-icons/fa";
import { HiSparkles, HiChip, HiLightningBolt } from "react-icons/hi";

// Import project images
import carDoctorImg from "../assets/car-doctor.jpg";
import movieMasterImg from "../assets/movie-master.jpg";
import clubSphereImg from "../assets/club-sphere.jpg";

const ProjectDetails = () => {
  const { id } = useParams();

  // Project data with 3 new projects
  const projectsData = {
    1: {
      id: 1,
      name: "Car Doctor",
      tagline: "Your Trusted Automotive Service Partner",
      image: carDoctorImg,
      color: "from-red-500 to-orange-500",
      bgAccent: "bg-red-500",
      description: `Car Doctor is a comprehensive automotive service booking platform designed to streamline 
      the car maintenance experience. The platform connects car owners with professional mechanics and 
      service centers, making it easy to schedule appointments, track service history, and manage vehicle maintenance.
      
      Built with a modern tech stack, Car Doctor features a beautiful, intuitive interface that allows users 
      to browse available services, view pricing, book appointments, and receive real-time updates on their 
      vehicle's service status. The admin dashboard provides service centers with powerful tools to manage 
      bookings, update service catalogs, and communicate with customers.`,
      technologies: [
        "React.js",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT Auth",
        "Firebase",
      ],
      liveLink: "https://mahmudanasrin078.github.io/card-doctor/",
      githubLink: "https://github.com/mahmudanasrin078/card-doctor",
      challenges: [
        "Implementing a robust appointment scheduling system with conflict prevention",
        "Building a real-time notification system for service updates",
        "Creating an intuitive service catalog with dynamic pricing",
        "Designing a responsive UI that works seamlessly on all devices",
      ],
      futureImprovements: [
        "Add real-time GPS tracking for mobile mechanics",
        "Implement AI-powered maintenance prediction",
        "Integrate payment gateway for online transactions",
        "Add customer loyalty rewards program",
      ],
      features: [
        "Service catalog with detailed descriptions",
        "Online appointment booking system",
        "User dashboard with service history",
        "Admin panel for service management",
        "JWT-based secure authentication",
        "Responsive mobile-friendly design",
      ],
      highlights: [
        { icon: "🚗", label: "50+ Services", desc: "Comprehensive catalog" },
        { icon: "⚡", label: "Fast Booking", desc: "3-click scheduling" },
        { icon: "🔒", label: "Secure", desc: "JWT Authentication" },
      ],
    },
    2: {
      id: 2,
      name: "Movie Master",
      tagline: "Discover Your Next Favorite Film",
      image: movieMasterImg,
      color: "from-purple-500 to-indigo-500",
      bgAccent: "bg-purple-500",
      description: `Movie Master is a feature-rich movie discovery platform that helps film enthusiasts 
      explore, discover, and track their favorite movies. Powered by the TMDB API, the application 
      provides access to thousands of movies with detailed information, ratings, and recommendations.
      
      Users can browse trending movies, search for specific titles, view detailed movie information 
      including cast, crew, and reviews. The personalized watchlist feature allows users to save movies 
      they want to watch, while the rating system helps them keep track of movies they've seen. The 
      beautiful, cinema-inspired UI creates an immersive browsing experience.`,
      technologies: [
        "React.js",
        "TMDB API",
        "Tailwind CSS",
        "Firebase Auth",
        "React Router",
        "Context API",
        "Axios",
      ],
      liveLink: "https://assignment-10-movie-master.web.app/",
      githubLink: "https://github.com/mahmudanasrin078/Movie-Master-Project",
      challenges: [
        "Optimizing API calls and implementing efficient caching",
        "Building a smooth infinite scroll for movie listings",
        "Creating a responsive image gallery with lazy loading",
        "Implementing user authentication with watchlist persistence",
      ],
      futureImprovements: [
        "Add movie recommendation engine based on user preferences",
        "Implement social features for sharing and discussing movies",
        "Add trailer playback functionality",
        "Create personalized movie suggestions using AI",
      ],
      features: [
        "Browse trending and popular movies",
        "Advanced search with filters",
        "Detailed movie information pages",
        "Personal watchlist management",
        "User ratings and reviews",
        "Responsive cinema-style design",
      ],
      highlights: [
        { icon: "🎬", label: "10K+ Movies", desc: "Vast collection" },
        { icon: "⭐", label: "Ratings", desc: "User reviews" },
        { icon: "📱", label: "Responsive", desc: "All devices" },
      ],
    },
    3: {
      id: 3,
      name: "Club Sphere",
      tagline: "Connect, Organize, Thrive Together",
      image: clubSphereImg,
      color: "from-emerald-500 to-teal-500",
      bgAccent: "bg-emerald-500",
      description: `Club Sphere is a modern community club management system designed to help organizations 
      manage their members, events, and activities efficiently. The platform provides tools for club 
      administrators to organize events, communicate with members, and track participation.
      
      Members can easily browse upcoming events, register for activities, manage their profiles, and 
      connect with other community members. The dashboard provides insights into club activities, 
      member engagement, and event statistics. With its intuitive interface and powerful features, 
      Club Sphere makes community management effortless.`,
      technologies: [
        "React.js",
        "Firebase",
        "Tailwind CSS",
        "DaisyUI",
        "React Router",
        "Context API",
        "Firestore",
      ],
      liveLink: "https://club-sphere-client.web.app/",
      githubLink: "https://github.com/mahmudanasrin078/club-sphere-client1",
      challenges: [
        "Designing an efficient event registration and management system",
        "Implementing real-time updates for event changes",
        "Creating role-based access control for admins and members",
        "Building a scalable notification system",
      ],
      futureImprovements: [
        "Add group chat functionality for club members",
        "Implement event calendar with iCal integration",
        "Add payment integration for paid events",
        "Create mobile app for better accessibility",
      ],
      features: [
        "Event creation and management",
        "Member registration and profiles",
        "Activity tracking and analytics",
        "Role-based access control",
        "Real-time notifications",
        "Community discussion boards",
      ],
      highlights: [
        { icon: "👥", label: "Community", desc: "Member management" },
        { icon: "📅", label: "Events", desc: "Easy scheduling" },
        { icon: "📊", label: "Analytics", desc: "Track engagement" },
      ],
    },
  };

  const project = projectsData[id];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-base-100 pt-16">
        <div className="text-center">
          <div className="text-8xl mb-6">🔍</div>
          <h1 className="text-4xl font-black mb-4">Project Not Found</h1>
          <p className="text-base-content/60 mb-8 max-w-md">
            The project you're looking for doesn't exist or has been removed.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-500 to-pink-500 text-white font-bold rounded-xl hover:shadow-lg transition-all"
          >
            <FaArrowLeft /> Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-100">
      {/* Hero Section - Full Width Image with Overlay */}
      <div className="relative h-[70vh] overflow-hidden">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover"
        />

        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-base-100 via-base-100/60 to-transparent"></div>
        <div
          className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-20`}
        ></div>

        {/* Floating Elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
          <div
            className={`absolute top-20 right-[20%] w-64 h-64 ${project.bgAccent}/20 rounded-full blur-[100px]`}
          ></div>
          <div
            className={`absolute bottom-40 left-[10%] w-48 h-48 ${project.bgAccent}/30 rounded-full blur-[80px]`}
          ></div>
        </div>

        {/* Back Button */}
        <Link
          to="/"
          className="absolute top-24 left-6 md:left-12 z-20 px-5 py-3 bg-white/10 backdrop-blur-xl rounded-2xl text-white hover:bg-white/20 transition-all flex items-center gap-2 border border-white/10"
        >
          <FaArrowLeft /> Back
        </Link>

        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 lg:p-16">
          <div className="container mx-auto max-w-6xl">
            {/* Tagline Badge */}
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${project.color} text-white text-sm font-semibold mb-4`}
            >
              <HiSparkles />
              {project.tagline}
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
              {project.name}
            </h1>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-4 mb-6">
              {project.highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <p className="text-white font-bold text-sm">{item.label}</p>
                    <p className="text-white/60 text-xs">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r ${project.color} text-white font-bold rounded-2xl hover:shadow-2xl hover:scale-105 transition-all duration-300`}
              >
                <FaRocket /> Live Demo
              </a>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-2xl hover:bg-white/20 transition-all border border-white/20"
              >
                <FaGithub /> Source Code
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto max-w-6xl px-4 py-16">
        {/* Tech Stack Horizontal Scroll */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span
              className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${project.color} flex items-center justify-center text-white text-xl`}
            >
              <HiChip />
            </span>
            <h2 className="text-2xl font-black">Tech Stack</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-5 py-3 bg-base-200 rounded-xl font-semibold hover:bg-base-300 transition-colors cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Content Grid - Unique Bento Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Project Overview - Large Card */}
          <div className="lg:col-span-8">
            <div className="relative group h-full">
              <div
                className={`absolute -inset-1 bg-gradient-to-r ${project.color} rounded-[2rem] blur-lg opacity-20 group-hover:opacity-30 transition-opacity`}
              ></div>
              <div className="relative h-full p-8 bg-base-200/50 backdrop-blur-sm rounded-[1.75rem] border border-white/10">
                <div className="flex items-center gap-3 mb-6">
                  <span
                    className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${project.color} flex items-center justify-center text-white text-xl`}
                  >
                    📋
                  </span>
                  <h2 className="text-2xl font-black">Project Overview</h2>
                </div>
                <p className="text-base-content/70 whitespace-pre-line leading-relaxed text-lg">
                  {project.description}
                </p>
              </div>
            </div>
          </div>

          {/* Features Card */}
          <div className="lg:col-span-4">
            <div className="relative group h-full">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-[2rem] blur-lg opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative h-full p-6 bg-base-200/50 backdrop-blur-sm rounded-[1.75rem] border border-white/10">
                <div className="flex items-center gap-3 mb-5">
                  <span className="w-10 h-10 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center text-white">
                    <FaStar />
                  </span>
                  <h3 className="text-xl font-bold">Key Features</h3>
                </div>
                <div className="space-y-3">
                  {project.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <FaCheckCircle className="text-emerald-500 mt-1 flex-shrink-0" />
                      <span className="text-sm text-base-content/70">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Challenges Card */}
          <div className="lg:col-span-6">
            <div className="relative group h-full">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-[2rem] blur-lg opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative h-full p-6 bg-base-200/50 backdrop-blur-sm rounded-[1.75rem] border border-white/10">
                <div className="flex items-center gap-3 mb-5">
                  <span className="w-10 h-10 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center text-white">
                    <HiLightningBolt />
                  </span>
                  <h3 className="text-xl font-bold">Challenges Faced</h3>
                </div>
                <div className="space-y-3">
                  {project.challenges.map((challenge, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-3 bg-base-100/50 rounded-xl"
                    >
                      <span className="w-7 h-7 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                        {index + 1}
                      </span>
                      <span className="text-sm text-base-content/70">
                        {challenge}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Future Improvements Card */}
          <div className="lg:col-span-6">
            <div className="relative group h-full">
              <div className="absolute -inset-1 bg-gradient-to-r from-violet-500 to-purple-500 rounded-[2rem] blur-lg opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative h-full p-6 bg-base-200/50 backdrop-blur-sm rounded-[1.75rem] border border-white/10">
                <div className="flex items-center gap-3 mb-5">
                  <span className="w-10 h-10 rounded-xl bg-gradient-to-r from-violet-500 to-purple-500 flex items-center justify-center text-white">
                    <FaLightbulb />
                  </span>
                  <h3 className="text-xl font-bold">Future Improvements</h3>
                </div>
                <div className="space-y-3">
                  {project.futureImprovements.map((improvement, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-3 bg-base-100/50 rounded-xl"
                    >
                      <span className="text-violet-500 mt-0.5">→</span>
                      <span className="text-sm text-base-content/70">
                        {improvement}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-16">
          <div className={`relative rounded-[2rem] overflow-hidden`}>
            <div
              className={`absolute inset-0 bg-gradient-to-r ${project.color}`}
            ></div>
            <div className="relative p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-black text-white mb-2">
                  Like what you see?
                </h3>
                <p className="text-white/80">
                  Check out the live demo or explore the source code!
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 font-bold rounded-2xl hover:scale-105 transition-all shadow-xl"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-bold rounded-2xl hover:bg-white/30 transition-all border border-white/20"
                >
                  <FaCode /> View Code
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation to Other Projects */}
        <div className="mt-12 flex justify-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-base-content/60 hover:text-violet-500 transition-colors font-semibold"
          >
            <FaArrowLeft /> Back to All Projects
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
