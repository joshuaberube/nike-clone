import { Link } from "react-router-dom"

const DropdownSection = ({dropdownSectionTitle, links}) => (
    <div>
        <span>{dropdownSectionTitle}</span>
        <ul>
            {links.map(({text, link}) => (
                <li>
                    <Link to={link}>{text}</Link>
                </li>
            ))}
        </ul>
    </div>
)

export default DropdownSection