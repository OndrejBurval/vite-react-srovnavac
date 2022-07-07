import ProductList from "../components/ProductList";
import SearchBar from "../components/SearchBar";
import Filter from "../components/Filter"
import {useState} from "react";

export default function Home(){

    const [price, setPrice] = useState(50000)
    const [brand, setBrand] = useState()

    const sectionStyle = {
        display: "grid",
        gridTemplateColumns: "1fr 3fr",
        columnGap: "20px"
    }

    return(
        <>
            <SearchBar />
            <section style={ sectionStyle }>
                <Filter brand={ brand } setBrand={ setBrand } price={ price } setPrice={ setPrice } />
                <ProductList price={ price } brand={ brand } />
            </section>
        </>

    )
}