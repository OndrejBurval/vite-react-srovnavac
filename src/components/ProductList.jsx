import { useEffect, useState } from "react";
import Product from "./Product";
import { Button } from "rsuite";

export default function ProductList({price, brand, search}){

    const [data, setData] = useState([])
    const [limit, setLimit] = useState(9)
    const [disabled, setDisabled] = useState(false)
    const [btnText, setBtnText] = useState("Zobrazit více položek +")

    useEffect(() => {
        if (!price) return
        let fetchURL = `https://srovnavac-backend.herokuapp.com/getProductsByPrice/${search}/${price}`
        if (brand) fetchURL = `https://srovnavac-backend.herokuapp.com/getProductsByPrice/${brand}/${price}`

        fetch(fetchURL)
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
    }, [search])


    // TODO live search
    // useEffect(() => {
    //     if (search.length < 1) return
    //     fetch(`https://srovnavac-backend.herokuapp.com/search/${search}`)
    //         .then(response => response.json())
    //         .then(data => setData(data));
    // }, [search])


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