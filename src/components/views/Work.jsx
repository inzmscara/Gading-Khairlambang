function viewClass(active, entering) {
  return (
    'page-view' + (active ? ' is-active' : '') + (entering ? ' is-entering' : '')
  );
}

export default function Work({ active, entering, t }) {
  return (
    <div
      className={viewClass(active, entering)}
      id="work-view"
      data-view="work"
      aria-label={t.aria}
      aria-hidden={!active}
    >
      <section className="work-cards">
        <p className="wk-kicker">
          <b>02</b>
          {t.kicker}
        </p>
        <h1 className="wk-title">
          {t.titleA}
          <em>{t.titleB}</em>
        </h1>
        <p className="wk-lede">{t.lede}</p>
        <div className="wk-grid">
          {t.projects.map((p) => (
            <article className="wk-card" key={p.n}>
              <span className="n">{p.n}</span>
              <h3>{p.title}</h3>
              <p>{p.blurb}</p>
              <div className="foot">
                <span className="tag">{p.tag}</span>
                {p.link ? (
                  <a href={p.link} target="_blank" rel="noreferrer">
                    {p.linkLabel}
                  </a>
                ) : (
                  <span className="go" aria-hidden="true">
                    &nbsp;
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
