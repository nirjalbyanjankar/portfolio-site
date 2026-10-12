import { useState } from 'react';
import { ArrowRight, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

const contactEmail = 'nirjalbyanjankar@gmail.com';

export default function Contact() {
  const [form, setForm] = useState({ name: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ success: boolean; message: string } | null>(null);
  const emailFallback = `mailto:${contactEmail}?subject=${encodeURIComponent(`Portfolio inquiry from ${form.name.trim()}`)}&body=${encodeURIComponent(`${form.message.trim()}\n\nFrom: ${form.name.trim()}`)}`;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    
    // Basic validation
    if (!form.name.trim() || !form.message.trim()) {
      setSubmitStatus({
        success: false,
        message: 'Please fill in all fields.'
      });
      return;
    }

    try {
      setIsSubmitting(true);
      setSubmitStatus(null);
      
      // Existing EmailJS integration.
      const serviceId = 'service_5cu7zbe';
      const templateId = 'template_dr8thpf';
      const publicKey = 'T6Mk0DnbvhnTpmahv';
      
      await emailjs.send(
        serviceId,
        templateId,
        {
          name: form.name.trim(),
          email: contactEmail,
          message: form.message.trim(),
        },
        { publicKey },
      );
      
      setSubmitStatus({
        success: true,
        message: `Hi ${form.name.trim().split(' ')[0]}, I will get back to you soon.`
      });
      
      // Reset form
      setForm({ name: "", message: "" });
      
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus({
        success: false,
        message: 'Your message could not be sent. Please try again or send it using your email app.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">Have something in mind?</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="contact-field"><label className="sr-only" htmlFor="name">Name</label><input id="name" name="name" autoComplete="name" required placeholder="Your name" value={form.name} onChange={handleChange} /></div>
        <div className="contact-field contact-message"><label className="sr-only" htmlFor="message">Message</label><textarea id="message" name="message" rows={3} required placeholder="Tell me what's on your mind" value={form.message} onChange={handleChange} /></div>
        <button className="send-button" type="submit" disabled={isSubmitting} aria-label={isSubmitting ? 'Sending message' : 'Send message'}>{isSubmitting ? <Loader2 size={16} className="spinner" /> : <ArrowRight size={16} />}</button>
        {submitStatus && <p className={submitStatus.success ? 'form-status success' : 'form-status error'} role="status">{submitStatus.message}{!submitStatus.success && <> <a href={emailFallback}>Email me directly</a> at {contactEmail}.</>}</p>}
      </form>
    </section>
  );
}
