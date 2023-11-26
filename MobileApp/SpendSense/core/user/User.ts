import { UserInfo } from "./UserInfo";

export class User {
    private _username: string;
    get username(): string {
        return this._username;
    }

    private _password: string;
    get password(): string {
        return this._password;
    }

    public constructor(username: string, password: string) {
        this._username = username;
        this._password = password;
    }   //TODO: Throw Username and Password exceptions


    public toString(): string {
        return this.username + " " + this.password;
    }
}