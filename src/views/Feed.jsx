import styled from "styled-components";
import { Form, Input, InputGroup, Button } from "rsuite";
import { EyeFill, EyeSlashFill } from 'react-bootstrap-icons';
import { useRef, useState } from "react";

export default function Feed(){

    const feedInput = useRef()
    const passwordInput = useRef()

    const [visible, setVisible] = useState(false);
    const [error, setError] = useState()

    const handleSubmit = async () => {
        event.preventDefault();
        let message = "";

        await fetch(`https://srovnavac-backend.herokuapp.com/parse/${encodeURIComponent(encodeURIComponent(feedInput.current.value))}/${passwordInput.current.value}`, { mode: 'no-cors', method: 'POST' })
            .then(function (response) {
                if (!response.ok) {
                    console.log(response)
                    message = "Zadaný feed neexistuje nebo už tam je vložený!"
                } else {
                    message = "Feed je v pořádku vložený"
                }
            })
            .catch(function (error) {
                console.log(error)
            })
        setError(message)
    }


    const message = <Message> { error } </Message>

    return(
        <Wrapper>
            <h2> Vložte URL feedu </h2>
            <Form onSubmit={ handleSubmit }>
                <Input ref={ feedInput } placeholder="https://www.feed.cz/"/>
                <InputGroup>
                    <Input ref={ passwordInput } type={visible ? 'text' : 'password'} placeholder="Heslo"/>
                    <InputGroup.Button onClick={() => setVisible(!visible)}>
                        { visible ? <EyeFill /> : <EyeSlashFill /> }
                    </InputGroup.Button>
                </InputGroup>
                <Button type="submit" appearance="primary" block={true}> Odeslat </Button>
                { error && message }
            </Form>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  width: min(100%, 500px);
  min-height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-inline: auto;
  
  form{
    width: 100%;
  }
  
  input:not(.rs-input-group input), .rs-input-group{
    margin-bottom: 10px;
  }
`


const Message = styled.p`
  background: #f1d2d2;
  border-radius: 6px;
  margin-top: 10px;
  border: solid #de004e 2px;
  text-align: center;
  padding: 10px;
`