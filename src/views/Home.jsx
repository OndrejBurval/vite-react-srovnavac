import ProductList from "../components/ProductList";
import Filter from "../components/Filter";

export default function Home(){

    const sectionStyle = {
        display: "grid",
        gridTemplateColumns: "1fr 3fr"
    }

    return(
        <section style={ sectionStyle }>
            <Filter />
            <ProductList />
        </section>
    )
}