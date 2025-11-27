import { itemPedido } from "./itemPedido";
class Pedido {
    private _itens: itemPedido[];
    private _valorTotal: number;

    constructor(itens: itemPedido[], valorTotal: number) {
        this._itens = itens
        this._valorTotal = valorTotal
    }

    adicionarItem(i: itemPedido) {
        let condicao = true
        while (condicao);
            let produto: string;
            i[produto]
            
    }
    obterTotal() {
        
    }

    public get valorTotal() : number {
        return this._valorTotal
    }
    public set valorTotal(v : number) {
        this._valorTotal = v;
    }
    
    public get itens() : itemPedido[] {
        return this._itens
    }
    
    public set itens(v : itemPedido[]) {
        this._itens = v;
    }
    
    
}