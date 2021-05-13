import planet from "../../assets/planet.png";

function Logo(props) {
    const height = props.height;
    const width = props.width;
    return (
        <img
            className={"logo h-" + height + " w-" + width}
            src={planet}
            alt="Logo"
        />
    );
}

export default Logo;
