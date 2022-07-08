import FilterSlider from "./FilterSlider";
import BrandsDropdown from "./BrandsDropdown";
import SortButtons from "./SortButtons";


export default function Filter({ price, setPrice, setBrand, brand, setSort }){

    const onPriceChange = (value) => setPrice(value)

    const styles = {
        background: "white",
        boxShadow: "rgb(0 0 0 / 10%) 0px 8px 16px",
        height: "max-content",
        padding: "10px",
        borderRadius: "12px",
    }


    return(
        <div className="filterBox">
            <div className="header"> <h3> Filter </h3> </div>
            <div style={ styles }>

                <div className="group">
                    <strong>
                        Cena
                    </strong>

                    <FilterSlider price={ price } onPriceChange={ onPriceChange }/>
                </div>

                <div className="group">
                    <strong>
                        Seřadit:
                    </strong>
                    <SortButtons setSort={ setSort } />
                </div>

                <div className="group">
                    <strong>
                        Značka
                    </strong>
                    <BrandsDropdown setBrand={ setBrand } brand={ brand } />
                </div>



            </div>
        </div>
    )
}