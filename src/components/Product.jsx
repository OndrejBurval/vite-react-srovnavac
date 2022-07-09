import { motion } from "framer-motion";
import styled from "styled-components";

export default function Product({title, brand, link, objectID, imageLink, desc, price}){


    return (

            <Card
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ type: "spring" }}
            >
                <span>
                    { brand.toUpperCase() }
                </span>
                <h3>
                    <a href={ link } target="_blank" rel="noopener noreferrer">
                        { title.substring(0, 25) + "..." }
                    </a>
                </h3>
                <img id={ objectID }
                     src={ imageLink }
                     alt={ title.substring(0, title.length - 1) }
                     width="70px"
                     height="70px"
                />

                <strong>
                    { desc.substring(0, 35) + "..." }
                </strong>
                <p>
                { price } CZK
                </p>
            </Card>
    )
}

const Card = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
  box-shadow: rgb(0 0 0 / 10%) 0px 8px 16px;
  border-radius: 12px;
  padding: 10px;
`