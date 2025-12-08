export class Pedido {
    _itens;
    _valorTotal = 0;
    constructor() {
        this._itens = [];
        this._valorTotal = 0;
    }
    get valorTotal() {
        return this._valorTotal;
    }
    set valorTotal(v) {
        this._valorTotal = v;
    }
    get itens() {
        return this._itens;
    }
    set itens(v) {
        this._itens = v;
    }
}
