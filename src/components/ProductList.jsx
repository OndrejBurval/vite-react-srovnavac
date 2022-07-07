import {useEffect, useState} from "react";
import Product from "./Product";

export default function ProductList(){
    const [data, setData] = useState([])
    const [brands, setBrands] = useState([])
    const [brand, setBrand] = useState("")
    const [search, setSearch] = useState() //decodeURIComponent(this.props.location.search.split("=")[1])
    const [limit, setLimit] = useState(9)
    const [disabled, setDisabled] = useState(false)
    const [btnText, setBtnText] = useState("Zobrazit více položek +")
    const [price, setPrice] = useState(50000)


    useEffect(() => {
        if (!search) {
            fetch('https://srovnavac-backend.herokuapp.com/search/mosaz')
                .then(response => response.json())
                .then(data => setData(data));
        } else {
            fetch(`https://srovnavac-backend.herokuapp.com/search/${this.state.search}`)
                .then(response => response.json())
                .then(data => setData(data));
        }

        fetch("https://srovnavac-backend.herokuapp.com/getAllBrands")
            .then(response => response.json())
            .then(brands => setBrands(brands));
    }, [])


    const listProducts = data.slice(0, limit).map((product, key) =>
        <Product
            key={key}
            title={product.title}
            brand={product.brand}
            link={product.link}
            objectID={product.objectID}
            imageLink={product.imageLink}
            desc={product.description}
            price={product.price}
        />
    )

    const handleClick = () => setLimit(oldValue => oldValue + 6)

    const wrapperStyle = {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "20px"
    }

    return(
        <>
            <div className="productWrapper" style={ wrapperStyle }>
                { listProducts }
            </div>
            <button onClick={handleClick}> {btnText} </button>
        </>
    )
}