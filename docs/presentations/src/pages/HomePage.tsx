import {
  AcademicCapIcon,
  ArrowTopRightOnSquareIcon,
  CircleStackIcon,
  CodeBracketIcon,
} from '@heroicons/react/24/outline'

const repositoryUrl =
  'https://github.com/DarkTortilla/web-systems-programming-students'

export function HomePage() {
  return (
    <section
      aria-labelledby="home-title"
      className="overflow-hidden rounded-3xl bg-primary px-6 py-12 text-app shadow-2xl shadow-primary/15 sm:px-10 sm:py-16 lg:px-14"
    >
      <div className="flex min-h-[32rem] flex-col">
        <div className="max-w-3xl">
          <div className="flex size-14 items-center justify-center rounded-2xl bg-accent text-primary">
            <AcademicCapIcon className="size-8" aria-hidden="true" />
          </div>

          <p className="mt-6 font-mono text-sm font-bold tracking-[0.2em] text-accent">
            2026
          </p>
          <h1 id="home-title" className="mt-3 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
            Desarrollo web
          </h1>
          <h2 className="mt-4 text-xl font-bold text-app/75">
            Programación de Sistemas Web
          </h2>

          <div className="mt-10 grid max-w-2xl gap-3 sm:grid-cols-2">
            <div className="group flex items-center gap-3 rounded-xl border border-app/15 bg-app/10 px-4 py-4 transition-colors hover:border-accent hover:bg-accent hover:text-primary">
              <CodeBracketIcon
                className="size-6 text-app/75 transition-colors group-hover:text-primary"
                aria-hidden="true"
              />
              <span className="font-semibold">Frontend</span>
            </div>
            <div className="group flex items-center gap-3 rounded-xl border border-app/15 bg-app/10 px-4 py-4 transition-colors hover:border-accent hover:bg-accent hover:text-primary">
              <CircleStackIcon
                className="size-6 text-app/75 transition-colors group-hover:text-primary"
                aria-hidden="true"
              />
              <span className="font-semibold">Backend</span>
            </div>
          </div>
        </div>

        <a
          href={repositoryUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-auto inline-flex w-fit self-end items-center gap-2 rounded-xl border border-app/15 bg-app/10 px-4 py-3 text-sm font-semibold transition-colors hover:border-accent hover:bg-accent hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        >
          <ArrowTopRightOnSquareIcon className="size-4" aria-hidden="true" />
          Ver repositorio en GitHub
        </a>
      </div>
    </section>
  )
}
