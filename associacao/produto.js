"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Produto = void 0;
var Produto = /** @class */ (function () {
    function Produto(codigo, valor, descricao) {
        this._codigo = codigo;
        this._valor = valor;
        this._descricao = descricao;
    }
    Object.defineProperty(Produto.prototype, "codigo", {
        get: function () {
            return this._codigo;
        },
        set: function (v) {
            this._codigo = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Produto.prototype, "valor", {
        get: function () {
            return this._valor;
        },
        set: function (v) {
            this._valor = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Produto.prototype, "descricao", {
        get: function () {
            return this._descricao;
        },
        set: function (v) {
            this._descricao = v;
        },
        enumerable: false,
        configurable: true
    });
    return Produto;
}());
exports.Produto = Produto;
