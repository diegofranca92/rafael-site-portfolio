import Image from "next/image";

export function Loading() {
  return (
    <div>
      <Image src='/assets/logo.svg' alt='Logomarca de Rafael Silva' width={600} height={40} />
      <span className="text-rotate text-2xl text-white">
        <span>
          <span>Educador</span>
          <span>Palestrante</span>
          <span>Antirracista</span>
        </span>
      </span>
    </div>
  )
}

