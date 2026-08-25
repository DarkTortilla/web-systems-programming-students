import { lazy } from 'react'
import {
  CircleStackIcon,
  CodeBracketIcon,
  CommandLineIcon,
  PaintBrushIcon,
} from '@heroicons/react/24/outline'
import type { PresentationDefinition } from '../types/presentation'

const ClientServerPresentation = lazy(() =>
  import('../presentations/ClientServerPresentation').then((module) => ({
    default: module.ClientServerPresentation,
  })),
)

const HtmlPresentation = lazy(() =>
  import('../presentations/HtmlPresentation').then((module) => ({
    default: module.HtmlPresentation,
  })),
)

const CssPresentation = lazy(() =>
  import('../presentations/CssPresentation').then((module) => ({
    default: module.CssPresentation,
  })),
)

const JavaScriptDataTypesPresentation = lazy(() =>
  import('../presentations/JavaScriptDataTypesPresentation').then((module) => ({
    default: module.JavaScriptDataTypesPresentation,
  })),
)

const JavaScriptControlStructuresPresentation = lazy(() =>
  import('../presentations/JavaScriptControlStructuresPresentation').then((module) => ({
    default: module.JavaScriptControlStructuresPresentation,
  })),
)

export const presentationDefinitions = [
  {
    id: 'client-server',
    category: 'presentations',
    title: 'Arquitectura cliente-servidor',
    shortTitle: 'Cliente-servidor',
    description:
      'Conoce cómo colaboran navegadores, servidores y bases de datos para responder una solicitud web.',
    path: '/presentaciones/arquitectura-cliente-servidor',
    icon: CircleStackIcon,
    Component: ClientServerPresentation,
  },
  {
    id: 'html',
    category: 'presentations',
    title: 'Introducción a HTML',
    shortTitle: 'HTML',
    description:
      'Explora la estructura de una página, sus elementos, atributos y etiquetas semánticas.',
    path: '/presentaciones/introduccion-html',
    icon: CodeBracketIcon,
    Component: HtmlPresentation,
  },
  {
    id: 'css',
    category: 'presentations',
    title: 'Introducción a CSS',
    shortTitle: 'CSS',
    description:
      'Descubre cómo los selectores, la cascada y el modelo de caja dan forma a una interfaz.',
    path: '/presentaciones/introduccion-css',
    icon: PaintBrushIcon,
    Component: CssPresentation,
  },
  {
    id: 'js-data-types',
    category: 'js',
    title: 'Tipos de datos en JavaScript',
    shortTitle: 'Tipos de datos',
    description:
      'Aprende a distinguir valores primitivos, objetos y arreglos, así como sus copias y referencias.',
    path: '/presentaciones/js-tipos-de-datos',
    icon: CommandLineIcon,
    Component: JavaScriptDataTypesPresentation,
  },
  {
    id: 'js-control-structures',
    category: 'js',
    title: 'Estructuras de control',
    shortTitle: 'Estructuras de control',
    description: 'Estructuras de control en JS: sintaxis y funcionamiento.',
    path: '/presentaciones/js-estructuras-control',
    icon: CommandLineIcon,
    Component: JavaScriptControlStructuresPresentation,
  },
] as const satisfies readonly PresentationDefinition[]
