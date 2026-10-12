import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Copy, Check, Send, ArrowUpRight, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sentSuccess, setSentSuccess] = useState(false);

  const emailAddress = 'yashvardh4n1@gmail.com';
  // User placeholders for social links - easy to update
  const linkedinUrl = 'https://linkedin.com'; // [ADD LINK]
  const githubUrl = 'https://github.com';     // [ADD LINK]

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;

    // Compose mailto with prefilled details
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name || 'Visitor'}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`;

    setSentSuccess(true);
    setTimeout(() => {
      setSentSuccess(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 px-6 relative bg-stone-50/50">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center gap-2 mb-2 font-mono text-xs tracking-[0.25em] text-pink-600 uppercase">
            <span>06 // REACH OUT</span>
            <span className="w-8 h-px bg-pink-300" />
            <span className="font-jp text-stone-400">連絡</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-stone-950 tracking-tight">
            LET'S CONNECT
          </h2>
          <p className="mt-3 text-stone-600 text-base md:text-lg max-w-xl">
            Have an idea, project or opportunity? I'd love to connect.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Direct Channels Column */}
          <div className="lg:col-span-5 space-y-4">
            {/* Email Card */}
            <div className="p-6 bg-white rounded-2xl border border-stone-200/80 shadow-xs relative">
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs font-semibold tracking-widest text-stone-400 uppercase">
                  EMAIL
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1 text-[11px] font-mono text-pink-600 hover:text-pink-700 bg-pink-50 px-2.5 py-1 rounded-full border border-pink-200/60 transition-colors cursor-pointer"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-600" />
                      <span className="text-emerald-700">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <a
                href={`mailto:${emailAddress}`}
                className="group flex items-center justify-between text-stone-900 hover:text-pink-600 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-pink-50 flex items-center justify-center text-pink-600">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="text-sm sm:text-base font-mono font-medium truncate max-w-[210px] sm:max-w-none">
                    {emailAddress}
                  </span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-stone-400 group-hover:text-pink-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
            </div>

            {/* LinkedIn Card */}
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-6 bg-white rounded-2xl border border-stone-200/80 hover:border-pink-300 transition-all duration-200 shadow-xs"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs font-semibold tracking-widest text-stone-400 uppercase">
                  LINKEDIN
                </span>
                <span className="text-[10px] font-mono text-stone-400">Opens in new tab</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-stone-100 group-hover:bg-pink-50 text-stone-700 group-hover:text-pink-600 flex items-center justify-center transition-colors">
                    <LinkedinIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-stone-900 group-hover:text-pink-600 transition-colors">
                      Yash Vardhan on LinkedIn
                    </h3>
                    <p className="text-xs text-stone-500 font-mono">Professional network & updates</p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-stone-400 group-hover:text-pink-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
            </a>

            {/* GitHub Card */}
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-6 bg-white rounded-2xl border border-stone-200/80 hover:border-pink-300 transition-all duration-200 shadow-xs"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs font-semibold tracking-widest text-stone-400 uppercase">
                  GITHUB
                </span>
                <span className="text-[10px] font-mono text-stone-400">Opens in new tab</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-stone-100 group-hover:bg-pink-50 text-stone-700 group-hover:text-pink-600 flex items-center justify-center transition-colors">
                    <GithubIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-stone-900 group-hover:text-pink-600 transition-colors">
                      GitHub Profile
                    </h3>
                    <p className="text-xs text-stone-500 font-mono">Open source code & repositories</p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-stone-400 group-hover:text-pink-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
            </a>

            {/* Location Pill */}
            <div className="p-4 rounded-xl bg-stone-100/70 border border-stone-200/60 flex items-center gap-2.5 text-xs text-stone-600 font-mono">
              <MapPin className="w-4 h-4 text-pink-500" />
              <span>Based in Jaipur, India • Available for student internships & projects</span>
            </div>
          </div>

          {/* Interactive Direct Message Form Column */}
          <div className="lg:col-span-7">
            <div className="p-8 bg-white rounded-2xl border border-stone-200/80 shadow-xs relative">
              <h3 className="text-lg font-display font-bold text-stone-950 mb-1">
                Send a Direct Message
              </h3>
              <p className="text-xs text-stone-500 mb-6 font-mono">
                Fill in the details below to launch your default email client with your message pre-loaded.
              </p>

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-mono font-medium text-stone-700 mb-1.5 uppercase tracking-wider">
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Chen"
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-hidden focus:border-pink-400 focus:ring-2 focus:ring-pink-100 transition-all font-sans"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-xs font-mono font-medium text-stone-700 mb-1.5 uppercase tracking-wider">
                    Your Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@example.com"
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-hidden focus:border-pink-400 focus:ring-2 focus:ring-pink-100 transition-all font-sans"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-mono font-medium text-stone-700 mb-1.5 uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hi Yash, I saw your portfolio and would like to talk about..."
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-hidden focus:border-pink-400 focus:ring-2 focus:ring-pink-100 transition-all font-sans resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3.5 bg-stone-900 hover:bg-stone-800 text-white rounded-xl text-xs font-mono tracking-widest transition-all duration-200 shadow-md hover:shadow-pink-100 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5 text-pink-400" />
                  <span>SEND MESSAGE</span>
                </button>

                {sentSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 bg-pink-50 border border-pink-200 rounded-xl text-xs text-pink-800 font-mono text-center"
                  >
                    Email client opened! Thank you for reaching out.
                  </motion.div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
