import { InputGroup, Input } from "rsuite";
import {useRef} from "react";

export default function SearchBar({setSearch}){

    const urlParams = new URLSearchParams(window.location.search)
    const defaultValue = urlParams.get("search") ? decodeURIComponent(urlParams.get("search")) : ""

    const inputSearch = useRef()

    const styles = {
        maxWidth: "800px",
        marginInline: "auto",
        paddingBlock: "50px"
    }

    const onChange = () => {
        setSearch(inputSearch.current.value)
    }

    return(
        <div className="searchBar" style={styles}>
            <h2>
                Vybírejte z tisíců produktů
            </h2>
            <form className="searchForm">
                <InputGroup>
                    <Input type="text" name="search" ref={ inputSearch } placeholder="Např. šlapací kára" defaultValue={ defaultValue } onChange={ onChange } />
                    <InputGroup.Button type="submit">
                        Vyhledat
                    </InputGroup.Button>
                </InputGroup>
            </form>
        </div>
    )
}