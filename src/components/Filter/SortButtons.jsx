import {RadioGroup, Form, Radio} from "rsuite";

export default function SortButtons({ setSort }){




    return (
        <Form.Group controlId="sortList" >
            <RadioGroup  name="sortList" appearance="picker" style={ styles }>
                <Radio onChange={ value => setSort(value) } value="asc" style={ radioStyles }> Vzestupně </Radio>
                <Radio onChange={ value => setSort(value) } value="desc" style={ radioStyles }> Sestupně </Radio>
            </RadioGroup>
        </Form.Group>
    )
}

const styles = {
    flexDirection: "row",
    width: "100%"
};

const radioStyles = {
    width: "100%",
    textAlign: "center"
}