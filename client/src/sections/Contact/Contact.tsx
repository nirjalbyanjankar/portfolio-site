import { useState, useRef } from 'react';
import { ArrowRight, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [form, setForm] = useState({ name: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ success: boolean; message: string } | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
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
      
      // Existing EmailJS integration.
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
      setForm({ name: "", message: "" });
      
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
    <section id="contact" className="contact-section">
      <h2 className="contact-title">Have something in mind?</h2>
      <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
        <div className="contact-field"><label className="sr-only" htmlFor="name">Name</label><input id="name" name="name" autoComplete="name" required placeholder="Your name" value={form.name} onChange={handleChange} /></div>
        <div className="contact-field contact-message"><label className="sr-only" htmlFor="message">Message</label><textarea id="message" name="message" rows={3} required placeholder="Tell me what's on your mind" value={form.message} onChange={handleChange} /></div>
        <button className="send-button" type="submit" disabled={isSubmitting} aria-label={isSubmitting ? 'Sending message' : 'Send message'}>{isSubmitting ? <Loader2 size={16} className="spinner" /> : <ArrowRight size={16} />}</button>
        {submitStatus && <p className={submitStatus.success ? 'form-status success' : 'form-status error'} role="status">{submitStatus.message}</p>}
      </form>
    </section>
  );
}
