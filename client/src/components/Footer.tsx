export default function Footer({ showThanks = false }: { showThanks?: boolean }) {
  const now = new Date();
  const date = now.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  const time = now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });

  return (
    <footer className="site-footer">
      <p>&copy;{now.getFullYear()}</p>
      {showThanks ? <p className="footer-note">Made it this far? Thanks!</p> : <span aria-hidden="true" />}
      <time dateTime={now.toISOString()}>
        {date}<span className="footer-dot" aria-hidden="true">&bull;</span>{time}
      </time>
    </footer>
  );
}
