import { Bio } from '@/src/components/Bio'
import Carousel from '@/src/components/Carousel'
import { Contact } from '@/src/components/Contact'
import { Courses } from '@/src/components/Courses'
import { Newsletter } from '@/src/components/Newsletter'
import { PartnersCarousel } from '@/src/components/PartnersCarousel'
import { Services } from '@/src/components/Services'
import { Testimonials } from '@/src/components/Testimonials'
import { Timeline } from '@/src/components/Timeline'
import { TypewriterText } from '@/src/components/TypewriterText'
import { PageLoader } from './PageLoader'

export default function Home() {
  return (
    <div>
      <PageLoader />

      <section
        id='header'
        className='flex flex-col md:flex-row items-center justify-center md:justify-start gap-4 px-6 py-16 md:p-12 lg:p-20 min-h-[65vh] md:min-h-dvh text-white'>
        <div className='w-full md:w-[60%] lg:w-[50%]'>
          <h1 className='text-[clamp(1.6rem,5vw,3.75rem)] font-bold leading-[1.2] w-full wrap-break-word'>
            <TypewriterText
              text='Educação, gestão inclusiva e estratégia antirracista'
              speed={45}
              loopDelay={10000}
            />
          </h1>

          <p className='text-base sm:text-lg md:text-xl mt-4 text-gray-100 leading-relaxed'>
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
          <div className='flex flex-col md:flex-row gap-4 justify-between'>
            <Bio />
            <div className='relative text-2xl'>
              <h3>
                COMO CHEGUEI <br />
                <span className='text-blue-700'>ATÉ AQUI</span>
              </h3>
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
        <Testimonials />
        <Newsletter />
        <Contact />
      </main>
    </div>
  )
}
