"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowRight, X } from "lucide-react";

export default function RemembranceModal() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const storageKeyRef = useRef("");

  const dismiss = () => {
    try {
      sessionStorage.setItem(storageKeyRef.current, "dismissed");
    } catch {
      // Closing the poster must not depend on browser storage.
    }
    dialogRef.current?.close();
  };

  useEffect(() => {
    const parts = new Intl.DateTimeFormat("en", {
      timeZone: "Europe/Istanbul",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).formatToParts(new Date());
    const date = Object.fromEntries(parts.map(({ type, value }) => [type, value]));
    if (date.month !== "11" || date.day !== "10") return;

    const storageKey = `aska-remembrance-dismissed-${date.year}-11-10`;
    storageKeyRef.current = storageKey;
    try {
      if (sessionStorage.getItem(storageKey)) return;
    } catch {
      // The poster can still open when browser storage is unavailable.
    }

    const dialog = dialogRef.current;
    if (!dialog) return;

    const previousOverflow = document.body.style.overflow;
    const onClose = () => {
      if (!dialog.open) document.body.style.overflow = previousOverflow;
    };

    dialog.addEventListener("close", onClose);
    dialog.showModal();
    document.body.style.overflow = "hidden";

    return () => {
      dialog.removeEventListener("close", onClose);
      dialog.close();
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  return (
    <dialog
      ref={dialogRef}
      className="remembrance-dialog"
      aria-labelledby="remembrance-title"
      aria-describedby="remembrance-description"
      onCancel={(event) => {
        event.preventDefault();
        dismiss();
      }}
      onClick={(event) => {
        if (event.target !== event.currentTarget) return;
        const bounds = event.currentTarget.getBoundingClientRect();
        if (
          event.clientX < bounds.left || event.clientX > bounds.right ||
          event.clientY < bounds.top || event.clientY > bounds.bottom
        ) dismiss();
      }}
    >
      <div className="relative grid sm:grid-cols-[0.95fr_1.05fr]">
        <button
          type="button"
          aria-label="Anma afişini kapat"
          onClick={dismiss}
          className="absolute right-3 top-3 z-10 rounded-full border border-white/25 bg-black/50 p-2 text-white transition hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          <X size={20} />
        </button>

        <div className="relative h-[240px] overflow-hidden bg-[#252525] sm:h-auto sm:min-h-[560px]">
          <Image
            src="/images/ataturk-1932.jpg"
            alt="Mustafa Kemal Atatürk'ün siyah beyaz portresi"
            fill
            sizes="(max-width: 639px) 100vw, 450px"
            loading="eager"
            className="object-cover object-top grayscale sm:object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent sm:bg-gradient-to-l" />
          <span className="absolute bottom-5 left-6 text-[10px] font-medium tracking-[0.3em] text-white/70 sm:bottom-7 sm:left-8">
            1881 — 1938
          </span>
        </div>

        <div className="flex flex-col justify-center px-7 pb-8 pt-3 sm:px-10 sm:py-14 lg:px-14">
          <p className="text-xs font-medium tracking-[0.4em] text-white/65">10 KASIM</p>
          <p aria-hidden="true" className="mt-4 font-serif text-[76px] leading-none tracking-[-0.06em] sm:mt-7 sm:text-[92px]">09:05</p>
          <div aria-hidden="true" className="my-6 h-px w-12 bg-white/50 sm:my-8" />
          <h2 id="remembrance-title" className="text-3xl font-light leading-tight tracking-tight sm:text-[38px]">
            Saygı, özlem<br />ve minnetle.
          </h2>
          <p id="remembrance-description" className="mt-5 max-w-xs text-sm leading-7 text-white/65">
            Cumhuriyetimizin kurucusu Gazi Mustafa Kemal Atatürk’ü sonsuz saygı ve özlemle anıyoruz.
          </p>
          <p className="mt-6 text-[10px] font-semibold tracking-[0.3em] text-white/40">ASKA BORU</p>
          <button
            type="button"
            onClick={dismiss}
            className="mt-7 inline-flex w-fit items-center gap-5 border-b border-white/50 pb-2 text-xs font-medium tracking-wide text-white transition hover:border-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            Siteye devam et <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </dialog>
  );
}
