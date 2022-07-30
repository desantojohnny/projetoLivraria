
    const itens =[
    {
        id: 0,
        img: 'CatecismoDaIgrejaCatolicaGrande-142x214.jpeg',
        autor: "Johnny Santo",
        name: "Humildade e Honra",
        oferta: "290,00",
        sale: "199,00",
        quantidade: 0
    },
    {
        id: 1,
        autor: "Diego T.",
        name: "SPFC",
        oferta: "290,00",
        sale: "199,00",
        quantidade: 0
    },
    {
        id: 2,
        autor: "Brian T.",
        name: "Pequeno Principe",
        oferta: "290,00",
        sale: "199,00",
        quantidade: 0
    }
]

inicializarloja = () => {
    var containerBook = document.getElementById('book');
    itens.map((val) => {
        containerBook.innerHTML+= `

            <div class= "book-single"> 
                <img src="`+val.img+`" />
                <p> `+val.name+`</p>
                <a key="`+val.id+`" href="#">COMPRAR></a>
            </div>
            `;
    })
}

inicializarloja();

atualizarcarrinho = ()=>{
    var containerCarrinho = document.getElementById('carrinho');
    containerCarrinho.innerHTML = "";
    itens.map((val) => {
        if(val.quantidade > 0){
            containerCarrinho.innerHTML+= `
            <p>`+val.name+` | quantidade: `+val.quantidade+` </p>
            <hr> 
            `
        }
        
    })

}

var links = document.getElementsByTagName('a');

for(var i = 0; i< links.length; i++){
    links[i].addEventListener("click", function(){
        let key = this.getAttribute('key');
        itens[key].quantidade++;
        atualizarcarrinho();
        return false;
    })

}

