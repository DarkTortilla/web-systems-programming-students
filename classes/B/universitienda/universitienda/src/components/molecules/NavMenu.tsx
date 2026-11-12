import React from 'react'
import NavItem, { type NavItem as listItem } from '../atoms/NavItem'

type NavMenuProps = {
    items: listItem[]
}

export default function NavMenu({items}:NavMenuProps ) {
    return (
        <nav>
            <ul className="navigation-menu">
                {items.map(i=>(
                   <NavItem text='' link='' isExternal=''/> 
                ))}
                
            </ul>
        </nav>
    )
}
