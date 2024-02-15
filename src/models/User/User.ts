import {Roles} from "./Roles.ts";

type UserType = {
    name: string;
    role: Roles[]
}

export class User {
    name: string;
    role: Roles[]


    constructor({name, role = [Roles.member]}: UserType) {
        this.name = name;
        this.role = role;
    }

    get isAdmin(): boolean {
        return this.role.includes(Roles.admin)
    }
}
