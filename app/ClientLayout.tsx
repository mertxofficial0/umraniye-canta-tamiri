'use client';

import { useEffect, useState } from "react";

function PageLoader({ visible }: { visible: boolean }) {
  return (
    <div
      className={`
        fixed inset-0 z-[9999]
        flex items-center justify-center
        bg-gradient-to-br from-slate-50 via-white to-slate-100
        transition-all duration-500 ease-in-out
        ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}
      `}
    >
      <div className="flex flex-col items-center gap-4">
        <div className="w-14 h-14 rounded-full border-[3px] border-slate-300 border-t-slate-900 animate-spin" />
        <span className="text-sm text-slate-500 tracking-wide">
          Yükleniyor...
        </span>
      </div>
    </div>
  );
}

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const done = () => setTimeout(() => setLoading(false), 400);

    if (document.readyState === "complete") {
      done();
    } else {
      window.addEventListener("load", done);
      return () => window.removeEventListener("load", done);
    }
  }, []);

  return (
    <>
      <PageLoader visible={loading} />
      <div
        className={`
          transition-all duration-700 ease-out
          ${loading ? "opacity-0 scale-[0.98]" : "opacity-100 scale-100"}
        `}
      >
        {children}
      </div>
    </>
  );
}
