import { useId } from 'react';

export type ProblemKind = 'invisible' | 'distrust' | 'time';

interface ProblemArtProps {
  kind: ProblemKind;
  className?: string;
}

const palette: Record<ProblemKind, { accent: string; soft: string }> = {
  invisible: { accent: '#DC2626', soft: '#FEE2E2' },
  distrust: { accent: '#D97706', soft: '#FEF3C7' },
  time: { accent: '#DC2626', soft: '#FEE2E2' },
};

export function ProblemArt({ kind, className = '' }: ProblemArtProps) {
  const uid = useId().replace(/:/g, '');
  const { accent, soft } = palette[kind];

  const common = {
    className: `problem-art ${className}`,
    viewBox: '0 0 120 96',
    role: 'img' as const,
    'aria-hidden': true,
    focusable: 'false' as const,
    id: `pa-${uid}`,
  };

  if (kind === 'invisible') {
    return (
      <svg {...common}>
        <rect x="14" y="20" width="92" height="60" rx="8" fill={soft} stroke={accent} strokeWidth="2" />
        <line x1="14" y1="36" x2="106" y2="36" stroke={accent} strokeWidth="2" opacity="0.45" />
        <circle cx="24" cy="28" r="2.4" fill={accent} />
        <circle cx="32" cy="28" r="2.4" fill={accent} opacity="0.6" />
        <circle cx="40" cy="28" r="2.4" fill={accent} opacity="0.35" />
        <g className="pa-line" style={{ transformOrigin: '28px 50px' }}>
          <rect x="26" y="46" width="68" height="6" rx="3" fill={accent} opacity="0.85" />
        </g>
        <rect x="26" y="58" width="44" height="6" rx="3" fill={accent} opacity="0.35" />
        <g className="pa-fade">
          <circle cx="96" cy="70" r="13" fill="white" stroke={accent} strokeWidth="2" />
          <line x1="96" y1="62" x2="96" y2="70" stroke={accent} strokeWidth="2.4" strokeLinecap="round" />
          <circle cx="96" cy="75.5" r="1.6" fill={accent} />
        </g>
      </svg>
    );
  }

  if (kind === 'distrust') {
    return (
      <svg {...common}>
        <path
          d="M60 18 L100 82 H20 Z"
          fill={soft}
          stroke={accent}
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <g className="pa-fade">
          <rect x="56" y="38" width="8" height="24" rx="4" fill={accent} />
          <circle cx="60" cy="70" r="4.4" fill={accent} />
        </g>
      </svg>
    );
  }

  return (
    <svg {...common}>
      <circle cx="60" cy="52" r="32" fill={soft} stroke={accent} strokeWidth="2" />
      <g className="pa-spin" style={{ transformOrigin: '60px 52px' }}>
        <line x1="60" y1="52" x2="60" y2="32" stroke={accent} strokeWidth="2.6" strokeLinecap="round" />
        <line x1="60" y1="52" x2="76" y2="60" stroke={accent} strokeWidth="2.6" strokeLinecap="round" />
        <circle cx="60" cy="52" r="2.6" fill={accent} />
      </g>
      <g className="pa-fade">
        <path
          d="M84 34 a30 30 0 0 1 6 30"
          fill="none"
          stroke={accent}
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="3 4"
        />
      </g>
    </svg>
  );
}
