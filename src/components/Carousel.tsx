import Image from "next/image";

export default function Carousel() {

  const publicacoes = Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    src: `/assets/publicacoes/${i + 1}.png`,
  }));


  return (
    <div className="carousel w-full">
      {publicacoes.map((item) => (
        <div id={`slide${item.id}`} className="carousel-item relative w-full">
          <div className="flex gap-4 items-center justify-center m-auto">
            <Image
              key={item.id}
              src={item.src}
              alt={`Publicação ${item.id}`}
              width={400}
              height={300}
              className="rounded-2xl"
            />
            <div>
              <p className="max-w-150">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis, eum nemo reiciendis natus ducimus odio eos debitis et impedit quibusdam mollitia, voluptatibus, aliquid repellat perferendis! Facilis pariatur sapiente hic esse.</p>
              <div className="flex gap-4 mt-8">
                <a href={`#slide${item.id - 1}`} className="btn btn-circle">❮</a>
                <a href={`#slide${item.id + 1}`} className="btn btn-circle">❯</a>
              </div>
            </div>
          </div>

        </div>
      ))}
    </div>
  )
}
