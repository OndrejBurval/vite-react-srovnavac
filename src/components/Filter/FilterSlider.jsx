import { Slider } from "rsuite";

export default function FilterSlider({ price, onSliderChange }){

    const styles = {
        width: "calc(100% - 10px)",
        color: "#009FE3",
        margin: "20px auto"
    }

    return(
        <>
            <Slider
                progress
                graduated
                min={ 1000 }
                max={ 200000 }
                step={ 1000 }
                name="price"
                style={ styles }
                defaultValue={ price }
                onChange={ value => onSliderChange(value) }
            />
        </>
    )
}