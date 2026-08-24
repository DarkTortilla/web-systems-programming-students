import type { PresentationDefinition } from '../../types/presentation'
import { NavItem } from './NavItem'

interface NavMenuProps {
  label: string
  items: readonly PresentationDefinition[]
  onNavigate: () => void
}

export function NavMenu({ label, items, onNavigate }: NavMenuProps) {
  return (
    <nav aria-label={label}>
      <ul className="space-y-1.5">
        {items.map((item) => (
          <NavItem key={item.id} item={item} onNavigate={onNavigate} />
        ))}
      </ul>
    </nav>
  )
}
