interface PlusToggleProps {
  open: boolean;
  className?: string;
}

export function PlusToggle({ open, className = '' }: PlusToggleProps) {
  return (
    <span className={`plus-toggle ${open ? 'is-open' : ''} ${className}`} aria-hidden="true">
      <span className="plus-toggle-v" />
      <span className="plus-toggle-h" />
    </span>
  );
}
