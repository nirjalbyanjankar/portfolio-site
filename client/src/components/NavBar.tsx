import { ArrowDownToLine, ArrowLeft, Moon, Sun } from 'lucide-react';
import type { MouseEventHandler } from 'react';
interface NavbarProps { theme: 'light' | 'dark'; toggleTheme: MouseEventHandler<HTMLButtonElement>; isAboutPage?: boolean; }
export default function Navbar({ theme, toggleTheme, isAboutPage = false }: NavbarProps) {
  return (
    <header className="site-header">
      {isAboutPage
        ? <a className="header-back" href="#/" aria-label="Back to home"><ArrowLeft size={15} /></a>
        : <span className="header-mark" aria-hidden="true">//</span>}
      <nav aria-label="Main navigation"><a href="#/about">About</a></nav>
      <div className="header-actions">
        <a className="resume-link" href={import.meta.env.BASE_URL + 'Nirjal%20Byanjankar.pdf'} download="Nirjal_Byanjankar_Resume.pdf">Resume <ArrowDownToLine size={14} /></a>
        <button className="icon-button" onClick={toggleTheme} aria-label={'Switch to ' + (theme === 'light' ? 'dark' : 'light') + ' mode'}>{theme === 'light' ? <Moon size={17} /> : <Sun size={17} />}</button>
      </div>
    </header>
  );
}
