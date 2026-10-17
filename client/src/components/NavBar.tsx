import { ArrowDownToLine, ArrowLeft, Moon, Sun } from 'lucide-react';
import type { MouseEventHandler } from 'react';
interface NavbarProps { theme: 'light' | 'dark'; toggleTheme: MouseEventHandler<HTMLButtonElement>; isAboutPage?: boolean; onNavigate: (path: '/' | '/about') => void; }
export default function Navbar({ theme, toggleTheme, isAboutPage = false, onNavigate }: NavbarProps) {
  return (
    <header className="site-header flex items-center gap-[24px] h-[76px] [border-bottom:1px_solid_var(--line)]">
      {isAboutPage
        ? <a className="header-back w-[16px] grid place-items-center text-ink" href="/" onClick={event => { event.preventDefault(); onNavigate('/'); }} aria-label="Back to home"><ArrowLeft size={15} /></a>
        : <img className="header-mark block w-[76px] h-[46px] object-contain [transform:translate(-14px,_8px)] [transition:filter_.35s_ease]" src={import.meta.env.BASE_URL + 'assets/images/mountain-mark.png'} alt="" aria-hidden="true" />}
      <nav aria-label="Main navigation"><a href="/about" onClick={event => { event.preventDefault(); onNavigate('/about'); }}>About</a></nav>
      <div className="header-actions flex gap-[20px] items-center">
        <a className="resume-link inline-flex items-center gap-[8px] text-ink text-[13px]" href={import.meta.env.BASE_URL + '01-Nirjal%20Byanjankar.pdf?v=58884af55949'} download="01-Nirjal Byanjankar.pdf">Resume <ArrowDownToLine size={14} /></a>
        <button className="icon-button w-[34px] h-[34px] grid place-items-center bg-transparent text-muted [border:1px_solid_var(--line)] rounded-[50%]" onClick={toggleTheme} aria-label={'Switch to ' + (theme === 'light' ? 'dark' : 'light') + ' mode'}>{theme === 'light' ? <Moon size={17} /> : <Sun size={17} />}</button>
      </div>
    </header>
  );
}
