import { ArrowLeftIcon } from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center text-center">
      <p className="font-mono text-sm font-bold tracking-widest text-accent">ERROR 404</p>
      <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
        Esta página no existe
      </h1>
      <p className="mt-5 text-lg leading-relaxed text-secondary">
        La dirección puede estar incompleta o la presentación pudo cambiar de lugar.
      </p>
      <Link
        to="/"
        className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 font-bold text-app transition-colors hover:bg-secondary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
      >
        <ArrowLeftIcon className="size-4" aria-hidden="true" />
        Volver al inicio
      </Link>
    </section>
  )
}
