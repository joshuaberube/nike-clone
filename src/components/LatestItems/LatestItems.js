import LatestItem from "./LatestItem/LatestItem"

const LatestAndGreatest = () => {

    const productDetails = {
        link: "https://www.nike.com/t/air-max-genome-mens-shoe-hgsQFb/CW1648-004",
        imgUrl: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/w_549,c_limit/4518f08c-595a-435b-9b3b-231eff79e0f9/air-max-genome-mens-shoe-hgsQFb.png",
        name: "Nike Air Max Genome",
        price: 170,
        type: "Mens Shoe"
    }
    return (
        <div>
            <LatestItem productDetails={productDetails}/>
        </div>
    )
}

export default LatestAndGreatest