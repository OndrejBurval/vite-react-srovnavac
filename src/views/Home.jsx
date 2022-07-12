import ProductList from "../components/ProductList";
import SearchBar from "../components/SearchBar";
import Filter from "../components/Filter"
import { useState } from "react";
import styled from "styled-components";

export default function Home(){
    const urlParams = new URLSearchParams(window.location.search)

    const [price, setPrice] = useState(80000)
    const [minPrice, setMinPrice] = useState(0)
    const [brand, setBrand] = useState()
    const [search, setSearch] = useState(urlParams.get("search") ? decodeURIComponent(urlParams.get("search")) : "mosaz") //)
    const [liveSearch, setLiveSearch] = useState(false)
    const [sort, setSort] = useState()

    const sectionStyle = {
        display: "grid",
        gridTemplateColumns: "1fr 3fr",
        columnGap: "20px"
    }

    return(
        <>
            <SearchBar
                setSearch={ setSearch }
                setLiveSearch={ setLiveSearch }
                liveSearch={ liveSearch } />
            <Content>
                <Filter
                    brand={ brand }
                    setBrand={ setBrand }
                    price={ price }
                    setPrice={ setPrice }
                    setSort={ setSort }
                    minPrice={ minPrice }
                    setMinPrice={ setMinPrice } />

                <ProductList
                    price={ price }
                    minPrice={ minPrice }
                    brand={ brand }
                    search={ search }
                    setSearch={ setSearch }
                    sort={ sort }
                    liveSearch={ liveSearch } />
            </Content>
        </>

    )
}


const Content = styled.div`
  display: grid;
  gap: 20px;
  
  @media (min-width: 1024px){
    grid-template-columns: 1fr 3fr;
  }
`