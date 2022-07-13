import { motion } from "framer-motion";
import styled from "styled-components";
import placeholder from "../assets/placeholder-image.png"

export default function Product({title, brand, link, objectID, imageLink, desc, price}){

    const onError = (e) => e.currentTarget.src = placeholder

    const includesPrefix = link.includes("http")


    return (
            <Card
                whileHover={{ scale: 1.025 }}
                initial={{ y: -10, opacity: 0, scale: .95 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ type: "spring" }}
                href={ includesPrefix ? link  : (`https://${link}`) }
                target="_blank"
            >
                <Brand>
                    { brand.toUpperCase() }
                </Brand>
                <Title>
                    { title.substring(0, 25) + "..." }
                </Title>

                <img id={ objectID }
                     src={ imageLink }
                     alt={ title.substring(0, title.length - 1) }
                     onError={ onError }
                />

                <Description>
                    { desc.substring(0, 35) + "..." }
                </Description>
                <Price>
                { price } CZK
                </Price>
            </Card>
    )
}

const Card = styled(motion.a)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
  box-shadow: rgb(0 0 0 / 10%) 0px 8px 16px;
  border-radius: 12px;
  padding: 10px;
  
  *{
    text-decoration: none;
    color: black;
  }

  &:hover, &:focus{
    text-decoration: none;

  }
  
  img{
    height: 70px;
  }
`

const Brand = styled.p`

`

const Title = styled.h3`
  color: #212121;
  font-size: 1rem !important;
`

const Description = styled.p``

const Price = styled.h3`
  font-weight: 900;
  color: #009fe3;
  font-size: 1.15rem;
`