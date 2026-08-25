import type {
  ComponentType,
  ForwardRefExoticComponent,
  PropsWithoutRef,
  RefAttributes,
  SVGProps,
} from 'react'

export type HeroIcon = ForwardRefExoticComponent<
  PropsWithoutRef<SVGProps<SVGSVGElement>> &
    { title?: string; titleId?: string } &
    RefAttributes<SVGSVGElement>
>

export type PresentationCategory = 'presentations' | 'js'

export interface PresentationDefinition {
  id: 'client-server' | 'html' | 'css' | 'js-data-types' | 'js-control-structures'
  category: PresentationCategory
  title: string
  shortTitle: string
  description: string
  path: string
  icon: HeroIcon
  Component: ComponentType
}
