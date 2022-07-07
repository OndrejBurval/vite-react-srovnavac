import FilterSlider from "./FilterSlider";
import BrandsDropdown from "./BrandsDropdown";


export default function Filter({ price, setPrice, setBrand, brand }){

    const onSliderChange = (value) => setPrice(value)

    const styles = {
        background: "white",
        boxShadow: "rgb(0 0 0 / 10%) 0px 8px 16px",
        height: "max-content",
        padding: "10px",
        borderRadius: "12px"
    }

    return(
        <div style={ styles }>
            <h3>
                Filtr
            </h3>
            <strong>
                Cena
            </strong> <br/>
            <span>
                Do { price } Kč
            </span>

            <FilterSlider price={price} onSliderChange={onSliderChange}/>

            <strong>
                Značka
            </strong>
            <BrandsDropdown setBrand={ setBrand } brand={ brand } />
        </div>
    )
}