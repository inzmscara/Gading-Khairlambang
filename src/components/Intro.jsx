import { useEffect, useRef, useState } from 'react';

const WORDS = [
  'Halo',
  'Bonjour',
  'Hola',
  'Ciao',
  'Olá',
  'Привет',
  'こんにちは',
  '안녕하세요',
  'Hello',
];

export default function Intro({ onFinish, onLiftStart, t }) {
  const [index, setIndex] = useState(-1);
  const [done, setDone] = useState(false);
  const [fading, setFading] = useState(false);
  const [hidden, setHidden] = useState(false);
  const finishedRef = useRef(false);
  const finishRef = useRef(null);
  const onFinishRef = useRef(onFinish);
  onFinishRef.current = onFinish;
  const onLiftStartRef = useRef(onLiftStart);
  onLiftStartRef.current = onLiftStart;

  useEffect(() => {
    const finish = () => {
      if (finishedRef.current) return;
      finishedRef.current = true;
      setFading(true);
      setTimeout(() => {
        setDone(true);
        if (onLiftStartRef.current) onLiftStartRef.current();
        setTimeout(() => {
          setHidden(true);
          onFinishRef.current();
        }, 1000);
      }, 350);
    };
    finishRef.current = finish;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      finish();
      return;
    }

    let i = -1;
    let timer;
    const tick = () => {
      if (i >= WORDS.length - 1) {
        timer = setTimeout(finish, 300);
        return;
      }
      i += 1;
      setIndex(i);
      timer = setTimeout(tick, i === 0 ? 380 : 260);
    };
    timer = setTimeout(tick, 150);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (hidden) return null;

  return (
    <div
      className={'intro' + (done ? ' done' : '')}
      aria-label="Welcome introduction"
      aria-hidden={done}
    >
      <div
        className={'hello-stage' + (fading ? ' fading' : '')}
        aria-live="polite"
      >
        {WORDS.map((w, i) => (
          <p
            key={w}
            className={
              'hello-word' +
              (i === index ? ' active' : i < index ? ' leaving' : '')
            }
          >
            <span className="hello-bullet" aria-hidden="true">
              •
            </span>
            {w}
          </p>
        ))}
      </div>
      <div className="intro-meta">
        <span>{t.meta}</span>
        <button
          className="skip"
          type="button"
          onClick={() => finishRef.current && finishRef.current()}
        >
          {t.skip}
        </button>
      </div>
    </div>
  );
}
