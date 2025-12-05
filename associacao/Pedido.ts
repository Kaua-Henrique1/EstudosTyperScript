import { itemPedido } from "./itemPedido";
export class Pedido {
    private _itens: itemPedido[];
    private _valorTotal: number = 0;

    constructor() {
        this._itens = []
        this._valorTotal = 0
    }

    adicionarItem(item: itemPedido) {
        this._itens.push(item)
        this.obterTotal()
    }
    obterTotal() {
        let total = 0;
        for (const i of this._itens) {
            total += i.subTotal();
        }
        this.valorTotal = total;
        return total;
    }

    imprimi() {
        for (let i = 0; i < this.itens.length; i++) {
            const element = this.itens[i];
            console.log(element)
        }

        console.log("Valor total: "+ this.valorTotal)
    }

    public get valorTotal(): number {
        return this._valorTotal
    }
    public set valorTotal(v: number) {
        this._valorTotal = v;
    }

    public get itens(): itemPedido[] {
        return this._itens
    }

    public set itens(v: itemPedido[]) {
        this._itens = v;
    }


}