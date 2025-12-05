import { CarrinhoCompra } from "./carrinhoCompra";
import { itemPedido } from "./itemPedido";
import { Pedido } from "./Pedido";
import { Produto } from "./produto";

let produtosOculos = new Produto("B123",84,"Oculos Escuro")
let produtosCamiseta = new Produto("A123",54,"Camiseta Basica")
let produtosBone = new Produto("C123",19,"Sandalia Branca")
let carrinhoCompra = new CarrinhoCompra()

let pedido1 = new itemPedido(produtosCamiseta,3);
let pedido2 = new itemPedido(produtosOculos,2);
let pedido3 = new itemPedido(produtosBone,1);

let carrinho = new Pedido()
carrinho.adicionarItem(pedido1)
carrinho.adicionarItem(pedido2)
carrinho.adicionarItem(pedido3)

carrinhoCompra.aumentarQuantItem(33,"B123");
carrinho.imprimi();


