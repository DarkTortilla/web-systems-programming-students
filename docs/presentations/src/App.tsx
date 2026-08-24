import { Suspense, useEffect, useState } from 'react'
import { Bars3Icon } from '@heroicons/react/24/outline'
import { Route, Routes, useLocation } from 'react-router-dom'
import { presentationDefinitions } from './config/presentations'
import { HomePage } from './pages/HomePage'
import { NotFoundPage } from './pages/NotFoundPage'
import { Footer } from './shared/components/Footer'
import { Sidebar } from './shared/components/Sidebar'

function App() {
  const { pathname } = useLocation()
  const [sidebarOpenPath, setSidebarOpenPath] = useState<string | null>(null)
  const isSidebarOpen = sidebarOpenPath === pathname

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])

  useEffect(() => {
    if (!isSidebarOpen) {
      return
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSidebarOpenPath(null)
      }
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isSidebarOpen])

  return (
    <div className="min-h-svh bg-app text-primary">
      <a
        href="#main-content"
        className="fixed left-4 top-4 z-50 -translate-y-24 rounded-md bg-accent px-4 py-2 font-semibold text-primary shadow-lg transition-transform focus:translate-y-0"
      >
        Saltar al contenido
      </a>

      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setSidebarOpenPath(null)}
      />

      {isSidebarOpen && (
        <button
          type="button"
          className="fixed inset-0 z-30 bg-primary/70 backdrop-blur-sm lg:hidden"
          aria-label="Cerrar menú de navegación"
          onClick={() => setSidebarOpenPath(null)}
        />
      )}

      <div className="flex min-h-svh flex-col lg:ml-72">
        <header className="sticky top-0 z-20 flex items-center gap-3 border-b border-secondary/15 bg-app/95 px-4 py-3 backdrop-blur lg:hidden">
          <button
            type="button"
            className="rounded-md p-2 text-primary transition-colors hover:bg-accent/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            aria-label="Abrir menú de navegación"
            aria-expanded={isSidebarOpen}
            aria-controls="course-sidebar"
            onClick={() => setSidebarOpenPath(pathname)}
          >
            <Bars3Icon className="size-6" aria-hidden="true" />
          </button>
          <div>
            <p className="text-sm font-bold leading-tight">Programación de Sistemas Web</p>
            <p className="text-xs text-secondary">Presentaciones de clase</p>
          </div>
        </header>

        <main
          id="main-content"
          className="mx-auto w-full max-w-[96rem] flex-1 px-4 py-8 sm:px-6 lg:px-10 lg:py-10"
        >
          <Suspense
            fallback={
              <div className="flex aspect-video w-full items-center justify-center rounded-2xl bg-primary text-app">
                <p className="animate-pulse font-semibold">Preparando presentación…</p>
              </div>
            }
          >
            <Routes>
              <Route path="/" element={<HomePage />} />
              {presentationDefinitions.map(({ path, Component }) => (
                <Route key={path} path={path} element={<Component />} />
              ))}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </main>

        <Footer />
      </div>
    </div>
  )
}

export default App
