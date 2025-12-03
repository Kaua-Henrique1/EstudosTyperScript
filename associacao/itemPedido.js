"use strict";
exports.__esModule = true;
exports.itemPedido = void 0;
var itemPedido = /** @class */ (function () {
    function itemPedido(produto, quantidade) {
        this._produto = produto;
        this._quantidade = quantidade;
    }
    itemPedido.prototype.subTotal = function () {
        return this.produto.valor * this.quantidade;
    };
    Object.defineProperty(itemPedido.prototype, "produto", {
        get: function () {
            return this._produto;
        },
        set: function (v) {
            this._produto = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(itemPedido.prototype, "quantidade", {
        get: function () {
            return this._quantidade;
        },
        set: function (v) {
            this._quantidade = v;
        },
        enumerable: false,
        configurable: true
    });
    return itemPedido;
}());
exports.itemPedido = itemPedido;
