

export class Payment {
    // Properties (also called fields or attributes)
    private amount: number;
    public name: string;

    // Constructor
    constructor(amount: number, name: string) {
        this.amount = amount;
        this.name = name;
    }

    // Methods
    public print() {
        console.log(`*${this.name}: ${this.amount}`);
    }
}