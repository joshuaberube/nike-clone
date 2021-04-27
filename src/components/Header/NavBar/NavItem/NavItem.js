import { NavLink } from "react-router-dom"
import { useState } from "react"
import DropdownSection from "./DropdownSection/DropdownSection"

const NavItem = ({to, children, dropdownData}) => {
    const [isDropdown, setIsDropdown] = useState(false)

    return (
        <div onMouseEnter={() => setIsDropdown(true)} onMouseLeave={() => setIsDropdown(false)}>
            <NavLink to={to}>
                {children}
            </NavLink>

            {isDropdown && (
                <div>
                    {dropdownData.map(({dropdownSectionTitle, links}) => (
                        <DropdownSection dropdownSectionTitle={dropdownSectionTitle} links={links}/>
                    ))}
                </div>
            )}
        </div>
    )
}

export default NavItem