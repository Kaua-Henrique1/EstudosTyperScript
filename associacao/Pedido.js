"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pedido = /** @class */ (function () {
    function Pedido(itens, valorTotal) {
        this._itens = itens;
        this._valorTotal = valorTotal;
    }
    Pedido.prototype.adicionarItem = function (i) {
        var condicao = true;
        while (condicao)
            ;
        var produto;
        i[produto];
    };
    Pedido.prototype.obterTotal = function () {
    };
    Object.defineProperty(Pedido.prototype, "valorTotal", {
        get: function () {
            return this._valorTotal;
        },
        set: function (v) {
            this._valorTotal = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pedido.prototype, "itens", {
        get: function () {
            return this._itens;
        },
        set: function (v) {
            this._itens = v;
        },
        enumerable: false,
        configurable: true
    });
    return Pedido;
}());
