export default function Product({title, brand, link, objectID, imageLink, desc, price}){

    const boxStyle = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "white",
        boxShadow: "rgb(0 0 0 / 10%) 0px 8px 16px",
        borderRadius: "12px",
        padding: "10px"
    }


    return (
        <div className="card" style={ boxStyle }>
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
        </div>
    )
}