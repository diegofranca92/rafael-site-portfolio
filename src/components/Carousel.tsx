"use client";

import Image from "next/image";
import { useRef } from "react";

export default function Carousel() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const publicacoes = Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    src: `/assets/publicacoes/${i + 1}.png`,
  }));

  const goToSlide = (slideId: number) => {
    const carousel = carouselRef.current;
    const slide = document.getElementById(`slide${slideId}`);

    if (!carousel || !slide) {
      return;
    }

    carousel.scrollTo({
      left: slide.offsetLeft,
      behavior: "smooth",
    });
  };

  return (
    <div
      ref={carouselRef}
      className="carousel w-full scroll-smooth"
    >
      {publicacoes.map((item) => {
        const slideId = item.id;

        const previousSlide =
          item.id === 1 ? publicacoes.length : item.id - 1;

        const nextSlide =
          item.id === publicacoes.length ? 1 : item.id + 1;

        return (
          <div
            key={`slide-${slideId}`}
            id={`slide${slideId}`}
            className="carousel-item relative w-full"
          >
            <div className="w-full flex flex-col md:flex-row flex-wrap gap-4 items-center justify-center m-auto px-4">
              <Image
                src={item.src}
                alt={`Publicação ${item.id}`}
                width={400}
                height={300}
                className="w-full max-w-[400px] h-auto rounded-2xl"
              />

              <div className="w-full md:w-auto max-w-[600px]">
                <p className="max-w-150">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Quis, eum nemo reiciendis natus ducimus odio eos debitis et
                  impedit quibusdam mollitia, voluptatibus, aliquid repellat
                  perferendis! Facilis pariatur sapiente hic esse.
                </p>

                <div className="flex gap-4 mt-8">
                  <button
                    type="button"
                    onClick={() => goToSlide(previousSlide)}
                    className="btn btn-circle"
                    aria-label="Publicação anterior"
                  >
                    ❮
                  </button>

                  <button
                    type="button"
                    onClick={() => goToSlide(nextSlide)}
                    className="btn btn-circle"
                    aria-label="Próxima publicação"
                  >
                    ❯
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}