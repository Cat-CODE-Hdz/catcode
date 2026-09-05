import { useTranslation } from 'react-i18next';

export function TopBar() {
  const { t } = useTranslation();

  return (
    <aside
      aria-label="Aviso de disponibilidad"
      className="w-full bg-black text-white py-1.5 px-gutter-desktop border-b border-white/10 flex items-center justify-between overflow-hidden"
      style={{ fontSize: '11px' }}
    >
      <div className="flex items-center gap-3">
        <span className="inline-flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-neutral-300 uppercase tracking-wider font-mono">{t('topbar.capacity')}</span>
        </span>
        <span className="text-neutral-500 hidden sm:inline">|</span>
        <span className="text-neutral-400 hidden sm:inline font-mono">{t('topbar.version', { version: __APP_VERSION__ })}</span>
      </div>
      <div className="flex items-center gap-4 text-neutral-400 font-mono">
        <span className="hidden md:inline text-neutral-300">{t('topbar.standard')}</span>
        <span className="font-semibold text-neutral-200 uppercase tracking-widest" style={{ fontSize: '10px' }}>
          {t('topbar.locations')}
        </span>
      </div>
    </aside>
  );
}