export class itemPedido {
    _produto;
    _quantidade;
    constructor(produto, quantidade) {
        this._produto = produto;
        this._quantidade = quantidade;
    }
    subTotal() {
        return this.produto.valor * this.quantidade;
    }
    adcionaQuantProduto(quantidade) {
        return this._quantidade += quantidade;
    }
    diminuirQuantProduto(quantidade) {
        return this._quantidade -= quantidade;
    }
    get produto() {
        return this._produto;
    }
    set produto(v) {
        this._produto = v;
    }
    get quantidade() {
        return this._quantidade;
    }
    set quantidade(v) {
        this._quantidade = v;
    }
}
