import { useState } from 'react';
import { Mail, Phone, Github, Linkedin, Send } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase.from('contact_messages').insert([formData]);
      if (error) throw error;
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    } catch (err) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 font-display">
          <span className="text-gradient">Get In Touch</span>
        </h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gradient mb-4">Let's Connect</h3>
              <p className="text-slate-300 mb-6">
                Whether you have a question or just want to say hello, feel free to reach out. I'll get back to you as soon as possible.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              <a
                href="mailto:guptayash2804@gmail.com"
                className="glass rounded-lg p-4 flex items-start gap-4 hover:bg-slate-400/10 transition-all group"
              >
                <div className="p-3 rounded-lg bg-teal-400/10 group-hover:bg-teal-400/20 transition-all">
                  <Mail size={20} className="text-teal-400" />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Email</p>
                  <p className="text-slate-200 font-medium">guptayash2804@gmail.com</p>
                </div>
              </a>

              <a
                href="tel:+917014864776"
                className="glass rounded-lg p-4 flex items-start gap-4 hover:bg-slate-400/10 transition-all group"
              >
                <div className="p-3 rounded-lg bg-teal-400/10 group-hover:bg-teal-400/20 transition-all">
                  <Phone size={20} className="text-teal-400" />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Phone</p>
                  <p className="text-slate-200 font-medium">+91 7014864776</p>
                </div>
              </a>
            </div>

            {/* Social Links */}
            <div className="pt-4 border-t border-slate-600">
              <p className="text-sm text-slate-400 mb-4">Follow me on</p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/yash-gu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg glass border border-teal-400/20 text-teal-400 hover:bg-teal-400/10 transition-all hover:scale-110"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/yash-gupta-7a936b216/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg glass border border-teal-400/20 text-teal-400 hover:bg-teal-400/10 transition-all hover:scale-110"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="glass rounded-xl p-8 border border-teal-400/10">
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-slate-300 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-slate-400/5 border border-slate-600 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-teal-400 transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm text-slate-300 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-slate-400/5 border border-slate-600 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-teal-400 transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm text-slate-300 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-slate-400/5 border border-slate-600 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-teal-400 transition-all resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-teal-400 to-sky-400 text-navy-900 font-semibold hover:shadow-lg hover:shadow-teal-400/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading ? 'Sending...' : 'Send Message'}
                {!loading && <Send size={18} />}
              </button>

              {status === 'success' && (
                <p className="text-teal-400 text-sm text-center animate-fade-in">
                  Message sent successfully! I'll get back to you soon.
                </p>
              )}
              {status === 'error' && (
                <p className="text-red-400 text-sm text-center animate-fade-in">
                  Error sending message. Please try again.
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
