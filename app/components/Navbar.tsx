
import Link from "next/link";
import {type ReactNode} from "react";

type NavLinkProps = {
    href : string
    children : ReactNode
}

function NavLink (props: NavLinkProps) {
    return (
        <li className ="hover:bg-purple-300 py-2 px-2">
            <Link href={props.href}>{props.children}</Link>
        </li>
    )
}

//création du menu hamburger
function HamburgerMenu({onClick}: {onClick: () => void}) {
    return(<div className="flex-col gap-[5px] cursor-pointer md:hidden"
        id="hamburgermenu"
        onClick={onClick}>
            <span className="w-[25px] h-[3px] bg-[#66366d] rounded-xs"></span>
            <span className="w-[25px] h-[3px] bg-[#66366d] rounded-xs"></span>
            <span className="w-[25px] h-[3px] bg-[#66366d] rounded-xs"></span>
        </div>
    )
}
export default function Navbar() {
  return (
    <nav className = "bg-purple-400 text-purple-950 shadow-xl">
        <ul className = "container mx-auto flex gap-4">
            <li><Link href="/">Accueil</Link></li>
            <li><Link href="/CV">CV</Link></li>
        </ul>
    </nav>
  )
}