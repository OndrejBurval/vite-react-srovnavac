import {useState, useEffect, useRef} from "react";

export default function BrandsDropdown({ setBrand, brand }){
    const selectInput = useRef()
    const [brands, setBrands] = useState([])
    const [limit, setLimit] = useState(1000)

    useEffect(() => {
        fetch("https://srovnavac-backend.herokuapp.com/getAllBrands")
            .then(response => response.json())
            .then(brands => setBrands(brands))
    }, [])


    const listBrands =  brands.map((brand, key) => {
        return (
            //<Dropdown.Item as="button" key={key} onClick={event => setBrand(brand)}> { brand } </Dropdown.Item>
            <option value={ brand } key={ key }> { brand }</option>
        )
    })

    const onChange = () => {
        setBrand(selectInput.current.value)
    }



    const btnText = brand ? brand : "Všechny značky"

    const styles = {
        background: "linear-gradient(to right, #009FE3, #00CADD)",
        fontWeight: "bold",
        padding: "10px 15px",
        borderRadius: "10px",
        border: "none",
        boxShadow: "rgb(0 0 0 / 10%) 0px 8px 16px",
    }

    return(
        <>
            <select onChange={ onChange } ref={ selectInput } style={ styles }>
                { listBrands }
            </select>
        </>

        // <Dropdown title={ btnText } trigger='click' style={styles}>
        //     { listBrands }
        //     <Button onClick={event => setLimit(oldValue => oldValue + 100)}> Více + </Button>
        // </Dropdown>
    )
}