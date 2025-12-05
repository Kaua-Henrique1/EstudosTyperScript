import { itemPedido } from "./itemPedido";
import { Produto } from "./produto";

export class CarrinhoCompra {
    private _item: itemPedido[]
    private _produto: Produto

    
    public set item(v : itemPedido[]) {
        this._item = v;
    }
    public get item() : itemPedido[] {
        return this._item
    }
    
    adicionarItem(item: itemPedido) {
        this._item.push(item)
    }
    aumentarQuantItem(quantidade: number, codigoProduto: string) {
        for (const item of this._item) {
            if (codigoProduto === item.produto.codigo) {
                item.adcionaProduto(quantidade);
                return;
            }
        }
    }
    

// - aumentar ou diminuir a quantidade de um item
// - remover um item
// - aplicar um cupom de desconto que deve diminuir o valor a ser pago
// - obter o total da compra
// - finalizar o pedido (deve criar um objeto pedido com os itens adicionados ao carrinho)

}
