function viewClass(active, entering) {
  return (
    'page-view' + (active ? ' is-active' : '') + (entering ? ' is-entering' : '')
  );
}

export default function About({ active, entering, t }) {
  return (
    <div
      className={viewClass(active, entering)}
      id="about-view"
      data-view="about"
      aria-label={t.aria}
      aria-hidden={!active}
    >
      <section className="about-calm">
        <p className="ab-kicker">
          <b>01</b>
          {t.kicker}
        </p>
        <h1 className="ab-title">
          {t.titleA}
          <em>{t.titleB}</em>
        </h1>
        <div className="ab-cols">
          <div className="ab-story">
            <p>
              <strong>{t.story1lead}</strong>
              {t.story1rest}
            </p>
            <p>{t.story2}</p>
          </div>
          <div className="ab-side">
            {t.facts.map((f) => (
              <div className="ab-fact" key={f.k}>
                <p className="k">{f.k}</p>
                {f.chips ? (
                  <ul className="ab-chips">
                    {f.chips.map((c) => (
                      <li key={c}>{c}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="v">
                    {f.v}
                    {f.small && <small>{f.small}</small>}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
