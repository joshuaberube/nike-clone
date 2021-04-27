import { Link } from "react-router-dom"

const DropdownSection = ({dropdownSectionTitle, links}) => (
    <section>
        <h2>{dropdownSectionTitle}</h2>
        <ul>
            {links.map(({text, link}) => (
                <li>
                    <Link to={link}>{text}</Link>
                </li>
            ))}
        </ul>
    </section>
)

export default DropdownSection