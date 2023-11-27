import { UserInfo } from "./UserInfo";
import { Payment } from "../Payment";

export class User {

    //#region Attributes
    private _username: string;
    get username(): string {
        return this._username;
    }

    private _password: string;
    get password(): string {
        return this._password;
    }

    private _payments: Payment[];
    get payments(): Payment[] {
        return this.payments;
    }
    //#endregion


    public constructor(username: string, password: string, payments: Payment[] = []) {
        this._username = username;
        this._password = password;
        this._payments = payments;
    }   //TODO: Throw Username and Password exceptions

    //#region Methods
    public toString(): string {
        return this.username + " " + this.password;
    }
    //#endregion
}