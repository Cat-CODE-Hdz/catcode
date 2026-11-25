import { useEffect, useState } from 'react';
import { useInView } from '../../hooks/useInView';

interface BrowserMockupProps {
  url: string;
  title: string;
  notification: string;
}

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  typeof window.matchMedia === 'function' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export function BrowserMockup({ url, title, notification }: BrowserMockupProps) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const reduced = prefersReducedMotion();
  const [typed, setTyped] = useState('');
  const [notifyVisible, setNotifyVisible] = useState(false);

  useEffect(() => {
    if (!inView || prefersReducedMotion()) return;

    let index = 0;
    const typeTimer = window.setInterval(() => {
      index += 1;
      setTyped(title.slice(0, index));
      if (index >= title.length) {
        window.clearInterval(typeTimer);
        setNotifyVisible(true);
      }
    }, 45);

    return () => window.clearInterval(typeTimer);
  }, [inView, title]);

  return (
    <div ref={ref} className="browser-mockup" role="img" aria-label={`${url}. ${title}. ${notification}`}>
      <div className="browser-bar">
        <div className="browser-dots" aria-hidden="true">
          <span className="browser-dot browser-dot-r" />
          <span className="browser-dot browser-dot-y" />
          <span className="browser-dot browser-dot-g" />
        </div>
        <div className="browser-url" aria-hidden="true">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <rect x="4" y="10" width="16" height="11" rx="2" />
            <path d="M8 10V7a4 4 0 0 1 8 0v3" />
          </svg>
          <span>{url}</span>
        </div>
      </div>
      <div className="browser-body">
        <div className="browser-skeleton" aria-hidden="true">
          <span className="sk sk-1" />
          <span className="sk sk-2" />
          <span className="sk sk-3" />
        </div>
        <h3 className="browser-title">
          {reduced ? title : typed}
          <span className="blinking-cursor" aria-hidden="true" />
        </h3>
        <div className="browser-cards" aria-hidden="true">
          <span className="browser-card" />
          <span className="browser-card" />
          <span className="browser-card" />
        </div>
        <div className={`browser-notify ${notifyVisible || reduced ? 'is-visible' : ''}`} role="status" aria-live="polite">
          <span className="browser-notify-dot" aria-hidden="true" />
          <span>{notification}</span>
        </div>
      </div>
    </div>
  );
}
