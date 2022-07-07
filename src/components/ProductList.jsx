import { useEffect, useState } from "react";
import Product from "./Product";
import { Button } from "rsuite";

export default function ProductList({price, brand}){
    const urlParams = new URLSearchParams(window.location.search)

    const [data, setData] = useState([])
    const [search, setSearch] = useState(urlParams.get("search") ? decodeURIComponent(urlParams.get("search")) : "mosaz") //)
    const [limit, setLimit] = useState(9)
    const [disabled, setDisabled] = useState(false)
    const [btnText, setBtnText] = useState("Zobrazit více položek +")

    useEffect(() => {
        if (!price) return
        fetch(`https://srovnavac-backend.herokuapp.com/getProductsByPrice/${search}/${price}`)
            .then(response => response.json())
            .then(data => setData(data));
    }, [price])

    useEffect(() => {
        if (!brand) return
        fetch(`https://srovnavac-backend.herokuapp.com/getProductsByBrand/${brand}`)
            .then(response => response.json())
            .then(data => setData(data));
    }, [brand])

    useEffect(() => {
        data.length <= limit ? setDisabled(true) : setDisabled(false)
    }, [data, limit])

    useEffect(() => {
        fetch(`https://srovnavac-backend.herokuapp.com/search/${search}`)
            .then(response => response.json())
            .then(data => setData(data));
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

    const buttonStyle = {
        gridColumn: "1 / 4"
    }

    return(
        <div className="productWrapper" style={ wrapperStyle }>
            { listProducts }
            { !disabled && <Button onClick={handleClick} style={buttonStyle}> {btnText} </Button> }
        </div>
    )
}