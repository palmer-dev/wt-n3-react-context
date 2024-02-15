import React, {createContext, useState} from "react";
import {User} from "./User.ts";
import {Roles} from "./Roles.ts";

export type UserContextType = {
    user?: User;
    login: () => void;
}

export const UserContext = createContext<UserContextType>({
    login: () => {
    } // no op
});

type Props = {
    children: React.ReactNode;
}

const LambdaUser: User = new User({name: "Raymond", role: [Roles.admin]});

export const UserContextProvider = ({children}: Props) => {
    const [user, setUser] = useState<User>();

    const login = () => {
        setUser(LambdaUser);
    }

    const value = {user, login};

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
}
