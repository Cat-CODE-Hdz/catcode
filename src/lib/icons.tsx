import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function Svg({ size = 24, children, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  );
}

export function ArrowUp(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M12 19V5" />
      <path d="m6 11 6-6 6 6" />
    </Svg>
  );
}

export function ChevronDown(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="m6 9 6 6 6-6" />
    </Svg>
  );
}

export function Quote(props: IconProps) {
  return (
    <Svg {...props} fill="currentColor" stroke="none">
      <path d="M7.5 6C5 6 3 8 3 10.5S4.8 15 7.2 15c.3 0 .6 0 .8-.1-.4 1.4-1.5 2.6-3 3.1l.8 1.7c3-1.1 5-3.9 5-7.2C10.8 8 9.4 6 7.5 6Zm9 0C14 6 12 8 12 10.5S13.8 15 16.2 15c.3 0 .6 0 .8-.1-.4 1.4-1.5 2.6-3 3.1l.8 1.7c3-1.1 5-3.9 5-7.2C19.8 8 18.4 6 16.5 6Z" />
    </Svg>
  );
}

export function Globe(props: IconProps) {
  return (
    <Svg {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a14 14 0 0 1 0 18a14 14 0 0 1 0-18Z" />
    </Svg>
  );
}

export function Post(props: IconProps) {
  return (
    <Svg {...props}>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M3 8h18M8 21V8" />
      <path d="M12 16h5M12 12.5h5" />
    </Svg>
  );
}

export function Share(props: IconProps) {
  return (
    <Svg {...props}>
      <circle cx="6" cy="12" r="2.5" />
      <circle cx="18" cy="6" r="2.5" />
      <circle cx="18" cy="18" r="2.5" />
      <path d="m8.2 10.8 7.6-3.6M8.2 13.2l7.6 3.6" />
    </Svg>
  );
}

export function Wrench(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M14.7 6.3a4 4 0 0 0-5.4 5.2L4 16.8 7.2 20l5.3-5.3a4 4 0 0 0 5.2-5.4l-2.4 2.4-2.3-.6-.6-2.3 2.3-2.5Z" />
    </Svg>
  );
}

export function SignalOff(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M3 3l18 18" />
      <path d="M4 20h2v-4H4zM9 20h2v-7H9zM14 20h2v-4h-2z" />
      <path d="M19 20h1v-2" />
    </Svg>
  );
}

export function History(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M3 12a9 9 0 1 0 3-6.7L3 8" />
      <path d="M3 4v4h4" />
      <path d="M12 8v4l3 2" />
    </Svg>
  );
}

export function Clock(props: IconProps) {
  return (
    <Svg {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </Svg>
  );
}

export function CheckCircle(props: IconProps) {
  return (
    <Svg {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="m8.5 12 2.5 2.5 4.5-5" />
    </Svg>
  );
}

export function Info(props: IconProps) {
  return (
    <Svg {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v5" />
      <path d="M12 8h.01" />
    </Svg>
  );
}

export function Chat(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z" />
    </Svg>
  );
}
