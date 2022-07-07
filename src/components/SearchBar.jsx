import { InputGroup, Input } from "rsuite";

export default function SearchBar(){

    const urlParams = new URLSearchParams(window.location.search)
    const defaultValue = urlParams.get("search") ? decodeURIComponent(urlParams.get("search")) : ""

    const styles = {
        maxWidth: "800px",
        marginInline: "auto",
        paddingBlock: "50px"
    }

    return(
        <div className="searchBar" style={styles}>
            <h2>
                Vybírejte z tisíců produktů
            </h2>
            <form className="searchForm" >
                <InputGroup>
                    <Input type="text" name="search" placeholder="Např. šlapací kára" defaultValue={ defaultValue }/>
                    <InputGroup.Button type="submit">
                        Vyhledat
                    </InputGroup.Button>
                </InputGroup>
            </form>
        </div>
    )
}