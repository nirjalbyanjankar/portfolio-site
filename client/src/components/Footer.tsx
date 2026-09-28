export default function Footer() {
  const now = new Date();
  const date = now.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  const time = now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });

  return (
    <footer className="site-footer">
      <p>&copy;{now.getFullYear()}</p>
      <time dateTime={now.toISOString()}>
        {date}<span className="footer-dot" aria-hidden="true">&bull;</span>{time}
      </time>
    </footer>
  );
}
