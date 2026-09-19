import Image from "next/image";

const courses = [
  {
    title: "Curso 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est totam error tempore perspiciatis, ab nulla repudiandae, ullam, at consequatur rerum aliquid.",
    image: "https://placehold.co/400x300",
    badge: "Novo",
    tags: ["Antirracismo", "Educação"],
  },
  {
    title: "Curso 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est totam error tempore perspiciatis, ab nulla repudiandae, ullam, at consequatur rerum aliquid.",
    image: "https://placehold.co/400x300",
    badge: "Novo",
    tags: ["Antirracismo", "Educação"],
  },
  {
    title: "Curso 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est totam error tempore perspiciatis, ab nulla repudiandae, ullam, at consequatur rerum aliquid.",
    image: "https://placehold.co/400x300",
    badge: "Novo",
    tags: ["Antirracismo", "Educação"],
  },
];

export function Courses() {
  return (
    <section
      id="cursos"
      className="flex flex-col items-center justify-center gap-4 mt-8 min-h-dvh px-4"
    >
      <h2 className="text-2xl font-bold">Cursos</h2>

      <p className="text-lg text-center">
        Aqui você encontrará informações sobre os cursos que ofereço.
      </p>

      <div className="w-full max-w-7xl p-4 md:p-8 rounded-3xl">
        <div className="flex flex-col md:flex-row flex-wrap gap-8 mt-8">
          {courses.map((course) => (
            <div
              key={course.title}
              className="flex-1 min-w-0 md:min-w-70 card shadow-sm border border-gray-200"
            >
              <figure>
                <Image
                  src={course.image}
                  alt={course.title}
                  width={400}
                  height={300}
                  className="w-full h-auto rounded-2xl"
                />
              </figure>

              <div className="card-body">
                <h2 className="card-title">
                  {course.title}

                  {course.badge && (
                    <div className="badge badge-secondary">
                      {course.badge}
                    </div>
                  )}
                </h2>

                <p>{course.description}</p>

                <div className="card-actions justify-end">
                  {course.tags.map((tag) => (
                    <div key={tag} className="badge badge-outline">
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}