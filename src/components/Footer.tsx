import {MouseEventHandler} from "react";

type Props = {
    onClick: MouseEventHandler;
}

function Footer({onClick}: Props) {
    return (
        <div style={{cursor: "pointer"}} onClick={onClick}>FOOTER</div>
    );
}

export default Footer;
