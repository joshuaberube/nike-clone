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
                        { text: "Shop All New Arrivals", link: "/w/new-releases" },
                        { text: "SNKRS Launch Calendar", link: "/w/launch" },
                        { text: "Best of Air Max", link: "/w/air-max-shoes" },
                        { text: "Member Access", link: "/w/member-access" },
                        { text: "Top Picks for Your Mom", link: "/w/gifts" },
                        { text: "Find Power in Your Fit", link: "/w/size-inclusive-clothing" }
                    ] 
                },
                { 
                    dropdownSectionTitle: "New For Men", 
                    links: [
                        { text: "Shoes", link: "/w/new-mens-shoes" },
                        { text: "Clothing", link: "/w/new-mens-clothes" },
                        { text: "Equipment", link: "/w/new-mens-equipment" },
                        { text: "Shop All New", link: "/w/new-mens" }
                    ] 
                },
                { 
                    dropdownSectionTitle: "New For Women", 
                    links: [
                        { text: "Shoes", link: "/w/new-womens-shoes" },
                        { text: "Clothing", link: "/w/new-womens-clothes" },
                        { text: "Equipment", link: "/w/new-womens-equipment" },
                        { text: "Shop All New", link: "/w/new-womens" }
                    ] 
                },
                { 
                    dropdownSectionTitle: "New For Kids", 
                    links: [
                        { text: "Boy Shoes", link: "/w/new-boys-shoes" },
                        { text: "Boy Clothing", link: "/w/new-boys-clothes" },
                        { text: "Girl Shoes", link: "/w/new-girls-shoes" },
                        { text: "Girl Clothing", link: "/w/new-girls-clothes" },
                        { text: "Shop All New", link: "/w/new-kids" }
                    ] 
                }
            ]
        },
        {
            navLinkTitle: "Men",
            navLink: "/men",
            dropdownData: [
                { 
                    dropdownSectionTitle: "New & Featured", 
                    links: [
                        { text: "New Releases", link: "/w/new-mens" },
                        { text: "Best Sellers", link: "/w/mens-best" },
                        { text: "Best of Air Max", link: "/w/mens-air-max-shoes" },
                        { text: "Top Picks for Your Mom", link: "/w/gifts" },
                        { text: "Summer of Tie Dye", link: "/w/mens-tie-dye-collection" },
                        { text: "Shorts, Tees and Kicks", link: "/w/mens-shorts-tees-kicks" },
                        { text: "Sale - Up to 40% Off", link: "/w/mens-sale" }
                    ] 
                },
                { 
                    dropdownSectionTitle: "Shoes", 
                    links: [
                        { text: "Lifestyle", link: "/w/mens-lifestyle-shoes" },
                        { text: "Running", link: "/w/mens-running-shoes" },
                        { text: "Basketball", link: "/w/mens-basketball-shoes" },
                        { text: "Jordan", link: "/w/mens-jordan-shoes" },
                        { text: "Training & Gym", link: "/w/mens-training-gym-shoes" },
                        { text: "Soccer", link: "/w/mens-soccer-shoes" },
                        { text: "Golf", link: "/w/mens-golf-shoes" },
                        { text: "Track & Field", link: "/w/mens-track-field-shoes" },
                        { text: "Skateboarding", link: "/w/mens-skateboarding-shoes" },
                        { text: "Tennis", link: "/w/mens-tennis-shoes" },
                        { text: "Baseball", link: "/w/mens-baseball-shoes" },
                        { text: "Sandles & Slides", link: "/w/mens-sandles-slides-shoes" },
                        { text: "Shoes $100 & Under", link: "/w/mens-shoes-100-and-under-shoes" },
                        { text: "All Shoes", link: "/w/mens-shoes" },
                    ] 
                },
            ]
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
            dropdownData: [
                { 
                    dropdownSectionTitle: "Sale", 
                    links: [
                        { text: "Sale - Up to 40% Off", link: "/w/sale" },
                    ] 
                },
                { 
                    dropdownSectionTitle: "Mens Sale", 
                    links: [
                        { text: "Shoes", link: "/w/sale-mens-shoes" },
                        { text: "Clothing", link: "/w/sale-mens-clothes" },
                        { text: "Equipment", link: "/w/sale-mens-equipment" },
                    ] 
                },
                { 
                    dropdownSectionTitle: "Womens Sale", 
                    links: [
                        { text: "Shoes", link: "/w/sale-womens-shoes" },
                        { text: "Clothing", link: "/w/sale-womens-clothes" },
                        { text: "Equipment", link: "/w/sale-womens-equipment" },
                    ] 
                },
                { 
                    dropdownSectionTitle: "Kids Sale", 
                    links: [
                        { text: "Shoes", link: "/w/sale-kids-shoes" },
                        { text: "Clothing", link: "/w/sale-kids-clothes" },
                        { text: "Equipment", link: "/w/sale-kids-equipment" },
                    ] 
                }
            ]
        }
    ]

    return (
        <div>
            <Link to="/" aria-label="link to Nike homepage">
                <NikeLogo />
            </Link>
            <nav>
                <ul>
                    {navItems.map(({navLinkTitle, navLink, dropdownData}) => (
                        <NavItem to={navLink} dropdownData={dropdownData}>
                            {navLinkTitle}
                        </NavItem>
                    ))}
                </ul>
            </nav>
            <div>
                <div>
                    <span>
                        <MagnifyingGlassIcon />
                    </span>
                    <input 
                        type="search" 
                        placeholder="Search" 
                        value={search} 
                        onChange={e => setSearch(e.target.value)}
                    />
                </div>
                <div>
                    <Link to="/favorites" aria-label="link to favorites">
                        <HeartIcon />
                    </Link>
                    <Link to="/cart" aria-label="link to your cart">
                        <ShoppingBagIcon />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default NavBar