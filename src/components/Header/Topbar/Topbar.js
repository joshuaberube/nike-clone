import { ReactComponent as JordanIcon } from "../../../assets/icons/jordan-icon.svg"
import { ReactComponent  as ConverseIcon } from "../../../assets/icons/converse-icon.svg"
const Topbar = () => {
    return (
        <div>
            <span>
                <JordanIcon/>
                <ConverseIcon/>
            </span>
            <div>
                <ul>
                    <li>Help</li>
                    |
                    <li>Join Us</li>
                    |
                    <li>Sign In</li>
                </ul>
            </div>
                
        
        </div>
    )
}

export default Topbar


