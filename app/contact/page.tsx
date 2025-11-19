"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    // Create mailto link
    const subject = encodeURIComponent("Cycling Club Inquiry");
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoLink = `mailto:cyclingclub@gmail.com?subject=${subject}&body=${body}`;

    // Open email client
    window.location.href = mailtoLink;

    setStatus("sent");
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
      setStatus("");
    }, 2000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-zinc-50 dark:from-zinc-950 dark:to-black">
      {/* Header */}
      <header className="border-b border-zinc-200 bg-white/80 backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/80">
        <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
          <div className="flex items-center justify-between">
            <a
              href="/"
              className="text-2xl font-bold text-zinc-900 dark:text-white"
            >
              University Cycling Club
            </a>
            <nav className="flex gap-6">
              <a
                href="/"
                className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
              >
                Home
              </a>
              <a
                href="/photos"
                className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
              >
                Photos
              </a>
              <a
                href="/contact"
                className="text-sm font-medium text-blue-600 dark:text-blue-500"
              >
                Contact
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Contact Form */}
      <section className="mx-auto max-w-3xl px-6 py-24 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-5xl">
            Get in Touch
          </h1>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
            Have questions? Want to join the club? Send us a message!
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-16 space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-zinc-900 dark:text-white"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="mt-2 block w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-zinc-900 shadow-sm transition-colors focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-zinc-900 dark:text-white"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="mt-2 block w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-zinc-900 shadow-sm transition-colors focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-zinc-900 dark:text-white"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              value={formData.message}
              onChange={handleChange}
              className="mt-2 block w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-zinc-900 shadow-sm transition-colors focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full rounded-full bg-blue-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:bg-blue-700 hover:shadow-xl hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === "sending"
              ? "Sending..."
              : status === "sent"
              ? "Sent!"
              : "Send Message"}
          </button>
        </form>

        <div className="mt-12 text-center">
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Or email us directly at{" "}
            <a
              href="mailto:cyclingclub@gmail.com"
              className="font-medium text-blue-600 hover:text-blue-700 dark:text-blue-500 dark:hover:text-blue-400"
            >
              cyclingclub@gmail.com
            </a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="text-center text-sm text-zinc-600 dark:text-zinc-400">
            <p>&copy; 2024 University Cycling Club. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
