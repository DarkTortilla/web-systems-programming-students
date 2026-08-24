import { AcademicCapIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link, useLocation } from 'react-router-dom'
import { presentationDefinitions } from '../../config/presentations'
import type { PresentationCategory } from '../../types/presentation'
import { NavItemDropdown } from './NavItemDropdown'
import { NavMenu } from './NavMenu'

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

const presentationGroups: readonly {
  category: PresentationCategory
  label: string
  navigationLabel: string
}[] = [
  {
    category: 'presentations',
    label: 'Presentaciones',
    navigationLabel: 'Presentaciones del curso',
  },
  {
    category: 'js',
    label: 'JS',
    navigationLabel: 'Presentaciones de JavaScript',
  },
]

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const { pathname } = useLocation()

  return (
    <aside
      id="course-sidebar"
      className={`fixed inset-y-0 left-0 z-40 flex w-72 flex-col bg-primary text-app shadow-2xl transition-transform duration-300 lg:translate-x-0 lg:shadow-none ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
      aria-label="Navegación principal"
    >
      <div className="flex min-h-20 items-center gap-3 border-b border-app/10 px-5 py-4">
        <Link
          to="/"
          onClick={onClose}
          className="flex min-w-0 flex-1 items-center gap-3 rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        >
          <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent text-primary">
            <AcademicCapIcon className="size-6" aria-hidden="true" />
          </span>
          <span className="min-w-0">
            <span className="block text-sm font-extrabold leading-tight">
              Programación de
              <br />
              Sistemas Web
            </span>
          </span>
        </Link>
        <button
          type="button"
          className="rounded-md p-2 text-app/70 transition-colors hover:bg-secondary hover:text-app focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent lg:hidden"
          aria-label="Cerrar menú de navegación"
          onClick={onClose}
        >
          <XMarkIcon className="size-5" aria-hidden="true" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-6">
        <p className="mb-3 px-3 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-app/45">
          Contenido del curso
        </p>
        <div className="space-y-2">
          {presentationGroups.map(({ category, label, navigationLabel }) => {
            const items = presentationDefinitions.filter(
              (presentation) => presentation.category === category,
            )
            const hasActivePresentation = items.some(({ path }) => path === pathname)

            return (
              <NavItemDropdown
                key={`${category}-${hasActivePresentation ? 'active' : 'inactive'}`}
                label={label}
                initialOpen={hasActivePresentation}
              >
                <NavMenu
                  label={navigationLabel}
                  items={items}
                  onNavigate={onClose}
                />
              </NavItemDropdown>
            )
          })}
        </div>
      </div>

      <div className="border-t border-app/10 px-5 py-5">
        <p className="text-xs font-semibold uppercase tracking-widest text-accent">
          Material académico
        </p>
        <p className="mt-1 text-xs leading-relaxed text-app/50">
          Ingeniería en Sistemas Computacionales
        </p>
      </div>
    </aside>
  )
}
