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

    toJSON() {
        return {
            name: this.name,
            amount: this.amount,
            date: this.date,
            wasCompleted: this.wasCompleted
        };
    }

    //#region Methods

    //#endregion
}