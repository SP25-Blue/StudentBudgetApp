import { Float } from "react-native/Libraries/Types/CodegenTypes";

export class Payment {

    //#region Attributes

    public name: string;

    public amount: number;

    public date: Date;

    //#endregion

    public constructor(name: string, amount: number, date: Date) {
        this.name = name;
        this.amount = amount;
        this.date = date;
    }

    //#region Methods

    //#endregion
}