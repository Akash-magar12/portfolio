import { useState } from "react";
import { Mail, ExternalLink, Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import { BsGithub, BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import toast from "react-hot-toast";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

  const [loading, setLoading] = useState(false);

  const socialLinks = [
    { name: "GitHub", icon: <BsGithub size={18} />, url: "#" },
    { name: "LinkedIn", icon: <SiLinkedin size={18} />, url: "#" },
    { name: "Twitter", icon: <BsTwitter size={18} />, url: "#" },
    {
      name: "Email",
      icon: <Mail size={18} />,
      url: "mailto:your.email@example.com",
    },
  ];

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    if (!formState.name || !formState.email || !formState.message) {
      toast.error("Please fill all the fields.");
      return;
    }

    setLoading(true);

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: formState.name,
          email: formState.email,
          message: formState.message,
        },
        PUBLIC_KEY
      );

      toast.success("Message sent successfully!");
      setFormState({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Failed to send message:", error.text);
      toast.error("Failed to send message.");
    }

    setLoading(false);
  };

  return (
    <section className="min-h-screen flex items-center sm:pt-20 justify-center bg-black px-4 relative overflow-hidden">
      <div className="max-w-6xl w-full text-left text-white font-mono z-10 bg-black rounded-xl border border-gray-800 shadow-xl p-6 md:p-8">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 mt-20 sm:mt-0 border-b border-gray-700/50 mb-6">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <div className="hidden md:block text-yellow-400 text-sm md:text-base">
            // Contact
          </div>
          <div className="text-gray-500 text-xs">akash@dev/contact ~</div>
        </div>

        {/* Main Code-Like UI */}
        <div className="space-y-6">
          <div className="text-xl sm:text-2xl text-yellow-400 font-bold">
            const <span className="text-white">contactMe</span> = {"{"}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 ml-4">
            {/* Left: Contact Form */}
            <div className="space-y-4">
              <div className="text-base sm:text-lg">
                sendMessage: {"{"}
                <div className="ml-4 space-y-4">
                  {/* Name */}
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="block text-gray-400 text-sm"
                    >
                      name:
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      className="w-full bg-black border border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:border-emerald-500 text-white"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="block text-gray-400 text-sm"
                    >
                      email:
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      className="w-full bg-black border border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:border-emerald-500 text-white"
                      placeholder="john@example.com"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="block text-gray-400 text-sm"
                    >
                      message:
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full bg-black border border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:border-emerald-500 text-white resize-none"
                      placeholder="Your message here..."
                    />
                  </div>
                </div>
                {"}"},
              </div>

              <button
                onClick={handleSubmit}
                disabled={loading}
                className="flex items-center justify-center bg-emerald-500 hover:bg-emerald-600 text-white py-3 px-6 rounded-md font-medium transition-all duration-300"
              >
                <Send size={18} className="mr-2" />
                <span>{loading ? "Sending..." : "submitMessage()"}</span>
              </button>
            </div>

            {/* Right: Social + Info */}
            <div className="space-y-4">
              <div className="text-base sm:text-lg">
                socialConnections: [
                <div className="grid grid-cols-2 gap-4 mt-2 mb-2">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-3 bg-black border border-gray-700 rounded-md hover:border-emerald-500 hover:text-emerald-400 transition-all duration-300"
                    >
                      <span className="mr-3">{link.icon}</span>
                      <span>{link.name}</span>
                      <ExternalLink size={14} className="ml-auto opacity-70" />
                    </a>
                  ))}
                </div>
                ],
              </div>

              <div className="text-base sm:text-lg">
                responseTime:{" "}
                <span className="text-emerald-400">"24-48 hours"</span>,
              </div>

              <div className="text-base sm:text-lg">
                availableFor: [
                <div className="flex flex-wrap gap-2 mt-1 mb-1">
                  {["Freelance", "Full-time", "Collaboration"].map(
                    (item, index) => (
                      <span
                        key={index}
                        className="flex items-center gap-2 px-2 py-1 rounded-md text-sm border bg-white/10 text-white border-white/20"
                      >
                        {item}
                      </span>
                    )
                  )}
                </div>
                ],
              </div>

              <div className="text-base sm:text-lg mt-4">
                preferredContact:{" "}
                <span className="text-emerald-400">"Email"</span>,
              </div>
            </div>
          </div>

          <div className="text-xl sm:text-2xl text-yellow-400 font-bold">
            {"}"}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
