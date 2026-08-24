import { NavLink } from 'react-router-dom'
import type { PresentationDefinition } from '../../types/presentation'

interface NavItemProps {
  item: PresentationDefinition
  onNavigate: () => void
}

export function NavItem({ item, onNavigate }: NavItemProps) {
  const Icon = item.icon

  return (
    <li>
      <NavLink
        to={item.path}
        onClick={onNavigate}
        className={({ isActive }) =>
          [
            'group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-semibold transition-colors',
            'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent',
            isActive
              ? 'bg-accent text-primary'
              : 'text-app/75 hover:bg-secondary hover:text-app',
          ].join(' ')
        }
      >
        <Icon className="size-5 shrink-0" aria-hidden="true" />
        <span>{item.shortTitle}</span>
      </NavLink>
    </li>
  )
}
