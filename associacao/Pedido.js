"use strict";
exports.__esModule = true;
exports.Pedido = void 0;
var Pedido = /** @class */ (function () {
    function Pedido() {
        this._valorTotal = 0;
        this._itens = [];
        this._valorTotal = 0;
    }
    Pedido.prototype.adicionarItem = function (item) {
        this._itens.push(item);
        this.obterTotal();
    };
    Pedido.prototype.obterTotal = function () {
        var total = 0;
        for (var _i = 0, _a = this._itens; _i < _a.length; _i++) {
            var i = _a[_i];
            total += i.subTotal();
        }
        this.valorTotal = total;
        return total;
    };
    Pedido.prototype.imprimi = function () {
        for (var i = 0; i < this.itens.length; i++) {
            var element = this.itens[i];
            console.log(element);
        }
        console.log("Valor total: " + this.valorTotal);
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
exports.Pedido = Pedido;
