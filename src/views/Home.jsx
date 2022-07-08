import ProductList from "../components/ProductList";
import SearchBar from "../components/SearchBar";
import Filter from "../components/Filter"
import {useState} from "react";

export default function Home(){
    const urlParams = new URLSearchParams(window.location.search)

    const [price, setPrice] = useState(80000)
    const [minPrice, setMinPrice] = useState(0)
    const [maxPrice, setMaxPrice] = useState(80000)
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
            <SearchBar setSearch={ setSearch } setLiveSearch={ setLiveSearch } liveSearch={ liveSearch } />
            <section style={ sectionStyle }>
                <Filter brand={ brand } setBrand={ setBrand } price={ price } setPrice={ setPrice } setSort={ setSort } />
                <ProductList price={ price } brand={ brand } search={ search } setSearch={ setSearch } sort={ sort } liveSearch={ liveSearch } />
            </section>
        </>

    )
}