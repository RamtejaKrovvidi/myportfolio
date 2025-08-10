import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // For now just log the data and show confirmation
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  }

  return (
    <section className="py-12 px-6" id="contact" data-aos="fade-up">
      <div className="bg-gray-800 p-6 rounded-lg text-center mb-8">
        <h3 className="text-2xl font-semibold mb-2">Get in touch</h3>
        <p className="text-gray-300 mb-4">
          Prefer email? Reach me at{' '}
          <a
            href="mailto:ramtejakrovvidi618@gmail.com"
            className="text-accent"
          >
            ramtejakrovvidi618@gmail.com
          </a>
        </p>
        <div className="flex items-center justify-center gap-4">
          <a
            href="https://www.linkedin.com/in/ramteja-krovvidi/"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 bg-accent/10 border border-accent text-accent rounded-lg"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/RamtejaKrovvidi"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 bg-accent/10 border border-accent text-accent rounded-lg"
          >
            GitHub
          </a>
        </div>
      </div>

      <div className="max-w-md mx-auto bg-gray-900 p-6 rounded-lg shadow-lg text-white">
        <h4 className="text-xl font-semibold mb-4 text-center">Send me a message</h4>

        {submitted && (
          <div className="bg-green-600 p-3 rounded mb-4 text-center">
            Thanks for reaching out! I'll get back to you soon.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows={5}
            required
            className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
          />

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
