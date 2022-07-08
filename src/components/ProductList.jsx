import { useEffect, useState } from "react";
import Product from "./Product";
import { Button } from "rsuite";

export default function ProductList({price, brand, search, sort, liveSearch}){

    const [data, setData] = useState([])
    const [limit, setLimit] = useState(9)
    const [disabled, setDisabled] = useState(false)
    const [btnText, setBtnText] = useState("Zobrazit více položek +")


    // Price change
    useEffect(() => {
        if (!price) return
        let fetchURL = `https://srovnavac-backend.herokuapp.com/getProductsByPrice/${search}/${price}`
        if (brand) fetchURL = `https://srovnavac-backend.herokuapp.com/getProductsByPrice/${brand}/${price}`
        setLimit(9)

        fetch(fetchURL)
            .then(response => response.json())
            .then(data => setData(data));
    }, [price])

    // Brand change
    useEffect(() => {
        if (!brand) return
        fetch(`https://srovnavac-backend.herokuapp.com/getProductsByBrand/${brand}`)
            .then(response => response.json())
            .then(data => setData(data));
    }, [brand])

    // Data, Limit change
    useEffect(() => {
        data.length <= limit ? setDisabled(true) : setDisabled(false)
    }, [data, limit])


    // Live Search
    useEffect(() => {
        if (search.length < 1 || !liveSearch) return
        setLimit(9)

        fetch(`https://srovnavac-backend.herokuapp.com/search/${search}`)
            .then(response => response.json())
            .then(data => setData(data));
    }, [search])


    // Init data
    useEffect(() => {
        fetch(`https://srovnavac-backend.herokuapp.com/search/${search}`)
            .then(response => response.json())
            .then(data => setData(data));
    }, [])


    const sortFunc = (a ,b) => {
        if (sort === "asc") return a.price - b.price
        if (sort === "desc") return b.price - a.price
        return null
    }

    const listProducts = data.sort(sortFunc).slice(0, limit).map((product, key) =>
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

    const fullWidthStyle = {
        gridColumn: "1 / 4"
    }

    const buttonStyle = {
        gridColumn: "1 / 4"
    }

    const emptyMessage = (
        <div style={ fullWidthStyle }>
            <h2> Omlouváme se, ale nenašli jsme žádné produkty dle vaší specifikace... </h2>
            <h3> Začněte znovu například vyhledáním produktu</h3>
        </div>
    )

    return(
        <div className="productWrapper" style={ wrapperStyle }>
            <div className="header"  style={ fullWidthStyle }> <h3> Výsledky vyhledávání </h3> </div>
            { data.length === 0 ? emptyMessage : listProducts }
            { !disabled && <Button onClick={handleClick} style={buttonStyle}> {btnText} </Button> }
        </div>
    )
}