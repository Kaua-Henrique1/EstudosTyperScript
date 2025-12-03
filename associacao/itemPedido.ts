import { Produto } from "./produto";

export class itemPedido {
    private _produto: Produto;
    private _quantidade: number;

    constructor(produto: Produto, quantidade: number) {
        this._produto = produto
        this._quantidade = quantidade
    }

    subTotal(): number {
        return this.produto.valor * this.quantidade
    }

    public get produto(): Produto {
        return this._produto
    }
    public set produto(v: Produto) {
        this._produto = v;
    }

    public get quantidade(): number {
        return this._quantidade
    }
    public set quantidade(v: number) {
        this._quantidade = v;
    }

}