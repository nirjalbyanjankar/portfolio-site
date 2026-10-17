export default function Footer() {
  const now = new Date();
  const date = now.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  const time = now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });

  return (
    <footer className="site-footer [padding:22px_0] grid grid-cols-[1fr_1fr] items-center gap-[12px] text-ink text-[14px] leading-[24px]">
      <p>&copy;{now.getFullYear()}</p>
      <time dateTime={now.toISOString()}>
        {date}<span className="footer-dot text-ink" aria-hidden="true">&bull;</span>{time}
      </time>
    </footer>
  );
}
