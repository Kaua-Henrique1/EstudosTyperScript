export class Produto {
    _codigo;
    _valor;
    _descricao;
    constructor(codigo, valor, descricao) {
        this._codigo = codigo;
        this._valor = valor;
        this._descricao = descricao;
    }
    set codigo(v) {
        this._codigo = v;
    }
    get codigo() {
        return this._codigo;
    }
    set valor(v) {
        this._valor = v;
    }
    get valor() {
        return this._valor;
    }
    set descricao(v) {
        this._descricao = v;
    }
    get descricao() {
        return this._descricao;
    }
}
