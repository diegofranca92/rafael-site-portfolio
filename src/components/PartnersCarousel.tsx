import Image from 'next/image'

const partnerBanners = Array.from({ length: 5 }, (_, index) =>
  `/assets/parceiros/faixa${index + 1}.png`,
)

export function PartnersCarousel() {
  return (
    <div className="w-full overflow-hidden bg-[#e5e5e5] mt-8">
      <div className="flex w-max animate-scroll-left gap-8" aria-label="Parceiros">
        {[...partnerBanners, ...partnerBanners].map((src, index) => (
          <Image
            key={`${src}-${index}`}
            src={src}
            alt={index < partnerBanners.length ? 'Parceiros' : ''}
            aria-hidden={index >= partnerBanners.length}
            width={600}
            height={150}
          />
        ))}
      </div>
    </div>
  )
}