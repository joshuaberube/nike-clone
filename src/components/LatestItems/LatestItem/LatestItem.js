import { ReactComponent as LockIcon } from "../../../assets/icons/lock-icon.svg"
import "./LatestItem.scss"

const LatestItem = ({productDetails: {link, imgUrl, name, price, type, isMemberAccess}}) => {
    return (
        <li class="latest-item">
            <a href={link}>
                <div class="latest-item-img">
                    {isMemberAccess && <LockIcon />}
                    <img src={imgUrl} alt={name} />
                </div>
                <div class="latest-item-info">
                    <div>
                        <span>{name}</span>
                        <span>{price}</span>
                    </div>
                    <span>{type}</span>
                </div>
            </a>
        </li>
    )
}

export default LatestItem