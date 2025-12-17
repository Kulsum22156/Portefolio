"use client";
import Link from "next/link";
import {useState, type ReactNode} from "react";

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
    return(<div className="flex flex-col gap-[5px] cursor-pointer md:hidden"
        id="hamburgermenu"
        onClick={onClick}>
            <span className="w-[25px] h-[3px] bg-[#e6d5e8] rounded-xs"></span>
            <span className="w-[25px] h-[3px] bg-[#e6d5e8] rounded-xs"></span>
            <span className="w-[25px] h-[3px] bg-[#e6d5e8] rounded-xs"></span>
        </div>
    );
}
export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className = "bg-purple-950 text-purple-50 shadow-xl">
            <div className="flex text-xl font-bold text-fuchsia-50">
                <HamburgerMenu onClick={() => setIsOpen(!isOpen)}/></div>
            <ul className = {`mt-4 flex-col flex gap-4
            ${isOpen? "flex" : "hidden"}  md:flex md:flex-row md:gap-4 md:mt-0`}>
                <li><Link href="/">Accueil</Link></li>
                <li><Link href="/CV">CV</Link></li>
            </ul>
        </nav>
  )
}