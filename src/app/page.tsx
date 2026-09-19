
import { Bio } from "../components/Bio";
import Carousel from "../components/Carousel";
import { Contact } from "../components/Contact";
import { Courses } from "../components/Courses";
import { Newsletter } from "../components/Newsletter";
import { PartnersCarousel } from "../components/PartnersCarousel";
import { Services } from "../components/Services";
import { Timeline } from "../components/Timeline";

export default function Home() {

  return (
    <div>
      <section
        id='header'
        className='flex flex-col md:flex-row items-center justify-start gap-4 p-4 md:p-8 min-h-dvh text-white'>
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
        <h2 className='text-center text-2xl font-bold mt-8 uppercase'>
          Quem já caminhou comigo
        </h2>
        <PartnersCarousel />
      </section>
      <main className='flex flex-col flex-1 items-center justify-center gap-8'>
        <section
          id='servicos'
          className='flex flex-col items-center justify-center gap-4 min-h-dvh px-8 py-20'>
          <Services />
        </section>
        <section
          id='sobre'
          className='flex flex-col items-center justify-center gap-4 min-h-dvh px-8'>
          <div className="flex flex-col md:flex-row gap-4 justify-between">
            <Bio />
            <div className="relative text-2xl">
              <h3>COMO CHEGUEI <br /><span className="text-blue-700">ATÉ AQUI</span></h3>
              <Timeline />
            </div>
          </div>
        </section>
        <section
          id='publicacoes'
          className='flex flex-col items-center justify-center gap-4 mt-8'>
          <h2 className='text-2xl font-bold'>Publicações</h2>
          <p className='text-lg'>
            Aqui você encontrará minhas publicações mais recentes.
          </p>
          <Carousel />
        </section>
        <Courses />
        <Newsletter />
        <Contact />
      </main>
    </div>
  )
}
