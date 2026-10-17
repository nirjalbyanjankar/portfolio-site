import { useState } from 'react';
import { ArrowRight, Loader2 } from 'lucide-react';

const contactEmail = 'nirjalbyanjankar@gmail.com';
const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT?.trim() || 'https://formspree.io/f/mljgzvve';

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
      
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: form.name.trim(),
          message: form.message.trim(),
        }),
      });

      if (!response.ok) {
        throw new Error(`Formspree submission failed (${response.status})`);
      }
      
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
    <section id="contact" className="contact-section grid grid-cols-[1fr] gap-[20px] [border-top:1px_solid_var(--line)] [padding:28px_0_32px]">
      <h2 className="contact-title text-[14px] font-medium">Have something in mind?</h2>
      <form onSubmit={handleSubmit} className="contact-form flex flex-col gap-[16px]">
        <div className="contact-field [border-bottom:1px_solid_var(--line)]"><label className="sr-only" htmlFor="name">Name</label><input id="name" name="name" autoComplete="name" required placeholder="Your name" value={form.name} onChange={handleChange} /></div>
        <div className="contact-field [border-bottom:1px_solid_var(--line)] contact-message [align-items:start]"><label className="sr-only" htmlFor="message">Message</label><textarea id="message" name="message" rows={3} required placeholder="Tell me what's on your mind" value={form.message} onChange={handleChange} /></div>
        <button className="send-button self-end inline-flex items-center gap-[8px] [border:0] bg-transparent text-ink [padding:2px_0] text-[14px] font-medium [transition:opacity_.2s,_transform_.2s]" type="submit" disabled={isSubmitting} aria-label={isSubmitting ? 'Sending message' : 'Send message'}>{isSubmitting ? <Loader2 size={16} className="spinner [animation:spin_1s_linear_infinite]" /> : <ArrowRight size={16} />}</button>
        {submitStatus && <p className={`form-status text-[12px] ${submitStatus.success ? 'success' : 'error'}`} role="status">{submitStatus.message}{!submitStatus.success && <> <a href={emailFallback}>Email me directly</a> at {contactEmail}.</>}</p>}
      </form>
    </section>
  );
}
