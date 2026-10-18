function viewClass(active, entering) {
  return (
    'page-view' + (active ? ' is-active' : '') + (entering ? ' is-entering' : '')
  );
}

const LINKS = [
  {
    n: '01',
    label: 'GitHub',
    value: 'mieramensatu',
    href: 'https://github.com/mieramensatu',
  },
  {
    n: '02',
    label: 'LinkedIn',
    value: 'gading-khairlambang-9a9223241',
    href: 'https://www.linkedin.com/in/gading-khairlambang-9a9223241',
  },
  {
    n: '03',
    label: 'Email',
    value: 'khairlambanggading@gmail.com',
    href: 'mailto:khairlambanggading@gmail.com',
  },
];

export default function Contact({ active, entering, t }) {
  return (
    <div
      className={viewClass(active, entering)}
      id="contact-view"
      data-view="contact"
      aria-label={t.aria}
      aria-hidden={!active}
    >
      <section className="contact-calm">
        <p className="ct-kicker">
          <b>04</b>
          {t.kicker}
        </p>
        <h1 className="ct-title">
          {t.titleA}
          <em>{t.titleB}</em>
        </h1>
        <p className="ct-sub">{t.sub}</p>
        <div className="ct-rows">
          {LINKS.map((l) => (
            <a
              className="ct-row"
              key={l.n}
              href={l.href}
              target={l.href.startsWith('http') ? '_blank' : undefined}
              rel={l.href.startsWith('http') ? 'noreferrer' : undefined}
            >
              <span className="n">{l.n}</span>
              <span className="label">{l.label}</span>
              <span className="val">{l.value}</span>
              <span className="arrow">↗</span>
            </a>
          ))}
        </div>
      </section>

      <footer className="ct-foot">
        <span>{t.footName}</span>
        <span>{t.footRole}</span>
      </footer>
    </div>
  );
}
