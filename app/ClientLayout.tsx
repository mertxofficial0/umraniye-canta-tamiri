'use client';

import { useEffect, useRef, useState } from "react";

/* ---------------- NAV ICONS ---------------- */
const NavIconHome = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
    <path d="M3 11l9-8 9 8v9a2 2 0 0 1-2 2h-4v-6H9v6H5a2 2 0 0 1-2-2z"
      stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const NavIconInfo = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.7"/>
    <path d="M12 16v-4" stroke="currentColor" strokeWidth="1.7"/>
    <circle cx="12" cy="8" r="1" fill="currentColor"/>
  </svg>
);

const NavIconServices = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
    <path d="M3 12h18M3 6h18M3 18h18"
      stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
  </svg>
);

const NavIconGallery = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
    <rect x="3" y="3" width="18" height="18" rx="3"
      stroke="currentColor" strokeWidth="1.7"/>
    <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor"/>
    <path d="M21 15l-5-5-8 8" stroke="currentColor" strokeWidth="1.7"/>
  </svg>
);

const NavIconContact = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path
      d="M5 4h4l2 5-2.5 1.5a12 12 0 005.5 5.5L16 13l5 2v4
      a2 2 0 0 1-2 2
      c-8.28 0-15-6.72-15-15
      a2 2 0 0 1 2-2z"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/* ---------------- SOCIAL ICONS ---------------- */
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
    <rect x="2" y="2" width="20" height="20" rx="6" stroke="currentColor" strokeWidth="2"/>
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2"/>
    <circle cx="17" cy="7" r="1.2" fill="currentColor"/>
  </svg>
);

const PhoneIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2
      19.86 19.86 0 0 1-8.63-3.07
      19.5 19.5 0 0 1-6-6
      19.86 19.86 0 0 1-3.07-8.67
      A2 2 0 0 1 4.11 2h3
      a2 2 0 0 1 2 1.72
      12.84 12.84 0 0 0 .7 2.81
      a2 2 0 0 1-.45 2.11
      L8.09 9.91
      a16 16 0 0 0 6 6
      l1.27-1.27
      a2 2 0 0 1 2.11-.45
      12.84 12.84 0 0 0 2.81.7
      A2 2 0 0 1 22 16.92z"
    />
  </svg>
);

/* ---------------- LOADER ---------------- */
function PageLoader({ visible }: { visible: boolean }) {
  return (
    <div className={`fixed inset-0 z-[9999] flex items-center justify-center
      bg-gradient-to-br from-slate-50 via-white to-slate-100
      transition-all duration-300
      ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
      <div className="w-14 h-14 rounded-full border-[3px] border-slate-300 border-t-slate-900 animate-spin" />
    </div>
  );
}

/* ---------------- CLIENT LAYOUT ---------------- */
export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [showHeader, setShowHeader] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
  const id = requestAnimationFrame(() => {
    lastScrollY.current = window.scrollY;
    setLoading(false);
  });

  return () => cancelAnimationFrame(id);
}, []);


  useEffect(() => {
    if (loading) return;
    const onScroll = () => {
      const y = window.scrollY;
      const diff = y - lastScrollY.current;
      if (diff > 10 && y > 120) setShowHeader(false);
      if (diff < -5) setShowHeader(true);
      lastScrollY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [loading]);

  return (
    <>
      <PageLoader visible={loading} />

      {/* HEADER */}
      <header
  className={`fixed top-4 left-1/2 -translate-x-1/2
  w-[95%] max-w-7xl z-50
  bg-white/80 backdrop-blur-2xl
  rounded-2xl
  shadow-[0_10px_40px_rgba(0,0,0,0.12)]
  transition-all duration-500
  ${showHeader ? "translate-y-0 opacity-100" : "-translate-y-[120%] opacity-0"}`}
>
  <div className="px-6 py-4 flex items-center justify-between">

    {/* LOGO */}
    <div className="flex items-center gap-3">
      <div
        className="
          w-10 h-10
          rounded-xl
          bg-slate-900
          text-white
          flex items-center justify-center
          shadow
        "
      >
        {/* BAG ICON */}
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M4 8h16l-1.5 11h-13L4 8z" stroke="currentColor" strokeWidth="1.5" />
          <path d="M8 8V6a4 4 0 018 0v2" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </div>

      <span className="font-semibold text-slate-900">
        ÜmraniyeÇantaTamiri.com
      </span>
    </div>

    {/* DESKTOP NAV */}
    <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
      <a href="#anasayfa" className="flex items-center gap-1.5 hover:text-slate-900 transition">
        <NavIconHome />
        Ana Sayfa
      </a>

      <a href="#hakkimizda" className="flex items-center gap-1.5 hover:text-slate-900 transition">
        <NavIconInfo />
        Hakkımızda
      </a>

      <a href="#hizmetler" className="flex items-center gap-1.5 hover:text-slate-900 transition">
        <NavIconServices />
        Hizmetler
      </a>

      <a href="#galeri" className="flex items-center gap-1.5 hover:text-slate-900 transition">
        <NavIconGallery />
        Galeri
      </a>

      <a href="#iletisim" className="flex items-center gap-1.5 hover:text-slate-900 transition">
        <NavIconContact />
        İletişim
      </a>
    </nav>

    {/* MOBILE BUTTON */}
    <button
      onClick={() => setMenuOpen(true)}
      className="md:hidden w-11 h-11 rounded-xl bg-slate-900 text-white flex items-center justify-center"
    >
      ☰
    </button>

  </div>
</header>


      {/* MOBILE MENU */}
      <div className={`fixed inset-0 z-50 ${menuOpen ? "" : "pointer-events-none"}`}>
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity ${menuOpen ? "opacity-100" : "opacity-0"}`}
          onClick={() => setMenuOpen(false)}
        />
        <div className={`absolute right-0 top-0 h-full w-[85%] max-w-sm
          bg-white/90 backdrop-blur-2xl rounded-l-3xl p-6 flex flex-col
          transition-transform duration-500
          ${menuOpen ? "translate-x-0" : "translate-x-full"}`}>

          <div className="flex justify-between items-center mb-6">
            
            <button
  onClick={() => setMenuOpen(false)}
  className="
    w-10 h-10
    rounded-xl
    bg-slate-900
    text-white
    flex items-center justify-center
    text-lg
    hover:scale-105
    transition
  "
>
  ✕
</button>

          </div>

          <nav className="flex flex-col gap-3">

  {[
    { label: "Ana Sayfa", href: "#anasayfa", icon: <NavIconHome /> },
    { label: "Hakkımızda", href: "#hakkimizda", icon: <NavIconInfo /> },
    { label: "Hizmetler", href: "#hizmetler", icon: <NavIconServices /> },
    { label: "Galeri", href: "#galeri", icon: <NavIconGallery /> },
    { label: "İletişim", href: "#iletisim", icon: <NavIconContact /> },
  ].map(item => (
    <a
      key={item.label}
      href={item.href}
      onClick={() => setMenuOpen(false)}
      className="
        flex items-center gap-4
        px-5 py-4
        rounded-2xl
        bg-white
        shadow
        text-slate-900
        text-base
        hover:bg-slate-900
        hover:text-white
        transition
      "
    >
      <span className="opacity-80">
        {item.icon}
      </span>

      <span className="font-medium">
        {item.label}
      </span>
    </a>
  ))}

</nav>


          {/* SOCIAL ICONS */}
          <div className="mt-auto pt-8 flex justify-center gap-4">
            <a
              href="https://www.instagram.com/umraniyecantatamiri/?hl=en"
              target="_blank"
              className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-purple-600
              text-white flex items-center justify-center hover:scale-110 transition">
              <InstagramIcon />
            </a>

            <a
              href="https://wa.me/905322451229"
              target="_blank"
              className="w-12 h-12 rounded-xl bg-green-500 text-white
              flex items-center justify-center hover:scale-110 transition">
              <PhoneIcon />
            </a>

            <a
              href="tel:+905322451229"
              className="w-12 h-12 rounded-xl bg-slate-900 text-white
              flex items-center justify-center hover:scale-110 transition">
              <PhoneIcon />
            </a>
          </div>
        </div>
      </div>

      <div>
  {children}
</div>

    </>
  );
}
