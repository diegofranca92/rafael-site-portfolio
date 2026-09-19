import Image from "next/image";

export function Courses() {
  return (
    <div className="p-8 rounded-3xl">

      <div className="flex flex-wrap md:flex-nowrap gap-8 mt-8">
        <div className="card w-96 shadow-sm border border-gray-200">
          <figure>
            <Image
              src={'https://placehold.co/400x300'}
              alt={`Grafismo`}
              width={400}
              height={300}
              className="rounded-2xl"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Curso 1
              <div className="badge badge-secondary">Novo</div>
            </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est totam error tempore perspiciatis, ab nulla repudiandae, ullam, at consequatur rerum aliquid</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Antirracismo</div>
              <div className="badge badge-outline">Educação</div>
            </div>
          </div>
        </div>
        <div className="card w-96 shadow-sm border border-gray-200">
          <figure>
            <Image
              src={'https://placehold.co/400x300'}
              alt={`Grafismo`}
              width={400}
              height={300}
              className="rounded-2xl"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Curso 1
              <div className="badge badge-secondary">Novo</div>
            </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est totam error tempore perspiciatis, ab nulla repudiandae, ullam, at consequatur rerum aliquid</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Antirracismo</div>
              <div className="badge badge-outline">Educação</div>
            </div>
          </div>
        </div>
        <div className="card w-96 shadow-sm border border-gray-200">
          <figure>
            <Image
              src={'https://placehold.co/400x300'}
              alt={`Grafismo`}
              width={400}
              height={300}
              className="rounded-2xl"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Curso 1
              <div className="badge badge-secondary">Novo</div>
            </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est totam error tempore perspiciatis, ab nulla repudiandae, ullam, at consequatur rerum aliquid</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Antirracismo</div>
              <div className="badge badge-outline">Educação</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}