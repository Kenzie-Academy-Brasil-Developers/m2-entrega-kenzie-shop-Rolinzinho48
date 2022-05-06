


class Products{
    static async requesicao(){
        let dados = await fetch("https://m2-kenzie-shop.herokuapp.com/products")
        let produtosDados = await dados.json()
        produtosDados.products.forEach(element => {
            construir(element)
            console.log(element)
        });
    }
}

const construir =(obj)=>{

    //cria os elementos
    const div = document.createElement("div")
    const img = document.createElement("img")
    const p = document.createElement("p")
    const span = document.createElement("span")
    const btn = document.createElement("button")

    img.src = `https://kenzie-academy-brasil.gitlab.io/fullstack/frontend/modulo2/sprint3/img/consumindo-api-produtos/${obj.id}/Image.png`
    p.innerText = obj.productName;
    btn.innerText = "Comprar"

    //verifica de o produto está na promoção
    if(obj.promotionStatus){
        span.innerText = obj.price.productPromotionPrice
    }
    else{
        span.innerText = obj.price.productPrice
    }

    
  
    //adiciona os elementos na tela
    div.append(img,p,span,btn)

    document.querySelector('main').append(div)

}

Products.requesicao()