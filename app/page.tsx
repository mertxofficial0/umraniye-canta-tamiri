'use client';

import { useState, useEffect, useRef } from 'react';

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
    <rect x="2" y="2" width="20" height="20" rx="6" stroke="currentColor" strokeWidth="2"/>
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2"/>
    <circle cx="17" cy="7" r="1.2" fill="currentColor"/>
  </svg>
);

const WhatsAppIcon = () => (
  <PhoneIcon />
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
  <svg
  width="18"
  height="18"
  viewBox="0 0 24 24"
  fill="none"
  className="text-slate-900"
>
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

const reviews = [
  {
    name: "Ahmet E.",
    text: "Çanta tamirinde gerçekten çok başarılılar. Fermuar değişimi sıfır gibi oldu.",
    avatar: "https://ui-avatars.com/api/?name=Ahmet+E&background=0f172a&color=fff",
  },
  {
    name: "Zeynep K.",
    text: "Valizimi çöpe atacakken ümraniyeçantatamiri.com'a getirdim. Şu an yepyeni gibi.",
    avatar: "https://ui-avatars.com/api/?name=Zeynep+K&background=0f172a&color=fff",
  },
  {
    name: "Mehmet A.",
    text: "İşçilik çok temiz, fiyatlar da gayet makul. Kesinlikle tavsiye ederim.",
    avatar: "https://ui-avatars.com/api/?name=Mehmet+A&background=0f172a&color=fff",
  },
  {
    name: "Elif D.",
    text: "Deri çantamı ilk günkü haline getirdiler. İlgi ve alaka çok iyi. Hizmetinizden memnun kaldım teşekkürler.",
    avatar: "https://ui-avatars.com/api/?name=Elif+D&background=0f172a&color=fff",
  },
  {
    name: "Burak T.",
    text: "Ümraniye’de böyle kaliteli bir yer bulabileceğimi sanmıyordum beni çok şaşırttılar ",
    avatar: "https://ui-avatars.com/api/?name=Burak+T&background=0f172a&color=fff",
  },
  {
    name: "Seda Y.",
    text: "Çok ilgili ve özenliydiler müşteri memuniyeti ve düzgün işçilik için. Artık başka yere gitmem.",
    avatar: "https://ui-avatars.com/api/?name=Seda+Y&background=0f172a&color=fff",
  },
];



const galleryItems = [
  { type: "image", src: "/gallery/dukkan-1.jpg" },
  { type: "image", src: "/gallery/valiz-1.jpg" },
  { type: "image", src: "/gallery/tamir-1.jpg" },
  { type: "video", src: "/gallery/video-1.mp4" },
  { type: "image", src: "/gallery/dukkan-2.jpg" },
  { type: "video", src: "/gallery/video-2.mp4" },
];

export default function Home() {
  const [reviewPage, setReviewPage] = useState(0);
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0);
const [pageReady, setPageReady] = useState(false);
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  /* ---------------- REVIEWS AUTO SWITCH ---------------- */
  useEffect(() => {
    const interval = setInterval(() => {
      setReviewPage(prev => (prev === 0 ? 1 : 0));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  /* ---------------- FADE-IN SECTIONS ---------------- */
  useEffect(() => {
    const sections = document.querySelectorAll('.fade-section');

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0,
        rootMargin: '0px 0px -10% 0px',
      }
    );

    sections.forEach(section => observer.observe(section));

    requestAnimationFrame(() => {
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          section.classList.add('is-visible');
        }
      });
    });

    return () => observer.disconnect();
  }, []);

  /* ---------------- SCROLL RESTORE FIX (KALACAK) ---------------- */
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, []);
useEffect(() => {
  // Loader + first paint sonrası
  const id = requestAnimationFrame(() => {
    lastScrollY.current = window.scrollY;
    setPageReady(true);
  });

  return () => cancelAnimationFrame(id);
}, []);

  /* ---------------- SLIDER AUTO SCROLL ---------------- */
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const CARD_COUNT = 3;

    const interval = setInterval(() => {
      const cardWidth = slider.clientWidth / CARD_COUNT;
      const next = slider.scrollLeft + cardWidth * CARD_COUNT;

      if (next >= slider.scrollWidth - slider.clientWidth) {
        slider.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        slider.scrollTo({ left: next, behavior: 'smooth' });
      }
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  /* ---------------- HEADER SCROLL LOGIC (🔥 ASIL FIX) ---------------- */
  useEffect(() => {
  if (!pageReady) return;

  let lastY = window.scrollY;

  const handleScroll = () => {
    const currentY = window.scrollY;
    const diff = currentY - lastY;

    // ⬆️ Yukarı scroll (küçük bile olsa)
    if (diff < -5) {
      setShowHeader(true);
    }

    // ⬇️ Aşağı scroll (biraz anlamlıysa)
    if (diff > 10 && currentY > 120) {
      setShowHeader(false);
    }

    lastY = currentY;
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  return () => window.removeEventListener("scroll", handleScroll);
}, [pageReady]);



  return (
    <main className="min-h-screen page-enter text-slate-900 bg-gradient-to-br from-slate-50 via-white to-slate-100">



{/* BLUR WRAPPER */}
  <div className={`transition-all duration-300 ${menuOpen ? 'blur-md scale-[0.98]' : ''}`}></div>
      


      {/* OVERLAY */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* MODERN MOBILE MENU */}
<div
  className={`
    fixed inset-0 z-50
    flex justify-end
    transition-all duration-500
    ${menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
  `}
>
  {/* PANEL */}
  <div
    className={`
      h-full w-[85%] max-w-sm
      bg-white/80 backdrop-blur-2xl
      shadow-[-20px_0_60px_rgba(0,0,0,0.25)]
      rounded-l-3xl
      p-6
      flex flex-col
      transform transition-transform duration-500
      ${menuOpen ? 'translate-x-0' : 'translate-x-full'}
    `}
  >

    {/* TOP BAR */}
    <div className="flex items-center justify-between mb-10">
      <div className="flex items-center gap-3">
        <div className="
          w-10 h-10 rounded-xl
          bg-gradient-to-br from-slate-900 to-slate-700
          flex items-center justify-center
          shadow-md
        ">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-white">
            <path d="M4 8h16l-1.5 11h-13L4 8z" stroke="currentColor" strokeWidth="1.5" />
            <path d="M8 8V6a4 4 0 018 0v2" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </div>

        <span className="font-semibold text-slate-900">
          Menü
        </span>
      </div>

      <button
        onClick={() => setMenuOpen(false)}
        className="
          w-10 h-10 rounded-xl
          bg-slate-900 text-white
          flex items-center justify-center
          hover:scale-105
          transition
        "
      >
        ✕
      </button>
    </div>

    {/* LINKS */}
    <nav className="flex flex-col gap-3">
  {[
    ['Ana Sayfa', '#anasayfa', <NavIconHome />],
    ['Hakkımızda', '#hakkimizda', <NavIconInfo />],
    ['Hizmetler', '#hizmetler', <NavIconServices />],
    ['Galeri', '#galeri', <NavIconGallery />],
    ['İletişim', '#iletisim', <NavIconContact />],
  ].map(([label, href, icon]) => (
    <a
      key={label as string}
      href={href as string}
      onClick={() => setMenuOpen(false)}
      className="
        group
        flex items-center gap-3
        px-5 py-4
        rounded-2xl
        bg-white/70
        backdrop-blur
        shadow-[0_10px_30px_rgba(0,0,0,0.12)]
        hover:bg-slate-900
        hover:text-white
        transition-all
        duration-300
      "
    >
      <span className="opacity-80 group-hover:opacity-100 transition">
        {icon}
      </span>
      <span className="font-medium">{label}</span>
      <span className="ml-auto opacity-0 group-hover:opacity-100 transition">
        →
      </span>
    </a>
  ))}
</nav>


    {/* FOOTER */}
    <div className="mt-auto pt-8 text-sm text-slate-400">
      © Ümraniye Çanta Tamiri
    </div>
  </div>
</div>


      {/* HERO */}
      <section
  id="anasayfa"
  className="pt-28 md:pt-32 pb-13 md:pb-18"

>



  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">


    {/* SOL TARAF – METİN */}
    <div>
      <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-8">
        Çanta & Valizlerinizi<br />
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600">
          İlk Günkü Haline
        </span>{' '}
        Getiriyoruz
      </h1>

      <p className="text-slate-600 text-lg mb-10 max-w-xl">
        Ümraniye’de profesyonel çanta, valiz tamiri 
        Kaliteli işçilik, estetik dokunuş ve güvenilir hizmet.
      </p>

      <a
  href="tel:05322451229"
  className="
    group
    inline-flex items-center
    gap-3
    px-6 py-3
    rounded-2xl
    bg-slate-900
    text-white

    shadow-[0_18px_45px_rgba(0,0,0,0.22)]
    hover:bg-slate-800
    hover:-translate-y-0.5
    transition-all
    duration-300

    will-change-transform
    translate-z-0
  "
>
  {/* TELEFON KUTUSU – SOLA YASLI */}
  <div
    className="
      w-10 h-10
      rounded-xl
      bg-white
      flex items-center justify-center
      shadow
      self-start        /* ✅ SOLA YASLAMA */
      flex-shrink-0
    "
  >
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      className="text-slate-900"
    >
      <path
        d="M22 16.92v3a2 2 0 01-2.18 2
        19.86 19.86 0 01-8.63-3.07
        19.5 19.5 0 01-6-6
        19.86 19.86 0 01-3.07-8.67
        A2 2 0 014.11 2h3
        a2 2 0 012 1.72
        12.84 12.84 0 00.7 2.81
        2 2 0 01-.45 2.11L8.09 9.91
        a16 16 0 006 6l1.27-1.27
        a2 2 0 012.11-.45
        12.84 12.84 0 002.81.7
        A2 2 0 0122 16.92z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>

  {/* YAZI ALANI – NETLEŞTİRİLDİ */}
  <div
    className="
      flex flex-col
      leading-tight
      text-left
      antialiased        /* ✅ BULANIKLIK GİTTİ */
      subpixel-antialiased
    "
  >
    <span className="text-sm font-semibold tracking-tight">
      Hemen Ara
    </span>
    <span className="text-xs text-white/80 tracking-wide">
      0532 245 12 29
    </span>
  </div>
</a>




    </div>

    {/* SAĞ TARAF – FOTOĞRAF */}
    <div className="hidden md:flex justify-center md:justify-end">
      <div
        className="
          bg-white
          rounded-[32px]
          p-4
          shadow-[0_30px_70px_rgba(0,0,0,0.18)]
          max-w-md
          w-full
          hover:-translate-y-1
          hover:shadow-[0_40px_90px_rgba(0,0,0,0.22)]
          transition-all
          duration-300
        "
      >
        <img
          src="/dukkan.jpg"
          alt="Ümraniye Çanta Tamiri Dükkan"
          className="rounded-2xl object-cover w-full h-full"
        />
      </div>
    </div>

  </div>
</section>

{/* SOCIAL MEDIA */}
<section id="sosyal" className="pt-20 pb-24 md:pt-0 md:pb-32 fade-section">

  <div className="max-w-7xl mx-auto px-6">

    {/* TITLE – GLASS DIŞINDA */}
    <div className="text-center mb-5">
      <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-1">
        Sosyal Medya
      </h2>
      <p className="text-slate-600 text-sm">
        Bize sosyal medya hesaplarımızdan ulaşın
      </p>
      
    </div>

    {/* GLASS CARD */}
    <div
      className="
        bg-white/60
        backdrop-blur-xl
        rounded-[28px] md:rounded-[32px]
        shadow-2xl

        px-4 py-4        /* 📱 MOBİL */
        md:px-8 md:py-6  /* 💻 DESKTOP */
      "
    >
      <div
        className="
          grid grid-cols-2 md:grid-cols-4
          gap-3 md:gap-6
        "
      >

        {/* INSTAGRAM */}
        <a
          href="https://www.instagram.com/umraniyecantatamiri/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
          className="
            group
            bg-white
            rounded-2xl
            p-3 md:p-5
            flex flex-col items-center justify-center
            gap-2
            shadow-[0_10px_30px_rgba(0,0,0,0.10)]
            hover:-translate-y-1
            hover:shadow-[0_20px_50px_rgba(0,0,0,0.18)]
            transition-all
            duration-300
          "
        >
          <div
            className="
              w-10 h-10 md:w-12 md:h-12
              rounded-full
              bg-gradient-to-br from-pink-500 to-purple-600
              flex items-center justify-center
              text-white
              group-hover:scale-110
              transition
            "
          >
            {/* Instagram Icon */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <rect x="2" y="2" width="20" height="20" rx="6" stroke="currentColor" strokeWidth="2"/>
              <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2"/>
              <circle cx="17" cy="7" r="1.2" fill="currentColor"/>
            </svg>
          </div>
          <span className="text-sm font-medium text-slate-900">
            Instagram
          </span>
        </a>

        {/* GOOGLE MAPS */}
        <a
          href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x14cac8f7c5e5e1fd:0xacbb508ee9915076?sa=X&ved=1t:8290&ictx=111&cshid=1765894992243922"
          target="_blank"
          rel="noopener noreferrer"
          className="
            group
            bg-white
            rounded-2xl
            p-3 md:p-5
            flex flex-col items-center justify-center
            gap-2
            shadow-[0_10px_30px_rgba(0,0,0,0.10)]
            hover:-translate-y-1
            hover:shadow-[0_20px_50px_rgba(0,0,0,0.18)]
            transition-all
            duration-300
          "
        >
          <div
            className="
              w-10 h-10 md:w-12 md:h-12
              rounded-full
              bg-emerald-500
              flex items-center justify-center
              text-white
              group-hover:scale-110
              transition
            "
          >
            {/* Map Icon */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M12 22s7-7.2 7-12a7 7 0 10-14 0c0 4.8 7 12 7 12z" stroke="currentColor" strokeWidth="2"/>
              <circle cx="12" cy="10" r="2.5" fill="currentColor"/>
            </svg>
          </div>
          <span className="text-sm font-medium text-slate-900">
            Google Maps
          </span>
        </a>

        {/* WHATSAPP */}
        <a
          href="https://wa.me/05322451229"
          target="_blank"
          rel="noopener noreferrer"
          className="
            group
            bg-white
            rounded-2xl
            p-3 md:p-5
            flex flex-col items-center justify-center
            gap-2
            shadow-[0_10px_30px_rgba(0,0,0,0.10)]
            hover:-translate-y-1
            hover:shadow-[0_20px_50px_rgba(0,0,0,0.18)]
            transition-all
            duration-300
          "
        >
          <div
  className="
    w-10 h-10 md:w-12 md:h-12
    rounded-full
    bg-green-500
    flex items-center justify-center
    text-white
    group-hover:scale-110
    transition
  "
>
  <PhoneIcon />
</div>

          <span className="text-sm font-medium text-slate-900">
            WhatsApp
          </span>
        </a>

        {/* TELEGRAM / FACEBOOK yerine İSTERSEN */}
        <a
          href="#"
          className="
            group
            bg-white
            rounded-2xl
            p-3 md:p-5
            flex flex-col items-center justify-center
            gap-2
            shadow-[0_10px_30px_rgba(0,0,0,0.10)]
            hover:-translate-y-1
            hover:shadow-[0_20px_50px_rgba(0,0,0,0.18)]
            transition-all
            duration-300
          "
        >
          <div
            className="
              w-10 h-10 md:w-12 md:h-12
              rounded-full
              bg-slate-900
              flex items-center justify-center
              text-white
              group-hover:scale-110
              transition
            "
          >
            {/* Link Icon */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M10 14a5 5 0 007 0l3-3" stroke="currentColor" strokeWidth="2"/>
              <path d="M14 10a5 5 0 00-7 0l-3 3" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </div>
          <span className="text-sm font-medium text-slate-900">
            Diğer
          </span>
        </a>

      </div>
    </div>

  </div>
</section>



      

{/* ABOUT */}
<section id="hakkimizda" className="py-15 fade-section">
  <div className="max-w-7xl mx-auto px-6">

    {/* TITLE – GLASS DIŞINDA */}
    <div className="text-center mb-6">
      <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-1">
        Hakkımızda
      </h2>
      <p className="text-slate-600 text-sm">
        Tecrübemiz ve ustalığımıza güveniyoruz
      </p>
    </div>

    {/* CONTENT – GLASS CARD */}
    <div
      className="
        bg-white/60
        backdrop-blur-xl
        rounded-[32px]
        shadow-2xl

        px-5 py-7
        md:px-12 md:py-14

        text-center
      "
    >
      <div className="space-y-5 max-w-4xl mx-auto text-slate-700 text-base leading-relaxed">

        <p>
          Ümraniye Çanta Tamiri olarak, çanta, valiz ve deri ürün tamiri alanında
          yıllara dayanan tecrübemizle müşterilerimize
          <span className="font-semibold text-slate-900">
            {" "}profesyonel, güvenilir ve kaliteli
          </span>{" "}
          hizmet sunuyoruz.
        </p>

        <p>
          Her biri farklı bir hikâyeye sahip olan çanta ve valizlerin yalnızca
          bir eşya değil, günlük hayatın vazgeçilmez bir parçası olduğunun
          bilinciyle hareket ediyoruz.
        </p>

        <p>
          Atölyemizde;{" "}
          <span className="font-semibold text-slate-900">fermuar değişimi</span>,{" "}
          <span className="font-semibold text-slate-900">sap ve askı onarımı</span>,{" "}
          <span className="font-semibold text-slate-900">deri yenileme</span> ve{" "}
          <span className="font-semibold text-slate-900">valiz tamiri</span>{" "}
          başta olmak üzere geniş bir hizmet yelpazesi sunuyoruz.
          Tüm işlemlerimizi titizlikle, geleneksel el işçiliğini modern tamir
          teknikleriyle birleştirerek gerçekleştiriyoruz.
        </p>

        <p>
          Amacımız yalnızca tamir etmek değil; ürünlerinizi
          <span className="font-semibold text-slate-900">
            {" "}ilk günkü sağlamlığına ve estetiğine
          </span>{" "}
          en yakın hale getirmektir.
        </p>

        <p>
          Müşteri memnuniyetini her zaman ön planda tutan hizmet anlayışımız
          sayesinde, Ümraniye başta olmak üzere İstanbul’un birçok noktasından
          tercih edilen bir atölye haline geldik.
          Şeffaf fiyatlandırma, temiz işçilik ve zamanında teslim prensipleriyle
          çalışıyoruz.
        </p>

        <p>
          Ümraniye Çanta Tamiri olarak; deneyimli ustalığımız, kaliteli
          malzeme kullanımımız ve müşteri odaklı yaklaşımımızla her zaman
          yanınızdayız.
        </p>

        <p className="font-semibold text-slate-900 pt-2">
          Çanta ve valizleriniz için doğru adresi arıyorsanız,
          sizi atölyemize bekliyoruz.
        </p>

      </div>
    </div>

  </div>
</section>

{/* REVIEWS */}
<section className="py-20 fade-section">
  <div className="max-w-7xl mx-auto px-6">

    {/* TITLE */}
    <div className="text-center mb-5">
      <h2 className="text-3xl font-semibold text-slate-900 mb-1">
        Google Yorumları
      </h2>
      <p className="text-slate-600 text-sm">
        Müşterilerimizin bizim hakkımızdaki görüşleri
      </p>
    </div>

    {/* GLASS CARD */}
    <div
      className="
        bg-white/60
        backdrop-blur-xl
        rounded-[28px] md:rounded-[32px]
        shadow-2xl
        px-3 py-3
        md:px-5 md:py-3
      "
    >
      {/* GOOGLE BADGE */}
      <div className="flex justify-center mb-4 md:mb-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white shadow">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
          <span className="text-yellow-400">★★★★★</span>
          <span className="font-semibold text-slate-700">4.7</span>
          <span className="text-slate-400">Google’dan</span>
        </div>
      </div>

      {/* REVIEW PAGES – SABİT ALAN */}
      <div className="relative min-h-[390px] md:min-h-[170px]">
        {[0, 1].map(page => (
          <div
            key={page}
            className={`
              grid grid-cols-1 md:grid-cols-3
              gap-3 md:gap-6
              transition-all duration-700 ease-in-out
              ${
                reviewPage === page
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6 absolute inset-0 pointer-events-none"
              }
            `}
          >
            {reviews.slice(page * 3, page * 3 + 3).map((review, i) => (
              <div
                key={i}
                className="
                  bg-white
                  rounded-2xl md:rounded-3xl

                  h-[120px] md:h-[160px]   /* 🔥 MOBİL + PC SABİT */

                  p-2.5 md:p-6
                  flex flex-col justify-between

                  shadow-[0_10px_28px_rgba(0,0,0,0.14)]
                  transition-all duration-300
                "
              >
                {/* HEADER */}
                <div className="flex items-center gap-3">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-8 h-8 md:w-9 md:h-9 rounded-full"
                  />
                  <div>
                    <p className="text-sm font-semibold text-slate-900 leading-none">
                      {review.name}
                    </p>
                    <div className="text-yellow-400 text-xs">★★★★★</div>
                  </div>
                </div>

                {/* COMMENT */}
                <p
                  className="
                    text-slate-700 text-sm leading-relaxed
                    overflow-hidden
                  "
                >
                  “{review.text}”
                </p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>

  </div>
</section>












{/* LOCATION */}
<section id="konum" className="py-15 fade-section">
  <div className="max-w-7xl mx-auto px-6">

    {/* TITLE (GLASS DIŞINDA) */}
    <div className="text-center mb-5">
      <h2 className="text-3xl font-semibold text-slate-900 mb-1">
        Konumumuz
      </h2>
      <p className="text-slate-600 text-sm">
        Atölyemize kolayca ulaşabilirsiniz
      </p>
    </div>

    {/* GLASS CARD – SADECE HARİTA + BAR */}
    <div
      className="
        bg-white/60
        backdrop-blur-xl
        rounded-[32px]
        shadow-2xl
        overflow-hidden
      "
    >
      {/* MAP */}
      <iframe
        src="https://www.google.com/maps?q=Atatürk,+Morgül+Sk.+No:4,+34764+Ümraniye/İstanbul&output=embed"
        className="w-full h-[460px] border-0"
        loading="lazy"
      />

      {/* MAP INFO BAR */}
      <div
        className="
          flex flex-col md:flex-row
          items-center
          justify-between
          gap-4
          px-8 py-5
          bg-white/70
          backdrop-blur-2xl
        "
      >
        {/* ADDRESS */}
        <div className="text-center md:text-left">
          <h3 className="text-sm font-semibold text-slate-900 mb-0.5">
            📍 Ümraniye Çanta Tamiri
          </h3>
          <p className="text-sm text-slate-600 leading-snug">
            Atatürk Mahallesi, Morgül Sk. No:4<br />
            34764 Ümraniye / İstanbul
          </p>
        </div>

        {/* BUTTON */}
        <a
          href="https://www.google.com/maps/search/?api=1&query=Atatürk+Morgül+Sk.+No:4+Ümraniye+İstanbul"
          target="_blank"
          rel="noopener noreferrer"
          className="
            px-6 py-2.5
            rounded-xl
            bg-slate-900
            text-white
            text-sm
            hover:bg-slate-800
            transition
            whitespace-nowrap
          "
        >
          Haritalarda Gör
        </a>
      </div>
    </div>

  </div>
</section>


      {/* SERVICES */}
<section id="hizmetler" className="py-28 md:py-15 fade-section">
  <div className="max-w-7xl mx-auto px-6">

    {/* TITLE – GLASS DIŞINDA */}
    <div className="text-center mb-5 md:mb-6">
      <h2 className="text-3xl font-semibold text-slate-900 mb-1">
        Hizmetlerimiz
      </h2>
      <p className="text-slate-600 text-sm">
        Çanta, valiz ve deri ürünleriniz için sunduğumuz hizmetler
      </p>
    </div>

    {/* CONTENT – GLASS CARD */}
    <div
      className="
        bg-white/60
        backdrop-blur-xl
        rounded-[28px] md:rounded-[32px]
        shadow-2xl

        px-4 py-5          /* 📱 MOBİL – DAHA KOMPAKT */
        md:px-10 md:py-12  /* 💻 DESKTOP */
      "
    >
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-4

          gap-3            /* 📱 MOBİL */
          md:gap-8         /* 💻 DESKTOP */
        "
      >
        {[
          'Fermuar Değişimi',
          'Deri Tamiri',
          'Valiz Tamiri',
          'Deri Mont Tamiri',
          'Kadın Çantası Tamiri',
          'Çocuk Çantası Tamiri',
          'Askı & Sap Onarımı',
          'Kemer Tamiri',
        ].map(item => (
          <div
            key={item}
            className="
              bg-white
              rounded-2xl

              p-3 md:p-5        /* 📱 KISA – 💻 NORMAL */
              text-center
              text-base

              min-h-[52px]      /* 📱 TÜM KARTLAR AYNI BOY */
              md:min-h-[72px]   /* 💻 DENGELİ */

              flex items-center justify-center

              border border-slate-200
              shadow-[0_8px_24px_rgba(0,0,0,0.08)]
              hover:shadow-[0_18px_45px_rgba(0,0,0,0.14)]
              hover:-translate-y-0.5
              transition-all
              duration-300
            "
          >
            <span className="font-medium text-slate-900 leading-snug">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>

  </div>
</section>




      {/* GALLERY */}
<section id="galeri" className="py-15 fade-section">
  <div className="max-w-7xl mx-auto px-6">

    {/* TITLE – GLASS DIŞINDA */}
    <div className="text-center mb-4">
      <h2 className="text-3xl font-semibold text-slate-900 mb-0.5">
        Galerimiz
      </h2>
      <p className="text-slate-600 text-sm">
        Atölyemizden ve yaptığımız çalışmalardan kareler
      </p>
    </div>

    {/* CONTENT – GLASS CARD */}
    <div
  className="
    bg-white/60
    backdrop-blur-xl
    rounded-[32px]
    shadow-2xl

    px-3 py-3        /* 📱 MOBİL */
    md:px-4 md:py-4 /* 💻 DESKTOP */
  "
>
  <div
    className="
      grid
      grid-cols-1
      sm:grid-cols-2
      md:grid-cols-3

      gap-3           /* 📱 MOBİL */
      md:gap-4        /* 💻 DESKTOP */
    "
  >

        {galleryItems.map((item, i) => (
          <div
            key={i}
            className="
              group
              rounded-3xl
              overflow-hidden
              bg-white
              shadow-[0_20px_50px_rgba(0,0,0,0.15)]
              hover:-translate-y-1
              hover:shadow-[0_35px_80px_rgba(0,0,0,0.25)]
              transition-all
              duration-300
            "
          >
            {item.type === "image" ? (
              <img
                src={item.src}
                alt="Ümraniye Çanta ve Valiz Tamiri"
                className="w-full aspect-[3/4] object-cover"
              />
            ) : (
              <video
                src={item.src}
                muted
                loop
                autoPlay
                playsInline
                preload="metadata"
                className="w-full aspect-[3/4] object-cover"
              />
            )}
          </div>
        ))}
      </div>
    </div>

  </div>
</section>



      <footer
  id="iletisim"
  className="relative mt-24 bg-transparent scroll-mt-32"
>


  

  {/* GLASS CARD */}
  <div className="relative max-w-7xl mx-auto px-6 pb-10">
    <div
      className="
        bg-white/70
        backdrop-blur-2xl
        rounded-[32px]
        shadow-[0_20px_50px_rgba(0,0,0,0.12)]
border border-white/40

        px-6 py-10
        md:px-12 md:py-10
      "
    >
      <div className="grid gap-10 md:grid-cols-3">

        {/* BRAND */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="
              w-11 h-11 rounded-xl
              bg-gradient-to-br from-slate-900 to-slate-700
              flex items-center justify-center
              shadow-lg
            ">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white">
                <path d="M4 8h16l-1.5 11h-13L4 8z" stroke="currentColor" strokeWidth="1.5" />
                <path d="M8 8V6a4 4 0 018 0v2" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </div>
            <span className="font-semibold text-slate-900 text-lg">
              ÜmraniyeÇantaTamiri.com
            </span>
          </div>

          <p className="text-slate-600 text-sm leading-relaxed max-w-sm">
            Çanta, valiz ve deri ürünleriniz için profesyonel tamir hizmeti.
            Temiz işçilik, kaliteli malzeme ve müşteri memnuniyeti odaklı çalışma.
          </p>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="text-slate-900 font-semibold mb-4">
            İletişim
          </h4>

          <ul className="space-y-3 text-sm text-slate-600">
            <li>
              📍 Atatürk Mahallesi, Morgül Sk. No:4  
              <br />
              Ümraniye / İstanbul
            </li>

            <li>
              📞 <a
                href="tel:+905322451229"
                className="hover:text-slate-900 transition"
              >
                0532 245 12 29
              </a>
            </li>

            <li>
              🕒 09:00 – 19:00
            </li>
          </ul>
        </div>

        {/* SOCIAL */}
        <div>
          <h4 className="text-slate-900 font-semibold mb-4">
            Bizi Takip Edin
          </h4>

          <div className="flex gap-3">

  {/* INSTAGRAM */}
  <a
    href="https://www.instagram.com/umraniyecantatamiri/"
    target="_blank"
    rel="noopener noreferrer"
    className="
      w-11 h-11
      rounded-xl
      bg-gradient-to-br from-pink-500 to-purple-600
      flex items-center justify-center
      text-white
      shadow
      hover:scale-110
      transition
    "
    aria-label="Instagram"
  >
    <InstagramIcon />
  </a>

  {/* WHATSAPP */}
  <a
    href="https://wa.me/905322451229"
    target="_blank"
    rel="noopener noreferrer"
    className="
      w-11 h-11
      rounded-xl
      bg-green-500
      flex items-center justify-center
      text-white
      shadow
      hover:scale-110
      transition
    "
    aria-label="WhatsApp"
  >
    <WhatsAppIcon />
  </a>

  {/* TELEFON */}
  <a
    href="tel:+905322451229"
    className="
      w-11 h-11
      rounded-xl
      bg-slate-900
      flex items-center justify-center
      text-white
      shadow
      hover:scale-110
      transition
    "
    aria-label="Telefon"
  >
    <PhoneIcon />
  </a>

</div>

        </div>
      </div>

      {/* DIVIDER */}
      <div className="h-px bg-slate-200 my-8" />

      {/* COPYRIGHT */}
      <div className="text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Ümraniye Çanta Tamiri • Tüm Hakları Saklıdır
      </div>
    </div>
  </div>
</footer>


    </main>
  );
}
