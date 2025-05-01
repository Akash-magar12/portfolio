import React, { useState, useEffect } from "react";
import {
  Terminal,
  Mail,
  Linkedin,
  Twitter,
  ExternalLink,
  Send,
  CheckCircle,
  AlertCircle,
  Loader,
  Github,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [blinkVisible, setBlinkVisible] = useState(true);
  const [submitStatus, setSubmitStatus] = useState(null); // null, "loading", "success", "error"
  const [terminalText, setTerminalText] = useState([
    { text: "Initializing contact protocols...", color: "text-gray-400" },
    { text: "Connection established!", color: "text-green-400" },
  ]);

  // Setup blinking cursor effect
  useEffect(() => {
    const interval = setInterval(() => {
      setBlinkVisible((prev) => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitStatus("loading");
    setTerminalText([
      ...terminalText,
      {
        text: `Processing request from ${formData.name}...`,
        color: "text-yellow-400",
      },
    ]);

    // Simulating form submission with a timeout
    setTimeout(() => {
      setSubmitStatus("success");
      setTerminalText([
        ...terminalText,
        {
          text: `Processing request from ${formData.name}...`,
          color: "text-yellow-400",
        },
        { text: "Message received successfully!", color: "text-green-400" },
      ]);
      // Reset form after successful submission
      setFormData({ name: "", email: "", message: "" });

      // Reset status after a delay
      setTimeout(() => {
        setSubmitStatus(null);
      }, 3000);
    }, 1500);
  };

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github size={18} />,
      url: "https://github.com/yourusername",
      color: "hover:text-gray-300",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin size={18} />,
      url: "https://linkedin.com/in/yourusername",
      color: "hover:text-blue-400",
    },
    {
      name: "Twitter",
      icon: <Twitter size={18} />,
      url: "https://twitter.com/yourusername",
      color: "hover:text-blue-500",
    },
    {
      name: "Email",
      icon: <Mail size={18} />,
      url: "mailto:your.email@example.com",
      color: "hover:text-yellow-400",
    },
  ];

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center bg-black px-4 py-16 relative"
    >
      {/* Subtle glow elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl opacity-5"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-blue-500 rounded-full filter blur-3xl opacity-5"></div>

      {/* Main content */}
      <div className="max-w-6xl w-full text-left text-white font-mono z-10 bg-black rounded-xl border border-gray-800 shadow-xl p-6 md:p-8">
        {/* Terminal header */}
        <div className="flex items-center justify-between pb-4 border-b border-gray-700/50 mb-6">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="text-yellow-400 text-sm md:text-base">// Contact</div>
          <div className="text-gray-500 text-xs">akash@dev/contact ~</div>
        </div>

        {/* Contact content */}
        <div className="space-y-6">
          <div className="text-xl sm:text-2xl text-green-400 font-bold">
            const <span className="text-white">contactMe</span> = await{" "}
            <span className="text-yellow-300">
              require('./get-in-touch.js')
            </span>
            ;
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact form */}
            <div className="bg-black border border-gray-800 rounded-lg p-6">
              <div className="mb-4 text-lg text-emerald-400">
                <span className="text-gray-400">function</span>{" "}
                <span className="text-blue-400">sendMessage</span>
                <span className="text-white">()</span>{" "}
                <span className="text-gray-400">{"{}"}</span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-400 mb-1 text-sm"
                  >
                    NAME:
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-black border border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 text-white"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-400 mb-1 text-sm"
                  >
                    EMAIL:
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-black border border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 text-white"
                    placeholder="johndoe@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-gray-400 mb-1 text-sm"
                  >
                    MESSAGE:
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full bg-black border border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 text-white resize-none"
                    placeholder="Your message here..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={submitStatus === "loading"}
                  className={`flex items-center justify-center w-full py-2 px-4 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white font-medium rounded-md transition-all duration-300 ${
                    submitStatus === "loading" ? "opacity-70" : ""
                  }`}
                >
                  {submitStatus === "loading" ? (
                    <>
                      <Loader size={18} className="mr-2 animate-spin" />
                      Processing...
                    </>
                  ) : submitStatus === "success" ? (
                    <>
                      <CheckCircle size={18} className="mr-2" />
                      Sent!
                    </>
                  ) : (
                    <>
                      <Send size={18} className="mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Terminal output and social links */}
            <div className="space-y-6">
              {/* Terminal output */}
              <div className="bg-black p-4 rounded-md border border-gray-800 h-60 overflow-y-auto">
                <div className="flex items-center text-gray-400 mb-3">
                  <Terminal size={16} className="mr-2" />
                  <span className="text-green-400">akash@dev</span>
                  <span>:</span>
                  <span className="text-blue-400">~/contact</span>
                  <span>$ </span>
                  <span className="ml-1">node connect.js</span>
                </div>
                <div className="space-y-2">
                  {terminalText.map((line, index) => (
                    <div key={index} className={line.color}>
                      {line.text}
                    </div>
                  ))}
                  <div className="text-green-400 flex">
                    <span className="mr-2">$</span>
                    <span className="text-white">
                      {submitStatus === "loading" ? "awaiting response" : "_"}
                      <span
                        className={`ml-1 ${
                          blinkVisible ? "opacity-100" : "opacity-0"
                        } transition-opacity`}
                      >
                        |
                      </span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div className="bg-black border border-gray-800 rounded-lg p-6">
                <div className="mb-4 text-lg text-emerald-400">
                  <span className="text-gray-400">const</span>{" "}
                  <span className="text-blue-400">socialConnections</span>{" "}
                  <span className="text-white">= [</span>
                  <span className="text-yellow-300">...</span>
                  <span className="text-white">];</span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center p-3 bg-black border border-gray-700 rounded-md hover:bg-gray-800 transition-all duration-300 ${link.color}`}
                    >
                      <span className="mr-3">{link.icon}</span>
                      <span>{link.name}</span>
                      <ExternalLink size={14} className="ml-auto opacity-70" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Response status */}
          {submitStatus === "success" && (
            <div className="flex items-center p-4 bg-green-900/20 border border-green-800 rounded-md text-green-400">
              <CheckCircle size={20} className="mr-2" />
              <span>Message sent successfully! I'll get back to you soon.</span>
            </div>
          )}
          {submitStatus === "error" && (
            <div className="flex items-center p-4 bg-red-900/20 border border-red-800 rounded-md text-red-400">
              <AlertCircle size={20} className="mr-2" />
              <span>
                Something went wrong. Please try again later or contact me
                directly via email.
              </span>
            </div>
          )}

          {/* Footer text */}
          <div className="text-gray-500 text-sm flex items-center mt-6">
            <span className="text-green-400 mr-2">// </span>
            <span>
              Thank you for reaching out! I typically respond within 24-48
              hours.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
