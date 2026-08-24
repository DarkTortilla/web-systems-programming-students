import { useId, useState, type ReactNode } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { RectangleStackIcon } from '@heroicons/react/24/outline'

interface NavItemDropdownProps {
  label: string
  initialOpen: boolean
  children: ReactNode
}

export function NavItemDropdown({
  label,
  initialOpen,
  children,
}: NavItemDropdownProps) {
  const contentId = useId()
  const [isOpen, setIsOpen] = useState(initialOpen)

  return (
    <div>
      <button
        type="button"
        className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm font-bold text-app transition-colors hover:bg-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        aria-expanded={isOpen}
        aria-controls={contentId}
        onClick={() => setIsOpen((current) => !current)}
      >
        <RectangleStackIcon className="size-5 shrink-0 text-accent" aria-hidden="true" />
        <span className="flex-1">{label}</span>
        <ChevronDownIcon
          className={`size-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          aria-hidden="true"
        />
      </button>

      <div
        id={contentId}
        className={`grid transition-[grid-template-rows,opacity] duration-200 ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
        inert={!isOpen}
      >
        <div className="overflow-hidden">
          <div className="ml-5 border-l border-app/15 pb-1 pl-3 pt-2">{children}</div>
        </div>
      </div>
    </div>
  )
}
