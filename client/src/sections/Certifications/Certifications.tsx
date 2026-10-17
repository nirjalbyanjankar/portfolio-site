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
    <section className="certifications-section [border-top:1px_solid_var(--line)] [padding:30px_0]" aria-labelledby="certifications-title">
      <h2 id="certifications-title">Certifications</h2>
      <div className="certifications-list grid" id="certifications-list">
        {certifications.map((certificate, index) => (
          <div className="certificate-reveal grid grid-rows-[0fr] opacity-[0] invisible [transition:grid-template-rows_.35s_ease,_opacity_.25s_ease,_visibility_0s_.35s]" data-visible={index < 3 || expanded} aria-hidden={index >= 3 && !expanded} inert={index >= 3 && !expanded} key={certificate.title}>
            <div className="certificate-reveal-inner min-h-[0] overflow-hidden">
              <article className="certificate-item grid grid-cols-[36px_minmax(0,_1fr)_auto] items-center gap-[14px] [padding:15px_0] [border-top:1px_solid_var(--line)]">
                <span className={`certificate-issuer-logo grid w-[36px] h-[36px] place-items-center [border:1px_solid_var(--line)] rounded-[3px] bg-white ${certificate.issuer === 'freeCodeCamp' ? ' certificate-issuer-freecodecamp' : ''}`} aria-hidden="true">
                  <img
                    src={import.meta.env.BASE_URL + `assets/images/${certificate.issuer === 'LinkedIn' ? 'logo-linkedin.svg' : certificate.issuer === 'freeCodeCamp' ? 'logo-freecodecamp.svg' : 'logo-aws.svg'}`}
                    alt=""
                  />
                </span>
                <div className="certificate-details min-w-[0] text-[13px] leading-[1.5]">
                  <h3>{certificate.title}</h3>
                  <p>{certificate.issuer}</p>
                  <time>{certificate.issued}</time>
                </div>
                {certificate.credentialUrl && (
                  <a className="certificate-link inline-flex items-center gap-[4px] text-muted text-[11px] whitespace-nowrap [transition:color_.2s_ease]" href={certificate.credentialUrl} target="_blank" rel="noreferrer">
                    Show credential <ExternalLink size={11} />
                  </a>
                )}
                {certificate.previewOnly && (
                  <button className="certificate-link inline-flex items-center gap-[4px] text-muted text-[11px] whitespace-nowrap [transition:color_.2s_ease] certificate-preview-button justify-self-end [border:0] bg-transparent p-0 cursor-pointer [font-family:inherit]" type="button" onClick={() => setSelected(certificate)}>
                    Show credential <ExternalLink size={11} />
                  </button>
                )}
              </article>
            </div>
          </div>
        ))}
      </div>
      <button className="projects-more flex items-center gap-[6px] [margin:24px_auto_0] [padding:5px_12px] [border:1px_solid_var(--line)] rounded-[20px] bg-transparent text-ink text-[14px] certifications-more" type="button" aria-expanded={expanded} aria-controls="certifications-list" onClick={() => setExpanded(value => !value)}>
        {expanded ? 'Less' : 'More'}
        {expanded ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
      </button>
      {selected && createPortal(
        <div className="certificate-modal fixed [inset:0] z-[200] grid place-items-center [padding:24px] bg-[#0006] [backdrop-filter:blur(3px)] [animation:certificate-fade_.18s_ease_both]" role="dialog" aria-modal="true" aria-labelledby="certificate-modal-title" onMouseDown={event => {
          if (event.target === event.currentTarget) setSelected(null);
        }}>
          <div className="certificate-modal-window relative w-[min(720px,_100%)] [padding:28px] [border:1px_solid_var(--line)] rounded-[5px] bg-paper [box-shadow:0_18px_60px_#0003] [animation:certificate-rise_.22s_ease_both]">
            <button className="certificate-close absolute top-[10px] right-[10px] grid w-[28px] h-[28px] place-items-center [border:0] bg-transparent text-ink cursor-pointer" type="button" onClick={() => setSelected(null)} aria-label="Close certificate preview"><X size={16} /></button>
            <h2 id="certificate-modal-title" className="sr-only">{selected.title}</h2>
            {selected.image && <img className="certificate-popup-image block w-[100%] max-h-[76vh] [border:1px_solid_var(--line)] object-contain" src={import.meta.env.BASE_URL + selected.image} alt={`${selected.title} certificate`} />}
          </div>
        </div>,
        document.body,
      )}
    </section>
  );
}
