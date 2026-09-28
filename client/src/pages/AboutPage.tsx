import { ExternalLink, Film, Gamepad2, Music2 } from 'lucide-react';
import Experience from '../sections/Experience/Experience';
import Skills from '../sections/Skills/Skills';
import Contact from '../sections/Contact/Contact';

export default function AboutPage() {
  return (
    <>
      <section className="about-profile">
        <div className="about-portrait-row">
          <img
            className="about-portrait"
            src={import.meta.env.BASE_URL + 'assets/images/profile.png'}
            alt="Nirjal Byanjankar"
            width="120"
            height="120"
          />
          <div className="portrait-note" aria-label="22 year old">
            <svg viewBox="0 0 72 30" aria-hidden="true">
              <path d="M69 7C54 5 42 8 31 16C25 20 19 22 8 22" />
              <path d="M14 16L7 22L15 26" />
            </svg>
            <span>22 year old</span>
          </div>
        </div>

        <div className="about-copy">
          <p>
            I'm a full stack developer and designer based in Lalitpur. I enjoy taking an idea
            from its first sketch to a thoughtful interface and the system behind it.
          </p>
          <p>
            Take the work seriously but leave a little room for fun. Away from the screen,
            you'll usually find me spending time in nature, or just chasing hobbies.
          </p>
        </div>
      </section>

      <Experience />
      <Skills />

      <section className="about-life" aria-labelledby="outside-work-title">
        <h2 id="outside-work-title">Beyond the code</h2>
        <div className="about-life-list">
          <p><Music2 size={16} /><span>I love progressive rock and blues — odd time signatures welcome</span></p>
          <p><Gamepad2 size={16} /><span>Chasing sunsets across the Wild West in Red Dead Redemption 2</span></p>
          <p><Film size={16} /><span>I like films such as <em>Into the Wild</em> — a reminder to wander, connect, and remember that “Happiness is only real when shared.”</span></p>
        </div>
      </section>

      <section className="now-playing" aria-labelledby="now-playing-title">
        <h2 id="now-playing-title">Now playing</h2>
        <a
          className="now-playing-card"
          href="https://open.spotify.com/track/1jhH7vvy8hoHuc0mGuZsLX"
          target="_blank"
          rel="noreferrer"
          aria-label="Listen to Little Miss Strange by Jimi Hendrix on Spotify"
        >
          <img
            className="now-playing-cover"
            src={import.meta.env.BASE_URL + 'assets/images/electric-ladyland.jpg'}
            alt="Electric Ladyland album cover"
            width="72"
            height="72"
          />
          <span className="now-playing-copy">
            <strong>Little Miss Strange</strong>
            <span>Jimi Hendrix · Electric Ladyland</span>
          </span>
          <span className="now-playing-link">Spotify <ExternalLink size={11} /></span>
        </a>
      </section>

      <Contact />

    </>
  );
}
