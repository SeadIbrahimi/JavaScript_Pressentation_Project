// import axios from "axios";



export function getArticle(type, value){
    
    const ComposeUrl = (url) => {
        if (type == null){
            url = `https://dummyjson.com/products`
            return url
        }else if (type == 'categories'){
            url = `https://dummyjson.com/products/categories`
            return url
        }else if (type == 'category'){
            url = `https://dummyjson.com/products/category/${value}`
            return url
        }else if (type == 'limit'){
            url = `https://dummyjson.com/products?limit=${value}`
            return url
        }else if (type == 'sort'){
            url = `https://dummyjson.com/products?sort=${value}`
            return url
        }else if (type == 'search'){
            url = `https://dummyjson.com/products/search?q=${value}`
        }
    };
    return axios.get(ComposeUrl())
    .then(response => response)
}
    
    
    
export function composeArticles(articles){
            let html = `
            <div class="row">
            `
            for (let article of articles.products){
                let img = (article.thumbnail !== null) ? article.thumbnail : '../assets/img/no_image.png'
                html += `
                <div class="col-lg-3 mb-3 d-flex align-items-stretch">
                    <div class="card">
                        <div class="imgholder"><img src='${img}' class="card-img-top align-items-center" alt="${article.title}"></div>
                        <div class="card-body d-flex flex-column">
                            <h5 class="card-title">${article.title}</h5>
                            <div class="d-flex col justify-content-between text-capitalize align-items-center">
                                <p class="card-text mb-4"><small>Category:</br> ${article.category}</small></p>
                                <p class="card-text mb-4"><small>Brand:</br> ${article.brand}</small></p>
                            </div>
                            <p class="card-text mb-4">${article.description}</p>
                            <div class="d-flex col justify-content-between mt-auto align-items-center"
                                <p class="card-text">Discount: ${article.discountPercentage}%</p>
                                <p class="card-text">Price: ${article.price}€</p>
                            </div>
                            <a href="#" class="btn btn-danger mt-auto"><i class="bi bi-bag-plus-fill"> Add to card</i></a>
                        </div>
                    </div>
                </div>
                `
            }
            
            html += `
            </div>`
            return html
        
        
    
    
}
        

  