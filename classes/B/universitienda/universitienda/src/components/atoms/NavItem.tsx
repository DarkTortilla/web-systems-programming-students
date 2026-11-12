import React from 'react'

export type NavItem={
    text: string,
    link: string,
    isExternal: string
}
export default function NavItem({text, link, isExternal}: NavItem) {
  return (
    <li className="menu-item">
                    <a href={link}>
                        {text}
                    </a>
                </li>
  )
}
