export default function PageTransition({ cover }) {
  const phase = cover.phase === 'idle' ? '' : ' ' + cover.phase;
  return (
    <>
      <div className={'page-transition' + phase} aria-hidden="true" />
      <div className={'transition-text' + phase} aria-hidden="true">
        <p className="transition-label">{cover.label}</p>
        <span className="transition-count">{cover.count}</span>
      </div>
    </>
  );
}
