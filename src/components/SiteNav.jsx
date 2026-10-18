import { VIEW_PATHS } from '../routes';

export default function SiteNav({ activeView, menuOpen, onNav, onOpenMenu, t, lang, onLang }) {
  return (
    <header className="site-nav" aria-label="Primary navigation">
      <span className="nav-location">{t.location}</span>
      <nav className="quick-nav" aria-label="Section navigation">
        {t.links.map((l) => (
          <a
            key={l.id}
            href={VIEW_PATHS[l.id]}
            data-view={l.id}
            aria-current={activeView === l.id ? 'page' : undefined}
            onClick={(e) => {
              e.preventDefault();
              onNav(l.id);
            }}
          >
            {l.label}
          </a>
        ))}
      </nav>
      <div className="nav-right">
        <div className="lang-toggle" role="group" aria-label={t.langLabel}>
          <button
            type="button"
            className={lang === 'en' ? 'on' : ''}
            aria-pressed={lang === 'en'}
            onClick={() => onLang('en')}
          >
            EN
          </button>
          <button
            type="button"
            className={lang === 'id' ? 'on' : ''}
            aria-pressed={lang === 'id'}
            onClick={() => onLang('id')}
          >
            ID
          </button>
        </div>
        <button
          className="menu-trigger"
          type="button"
          aria-controls="menuOverlay"
          aria-expanded={menuOpen}
          onClick={onOpenMenu}
        >
          {t.index}
        </button>
      </div>
    </header>
  );
}
