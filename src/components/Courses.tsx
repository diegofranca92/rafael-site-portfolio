"use client";

import Image from "next/image";
import { useRef } from "react";

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
  const carouselRef = useRef<HTMLDivElement>(null);

  const goToCourse = (courseIndex: number) => {
    const carousel = carouselRef.current;

    if (!carousel) {
      return;
    }

    const slide = carousel.children[courseIndex] as HTMLElement;

    if (!slide) {
      return;
    }

    carousel.scrollTo({
      left: slide.offsetLeft,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="cursos"
      className="w-full flex flex-col items-center justify-center gap-4 mt-8 px-4 py-20"
    >
      <h2 className="text-2xl font-bold">Cursos</h2>

      <p className="text-lg text-center">
        Aqui você encontrará informações sobre os cursos que ofereço.
      </p>

      <div className="w-full max-w-7xl p-4 md:p-8 rounded-3xl">
        <div
          ref={carouselRef}
          className="carousel w-full scroll-smooth"
        >
          {courses.map((course, index) => {
            const previousCourse =
              index === 0 ? courses.length - 1 : index - 1;

            const nextCourse =
              index === courses.length - 1 ? 0 : index + 1;

            return (
              <div
                key={course.title}
                className="carousel-item relative w-full"
              >
                <div className="w-full flex flex-col md:flex-row items-center justify-center gap-8 px-4">
                  <div className="w-full md:w-1/2 max-w-125">
                    <Image
                      src={course.image}
                      alt={course.title}
                      width={400}
                      height={300}
                      className="w-full h-auto rounded-2xl"
                    />
                  </div>

                  <div className="w-full md:w-1/2 max-w-150">
                    <div className="card shadow-sm border border-gray-200">
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

                        <div className="card-actions justify-start mt-4">
                          {course.tags.map((tag) => (
                            <div
                              key={tag}
                              className="badge badge-outline"
                            >
                              {tag}
                            </div>
                          ))}
                        </div>

                        <div className="flex gap-4 mt-8">
                          <button
                            type="button"
                            onClick={() => goToCourse(previousCourse)}
                            className="btn btn-circle"
                            aria-label="Curso anterior"
                          >
                            ❮
                          </button>

                          <button
                            type="button"
                            onClick={() => goToCourse(nextCourse)}
                            className="btn btn-circle"
                            aria-label="Próximo curso"
                          >
                            ❯
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {courses.map((course, index) => (
            <button
              key={`indicator-${course.title}`}
              type="button"
              onClick={() => goToCourse(index)}
              className="btn btn-xs btn-circle"
              aria-label={`Ir para ${course.title}`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}