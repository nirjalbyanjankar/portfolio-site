import { useState, useRef } from "react";
import { Mail, MapPin, Phone, Loader2, CheckCircle, XCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from 'framer-motion';

interface ContactProps {
  theme: 'light' | 'dark';
}

const Contact: React.FC<ContactProps> = ({ theme = 'light' }) => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ success: boolean; message: string } | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setSubmitStatus({
        success: false,
        message: 'Please fill in all fields.'
      });
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setSubmitStatus({
        success: false,
        message: 'Please enter a valid email address.'
      });
      return;
    }

    try {
      setIsSubmitting(true);
      
      // Replace these with your EmailJS credentials
      const serviceId = 'service_0y77imf';
      const templateId = 'template_dr8thpf';
      const publicKey = 'T6Mk0DnbvhnTpmahv';
      
      if (!formRef.current) throw new Error('Form reference not found');
      
      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
      
      setSubmitStatus({
        success: true,
        message: `Hi ${form.name.trim().split(' ')[0]}, I will get back to you soon.`
      });
      
      // Reset form
      setForm({ name: "", email: "", message: "" });
      
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus({
        success: false,
        message: 'Failed to send message. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className={`py-20 md:py-24 transition-colors duration-300 ${
      theme === 'light' ? 'bg-slate-50' : 'bg-gray-950'
    }`}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium mb-4 ${
            theme === 'light' 
              ? 'bg-blue-100 text-blue-600' 
              : 'bg-blue-900/30 text-blue-400'
          }`}>
            Get In Touch
          </span>
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
            theme === 'light' ? 'text-gray-900' : 'text-white'
          }`}>
            Contact Me
          </h2>
          <div className={`w-20 h-1 mx-auto rounded-full ${
            theme === 'light' ? 'bg-gray-900' : 'bg-white'
          }`}></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className={`text-2xl font-semibold mb-6 ${
                theme === 'light' ? 'text-gray-900' : 'text-white'
              }`}>
                Let's talk about your project
              </h3>
              <p className={`leading-relaxed ${
                theme === 'light' ? 'text-gray-600' : 'text-gray-300'
              }`}>
                Have a project in mind or want to discuss potential opportunities? 
                Feel free to reach out through the contact form or directly via email or phone.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-xl ${
                  theme === 'light' ? 'bg-blue-100 text-blue-600' : 'bg-blue-900/30 text-blue-400'
                }`}>
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className={`font-medium ${
                    theme === 'light' ? 'text-gray-700' : 'text-gray-300'
                  }`}>Email</h4>
                  <a 
                    href="mailto:your.email@example.com" 
                    className={`hover:underline ${
                      theme === 'light' ? 'text-blue-600' : 'text-blue-400'
                    }`}
                  >
                    nirjalbyanjankar@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-xl ${
                  theme === 'light' ? 'bg-blue-100 text-blue-600' : 'bg-blue-900/30 text-blue-400'
                }`}>
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className={`font-medium ${
                    theme === 'light' ? 'text-gray-700' : 'text-gray-300'
                  }`}>Phone</h4>
                  <a 
                    href="tel:+1234567890" 
                    className={`hover:underline ${
                      theme === 'light' ? 'text-blue-600' : 'text-blue-400'
                    }`}
                  >
                    +977 9849362904
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-xl ${
                  theme === 'light' ? 'bg-blue-100 text-blue-600' : 'bg-blue-900/30 text-blue-400'
                }`}>
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className={`font-medium ${
                    theme === 'light' ? 'text-gray-700' : 'text-gray-300'
                  }`}>Location</h4>
                  <p className={theme === 'light' ? 'text-gray-600' : 'text-gray-400'}>
                    Kathmandu, Nepal
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`p-8 rounded-2xl ${
            theme === 'light' 
              ? 'bg-white shadow-lg' 
              : 'bg-gray-800 shadow-xl'
          }`}>
            <h3 className={`text-2xl font-semibold mb-6 ${
              theme === 'light' ? 'text-gray-900' : 'text-white'
            }`}>
              Send me a message
            </h3>
            
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-1">
                <label htmlFor="name" className={`block text-sm font-medium ${
                  theme === 'light' ? 'text-gray-700' : 'text-gray-300'
                }`}>
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="John Doe"
                  className={`w-full px-4 py-3 rounded-lg outline-none transition-all duration-200 ${
                    theme === 'light'
                      ? 'bg-gray-100 focus:ring-2 focus:ring-blue-500 focus:bg-white border border-gray-300'
                      : 'bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:bg-gray-800 border border-gray-600 text-white'
                  }`}
                  value={form.name}
                  onChange={handleChange}
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="email" className={`block text-sm font-medium ${
                  theme === 'light' ? 'text-gray-700' : 'text-gray-300'
                }`}>
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="john@example.com"
                  className={`w-full px-4 py-3 rounded-lg outline-none transition-all duration-200 ${
                    theme === 'light'
                      ? 'bg-gray-100 focus:ring-2 focus:ring-blue-500 focus:bg-white border border-gray-300'
                      : 'bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:bg-gray-800 border border-gray-600 text-white'
                  }`}
                  value={form.email}
                  onChange={handleChange}
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="message" className={`block text-sm font-medium ${
                  theme === 'light' ? 'text-gray-700' : 'text-gray-300'
                }`}>
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Write your message here..."
                  className={`w-full px-4 py-3 rounded-lg outline-none transition-all duration-200 ${
                    theme === 'light'
                      ? 'bg-gray-100 focus:ring-2 focus:ring-blue-500 focus:bg-white border border-gray-300'
                      : 'bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:bg-gray-800 border border-gray-600 text-white'
                  }`}
                  value={form.message}
                  onChange={handleChange}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 px-6 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
                  theme === 'light'
                    ? 'bg-blue-600 hover:bg-blue-700 text-white'
                    : 'bg-blue-600 hover:bg-blue-700 text-white'
                } ${isSubmitting ? 'opacity-80 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
              
              <AnimatePresence>
                {submitStatus && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ 
                      type: 'spring',
                      stiffness: 500,
                      damping: 30
                    }}
                    className={`p-4 rounded-lg flex items-start gap-3 ${
                      submitStatus.success 
                        ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' 
                        : 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'
                    }`}
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ 
                        type: 'spring',
                        stiffness: 500,
                        delay: 0.15
                      }}
                    >
                      {submitStatus.success ? (
                        <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      ) : (
                        <XCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      )}
                    </motion.div>
                    <motion.span
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      {submitStatus.message}
                    </motion.span>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
