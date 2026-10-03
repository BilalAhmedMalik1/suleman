import { useState, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail, Github, Linkedin, Send, CheckCircle2, AlertCircle, Loader2,
} from 'lucide-react';
import { contactContent, socialLinks } from '@/data/portfolio';
import { Reveal } from './Reveal';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export function Contact() {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errors, setErrors] = useState<FormErrors>({});
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const validate = (): boolean => {
    const e: FormErrors = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = 'Please enter a valid email';
    if (!form.subject.trim()) e.subject = 'Subject is required';
    if (!form.message.trim()) e.message = 'Message is required';
    else if (form.message.trim().length < 10)
      e.message = 'Message must be at least 10 characters';

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;

    setStatus('loading');
    try {
      // Simulated submit — replace with real endpoint later
      await new Promise((r) => setTimeout(r, 1500));
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const handleChange = (field: keyof typeof form, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="text-xs font-mono uppercase tracking-[0.3em] text-accent-400 mb-3">
            06 — Contact
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            {contactContent.heading}
          </h2>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl">
            {contactContent.text}
          </p>
        </Reveal>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Contact info */}
          <Reveal delay={0.1} className="md:col-span-2">
            <div className="space-y-4">
              <ContactRow
                href={`mailto:${socialLinks.email}`}
                icon={<Mail size={18} />}
                label="Email"
                value={socialLinks.email}
              />
              <ContactRow
                href={socialLinks.github}
                icon={<Github size={18} />}
                label="GitHub"
                value="View my repositories"
              />
              <ContactRow
                href={socialLinks.linkedin}
                icon={<Linkedin size={18} />}
                label="LinkedIn"
                value="Connect with me"
              />
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.2} className="md:col-span-3">
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 md:p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <Field
                  label="Name"
                  value={form.name}
                  onChange={(v) => handleChange('name', v)}
                  error={errors.name}
                  placeholder="Your name"
                />
                <Field
                  label="Email"
                  type="email"
                  value={form.email}
                  onChange={(v) => handleChange('email', v)}
                  error={errors.email}
                  placeholder="your@email.com"
                />
              </div>
              <Field
                label="Subject"
                value={form.subject}
                onChange={(v) => handleChange('subject', v)}
                error={errors.subject}
                placeholder="What's this about?"
              />
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  value={form.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  rows={5}
                  placeholder="Your message..."
                  className={`w-full px-4 py-3 rounded-xl bg-ink-800/80 border text-white placeholder-gray-600 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-accent-500/40 ${
                    errors.message ? 'border-red-500/50' : 'border-ink-600'
                  }`}
                />
                {errors.message && (
                  <p className="mt-1.5 text-xs text-red-400">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="group flex items-center justify-center gap-2 w-full px-6 py-3.5 bg-accent-500 hover:bg-accent-400 disabled:opacity-60 disabled:cursor-not-allowed text-ink-950 font-semibold rounded-xl transition-all hover:scale-[1.01]"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} className="group-hover:translate-x-0.5 transition-transform" />
                    Send Message
                  </>
                )}
              </button>

              <AnimatePresence>
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-2 p-3 rounded-xl bg-accent-500/10 border border-accent-500/20 text-accent-400 text-sm"
                  >
                    <CheckCircle2 size={16} />
                    Message sent successfully! I'll get back to you soon.
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-2 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm"
                  >
                    <AlertCircle size={16} />
                    Something went wrong. Please try again or email me directly.
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  href, icon, label, value,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-4 p-4 glass rounded-xl hover:bg-white/[0.07] hover:border-accent-500/30 transition-all"
    >
      <div className="p-2.5 rounded-xl bg-accent-500/10 text-accent-400 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <div>
        <p className="text-xs text-gray-500 uppercase tracking-wider">{label}</p>
        <p className="text-sm text-gray-300 group-hover:text-white transition-colors">
          {value}
        </p>
      </div>
    </a>
  );
}

function Field({
  label, value, onChange, error, placeholder, type = 'text',
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  placeholder?: string;
  type?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-300 mb-2">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`w-full px-4 py-3 rounded-xl bg-ink-800/80 border text-white placeholder-gray-600 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-accent-500/40 ${
          error ? 'border-red-500/50' : 'border-ink-600'
        }`}
      />
      {error && <p className="mt-1.5 text-xs text-red-400">{error}</p>}
    </div>
  );
}
