import { UserInfo } from "./UserInfo";
import { Payment } from "./Payment";

export class User {

    //#region Attributes
    public _username: string;
    public get username(): string { return this._username; }
    public set username(newUsername: string) { this._username = newUsername }

    public _password: string;
    public get password(): string { return this._password; }
    public set password(value: string) { this._password = value }

    private _payments: Payment[];
    public get payments(): Payment[] { return this._payments; }
    public set payments(value: Payment[]) { this._payments = value }
    //#endregion

    public constructor(username: string, password: string, payments: Payment[] = []) {
        this._username = username;
        this._password = password;
        this._payments = payments;
    }   //TODO: Throw Username and Password exceptions

    toJSON() {
        return {
            username: this._username,
            password: this.password,
            payments: this._payments
        };
    }

    //#region Methods

    //#endregion
}