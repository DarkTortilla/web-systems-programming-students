import { CodeBracketIcon } from '@heroicons/react/20/solid'

const repositoryUrl =
  'https://github.com/DarkTortilla/web-systems-programming-students'

export function Footer() {
  return (
    <footer className="border-t border-secondary/15 px-4 py-6 sm:px-6 lg:px-10">
      <div className="mx-auto flex w-full max-w-[96rem] flex-col gap-3 text-sm text-secondary sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} Programación de Sistemas Web
        </p>
        <a
          href={repositoryUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex w-fit items-center gap-2 font-semibold text-primary transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        >
          <CodeBracketIcon className="size-4" aria-hidden="true" />
          Ver repositorio en GitHub
        </a>
      </div>
    </footer>
  )
}
