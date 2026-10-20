import { useCallback, useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import Intro from "./components/Intro";
import SiteNav from "./components/SiteNav";
import MenuOverlay from "./components/MenuOverlay";
import PageTransition from "./components/PageTransition";
import Home from "./components/views/Home";
import About from "./components/views/About";
import Work from "./components/views/Work";
import Path from "./components/views/Path";
import Contact from "./components/views/Contact";
import { VIEW_ORDER, VIEW_PATHS, viewFromPath } from "./routes";
import { STRINGS } from "./i18n";

const REDUCED = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function initialView() {
  // legacy #hash support (migrated to clean path by the effect below)
  const h = window.location.hash.slice(1);
  if (h && VIEW_ORDER.includes(h)) return h;
  return viewFromPath(window.location.pathname);
}

export default function App() {
  const [view, setView] = useState(initialView);
  const [menuOpen, setMenuOpen] = useState(false);
  const [introGone, setIntroGone] = useState(REDUCED);
  const [entering, setEntering] = useState(null);
  const [introRise, setIntroRise] = useState(false);
  const [cover, setCover] = useState({ label: "", count: "", phase: "idle" });
  const [lang, setLang] = useState('en');
  const t = STRINGS[lang];

  const viewRef = useRef(view);
  const transitioningRef = useRef(false);
  const timers = useRef([]);
  const lenisRef = useRef(null);

  // Buttery smooth wheel scrolling (Lenis) on the active view's own
  // scroll container. Re-attached every time the view changes.
  useEffect(() => {
    if (REDUCED) return;
    const el = document.querySelector(".page-view.is-active");
    if (!el) return;
    const lenis = new Lenis({
      wrapper: el,
      content: el,
      autoRaf: true,
    });
    // keep Lenis in sync (e.g. commitView already reset this view to top)
    lenis.scrollTo(0, { immediate: true });
    lenisRef.current = lenis;
    return () => {
      lenis.destroy();
      if (lenisRef.current === lenis) lenisRef.current = null;
    };
  }, [view]);

  const later = (fn, ms) => {
    const id = setTimeout(fn, ms);
    timers.current.push(id);
  };
  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  const commitView = useCallback((name, writeHistory) => {
    setView(name);
    viewRef.current = name;
    const el = document.getElementById(name + "-view");
    if (el) el.scrollTop = 0;
    if (!REDUCED) {
      setEntering(name);
      const t = setTimeout(() => setEntering(null), 850);
      timers.current.push(t);
    }
    if (writeHistory) {
      const path = VIEW_PATHS[name];
      if (window.location.pathname !== path) {
        try {
          window.history.pushState({ view: name }, "", path);
        } catch {
          /* file:// and other non-http origins can't push paths */
        }
      }
    }
  }, []);

  const goToView = useCallback(
    (name, writeHistory = true) => {
      if (!VIEW_ORDER.includes(name)) name = "home";
      if (transitioningRef.current || name === viewRef.current) return;
      if (REDUCED) {
        commitView(name, writeHistory);
        return;
      }
      transitioningRef.current = true;
      const idx = VIEW_ORDER.indexOf(name);
      const count =
        String(idx + 1).padStart(2, "0") +
        " / " +
        String(VIEW_ORDER.length).padStart(2, "0");
      setCover({ label: STRINGS.en.transition[name], count, phase: "covering" });
      later(() => {
        setCover((c) => ({ ...c, phase: "holding" }));
      }, 2900); // panel naik 900ms + jeda 2000ms sebelum teks muncul
      later(() => {
        commitView(name, writeHistory);
        setCover((c) => ({ ...c, phase: "revealing" }));
      }, 4500); // teks tampil 1600ms
      later(() => {
        setCover((c) => ({ ...c, phase: "idle" }));
        transitioningRef.current = false;
      }, 5280); // panel turun 650ms + buffer
    },
    [commitView, t],
  );

  const goToViewRef = useRef(goToView);
  goToViewRef.current = goToView;

  // one-time migration: legacy #hash URLs -> clean paths
  useEffect(() => {
    const h = window.location.hash.slice(1);
    if (h && VIEW_ORDER.includes(h)) {
      try {
        window.history.replaceState({ view: h }, "", VIEW_PATHS[h]);
      } catch {
        /* file:// and other non-http origins can't rewrite paths */
      }
    }
  }, []);

  // back/forward buttons
  useEffect(() => {
    const onPop = () => {
      goToViewRef.current(viewFromPath(window.location.pathname), false);
    };
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  // lock body scroll while the index overlay is open
  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
  }, [menuOpen]);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  // Escape closes the overlay
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const handleNav = (name) => {
    if (menuOpen) {
      setMenuOpen(false);
      later(() => goToViewRef.current(name, true), 260);
    } else {
      goToView(name, true);
    }
  };

  return (
    <>
      <SiteNav
        activeView={view}
        menuOpen={menuOpen}
        onNav={handleNav}
        onOpenMenu={() => setMenuOpen(true)}
        t={STRINGS.en.nav}
        lang={lang}
        onLang={setLang}
      />
      <MenuOverlay
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        onNav={handleNav}
        t={STRINGS.en.menu}
        navLinks={STRINGS.en.nav.links}
      />

      <main className="page-stage">
        <Home
          active={view === "home"}
          entering={entering === "home"}
          onNav={handleNav}
          rise={introRise}
          t={t.home}
          workPath={VIEW_PATHS.work}
          contactPath={VIEW_PATHS.contact}
        />
        <About
          active={view === "about"}
          entering={entering === "about"}
          t={t.about}
        />
        <Work
          active={view === "work"}
          entering={entering === "work"}
          t={t.work}
        />
        <Path
          active={view === "path"}
          entering={entering === "path"}
          t={t.path}
        />
        <Contact
          active={view === "contact"}
          entering={entering === "contact"}
          t={t.contact}
        />
      </main>
      <PageTransition cover={cover} />
      {!introGone && (
        <Intro
          onFinish={() => setIntroGone(true)}
          t={STRINGS.en.intro}
          onLiftStart={() => {
            setIntroRise(true);
            // covers the masked headline reveal + staggered fade-ups (~1.6s)
            later(() => setIntroRise(false), 1750);
          }}
        />
      )}
    </>
  );
}
