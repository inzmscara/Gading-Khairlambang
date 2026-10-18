function viewClass(active, entering) {
  return (
    'page-view' + (active ? ' is-active' : '') + (entering ? ' is-entering' : '')
  );
}

function Group({ label, items, nowBadge }) {
  return (
    <>
      <p className="jn-group">{label}</p>
      <div className="jn-tl">
        {items.map((s) => (
          <article className={'jn-step' + (s.now ? ' now' : '')} key={s.title}>
            <span className="when">{s.period}</span>
            <div>
              <h3>
                {s.title}{' '}
                {s.now && <span className="badge-now">{nowBadge}</span>}
              </h3>
              <p className="org">{s.org}</p>
              {s.note && <p>{s.note}</p>}
            </div>
          </article>
        ))}
      </div>
    </>
  );
}

export default function Path({ active, entering, t }) {
  return (
    <div
      className={viewClass(active, entering)}
      id="path-view"
      data-view="path"
      aria-label={t.aria}
      aria-hidden={!active}
    >
      <section className="journey-calm">
        <p className="jn-kicker">
          <b>03</b>
          {t.kicker}
        </p>
        <h1 className="jn-title">
          {t.titleA}
          <em>{t.titleB}</em>
        </h1>
        <p className="jn-lede">{t.lede}</p>
        <Group label={t.experienceLabel} items={t.experience} nowBadge={t.nowBadge} />
        <Group label={t.educationLabel} items={t.education} nowBadge={t.nowBadge} />
      </section>
    </div>
  );
}
