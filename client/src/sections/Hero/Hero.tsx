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
    <section id="home" className="hero [padding:34px_0_38px] text-[14px] leading-[1.65]">
      <div className="intro-identity mb-[14px]">
        <h1>Nirjal Byanjankar</h1>
        <p>Lalitpur, Nepal</p>
      </div>
      <p className="intro-description">
        Full stack developer & designer building simple, thoughtful digital experiences.
        Previously at <a href="#experience">AR Forge Tech</a>, building web applications
        from interface to database.
      </p>
      <p className="intro-contact mt-[14px]">
        Reach out to me at{' '}
        <button className="email-copy relative inline p-0 [border:0] [background:none] [font:inherit] cursor-pointer" type="button" onClick={copyEmail} aria-label={`Copy email address ${email}`}>
          {email}
          <span className="copy-tooltip absolute bottom-[calc(100%_+_8px)] left-[50%] [transform:translate(-50%,_3px)] [padding:4px_8px] rounded-[5px] bg-ink text-paper text-[10px] leading-[1.4] tracking-[.1px] whitespace-nowrap [box-shadow:0_2px_8px_#00000012] opacity-[0] invisible pointer-events-none [transition:opacity_.15s_ease,_transform_.15s_ease,_visibility_.15s]" data-visible={copyStatus !== 'idle'} aria-hidden="true">
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
