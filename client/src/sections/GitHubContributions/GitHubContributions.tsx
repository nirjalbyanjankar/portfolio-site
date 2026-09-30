import { useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';

interface Contribution {
  date: string;
  count: number;
  level: number;
}

interface ContributionsResponse {
  total: { lastYear: number };
  contributions: Contribution[];
}

interface ContributionTooltip {
  contribution: Contribution;
  x: number;
  y: number;
}

const username = 'nirjalbyanjankar';

export default function GitHubContributions() {
  const [data, setData] = useState<ContributionsResponse | null>(null);
  const [failed, setFailed] = useState(false);
  const [tooltip, setTooltip] = useState<ContributionTooltip | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`, { signal: controller.signal })
      .then(response => {
        if (!response.ok) throw new Error('Unable to load GitHub contributions');
        return response.json() as Promise<ContributionsResponse>;
      })
      .then(setData)
      .catch(error => {
        if ((error as Error).name !== 'AbortError') setFailed(true);
      });
    return () => controller.abort();
  }, []);

  const months = useMemo(() => {
    if (!data) return [];
    const labels: { label: string; column: number }[] = [];
    let previousMonth = -1;
    data.contributions.forEach((contribution, index) => {
      const month = new Date(`${contribution.date}T00:00:00`).getMonth();
      if (month !== previousMonth) {
        const nextLabel = {
          label: new Intl.DateTimeFormat('en', { month: 'short' }).format(new Date(`${contribution.date}T00:00:00`)),
          column: Math.floor(index / 7) + 1,
        };
        if (labels.at(-1)?.column === nextLabel.column) labels[labels.length - 1] = nextLabel;
        else labels.push(nextLabel);
        previousMonth = month;
      }
    });
    return labels;
  }, [data]);

  const weekCount = data ? Math.ceil(data.contributions.length / 7) : 53;
  const showTooltip = (contribution: Contribution, element: HTMLElement) => {
    const rect = element.getBoundingClientRect();
    setTooltip({ contribution, x: rect.left + rect.width / 2, y: rect.top - 7 });
  };
  const formatDate = (date: string) => {
    const [year, month, day] = date.split('-');
    return `${day}.${month}.${year}`;
  };

  return (
    <section className="github-section" aria-labelledby="github-title">
      <div className="github-heading">
        <h2 id="github-title">GitHub</h2>
      </div>
      <div className="github-card">
        {data ? (
          <>
            <div className="github-chart-scroll">
              <div className="github-months" style={{ gridTemplateColumns: `repeat(${weekCount}, 8px)` }} aria-hidden="true">
                {months.map(month => <span key={`${month.label}-${month.column}`} style={{ gridColumn: month.column }}>{month.label}</span>)}
              </div>
              <div className="github-grid" aria-label={`${data.total.lastYear} GitHub contributions in the last year`}>
                {data.contributions.map(contribution => (
                  <span
                    className={`github-cell github-level-${Math.min(contribution.level, 4)}`}
                    key={contribution.date}
                    tabIndex={0}
                    onPointerEnter={event => showTooltip(contribution, event.currentTarget)}
                    onPointerLeave={() => setTooltip(null)}
                    onFocus={event => showTooltip(contribution, event.currentTarget)}
                    onBlur={() => setTooltip(null)}
                  />
                ))}
              </div>
            </div>
            <div className="github-summary">
              <span>{data.total.lastYear} contributions in the last year on <a href={`https://github.com/${username}`} target="_blank" rel="noreferrer">GitHub</a>.</span>
            </div>
          </>
        ) : (
          <p className="github-status">{failed ? 'Contribution activity is temporarily unavailable.' : 'Loading contribution activity…'}</p>
        )}
      </div>
      {tooltip && createPortal(
        <span className="github-tooltip" style={{ left: tooltip.x, top: tooltip.y }} role="tooltip">
          {tooltip.contribution.count} contribution{tooltip.contribution.count === 1 ? '' : 's'} on {formatDate(tooltip.contribution.date)}
        </span>,
        document.body,
      )}
    </section>
  );
}
