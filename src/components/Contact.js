"use client";
import React, { useState } from "react";

const Contact = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setLoading(true);
      // Simulate API call
      setTimeout(() => {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        setLoading(false);
        setTimeout(() => setSubmitted(false), 4000);
      }, 800);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const contactInfo = [
    {
      label: "Email",
      value: "belardeanthon@gmail.com",
      icon: "✉️",
      href: "mailto:belardeanthon@gmail.com"
    },
    {
      label: "Phone",
      value: "09959664263",
      icon: "📱",
      href: "tel:09959664263"
    },
    {
      label: "Facebook",
      value: "Anthon Belarde",
      icon: "f",
      href: "https://facebook.com/anthon.belarde"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Title */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold">
            Get In <span className="text-cyan-400">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mt-3 rounded-full"></div>
        </div>

        {/* Contact Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Left - Contact Info */}
          <div className="space-y-6">
            <p className="text-gray-300 text-lg mb-8">
              Have a question or want to work together? Feel free to reach out!
            </p>

            {contactInfo.map((contact, index) => (
              <a
                key={index}
                href={contact.href}
                target={contact.href.startsWith("http") ? "_blank" : undefined}
                rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex items-start gap-4 p-6 bg-slate-800/50 border border-slate-700 rounded-xl hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-400/10 transition-all duration-300"
              >
                {/* Icon circle */}
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:from-cyan-500/40 group-hover:to-blue-500/40 transition-all duration-300">
                  <span className="text-2xl">{contact.icon}</span>
                </div>

                {/* Info */}
                <div>
                  <p className="text-gray-400 text-sm font-medium uppercase tracking-wide">
                    {contact.label}
                  </p>
                  <p className="text-white text-lg font-semibold mt-1 group-hover:text-cyan-400 transition-colors">
                    {contact.value}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* Right - Contact Form */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8 hover:border-cyan-400/50 transition-all duration-300">
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>

            {submitted && (
              <div className="mb-6 p-4 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-lg flex items-center gap-2 animate-pulse">
                <span className="text-2xl">✓</span>
                <span className="font-semibold">Message sent successfully!</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Name Input */}
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-slate-700/50 border rounded-lg font-medium text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition-all duration-300 ${
                    errors.name ? "border-red-500/50" : "border-slate-600 hover:border-slate-500"
                  }`}
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="text-red-400 text-sm mt-2 font-medium">{errors.name}</p>
                )}
              </div>

              {/* Email Input */}
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-slate-700/50 border rounded-lg font-medium text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition-all duration-300 ${
                    errors.email ? "border-red-500/50" : "border-slate-600 hover:border-slate-500"
                  }`}
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p className="text-red-400 text-sm mt-2 font-medium">{errors.email}</p>
                )}
              </div>

              {/* Message Input */}
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className={`w-full px-4 py-3 bg-slate-700/50 border rounded-lg font-medium text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition-all duration-300 resize-none ${
                    errors.message ? "border-red-500/50" : "border-slate-600 hover:border-slate-500"
                  }`}
                  placeholder="Your message here..."
                ></textarea>
                {errors.message && (
                  <p className="text-red-400 text-sm mt-2 font-medium">{errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold py-3 rounded-lg hover:from-cyan-400 hover:to-blue-400 disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 active:scale-95"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
