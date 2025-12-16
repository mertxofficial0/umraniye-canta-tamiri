'use client';

import { useState, useEffect, useRef } from 'react';
const reviews = [
  {
    name: "Ahmet E.",
    text: "Çanta tamirinde gerçekten çok başarılılar. Fermuar değişimi sıfır gibi oldu.",
    avatar: "https://ui-avatars.com/api/?name=Ahmet+E&background=0f172a&color=fff",
  },
  {
    name: "Zeynep K.",
    text: "Valizimi çöpe atacakken buraya getirdim. Şu an yepyeni gibi.",
    avatar: "https://ui-avatars.com/api/?name=Zeynep+K&background=0f172a&color=fff",
  },
  {
    name: "Mehmet A.",
    text: "İşçilik çok temiz, fiyatlar da gayet makul. Kesinlikle tavsiye ederim.",
    avatar: "https://ui-avatars.com/api/?name=Mehmet+A&background=0f172a&color=fff",
  },
  {
    name: "Elif D.",
    text: "Deri çantamı ilk günkü haline getirdiler. İlgi ve alaka çok iyi.",
    avatar: "https://ui-avatars.com/api/?name=Elif+D&background=0f172a&color=fff",
  },
  {
    name: "Burak T.",
    text: "Ümraniye’de böyle kaliteli bir yer olması büyük şans.",
    avatar: "https://ui-avatars.com/api/?name=Burak+T&background=0f172a&color=fff",
  },
  {
    name: "Seda Y.",
    text: "Hızlı teslim ve çok düzgün işçilik. Artık başka yere gitmem.",
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

useEffect(() => {
  const interval = setInterval(() => {
    setReviewPage(prev => (prev === 0 ? 1 : 0));
  }, 5000);

  return () => clearInterval(interval);
}, []);

  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);


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

  // 🔥 MOBİL FAILSAFE
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

useEffect(() => {
  const slider = sliderRef.current;
  if (!slider) return;

  const CARD_COUNT = 3;
  const interval = setInterval(() => {
    const cardWidth = slider.clientWidth / CARD_COUNT;

    const next =
      slider.scrollLeft + cardWidth * CARD_COUNT;

    if (next >= slider.scrollWidth - slider.clientWidth) {
      slider.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      slider.scrollTo({ left: next, behavior: 'smooth' });
    }
  }, 4000);

  return () => clearInterval(interval);
}, []);

useEffect(() => {
  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
      // aşağı iniyor
      setShowHeader(false);
    } else {
      // yukarı çıkıyor
      setShowHeader(true);
    }

    lastScrollY.current = currentScrollY;
  };

  window.addEventListener("scroll", handleScroll, { passive: true });

  return () => window.removeEventListener("scroll", handleScroll);
}, []);




  return (
    <main className="min-h-screen text-slate-900 bg-gradient-to-br from-slate-50 via-white to-slate-100">

{/* BLUR WRAPPER */}
  <div className={`transition-all duration-300 ${menuOpen ? 'blur-md scale-[0.98]' : ''}`}></div>
      {/* MODERN FLOATING HEADER */}
<header
  className={`
    fixed top-4 left-1/2 -translate-x-1/2
    w-[95%] max-w-7xl z-50
    bg-white/70 backdrop-blur-2xl
    rounded-2xl
    shadow-[0_10px_40px_rgba(0,0,0,0.12)]
    transition-all duration-500 ease-in-out
    ${
      showHeader
        ? "translate-y-0 opacity-100"
        : "-translate-y-[120%] opacity-0"
    }
    ${menuOpen ? 'blur-md opacity-70' : ''}
  `}
>



  <div className="px-6 py-4 flex items-center justify-between">

    {/* LOGO */}
    <div className="flex items-center gap-3">
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

      <span className="font-semibold tracking-wide text-slate-900 text-lg">
        Ümraniye Çanta Tamiri
      </span>
    </div>

    {/* DESKTOP MENU */}
    <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
      {[
        ['Ana Sayfa', '#anasayfa'],
        ['Hakkımızda', '#hakkimizda'],
        ['Hizmetler', '#hizmetler'],
        ['Galeri', '#galeri'],
        ['İletişim', '#iletisim'],
      ].map(([label, href]) => (
        <a
          key={label}
          href={href}
          className="
            relative text-slate-600
            hover:text-slate-900
            transition
            after:absolute after:left-0 after:-bottom-1
            after:h-[2px] after:w-0
            after:bg-slate-900
            after:transition-all
            hover:after:w-full
          "
        >
          {label}
        </a>
      ))}
    </nav>

    {/* MOBILE BUTTON */}
    <button
      onClick={() => setMenuOpen(true)}
      className="
        md:hidden
        w-11 h-11
        rounded-xl
        bg-slate-900 text-white
        flex items-center justify-center
        shadow-lg
        hover:scale-105
        transition
      "
    >
      ☰
    </button>
  </div>
</header>


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
        ['Ana Sayfa', '#anasayfa'],
        ['Hakkımızda', '#hakkimizda'],
        ['Hizmetler', '#hizmetler'],
        ['Galeri', '#galeri'],
        ['İletişim', '#iletisim'],
      ].map(([label, href], i) => (
        <a
          key={label}
          href={href}
          onClick={() => setMenuOpen(false)}
          className="
            group
            flex items-center justify-between
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
          <span className="font-medium">{label}</span>
          <span className="opacity-0 group-hover:opacity-100 transition">
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
      <section id="anasayfa" className="pt-28 md:pt-32 pb-32">
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
        Ümraniye’de profesyonel çanta, valiz ve deri tamiri.
        Kaliteli işçilik, estetik dokunuş ve güvenilir hizmet.
      </p>

      <a
        href="tel:05555555555"
        className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl
        bg-slate-900 text-white shadow-xl hover:bg-slate-800
        hover:scale-[1.02] transition"
      >
        📞 Hemen Ara
      </a>
    </div>

    {/* SAĞ TARAF – FOTOĞRAF */}
    <div className="flex justify-center md:justify-end">
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



      {/* ABOUT */}
<section id="hakkimizda" className="py-32 fade-section">
  <div className="max-w-7xl mx-auto px-6">

    {/* TITLE – GLASS DIŞINDA */}
    <div className="text-center mb-5">
      <h2 className="text-4xl font-semibold text-slate-900 mb-1">
        Hakkımızda
      </h2>
      <p className="text-slate-600 text-lg">
        Tecrübemiz ve ustalığımızla çantalarınıza yeniden hayat veriyoruz
      </p>
    </div>

    {/* CONTENT – GLASS CARD */}
    <div
      className="
        bg-white/60
        backdrop-blur-xl
        rounded-[32px]
        shadow-2xl
        px-10 py-14
        text-center
      "
    >
      <p className="text-slate-700 text-lg leading-relaxed max-w-4xl mx-auto">
        Ümraniye Çanta Tamiri olarak yılların verdiği tecrübe ve ustalıkla
        çanta, valiz ve deri ürünlerinizi ilk günkü görünümüne kavuşturuyoruz.
        Geleneksel el işçiliğini modern tamir teknikleriyle birleştirerek
        kaliteli, güvenilir ve uzun ömürlü çözümler sunuyoruz.
      </p>
    </div>

  </div>
</section>

      
{/* REVIEWS */}
<section className="py-32 fade-section">
  <div className="max-w-7xl mx-auto px-6">

    {/* TITLE – GLASS DIŞINDA */}
    <div className="text-center mb-5">
      <h2 className="text-4xl font-semibold text-slate-900 mb-1">
        Google Yorumları
      </h2>
      <p className="text-slate-600 text-lg">
        Müşterilerimizin bizim hakkımızdaki görüşleri
      </p>
    </div>

    {/* GLASS CARD – BADGE + YORUMLAR */}
    <div
      className="
        bg-white/60
        backdrop-blur-xl
        rounded-[32px]
        shadow-2xl
        px-6 md:px-10
        py-8
      "
    >
      {/* GOOGLE BADGE */}
      <div className="flex justify-center mb-6">
        <div
          className="
            inline-flex items-center gap-2
            px-4 py-1.5
            rounded-full
            bg-white
            shadow-[0_6px_20px_rgba(0,0,0,0.15)]
            text-sm
          "
        >
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
          <span className="text-yellow-400">★★★★★</span>
          <span className="font-semibold text-slate-700">4.7</span>
          <span className="text-slate-400">Google’dan</span>
        </div>
      </div>

      {/* REVIEWS GRID */}
      <div className="relative">
        {[0, 1].map(page => (
          <div
            key={page}
            className={`
              grid grid-cols-1 md:grid-cols-3 gap-6
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
                  rounded-3xl
                  p-6
                  shadow-[0_15px_40px_rgba(0,0,0,0.14)]
                  hover:-translate-y-1
                  hover:shadow-[0_25px_65px_rgba(0,0,0,0.22)]
                  transition-all
                  duration-300
                "
              >
                {/* HEADER */}
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-9 h-9 rounded-full"
                  />
                  <div>
                    <p className="text-sm font-semibold text-slate-900 leading-none">
                      {review.name}
                    </p>
                    <div className="text-yellow-400 text-xs">★★★★★</div>
                  </div>
                </div>

                {/* COMMENT */}
                <p className="text-slate-700 text-sm leading-relaxed">
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
<section id="konum" className="py-32 fade-section">
  <div className="max-w-7xl mx-auto px-6">

    {/* TITLE (GLASS DIŞINDA) */}
    <div className="text-center mb-5">
      <h2 className="text-4xl font-semibold text-slate-900 mb-1">
        Konumumuz
      </h2>
      <p className="text-slate-600 text-lg">
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
      <section id="hizmetler" className="py-32 fade-section">

        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white/60 backdrop-blur-xl rounded-[32px] shadow-2xl px-10 py-14">
            <div className="text-center mb-14">
              <h2 className="text-4xl font-semibold mb-4 text-slate-900">Hizmetlerimiz</h2>
              <p className="text-slate-600 text-lg">
                Çanta, valiz ve deri ürünleriniz için sunduğumuz hizmetler
              </p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
              {[
  'Fermuar Değişimi',
  'Askı & Sap Onarımı',
  'Deri Tamiri',
  'Valiz Tamiri',
  'Deri Mont Tamiri',
  'Kadın Çantası Tamiri',
  'Çocuk Çantası Tamiri',
  'Kemer Tamiri',
].map(item => (

                <div
                  key={item}
                  className="
  bg-white
  rounded-2xl
  p-6
  text-center
  border border-slate-200
  shadow-[0_10px_30px_rgba(0,0,0,0.08)]
  hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)]
  hover:-translate-y-1
  transition-all
  duration-300
"

                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* GALLERY */}
<section id="galeri" className="py-32 fade-section">
  <div className="max-w-7xl mx-auto px-6">

    {/* TITLE – GLASS DIŞINDA */}
    <div className="text-center mb-6">
      <h2 className="text-4xl font-semibold text-slate-900 mb-0.5">
        Galerimiz
      </h2>
      <p className="text-slate-600 text-lg">
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
        px-8 py-10
      "
    >
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
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



      {/* CONTACT */}
      <section id="iletisim" className="py-32 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-semibold mb-6">İletişim</h2>
          <p className="mb-2">📍 Ümraniye / İstanbul</p>
          <p className="mb-2">📞 0555 555 55 55</p>
          <p>🕒 09:00 – 19:00</p>

        </div>
      </section>

    </main>
  );
}
