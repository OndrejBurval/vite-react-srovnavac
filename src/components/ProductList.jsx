import { useEffect, useState } from "react";
import Product from "./Product";
import { Button, Loader } from "rsuite";
import styled from "styled-components";

export default function ProductList({price, minPrice,brand, search, sort, liveSearch}){

    const [data, setData] = useState([])
    const [limit, setLimit] = useState(9)
    const [disabled, setDisabled] = useState(false)
    const [btnText, setBtnText] = useState("Zobrazit více položek +")
    const [loaded, setLoaded] = useState(false)


    // Price change
    useEffect(() => {
        if (!price) return
        setLoaded(false)
        let fetchURL = `https://srovnavac-backend.herokuapp.com/getProductsByPrice/${search}/${price}`
        if (brand) fetchURL = `https://srovnavac-backend.herokuapp.com/getProductsByPrice/${brand}/${price}`
        setLimit(9)

        fetch(fetchURL)
            .then(response => response.json())
            .then(data => setData(data));
        setLoaded(true)
    }, [price])

    // Brand change
    useEffect(() => {
        if (!brand) return
        setLoaded(false)
        fetch(`https://srovnavac-backend.herokuapp.com/getProductsByBrand/${brand}`)
            .then(response => response.json())
            .then(data => setData(data));
        setLoaded(true)
    }, [brand])

    // Data, Limit change
    useEffect(() => {
        setLoaded(false)
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
        setLoaded(true)
    }, [])


    const sortFunc = (a ,b) => {
        if (sort === "asc") return a.price - b.price
        if (sort === "desc") return b.price - a.price
        return null
    }



    const listProducts = data.filter((a) => (a.price > minPrice && a )).sort(sortFunc).slice(0, limit).map((product, key) =>
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

    const emptyMessage = (
        <Message>
            <h2> Omlouváme se, ale nenašli jsme žádné produkty dle vaší specifikace... </h2>
            <h3> Začněte znovu například vyhledáním produktu</h3>
        </Message>
    )

    const loadingMessage = (
        <Message>
            <Loader content="Vyhledávání produktů..." vertical speed={"slow"}/>
        </Message>
    )

    const message = loaded ? loadingMessage : emptyMessage

    return(
        <Wrapper>
            <h3> Výsledky vyhledávání </h3>
            { data.length === 0 ? message : (
                <Content>
                    { listProducts }
                </Content>
            ) }
            { !disabled && <Button onClick={handleClick} appearance="primary" size="lg"> {btnText} </Button> }
        </Wrapper>
    )
}

const Wrapper = styled.div`
  display: grid;
  
  [type="button"]{
    margin-top: 20px;
  }
`

const Content = styled.div`
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`

const Message = styled.div`
  text-align: center;
`