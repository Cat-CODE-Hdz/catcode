import { useEffect, useRef, useState } from 'react';
import { useInView } from '../../hooks/useInView';

export interface ChatMessage {
  from: 'them' | 'me';
  text: string;
}

interface WhatsAppPhoneProps {
  name: string;
  status: string;
  messages: ChatMessage[];
  placeholder?: string;
}

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  typeof window.matchMedia === 'function' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export function WhatsAppPhone({ name, status, messages, placeholder = 'Mensaje' }: WhatsAppPhoneProps) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const [visible, setVisible] = useState(0);
  const messagesRef = useRef(messages);
  const count = messages.length;
  const reduced = prefersReducedMotion();
  const visibleCount = reduced ? messages.length : visible;

  useEffect(() => {
    messagesRef.current = messages;
  });

  useEffect(() => {
    if (!inView || prefersReducedMotion()) return;

    const list = messagesRef.current;
    const timers = list.map((_, i) =>
      window.setTimeout(() => setVisible((v) => Math.max(v, i + 1)), 800 * (i + 1)),
    );
    return () => timers.forEach((t) => window.clearTimeout(t));
  }, [inView, count]);

  return (
    <div
      ref={ref}
      className="phone-mockup"
      role="img"
      aria-label={`${name}. ${messages.map((m) => m.text).join(' ')}`}
    >
      <div className="phone-speaker" aria-hidden="true" />
      <div className="phone-screen">
        <div className="wa-header">
          <span className="wa-avatar" aria-hidden="true">C</span>
          <span className="wa-head-text">
            <strong>{name}</strong>
            <span>{status}</span>
          </span>
        </div>
        <div className="wa-chat">
          {messages.map((m, i) => (
            <div
              key={i}
              className={`wa-bubble ${m.from === 'me' ? 'wa-out' : 'wa-in'} ${i < visibleCount ? 'is-visible' : ''}`}
            >
              {m.text}
              {m.from === 'me' && <span className="wa-ticks" aria-hidden="true">✓✓</span>}
            </div>
          ))}
        </div>
        <div className="wa-input" aria-hidden="true">
          <span className="wa-input-field">{placeholder}</span>
          <span className="wa-send">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 20.5 21 12 3 3.5 3 10l12 2-12 2Z" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}
