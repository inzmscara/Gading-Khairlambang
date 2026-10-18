function viewClass(active, entering) {
  return (
    'page-view' + (active ? ' is-active' : '') + (entering ? ' is-entering' : '')
  );
}

export default function Home({ active, entering, onNav, rise, t, workPath, contactPath }) {
  const go = (e, name) => {
    e.preventDefault();
    if (onNav) onNav(name);
  };

  return (
    <div
      className={viewClass(active, entering)}
      id="home-view"
      data-view="home"
      aria-label={t.aria}
      aria-hidden={!active}
    >
      <section className={'home-calm' + (rise ? ' hero-rise hero-masked' : '')}>
        <p className="home-kicker">{t.kicker}</p>
        <h1 className="home-name">
          <span className="hm">
            <span className="hm-in">Gading</span>
          </span>{' '}
          <span className="hm">
            <span className="hm-in hm-in-2">Khairlambang</span>
          </span>
        </h1>
        <p className="home-sub">{t.sub}</p>
        <div className="home-links">
          <a href={workPath} onClick={(e) => go(e, 'work')}>
            {t.viewWork}
          </a>
          <a href={contactPath} onClick={(e) => go(e, 'contact')}>
            {t.getInTouch}
          </a>
        </div>
        <div className="home-facts">
          {t.facts.map((f) => (
            <div key={f.k}>
              <span>{f.k}</span>
              {f.v}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
