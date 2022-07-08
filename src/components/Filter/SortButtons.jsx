import {RadioGroup, Form, Radio} from "rsuite";

export default function SortButtons({ setSort }){


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
                <Radio onChange={ value => setSort(value) } value="asc"> Vzestupně </Radio>
                <Radio onChange={ value => setSort(value) } value="desc"> Sestupně </Radio>
            </RadioGroup>
        </Form.Group>
    )
}