import { useState, useEffect, useRef } from "react";
import styled from "styled-components";

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


    return(
        <Select onChange={ onChange } ref={ selectInput }>
            { listBrands }
        </Select>


        // <Dropdown title={ btnText } trigger='click' style={styles}>
        //     { listBrands }
        //     <Button onClick={event => setLimit(oldValue => oldValue + 100)}> Více + </Button>
        // </Dropdown>
    )
}

const Select = styled.select`
  background: linear-gradient(to right, #009FE3, #00CADD);
  font-weight: bold;
  padding: 10px 15px;
  border-radius: 10px;
  border: none;
  box-shadow: rgb(0 0 0 / 10%) 0px 8px 16px;
`