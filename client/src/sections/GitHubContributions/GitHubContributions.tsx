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
      <div className="github-heading mb-[16px]">
        <h2 id="github-title">GitHub</h2>
      </div>
      <div className="github-card w-[100%] [padding:13px_12px_12px] [border:1px_solid_color-mix(in_srgb,_var(--line)_55%,_transparent)] rounded-[4px] [background:var(--github-card)]">
        {data ? (
          <>
            <div className="github-chart-scroll overflow-x-auto [scrollbar-width:none]">
              <div className="github-months grid w-[max-content] gap-x-[1px] h-[22px] text-[10px] leading-[1]" style={{ gridTemplateColumns: `repeat(${weekCount}, 8px)` }} aria-hidden="true">
                {months.map(month => <span key={`${month.label}-${month.column}`} style={{ gridColumn: month.column }}>{month.label}</span>)}
              </div>
              <div className="github-grid grid [grid-auto-flow:column] grid-rows-[repeat(7,_8px)] auto-cols-[8px] gap-[1px] w-[max-content]" aria-label={`${data.total.lastYear} GitHub contributions in the last year`}>
                {data.contributions.map(contribution => (
                  <span
                    className={`github-cell block w-[8px] h-[8px] rounded-[1.5px] [background:var(--github-0)] [box-shadow:inset_0_0_0_.5px_#00000006] github-level-${Math.min(contribution.level, 4)}`}
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
            <div className="github-summary flex items-center justify-between gap-[12px] mt-[11px] text-muted text-[10px]">
              <span>{data.total.lastYear} contributions in the last year on <a href={`https://github.com/${username}`} target="_blank" rel="noreferrer">GitHub</a>.</span>
            </div>
          </>
        ) : (
          <p className="github-status min-h-[68px] grid place-items-center text-muted text-[12px]">{failed ? 'Contribution activity is temporarily unavailable.' : 'Loading contribution activity…'}</p>
        )}
      </div>
      {tooltip && createPortal(
        <span className="github-tooltip fixed z-[300] [transform:translate(-50%,_-100%)] [padding:6px_9px] rounded-[5px] bg-[#111] text-white text-[10px] font-medium leading-[1.35] whitespace-nowrap pointer-events-none [box-shadow:0_3px_12px_#0003] [animation:github-tooltip-in_.12s_ease_both]" style={{ left: tooltip.x, top: tooltip.y }} role="tooltip">
          {tooltip.contribution.count} contribution{tooltip.contribution.count === 1 ? '' : 's'} on {formatDate(tooltip.contribution.date)}
        </span>,
        document.body,
      )}
    </section>
  );
}
