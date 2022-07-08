import { Slider } from "rsuite";
import {useRef} from "react";

export default function FilterSlider({ price, onPriceChange }){

    const priceInput = useRef()
    const slider = useRef()

    const onInputChange = () => {
        const value = parseInt(priceInput.current.value)

        if (value < 0 || isNaN(value)) {
            priceInput.current.value = 1
        } else if (value > 80000){
            priceInput.current.value = 80000
        } else{
            onPriceChange(value)
        }
    }

    const onSliderChange = (value) => {
        onPriceChange(value)
        priceInput.current.value = value
        console.log(slider.current.defaultValue)
    }

    const styles = {
        width: "calc(100% - 10px)",
        color: "#009FE3",
        margin: "20px auto"
    }

    return(
        <>
            <span>
                Do
                <input type="number" min={1000} max={80000} onInput={ onInputChange } defaultValue={ price } ref={ priceInput } step={ 1000 }/>
                Kč
            </span>
            <Slider
                ref={ slider }
                progress
                min={ 1000 }
                max={ 80000 }
                step={ 1000 }
                name="price"
                style={ styles }
                value={ price }
                onChange={ value => onSliderChange(value) }
            />
        </>
    )
}