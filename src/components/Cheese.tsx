import {Cheese} from "../models/Cheese/Cheese.ts";
import {Roles} from "../models/User/Roles.ts";
import {useContext} from "react";
import {UserContext} from "../models/User/UserContext.tsx";
import {CheeseContext} from "../models/Cheese/CheeseContext.tsx";

interface props {
    cheese: Cheese;
}

function CheeseCmp({cheese}: props) {
    const {user} = useContext(UserContext);
    const {isSelected} = useContext(CheeseContext);

    const styleDynamic = {...styles.container, ...(isSelected ? styles.containerActive : {})};

    if (!cheese.isAdmin || (cheese.isAdmin && user?.isAdmin))
        return (
            <div style={styleDynamic}>
                <img style={{...styles.image, ...{objectFit: "cover"}}} src={cheese.photo} alt=""/>
                <div style={styles.subContainer}>
                    <span>{cheese.name}</span>
                    <span>{cheese.role.includes(Roles.admin) ? "ADMIN ONLY" : "PUBLIC"}</span>
                </div>
            </div>
        );
    return <div style={styleDynamic}>ADMIN ONLY</div>;
}

export default CheeseCmp;

const styles = {
    container: {
        padding: 30,
        display: "flex",
        flexFlow: "row",
        background: "red",
        gap: 30,
        borderRadius: 10,
        height: "100%",
        borderWidth: 10,
        borderColor: "blue",
        borderStyle: "solid"
        // width: "100%",
    },
    containerActive: {
        borderColor: "green",
    },
    subContainer: {
        display: "flex",
        flexFlow: "column",
        justifyContent: "start",
        gap: 20
    },
    image: {
        width: 100,
        height: 100,
    }
}
