import type { ReactNode } from 'react';
import { useMagnetic } from '../../hooks/useMagnetic';

interface MagneticLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  strength?: number;
  onClick?: () => void;
}

export function MagneticLink({
  href,
  children,
  className = '',
  strength = 0.35,
  onClick,
}: MagneticLinkProps) {
  const { ref, handleMove, handleLeave } = useMagnetic<HTMLAnchorElement>(strength);

  return (
    <a
      ref={ref}
      href={href}
      onClick={onClick}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={className}
      style={{ willChange: 'transform', transition: 'transform 200ms ease-out' }}
    >
      {children}
    </a>
  );
}
