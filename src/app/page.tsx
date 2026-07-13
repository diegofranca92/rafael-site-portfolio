import { Services } from "@/components/Services";
import { Timeline } from "@/components/Timeline";
import Image from "next/image";

export default function Home() {
  return (
    <main className='flex flex-col flex-1 items-center justify-center '>
      <section
        id='header'
        className='flex flex-col md:flex-row items-center justify-start gap-4 p-4 md:p-8 h-dvh'>
        <div className='md:w-[50%]'>
          <h1 className='text-6xl font-bold leading-[1.2]'>
            Educação, gestão inclusiva e estratégia antirracista
          </h1>
          <p className='text-lg mt-4'>
            Ajudo escolas, secretarias de educação e empresas a implementarem
            práticas de gestão, políticas e experiências educativas de
            letramento racial, equidade e inclusão.
          </p>
        </div>
      </section>
      <section className='p-4'>
        <h2 className='text-2xl font-bold'>
          Instituições e Secretarias que confiaram em Rafael Silva
        </h2>
        <div className='p-4 border-gray-900 border-2'></div>
      </section>
      <section
        id='servicos'
        className='flex flex-col items-center justify-center gap-4 mt-8 h-dvh'>
        <h2 className='text-2xl font-bold'>Meus Serviços</h2>
        <Services />
      </section>
      <section
        id='sobre'
        className='flex flex-col items-center justify-center gap-4 mt-8 h-dvh'>
        <h2 className='text-2xl font-bold'>Sobre Mim</h2>
        <div className="flex flex-col md:flex-row gap-4 justify-between">
          <div className="p-8 md:w-[50%]">
            <h3>
              Quem é <span className="text-blue-700">RAFAEL SILVA</span>
            </h3>
            <Image src='/assets/perfil.jpg' alt='Seguir no Linkedin' width={500} height={300} className="rounded-2xl" />
          </div>
          <div className="p-8 md:w-[50%]">
            COMO CHEGUEI ATÉ AQUI
            <Timeline />
          </div>
        </div>
        <p className='text-lg'>
          Ofereço serviços de desenvolvimento web, consultoria e treinamento.
        </p>
      </section>
      <section
        id='publicacoes'
        className='flex flex-col items-center justify-center gap-4 mt-8 h-dvh'>
        <h2 className='text-2xl font-bold'>Publicações</h2>
        <p className='text-lg'>
          Aqui você encontrará minhas publicações mais recentes.
        </p>
      </section>
      <section
        id='cursos'
        className='flex flex-col items-center justify-center gap-4 mt-8 h-dvh'>
        <h2 className='text-2xl font-bold'>Cursos</h2>
        <p className='text-lg'>
          Aqui você encontrará informações sobre os cursos que ofereço.
        </p>
      </section>
      <section
        id='newsletter'
        className='flex flex-col items-center justify-center gap-4 mt-8 h-dvh'>
        <h2 className='text-2xl font-bold'>Newsletter</h2>
        <p className='text-lg'>
          Inscreva-se na minha newsletter para receber atualizações sobre meus
          serviços, publicações e cursos.
        </p>
      </section>
      <section
        id='contato'
        className='flex flex-col items-center justify-center gap-4 mt-8 h-dvh'>
        <h2 className='text-2xl font-bold'>Contato</h2>
        <p className='text-lg'>
          Entre em contato comigo para mais informações sobre meus serviços.
        </p>
      </section>
    </main>
  )
}
