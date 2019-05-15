export default class Currency {
    name: string;
    code: string;
    price: number;

    constructor(name: string, code: string, price: number) {
        this.name = name;
        this.code = code;
        this.price = price;
    }
}