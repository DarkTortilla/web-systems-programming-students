import type { ReactNode } from 'react'
import { Deck } from '@revealjs/react'
import RevealHighlight from 'reveal.js/plugin/highlight'
import 'reveal.js/reveal.css'
import 'reveal.js/plugin/highlight/monokai.css'

const plugins = [RevealHighlight]

interface PresentationProps {
  label: string
  children: ReactNode
}

export function Presentation({ label, children }: PresentationProps) {
  return (
    <section className="presentation-frame" aria-label={label}>
      <Deck
        config={{
          width: 1280,
          height: 720,
          controls: true,
          progress: true,
          slideNumber: 'c/t',
          hash: false,
          history: false,
          keyboard: true,
          center: true,
          transition: 'slide',
          backgroundTransition: 'fade',
        }}
        plugins={plugins}
      >
        {children}
      </Deck>
    </section>
  )
}
