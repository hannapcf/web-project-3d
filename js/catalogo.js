var array_produtos = [['Aguia', '375,00', 'aguia1.jpeg', false], ['Capivara', '375,00', 'capivara1.jpeg', false], ['Meme', '375,00', 'meme1.jpeg', false], ['Metalslug', '375,00', 'metalslug1.jpeg', false], ['Troféu', '375,00', 'trofeu1.jpeg', false]]
var array_carrinho = [];

function ListaProdutos(){

    $(".produtos").html("");

    for(var i = 0; i < array_produtos.length; i++){     
        var conteudo = "";
        
        conteudo += '<div class="templateCardProduto">';
        conteudo +=     '<div style="width: 280px;">'
        conteudo +=         '<img src="imagens/produtos/' + array_produtos[i][2] + '" class="imagemProduto">'
        conteudo +=     '</div>'

        conteudo +=     '<div class="nomeProduto">'
        conteudo +=         '<p>' + array_produtos[i][0] + '</p>'
        conteudo +=     '</div>'

        conteudo +=     '<div class="precoProduto">'
        conteudo +=         '<p>' + array_produtos[i][1] + '</p>'
        conteudo +=     '</div>'

        conteudo +=     '<div style="text-align: center">'

        if(array_produtos[i][3] == false) {
            conteudo += '<button class="botaoAddCarrinho" id_produto="' + i + '"> Adicionar ao Carrinho </button>'
        } else {
            conteudo += '<button class="botaoAddCarrinho itemCarrinho" id_produto="' + i + '"> Adicionado ao Carrinho </button>'
        }
        conteudo +=     '</div>'
        conteudo += '</div>'

        $(".produtos").append(conteudo);

    }
    $(".botaoAddCarrinho").click(function(){
        var id = $(this).attr("id_produto");
        
        array_produtos[id].splice(3, 1, true);
        array_carrinho.push(array_produtos[id]);
        console.log(array_carrinho);
        ListaProdutos();
    })
}





$(document).ready(function(){

    ListaProdutos();    

})