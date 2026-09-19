import Image from 'next/image'
export function PartnersCarousel() {
  return (
    <div className="w-full overflow-hidden bg-gray-300 mt-8">
      <div className="flex w-max animate-scroll-left">
        {/* Primeiro conjunto */}
        <div className="flex shrink-0 items-center">
          <Image src="/assets/parceiros/faixa1.png" alt="Parceiros" width={700} height={200} className="h-auto w-[700px] shrink-0" />
          <Image src="/assets/parceiros/faixa2.png" alt="Parceiros" width={700} height={200} className="h-auto w-[700px] shrink-0" />
        </div> {/* Segundo conjunto - duplicado para criar o loop infinito */}
        <div className="flex shrink-0 items-center">
          <Image src="/assets/parceiros/faixa3.png" alt="Parceiros" width={700} height={200} className="h-auto w-[700px] shrink-0" />
          <Image src="/assets/parceiros/faixa4.png" alt="Parceiros" width={700} height={200} className="h-auto w-[700px] shrink-0" />
        </div>
        <div className="flex shrink-0 items-center">
          <Image src="/assets/parceiros/faixa5.png" alt="Parceiros" width={700} height={200} className="h-auto w-[700px] shrink-0" />
        </div>
      </div>
    </div>
  )
}