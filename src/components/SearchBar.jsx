import { InputGroup, Input, Checkbox } from "rsuite";
import { useRef } from "react";
import styled from "styled-components";
import {Search} from "react-bootstrap-icons";

export default function SearchBar({setSearch, setLiveSearch, liveSearch}){

    const urlParams = new URLSearchParams(window.location.search)
    const defaultValue = urlParams.get("search") ? decodeURIComponent(urlParams.get("search")) : ""

    const inputSearch = useRef()


    const onChange = () => {
        setSearch(inputSearch.current.value)
    }

    return(
        <Wrapper>
            <h2>
                Vybírejte z tisíců produktů
            </h2>
            <form className="searchForm">
                <InputGroup>
                    <Input type="text" name="search" ref={ inputSearch } placeholder="Např. šlapací kára" defaultValue={ defaultValue } onChange={ onChange } />
                    <Checkbox onChange={ () => setLiveSearch(oldValue => !oldValue) } defaultChecked={ liveSearch }>
                        Live search
                    </Checkbox>
                    <InputGroup.Button type="submit" appearance="secondary">
                        <Search size={ 19 } color="#009fe3" />
                        Vyhledat
                    </InputGroup.Button>
                </InputGroup>
            </form>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  max-width: 800px;
  margin-inline: auto;
  padding-block: 50px;
  
  form, .rs-input-group{
    border-radius: 15px !important;
  }
  
  
  input{
    border-top-left-radius: 15px !important;
    border-bottom-left-radius: 15px !important;
  }
  
  .rs-checkbox-checker label{
    span{
      position: relative;
      top: 0;
      left: 0;
    }
    display: grid;
    grid-auto-flow: column;
    place-items: center;
  }

  button{
    border-top-right-radius: 15px !important;
    border-bottom-right-radius: 15px !important;
    background: #00cadd;
    color: white;
    font-size: 1rem;
    
    svg{
      transition: .3s;
      margin-right: 10px;
    }
    
    &:hover{
      background: #00a1e3;
      
      svg{
        fill: white !important;
      }
    }
  }
`
