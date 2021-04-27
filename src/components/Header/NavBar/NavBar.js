import { useState } from "react"
import { Link } from "react-router-dom"
import { ReactComponent as HeartIcon } from "../../../assets/icons/heart-icon.svg"
import { ReactComponent as MagnifyingGlassIcon } from "../../../assets/icons/magnifying-glass-icon.svg"
import { ReactComponent as ShoppingBagIcon } from "../../../assets/icons/shopping-bag-icon.svg"
import { ReactComponent as NikeLogo } from "../../../assets/icons/nike-logo.svg"
import NavItem from "./NavItem/NavItem"

const NavBar = () => {
    const [search, setSearch] = useState("")

    const navItems = [
        {
            navLinkTitle: "New Releases",
            navLink: "/new-releases",
            dropdownData: [
                { 
                    dropdownSectionTitle: "New & Featured", 
                    links: [
                        { text: "Shop All New Arrivals", link: "/new-releases" },
                        { text: "SNKRS Launch Calendar", link: "/launch" },
                        { text: "Best of Air Max", link: "/air-max-shoes" }
                    ] 
                },
                { 
                    dropdownSectionTitle: "New For Men", 
                    links: [
                        { text: "Shoes", link: "/new-mens-shoes" },
                        { text: "Clothing", link: "/new-mens-clothes" },
                        { text: "Equipment", link: "/new-mens-equipment" },
                        { text: "Shop All New", link: "/new-mens" }
                    ] 
                }
            ]
        },
        {
            navLinkTitle: "Men",
            navLink: "/men",
            dropdownData: []
        },
        {
            navLinkTitle: "Women",
            navLink: "/women",
            dropdownData: []
        },
        {
            navLinkTitle: "Kids",
            navLink: "/kids",
            dropdownData: []
        },
        {
            navLinkTitle: "Customize",
            navLink: "/nike-by-you",
            dropdownData: []
        },
        {
            navLinkTitle: "Sale",
            navLink: "/sale",
            dropdownData: []
        }
    ]

    return (
        <div>
            <Link to="/">
                <NikeLogo />
            </Link>
            <nav>
                {navItems.map(({navLinkTitle, navLink, dropdownData}) => (
                    <NavItem to={navLink} dropdownData={dropdownData}>
                        {navLinkTitle}
                    </NavItem>
                ))}
            </nav>
            <div>
                <div>
                    <span>
                        <MagnifyingGlassIcon />
                    </span>
                    <input type="search" placeholder="Search" />
                </div>
                <div>
                    <Link to="/favorites">
                        <HeartIcon />
                    </Link>
                    <Link to="/cart">
                        <ShoppingBagIcon />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default NavBar