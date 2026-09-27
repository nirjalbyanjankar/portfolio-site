import { ArrowUpRight, Music2, Gamepad2, Film } from 'lucide-react';
export default function About({ showMoreLink = true }: { showMoreLink?: boolean }) {
  return (
    <section id="about" className="split-section">
      <div className="section-label"><span className="eyebrow">A LITTLE CONTEXT</span><h2>Beyond the code.</h2></div>
      <div className="about-content">
        <p>Take the work seriously but leave a little room for fun.</p>
        <div className="interests">
          <p><Music2 size={17} /><span>I like progressive rock and jazz.</span></p>
          <p><Gamepad2 size={17} /><span>Also playing Counter-Strike or getting lost in Red Dead Redemption 2.</span></p>
          <p><Film size={17} /><span>I like movies like <em>The Truman Show</em> — a reminder that there's life beyond the daily script. And when it's time to log off: “In case I don't see ya, good afternoon, good evening, and good night!”</span></p>
        </div>
        {showMoreLink && <a className="text-link" href="#/about">A little more about me <ArrowUpRight size={16} /></a>}
      </div>
    </section>
  );
}
