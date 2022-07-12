import { useState, useEffect, useRef } from "react";
import { Dropdown, Input } from "rsuite";
import styled from "styled-components";

export default function BrandsDropdown({ setBrand, brand }){
    const selectInput = useRef()
    const [brands, setBrands] = useState([])
    const [limit, setLimit] = useState(1000)
    const [search, setSearch] = useState()

    // const searchInput = useRef()
    // const searchFunc = (a) => {
    //     if (a.toLowerCase().includes( searchInput.current.value.toLowerCase() )) return a
    // }


    useEffect(() => {
        fetch("https://srovnavac-backend.herokuapp.com/getAllBrands")
            .then(response => response.json())
            .then(brands => setBrands(brands))
    }, [])



    const listBrands =  brands.map((brand, key) => {
        return (
            // <Dropdown.Item key={key} onClick={event => setBrand(brand)}> { brand } </Dropdown.Item>
            <option value={ brand } key={ key } selected={key === 1 && true}> { brand }</option>
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


        // <Dropdown title={ btnText } trigger='click'>
        //     <Input placeholder="Vyhleda..." ref={ searchInput } onChange={ () => setSearch(searchInput.current.value) } />
        //     { listBrands }
        // </Dropdown>
    )
}

const Select = styled.select`
  border: solid #009FE3 2px;
  font-weight: bold;
  padding: 10px 15px;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 10%) 0px 8px 16px;
`