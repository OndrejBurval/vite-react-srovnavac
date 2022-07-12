import { RangeSlider, InputGroup, InputNumber } from "rsuite";
import { useEffect, useState } from "react";
import styled from "styled-components";

export default function FilterSlider({ price, setPrice, minPrice, setMinPrice }){
    const [value, setValue] = useState([minPrice, price]);


    useEffect(() => {
        setMinPrice(value[0])
        setPrice(value[1])
    }, [value])


    return(
        <Wrapper>
            <InputGroup>
                <InputGroup.Addon>Od</InputGroup.Addon>
                <InputNumber
                    min={0}
                    max={80000}
                    value={value[0]}
                    step={ 1000 }
                    onChange={nextValue => {
                        const [start, end] = value;
                        if (nextValue > end) {
                            return;
                        }
                        setValue([nextValue, end]);
                    }}
                />

                <InputGroup.Addon>Do</InputGroup.Addon>
                <InputNumber
                    min={0}
                    max={80000}
                    value={value[1]}
                    step={ 1000 }
                    onChange={nextValue => {
                        const [start, end] = value;
                        if (start > nextValue) {
                            return;
                        }
                        setValue([start, nextValue]);
                    }}
                />
            </InputGroup>
            <RangeSlider
                progress
                value={value}
                min={ 0 }
                max={ 80000 }
                step={ 1000 }
                onChange={value => {
                    setValue(value);
                }}
            />
        </Wrapper>
    )
}

const Wrapper = styled.div`
  .rs-input-group{
    border: none;
    box-shadow: none !important;

    &-focus{
      border: none !important;
      
      input{
        color: rgba(87, 87, 87, 1) !important;
        border-bottom: solid rgba(0, 174, 239, 1) 1px !important;
        background-color: rgba(0, 174, 239, 0.1);
      }
    }
  }
  
  input{
    border-bottom: solid rgba(0, 174, 239, 0.5) 1px !important;
    color: rgba(87, 87, 87, 0.75) !important;
    transition: .25s !important;
  }
  
  span{
    background: transparent;
    font-size: .85rem;
  }
  
  .rs-slider{
    margin-top: 20px;
    width: calc(100% - 10px);
    margin-left: 5px;
  }
`
