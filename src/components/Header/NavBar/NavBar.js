import { useState } from "react"
import { ReactComponent as HeartIcon } from "../../../assets/icons/heart-icon.svg"
import { ReactComponent as MagnifyingGlassIcon } from "../../../assets/icons/magnifying-glass-icon.svg"

const NavBar = () => {
    const [search, setSearch] = useState("")

    return (
        <div>
            <div>Nike Logo</div>
            <nav>
                <a href="/new-releases">New Releases</a>
                <a href="/men">Men</a>
                <a href="/women">Women</a>
                <a href="/kids">Kids</a>
                <a href="/nike-by-you">Customize</a>
                <a href="/sale">Sale</a>
            </nav>
            <div>
                <div>
                    <span>
                        <MagnifyingGlassIcon />
                    </span>
                    <input type="search" placeholder="Search" />
                </div>
                <a href="/favorites">
                    <HeartIcon />
                </a>
            </div>
        </div>
    )
}

export default NavBar