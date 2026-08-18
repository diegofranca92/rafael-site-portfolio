import Image from "next/image";

export function Services() {
  return (
    <div className="bg-[#f5c26f] p-8 rounded-3xl">
      <div className="flex gap-4 items-center">
        <Image
          src={'/assets/grafismos/Grafismo6.png'}
          alt={`Grafismo`}
          width={80}
          height={80}
          className="rounded-2xl"
        />
        <h2 className="text-3xl font-bold">PARA SUA <br /><span className="text-blue-700">ESCOLA</span></h2>
      </div>

      <div className="flex gap-8 mt-8">
        <div className="flex flex-wrap rounded-lg p-8 bg-amber-100 gap-4">
          <h3 className="font-bold uppercase">Consultoria pedagógica</h3>
          <p>
            do que sua escola precisa para adotar uma educação antirracista
            transversal e intencional? Faço análise de currículo, curadoria
            de livros, conteúdos programáticos e ferramentas de
            implementação da educação das relações étnico-raciais da
            educação infantil ao Ensino Médio.
          </p>
        </div>
        <div className="flex flex-wrap rounded-lg p-8 bg-amber-100 gap-4">
          <h3 className="font-bold uppercase">Palestras e treinamento</h3>
          <p>
            a grande lacuna atual para implementação da educação
            antirracista é a formação docente, já executei mais de 40
            palestras, workshops e trilhas de conhecimento (longas ou
            curtas, online e presenciais) para educadores.
          </p>
        </div>
        <div className="flex flex-wrap rounded-lg p-8 bg-amber-100 gap-4">
          <h3 className="font-bold uppercase">Cartilhas e protocolos antirracistas</h3>
          <p>
            não sabe como agir em caso de racismo na sua escola? Qual a
            obrigação da escola e o que fazer para produzir letramento na
            comunidade escolar? Meus protocolos alcançaram mais de 50 mil
            estudantes
          </p>
        </div>
      </div>
    </div>
  )
}