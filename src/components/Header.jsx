import Logo from '../assets/logo.svg';

export default function Header(){

    const styles = {
        backgroundImage: "linear-gradient(to right, #009FE3, #00CADD)",
        height: "50px",
    }

    const innerStyles = {
        width: "min(95vw, 1500px)",
        marginInline: "auto"
    }

    const linkStyles = {
        color: "white",
        display: "flex",
        alignItems: "center",
        gap: "20px"
    }

    return (
        <nav style={ styles }>
            <div style={ innerStyles }>
                <a href="/" style={ linkStyles }>
                    <img src={ Logo } alt="eBRÁNA logo" width="70px" height="50px"  />
                    Srovnávač zboží
                </a>
            </div>
        </nav>
    )
}