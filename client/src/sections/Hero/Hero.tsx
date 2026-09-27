import { useEffect, useState } from 'react';

const email = 'nirjalbyanjankar@gmail.com';

export default function Hero() {
  const [copyStatus, setCopyStatus] = useState<'idle' | 'copied' | 'error'>('idle');

  useEffect(() => {
    if (copyStatus === 'idle') return;
    const timer = window.setTimeout(() => setCopyStatus('idle'), 2200);
    return () => window.clearTimeout(timer);
  }, [copyStatus]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopyStatus('copied');
    } catch {
      setCopyStatus('error');
    }
  };

  return (
    <section id="home" className="hero">
      <div className="intro-identity">
        <h1>Nirjal Byanjankar</h1>
        <p>Lalitpur, Nepal</p>
      </div>
      <p className="intro-description">
        Full stack developer & designer building simple, thoughtful digital experiences.
        Previously at <a href="#experience">AR Forge Tech</a>, building web applications
        from interface to database.
      </p>
      <p className="intro-contact">
        Reach out to me at{' '}
        <button className="email-copy" type="button" onClick={copyEmail} aria-label={`Copy email address ${email}`}>
          {email}
          <span className="copy-tooltip" data-visible={copyStatus !== 'idle'} aria-hidden="true">
            {copyStatus === 'copied' ? 'Copied!' : copyStatus === 'error' ? 'Could not copy' : 'Copy'}
          </span>
        </button>,{' '}
        <a href="https://www.linkedin.com/in/nirjal-byan/" target="_blank" rel="noreferrer">LinkedIn</a>
        {' '}or on{' '}
        <a href="https://github.com/nirjalbyanjankar" target="_blank" rel="noreferrer">GitHub</a>.
      </p>
      <span className="sr-only" role="status">
        {copyStatus === 'copied' ? 'Email copied!' : copyStatus === 'error' ? 'Could not copy. Please select and copy the email address manually.' : ''}
      </span>
    </section>
  );
}
