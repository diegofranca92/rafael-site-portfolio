"use client";

import Image from "next/image";

export function Loading() {
  return (
    <div className="loading-screen fixed inset-0 z-9999 flex flex-col items-center justify-center bg-[#191919]">
      <div className="loading-content flex w-full max-w-150 flex-col items-center gap-10 px-6">
        <Image
          src="/assets/logo.svg"
          alt="Logomarca de Rafael Silva"
          width={600}
          height={40}
          priority
          className="loading-logo w-full max-w-150 h-auto"
        />

        <div className="loading-text-container text-2xl text-white">
          <span className="loading-text">Antirracista</span>
          <span className="loading-text">Educador</span>
          <span className="loading-text">Palestrante</span>
        </div>
      </div>
    </div>
  );
}