import Image from "next/image";

export function Bio() {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-2xl uppercase">
        Quem é <br /><span className="text-blue-700">RAFAEL SILVA</span>
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
      <a href="https://wa.me/5521976994685" target="_blank" className="p-4 border-amber-500 border-2 rounded-full hover:bg-amber-600 hover:text-white transition-colors self-start">Vamos Conversar</a>
    </div>
  )
}