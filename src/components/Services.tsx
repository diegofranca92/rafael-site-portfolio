import Image from "next/image";

export function Services() {
  const audiences = [
    {
      title: "PARA SUA ESCOLA",
      subtitle: "Educação antirracista transversal e intencional",
      graphic: "/assets/grafismos/Grafismo20.png",
      services: [
        {
          title: "Consultoria pedagógica",
          description:
            "do que sua escola precisa para adotar uma educação antirracista transversal e intencional? Faço análise de currículo, curadoria de livros, conteúdos programáticos e ferramentas de implementação da educação das relações étnico-raciais da educação infantil ao Ensino Médio.",
        },
        {
          title: "Palestras e treinamento",
          description:
            "a grande lacuna atual para implementação da educação antirracista é a formação docente, já executei mais de 40 palestras, workshops e trilhas de conhecimento (longas ou curtas, online e presenciais) para educadores.",
        },
        {
          title: "Cartilhas e protocolos antirracistas",
          description:
            "não sabe como agir em caso de racismo na sua escola? Qual a obrigação da escola e o que fazer para produzir letramento na comunidade escolar? Meus protocolos alcançaram mais de 50 mil estudantes.",
        },
      ],
    },
    {
      title: "PARA SUA EMPRESA",
      subtitle: "Inclusão e Diversidade de impacto",
      graphic: "/assets/grafismos/Grafismo9.png",
      services: [
        {
          title: "Consultoria",
          description:
            "o que sua empresa precisa agora para ir ao próximo degrau da agenda de Diversidade? Fazer um diagnóstico ou um Censo de Diversidade? Elaborar ou implementar uma estratégia de equidade e inclusão? Em parceria com a Diverse Soluções, implemento consultorias sob medida para sua empresa.",
        },
        {
          title: "Treinamentos e palestras",
          description:
            "Informação é a base para a evolução da agenda de Diversidade, equidade racial e de gênero em qualquer empresa. Minhas palestras já impactaram mais de 30 mil pessoas com NPS superior a 90. Agende já!",
        },
        {
          title: "Gestão e mentoria de Grupos de Afinidade",
          description:
            "Estruturo e mentoro grupos de afinidade para que deixem de ser apenas espaços de convivência e tornem-se instâncias estratégicas de mudança. Apoio na definição de governança, planos de ação e letramento dos integrantes.",
        },
      ],
    },
    {
      title: "PARA SUA SECRETARIA DE EDUCAÇÃO",
      subtitle: "Gestão estratégica e formação docente",
      graphic: "/assets/grafismos/Grafismo15.png",
      services: [
        {
          title: "Consultoria em Gestão Estratégica VAAR/Fundeb",
          description:
            "construo a busca pelas condicionalidades do VAAR em uma estratégia de transformação real para a rede. Apoio técnico para o desenho e implementação de políticas antirracistas, estruturação de planos de ação baseados em evidências, criação de protocolos de equidade e formação continuada para a melhoria efetiva dos processos pedagógicos e dos resultados de aprendizagem de alunos não brancos.",
        },
        {
          title: "Cursos, workshops e palestras",
          description:
            "a grande lacuna atual para implementação da educação antirracista é a formação docente, já executei mais de 40 palestras, workshops e trilhas de conhecimento (longas ou curtas, online e presenciais) para educadores. Atualmente, 3 secretarias já possuem cursos online de 20h e 30h voltadas exclusivamente para as dores e realidades locais.",
        },
      ],
    },
  ];

  return (
    <div className="p-8 rounded-3xl">
      <div className="flex gap-4 items-center">
        <Image
          src="/assets/grafismos/Grafismo7.png"
          alt="Grafismo"
          width={80}
          height={80}
          className="rounded-2xl"
        />

        <h2 className="text-3xl font-bold">
          SERVIÇOS PARA
          <br />
          <span className="text-blue-700">DIFERENTES PÚBLICOS</span>
        </h2>
      </div>

      <div className="mt-8 flex flex-col gap-4">
        {audiences.map((audience, index) => (
          <div
            key={audience.title}
            className="collapse collapse-arrow border border-amber-200"
          >
            <input
              type="radio"
              name="services-accordion"
              defaultChecked={index === 0}
            />

            <div className="collapse-title">
              <div className="flex items-center gap-4">
                <Image
                  src={audience.graphic}
                  alt="Grafismo"
                  width={60}
                  height={60}
                  className="rounded-xl"
                />

                <div>
                  <h3 className="font-bold text-xl uppercase">
                    {audience.title}
                  </h3>

                  <p className="text-sm mt-1">
                    {audience.subtitle}
                  </p>
                </div>
              </div>
            </div>

            <div className="collapse-content">
              <div className="flex flex-col md:flex-row flex-wrap gap-4 pt-4">
                {audience.services.map((service) => (
                  <div
                    key={service.title}
                    className="flex-1 min-w-0 rounded-lg bg-amber-50 p-6 border border-amber-200"
                  >
                    <h4 className="font-bold uppercase text-blue-700">
                      {service.title}
                    </h4>

                    <p className="mt-3 text-black leading-7">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}