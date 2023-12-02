import { Float } from "react-native/Libraries/Types/CodegenTypes";

export class Payment {

    //#region Attributes

    public name: string;

    public amount: number;

    public date: Date;

    public wasCompleted: boolean;

    public frequencyInDays: number;

    //#endregion

    public constructor(
        name: string, amount: number, date: Date,
        wasCompleted = false,
        frequencyInDays = 0) {

        this.name = name;
        this.amount = amount;
        this.date = date;
        this.wasCompleted = wasCompleted;
        this.frequencyInDays = frequencyInDays;
    }

    //#region Methods

    //#endregion
}