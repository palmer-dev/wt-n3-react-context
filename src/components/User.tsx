import {useContext} from "react";
import {UserContext} from "../models/User/UserContext.tsx";

function User() {
    const {user, login} = useContext(UserContext);

    if (!user) {
        return <button onClick={login}>Login</button>
    }

    return (
        <div>Bonjour {user?.name}</div>
    );
}

export default User;
