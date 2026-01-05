import {
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaUser,
  FaCommentAlt,
  FaHeadset,
  FaRegHandshake,
} from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Thank you for your message! I will get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: "Email",
      value: "mahmudanasrin078@gmail.com",
      link: "mailto:mahmudanasrin078@gmail.com",
      gradient: "from-rose-500 to-pink-600",
      bgLight: "bg-rose-500",
    },
    {
      icon: FaPhone,
      title: "Phone",
      value: "+880 1767-884539",
      link: "tel:+8801767884539",
      gradient: "from-blue-500 to-indigo-600",
      bgLight: "bg-blue-500",
    },
    {
      icon: FaWhatsapp,
      title: "WhatsApp",
      value: "+880 1531-716565",
      link: "https://wa.me/8801531716565",
      gradient: "from-green-500 to-emerald-600",
      bgLight: "bg-green-500",
    },
    {
      icon: FaMapMarkerAlt,
      title: "Location",
      value: "Dhaka, Bangladesh",
      link: "https://maps.google.com/?q=Dhaka,Bangladesh",
      gradient: "from-amber-500 to-orange-600",
      bgLight: "bg-amber-500",
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, rgba(236, 72, 153, 0.03) 0%, rgba(168, 85, 247, 0.08) 50%, rgba(99, 102, 241, 0.03) 100%)",
      }}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-indigo-500/5 via-purple-500/5 to-pink-500/5 rounded-full blur-[100px] rotate-12"></div>

        {/* Floating Icons */}
        <div
          className="absolute top-20 left-[15%] floating"
          style={{ animationDelay: "0s" }}
        >
          <FaEnvelope className="text-4xl text-pink-500/20" />
        </div>
        <div
          className="absolute top-40 right-[20%] floating"
          style={{ animationDelay: "1s" }}
        >
          <FaPhone className="text-3xl text-blue-500/20" />
        </div>
        <div
          className="absolute bottom-32 left-[25%] floating"
          style={{ animationDelay: "2s" }}
        >
          <FaWhatsapp className="text-5xl text-green-500/20" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-pink-500/10 via-purple-500/20 to-pink-500/10 rounded-full mb-6 backdrop-blur-xl border border-pink-500/20 shadow-lg shadow-pink-500/10">
            <FaHeadset className="text-2xl text-pink-400 animate-bounce" />
            <span className="text-pink-400 font-bold tracking-widest uppercase text-sm">
              Let's Connect
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4">
            Contact{" "}
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="text-base-content/60 max-w-xl mx-auto text-lg">
            Have a project in mind? Let's create something amazing together!
          </p>
        </div>

        {/* Main Content - Side by Side Cards */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Info Card */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-[2rem] blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>

              <div className="relative h-full backdrop-blur-2xl bg-base-100/60 border border-white/10 rounded-[2rem] overflow-hidden">
                {/* Header */}
                <div className="p-8 border-b border-white/10 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-indigo-500/10">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center shadow-xl">
                      <FaRegHandshake className="text-3xl text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black">Get In Touch</h3>
                      <p className="text-base-content/60">
                        I'd love to hear from you
                      </p>
                    </div>
                  </div>
                </div>

                {/* Contact Items */}
                <div className="p-8 space-y-4">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/item relative flex items-center gap-5 p-5 rounded-2xl bg-base-200/30 hover:bg-base-200/60 transition-all duration-500 border border-transparent hover:border-white/10 overflow-hidden"
                    >
                      {/* Hover glow effect */}
                      <div
                        className={`absolute inset-0 ${info.bgLight}/5 opacity-0 group-hover/item:opacity-100 transition-opacity duration-500`}
                      ></div>

                      {/* Icon */}
                      <div className="relative">
                        <div
                          className={`absolute inset-0 bg-gradient-to-r ${info.gradient} blur-lg opacity-40`}
                        ></div>
                        <div
                          className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${info.gradient} flex items-center justify-center text-white shadow-lg transform group-hover/item:scale-110 group-hover/item:rotate-6 transition-all duration-500`}
                        >
                          <info.icon className="text-xl" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 relative">
                        <span className="text-xs font-bold text-base-content/40 uppercase tracking-wider">
                          {info.title}
                        </span>
                        <p
                          className={`font-bold text-lg group-hover/item:bg-gradient-to-r group-hover/item:${info.gradient} group-hover/item:bg-clip-text group-hover/item:text-transparent transition-all duration-300`}
                        >
                          {info.value}
                        </p>
                      </div>

                      {/* Arrow */}
                      <div className="w-10 h-10 rounded-full bg-base-content/5 flex items-center justify-center group-hover/item:bg-gradient-to-r group-hover/item:from-pink-500 group-hover/item:to-purple-500 transition-all duration-500">
                        <svg
                          className="w-4 h-4 text-base-content/30 group-hover/item:text-white transform group-hover/item:translate-x-1 transition-all duration-300"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Footer decoration */}
                <div className="px-8 pb-8">
                  <div className="flex items-center gap-3 text-base-content/40 text-sm">
                    <HiSparkles className="text-pink-500" />
                    <span>Available for freelance projects</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form Card */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-[2rem] blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>

              <div className="relative h-full backdrop-blur-2xl bg-base-100/60 border border-white/10 rounded-[2rem] overflow-hidden">
                {/* Header */}
                <div className="p-8 border-b border-white/10 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-xl">
                      <FaPaperPlane className="text-2xl text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black">Send Message</h3>
                      <p className="text-base-content/60">
                        I'll respond within 24 hours
                      </p>
                    </div>
                  </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="p-8 space-y-5">
                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="relative group/input">
                      <div
                        className={`absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl blur-md opacity-0 ${
                          focusedField === "name"
                            ? "opacity-30"
                            : "group-hover/input:opacity-20"
                        } transition-opacity duration-300`}
                      ></div>
                      <div className="relative">
                        <FaUser
                          className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors duration-300 ${
                            focusedField === "name"
                              ? "text-pink-500"
                              : "text-base-content/30"
                          }`}
                        />
                        <input
                          type="text"
                          name="name"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={handleChange}
                          onFocus={() => setFocusedField("name")}
                          onBlur={() => setFocusedField(null)}
                          className="w-full pl-12 pr-4 py-4 bg-base-200/50 border-2 border-transparent rounded-xl focus:border-pink-500/50 focus:bg-base-100/50 outline-none transition-all duration-300"
                          required
                        />
                      </div>
                    </div>

                    <div className="relative group/input">
                      <div
                        className={`absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl blur-md opacity-0 ${
                          focusedField === "email"
                            ? "opacity-30"
                            : "group-hover/input:opacity-20"
                        } transition-opacity duration-300`}
                      ></div>
                      <div className="relative">
                        <FaEnvelope
                          className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors duration-300 ${
                            focusedField === "email"
                              ? "text-purple-500"
                              : "text-base-content/30"
                          }`}
                        />
                        <input
                          type="email"
                          name="email"
                          placeholder="Your Email"
                          value={formData.email}
                          onChange={handleChange}
                          onFocus={() => setFocusedField("email")}
                          onBlur={() => setFocusedField(null)}
                          className="w-full pl-12 pr-4 py-4 bg-base-200/50 border-2 border-transparent rounded-xl focus:border-purple-500/50 focus:bg-base-100/50 outline-none transition-all duration-300"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="relative group/input">
                    <div
                      className={`absolute inset-0 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-xl blur-md opacity-0 ${
                        focusedField === "subject"
                          ? "opacity-30"
                          : "group-hover/input:opacity-20"
                      } transition-opacity duration-300`}
                    ></div>
                    <div className="relative">
                      <FaCommentAlt
                        className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors duration-300 ${
                          focusedField === "subject"
                            ? "text-indigo-500"
                            : "text-base-content/30"
                        }`}
                      />
                      <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("subject")}
                        onBlur={() => setFocusedField(null)}
                        className="w-full pl-12 pr-4 py-4 bg-base-200/50 border-2 border-transparent rounded-xl focus:border-indigo-500/50 focus:bg-base-100/50 outline-none transition-all duration-300"
                        required
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="relative group/input">
                    <div
                      className={`absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-xl blur-md opacity-0 ${
                        focusedField === "message"
                          ? "opacity-30"
                          : "group-hover/input:opacity-20"
                      } transition-opacity duration-300`}
                    ></div>
                    <textarea
                      name="message"
                      placeholder="Your Message..."
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("message")}
                      onBlur={() => setFocusedField(null)}
                      className="relative w-full p-4 bg-base-200/50 border-2 border-transparent rounded-xl focus:border-purple-500/50 focus:bg-base-100/50 outline-none transition-all duration-300 h-32 resize-none"
                      required
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="relative w-full py-4 rounded-xl font-bold text-white overflow-hidden group/btn"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500">
                      <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
                    </div>
                    <span className="relative flex items-center justify-center gap-3">
                      <FaPaperPlane className="transform group-hover/btn:translate-x-2 group-hover/btn:-translate-y-1 transition-transform duration-300" />
                      Send Message
                    </span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
