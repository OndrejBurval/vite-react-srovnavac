import FilterSlider from "./FilterSlider";
import BrandsDropdown from "./BrandsDropdown";
import SortButtons from "./SortButtons";
import styled from "styled-components";


export default function Filter({ price, setPrice, setBrand, brand, setSort, minPrice, setMinPrice }){

    return(
        <Wrapper>
            <h3> Filter </h3>
            <Content>

                <Group>
                    <strong>
                        Cena
                    </strong>

                    <FilterSlider price={ price } setPrice={ setPrice } minPrice={ minPrice } setMinPrice={ setMinPrice }/>
                </Group>

                <Group>
                    <strong>
                        Seřadit:
                    </strong>
                    <SortButtons setSort={ setSort } />
                </Group>

                <Group>
                    <strong>
                        Značka
                    </strong>
                    <BrandsDropdown setBrand={ setBrand } brand={ brand } />
                </Group>
            </Content>
        </Wrapper>
    )
}

const Wrapper = styled.div`

`

const Content = styled.div`
  background: white;
  box-shadow: rgb(0 0 0 / 10%) 0px 8px 16px;
  height: max-content;
  padding: 10px;
  border-radius: 12px;
  width: 100%;
  
  @media (min-width: 1024px){
    position: sticky;
    top: 20px;
  }
`
const Group = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;
`
