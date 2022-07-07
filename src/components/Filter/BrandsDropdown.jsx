import { useState, useEffect } from "react";
import { Dropdown, Button } from "rsuite";

export default function BrandsDropdown({ setBrand, brand }){
    const [brands, setBrands] = useState([])
    const [limit, setLimit] = useState(100)

    useEffect(() => {
        fetch("https://srovnavac-backend.herokuapp.com/getAllBrands")
            .then(response => response.json())
            .then(brands => setBrands(brands));
    }, [])

    const listBrands =  brands.slice(0, limit).map((brand, key) => {
        return (
            <Dropdown.Item as="button" key={key} onClick={event => setBrand(brand)}> { brand } </Dropdown.Item>
        )
    })

    const btnText = brand ? brand : "Všechny značky"

    const styles = {
        width: "100%",
        display: "grid",
        marginTop: "15px"
    }

    return(
        <Dropdown title={ btnText } trigger='click' style={styles}>
            { listBrands }
            <Button onClick={event => setLimit(oldValue => oldValue + 100)}> Více + </Button>
        </Dropdown>
    )
}