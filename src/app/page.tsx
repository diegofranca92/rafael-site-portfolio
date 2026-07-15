import { Services } from "@/components/Services";
import { Timeline } from "@/components/Timeline";
import Image from "next/image";

export default function Home() {
  return (
      <div>
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
    <main className='flex flex-col flex-1 items-center justify-center gap-8'>
      <section className='p-4'>
        <h2 className='text-2xl font-bold'>
          Instituições e Secretarias que confiaram em Rafael Silva
        </h2>
        <div className='p-4 border-gray-900 border-2'></div>
      </section>
      <section
        id='servicos'
        className='flex flex-col items-center justify-center gap-4 min-h-dvh h-dvh px-8 py-20'>
        <h2 className='text-2xl font-bold'>Meus Serviços</h2>
        <Services />
      </section>
      <section
        id='sobre'
        className='flex flex-col items-center justify-center gap-4 min-h-dvh h-dvh px-8 py-20 mt-20'>
        <h2 className='text-2xl font-bold'>Sobre Mim</h2>
        <div className="flex flex-col md:flex-row gap-4 justify-between">
          <div className="p-8 md:w-[50%] flex flex-col gap-4">
            <h3>
              Quem é <span className="text-blue-700">RAFAEL SILVA</span>
            </h3>
            <Image src='/assets/perfil.jpg' alt='Seguir no Linkedin' width={500} height={300} className="rounded-2xl" />
            <p className="mt-8">
              Construir uma cultura de equidade e promover uma educação antirracista e letramento racial na
              prática é um processo complexo, e sabemos que não existe receita pronta, certo? Entre o
              letramento da equipe, a revisão curricular, o engajamento da liderança e a gestão da mudança, o
              caminho pode parecer desafiador. <br /> <br />
              No entanto, não há futuro com desenvolvimento e cidadania para o Brasil se não
              pensarmos na inclusão da população não branca. <br /> <br />
              Seja construir maior senso de pertencimento aos estudantes com objetivo de melhorar sua
              performance escolar, ou incluir e desenvolver profissionais não brancos em empresas, é
              essencial para um futuro mais equitativo e próspero. <br /> <br />
              Por isso, coloco toda minha formação em História e Geografia, especialização em
              Educação das Relações Étnico-Raciais, Diversidade e Inclusão nas organizações e
              Gestão Escolar nesse processo. <br /> <br />
              Acredito no propósito dessa tarefa por crenças pessoas, mas também por acreditar que
              chegamos ao limite da tolerância com a desigualdade racial. Nas escolas, vemos o aumento
              significativo de casos de racismo, em empresas, essa é violência mais presente em
              diferentes pesquisas. <br /> <br />
              Redes escolares, secretarias e empresas devem enfrentar esse desafio, mas a caminhada
              não é fácil. Por isso, te ajudo diariamente a construir esse processo, seja via conteúdo
              gratuito na internet, comunidades em wapp ou por treinamentos e consultorias pagas.
              Então me manda uma mensagem privada e vamos seguir esta conversa! :)
            </p>
            <a href="https://wa.me/5521976994685" target="_blank" className="p-4 border-amber-500 border-2 rounded-full hover:bg-amber-50 self-start">Vamos Conversar</a>
          </div>
          <div className="p-8 md:w-[50%]">
            <h3>COMO CHEGUEI ATÉ AQUI</h3>
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
          <Image src='/assets/footer.jpg' alt='Seguir no Linkedin' width={500} height={300} className="w-dvw h-125!" />
      </section>
    </main>
      </div>
  )
}
