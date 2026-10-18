import { useEffect, useRef } from 'react';
import { VIEW_PATHS } from '../routes';

const INDICES = ['01', '02', '03', '04', '05'];

export default function MenuOverlay({ open, onClose, onNav, t, navLinks }) {
  const closeRef = useRef(null);

  useEffect(() => {
    if (open && closeRef.current) closeRef.current.focus();
  }, [open]);

  return (
    <div
      className={'menu-overlay' + (open ? ' open' : '')}
      id="menuOverlay"
      aria-hidden={!open}
    >
      <div className="menu-top">
        <span>{t.title}</span>
        <button
          className="menu-close"
          ref={closeRef}
          type="button"
          onClick={onClose}
        >
          {t.close}
        </button>
      </div>
      <nav className="overlay-nav" aria-label="Portfolio sections">
        {navLinks.map((l, i) => (
          <a
            key={l.id}
            href={VIEW_PATHS[l.id]}
            data-view={l.id}
            data-index={INDICES[i]}
            onClick={(e) => {
              e.preventDefault();
              onNav(l.id);
            }}
          >
            {l.label}
          </a>
        ))}
      </nav>
      <div className="menu-foot">
        <span>{t.name}</span>
        <span>{t.tag}</span>
      </div>
    </div>
  );
}
