import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { ChevronDown, ChevronUp, ExternalLink, X } from 'lucide-react';
import { certifications, type Certification } from '../../data/certifications';

export default function Certifications() {
  const [selected, setSelected] = useState<Certification | null>(null);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    if (!selected) return;
    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelected(null);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [selected]);

  return (
    <section className="certifications-section" aria-labelledby="certifications-title">
      <h2 id="certifications-title">Certifications</h2>
      <div className="certifications-list" id="certifications-list">
        {certifications.map((certificate, index) => (
          <div className="certificate-reveal" data-visible={index < 3 || expanded} aria-hidden={index >= 3 && !expanded} inert={index >= 3 && !expanded} key={certificate.title}>
            <div className="certificate-reveal-inner">
              <article className="certificate-item">
                <span className={`certificate-issuer-logo${certificate.issuer === 'freeCodeCamp' ? ' certificate-issuer-freecodecamp' : ''}`} aria-hidden="true">
                  <img
                    src={import.meta.env.BASE_URL + `assets/images/${certificate.issuer === 'LinkedIn' ? 'logo-linkedin.svg' : certificate.issuer === 'freeCodeCamp' ? 'logo-freecodecamp.svg' : 'logo-aws.svg'}`}
                    alt=""
                  />
                </span>
                <div className="certificate-details">
                  <h3>{certificate.title}</h3>
                  <p>{certificate.issuer}</p>
                  <time>{certificate.issued}</time>
                </div>
                {certificate.credentialUrl && (
                  <a className="certificate-link" href={certificate.credentialUrl} target="_blank" rel="noreferrer">
                    Show credential <ExternalLink size={11} />
                  </a>
                )}
                {certificate.previewOnly && (
                  <button className="certificate-link certificate-preview-button" type="button" onClick={() => setSelected(certificate)}>
                    Show credential <ExternalLink size={11} />
                  </button>
                )}
              </article>
            </div>
          </div>
        ))}
      </div>
      <button className="projects-more certifications-more" type="button" aria-expanded={expanded} aria-controls="certifications-list" onClick={() => setExpanded(value => !value)}>
        {expanded ? 'Less' : 'More'}
        {expanded ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
      </button>
      {selected && createPortal(
        <div className="certificate-modal" role="dialog" aria-modal="true" aria-labelledby="certificate-modal-title" onMouseDown={event => {
          if (event.target === event.currentTarget) setSelected(null);
        }}>
          <div className="certificate-modal-window">
            <button className="certificate-close" type="button" onClick={() => setSelected(null)} aria-label="Close certificate preview"><X size={16} /></button>
            <h2 id="certificate-modal-title" className="sr-only">{selected.title}</h2>
            {selected.image && <img className="certificate-popup-image" src={import.meta.env.BASE_URL + selected.image} alt={`${selected.title} certificate`} />}
          </div>
        </div>,
        document.body,
      )}
    </section>
  );
}
