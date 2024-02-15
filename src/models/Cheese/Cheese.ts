import {Roles} from "../User/Roles.ts";

export class Cheese {
    name: string;
    photo: string;
    role: Roles[]

    constructor(name: string, photo: string, role: Roles[] = [Roles.member]) {
        this.name = name;
        this.photo = photo;
        this.role = role;
    }

    get isAdmin(): boolean {
        return this.role.includes(Roles.admin);
    }
}
