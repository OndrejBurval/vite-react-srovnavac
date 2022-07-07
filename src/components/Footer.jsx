import Logo from "../assets/logo.svg"

export default function Footer(){

    const styles = {
        background: "linear-gradient(to right, #009FE3, #00CADD)",
        textAlign: "center",
        padding: "20px 20px 10px 20px",
        display: "grid",
        placeItems: "center"
    }

    const linkStyles = {
        color: "white"
    }

    return(
        <div className="footer" style={ styles }>
            <a href="https://ebrana.cz/" target="_blank">
                <img src={Logo} alt="" style={{ maxWidth: "120px", marginBottom: "20px" }} />
            </a>
            <span style={{ color: "white", display: "flex", gap: "5px" }}>
                &copy;
                {new Date().getFullYear()} |
                <a href="mailto:podpora@ebrana.cz" style={ linkStyles }> podpora@ebrana.cz </a>  |
                <a href="tel:+420460000270" style={ linkStyles }> +420 460 000 270 </a>
            </span>
        </div>
    )
}