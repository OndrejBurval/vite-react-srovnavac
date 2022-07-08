import {RadioGroup, Form, Radio} from "rsuite";

export default function SortButtons({ setSort }){

    const asc = (a, b) => b - a
    const desc = (a, b) => a - b


    const styles = {
        radioGroupLabel: {
            padding: '8px 2px 8px 10px',
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "10px"
        }
    };


    return (
        <Form.Group controlId="sortList" style={styles}>
            <RadioGroup  name="sortList" appearance="picker">
                <Radio onChange={ value => setSort(value) } value={ 0 }> Vzestupně </Radio>
                <Radio onChange={ value => setSort(value) } value={ 1 }> Sestupně </Radio>
            </RadioGroup>
        </Form.Group>
    )
}