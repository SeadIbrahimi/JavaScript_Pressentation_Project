



export async function getArticles(type, what, value){
    let url = `https://dummyjson.com/${what}`


        if (type == 'categories'){
            url = `https://dummyjson.com/${what}/categories`
        }else if (type == 'category'){
            url = `https://dummyjson.com/${what}/category/${value}`
        }else if (type == 'limit'){
            url = `https://dummyjson.com/${what}?limit=${value}`
        }else if (type == 'sort'){
            url = `https://dummyjson.com/${what}?sort=${value}`
        }else if (type == 'search'){
            url = `https://dummyjson.com/${what}/search?q=${value}`
        }else if (type == 'id'){
            url = `https://dummyjson.com/${what}/${value}`
        }

    return await axios.get(url)
    .then(response => response)
}
    
    
    
export function composeArticles(articles){
    
    let html = `
    <div class="row">
    `
    for (let article of articles.products){
        let ratingValue = `${article.rating}`.split('.')
        let img = (article.thumbnail !== null) ? article.thumbnail : '../assets/img/no_image.png'
        html += `
        <div class="col-lg-3 mb-3 d-flex align-items-stretch">
            <div id="cardsHome"  class="card">
                <a href="article.html?id=${article.id}"><div class="imgholder"><img src='${img}' class="card-img-top " alt="${article.title}"></div></a>
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title text-capitalize">${article.title}</h5>
                    <hr>
                    <p class="card-text rating">${rating(ratingValue[0], ratingValue[1])}</p>
                    <div class="d-flex col justify-content-between text-capitalize align-items-center">
                        <p class="card-text mb-4"><small><span>Category:</span></br>${article.category}</small></p>
                        <p class="card-text mb-4 text-end"><small><span>Brand:</span></br>${article.brand}</small></p>
                    </div>
                    <p class="card-text mb-4">${article.description}</p>
                    <div class="d-flex col justify-content-between align-items-center">
                        <p class="card-text m-0 p-0"><span>Discount:</span>${article.discountPercentage}%</p>
                        <p class="card-text m-0 p-0 text-end price"><span>Price:</span> ${article.price}€</p>
                    </div>
                    <hr>
                    <button type="button" class="btn btn-danger mt-auto addToCart"><i class="bi bi-bag-plus-fill"> Add to cart</i></button>
                </div>
            </div>
        </div>
        `
    }
    
    html += `
    </div>`



    
    return html

   
}
function rating(number, decimal){
    let star = ''
    for (let i=1; i<=number; i++){
        star += `<i class="bi bi-star-fill "></i> `
    }
    star += (decimal >= 5) ? `<i class="bi bi-star-half"></i> ` : `<i class="bi bi-star"></i> `
    return star
}

export function composingArticles(){
    let html = `<div class="row">`

    for(let i = 0; i < 30; i++){
        html += `
        <div class="col-lg-3 mb-3 d-flex align-items-stretch"> 
                <div class="card" aria-hidden="true">
                    <img src="../assets/img/no_image.png" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title placeholder-glow">
                            <span class="placeholder col-6"></span>
                        </h5>
                        <p class="card-text placeholder-glow">
                            <span class="placeholder col-7"></span>
                            <span class="placeholder col-4"></span>
                            <span class="placeholder col-4"></span>
                            <span class="placeholder col-6"></span>
                            <span class="placeholder col-8"></span>
                        </p>
                        <a class="btn btn-primary disabled placeholder col-6" aria-disabled="true"></a>
                    </div>
                </div>
            </div>
        `
    }
    
    html += `</div>`
    return html
}