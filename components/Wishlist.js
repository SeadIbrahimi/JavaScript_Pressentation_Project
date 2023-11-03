export function wishList(articles){
    console.log(articles)
    let html = `
    <div class="row">
    `
    if(articles !== null){
        for (let article of articles){
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
                        <button type="button" class="btn btn-danger mt-auto addToWishList"><i class="bi bi-x-lg"></i> Remove from cart</i></button>
                    </div>
                </div>
            </div>
        `
    }}else{
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

export function wishListLoading(){
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




export function addToWishList(article){
    const user_is_loggedin = localStorage.getItem('loggedin_user')

        if(user_is_loggedin == null) {
            window.location.href = 'http://127.0.0.1:5500/index.html'
        }else{
        let alert = document.querySelector('#alerts')
        let addToWishList = []
        addToWishList = (localStorage.getItem('addToWishList') == null || localStorage.getItem('addToWishList') == "") ? [] : JSON.parse(localStorage.getItem('addToWishList'))
        
        
            if(addToWishList.length > 0) {
                let itemExists = addToWishList.filter(a => a.id == article.id)
                if(itemExists.length > 0) {
                    localStorage.setItem('addToWishList', JSON.stringify([...addToWishList, article]))
                    console.log(addToWishList)
                    alert.innerHTML =  
                        `<div class="alert alert-info mt-5 container">You have added item <strong>'${article.title}'</strong> more than ones, you can remove it from your <strong><a style="text-decoration: underline; color: none;" href="dashboard.html">wishlist</a></strong>.</div>`
                        
                    setTimeout(() =>{
                        alert.innerHTML = ''
                    }, 3000);
                } else {
                    localStorage.setItem('addToWishList', JSON.stringify([...addToWishList, article]))
                    alert.innerHTML =  
                        `<div class="alert alert-success mt-5 container">You have <strong>successfully</strong> added item <strong>'${article.title}'</strong> on your <strong>wishlist</strong>.</div>`
                        
                    setTimeout(() =>{
                        alert.innerHTML = ''
                    }, 3000);  
                }
            } else {
                localStorage.setItem('addToWishList',JSON.stringify([article]))
                
                alert.innerHTML =  
                    `<div class="alert alert-success mt-5 container">You have <strong>successfully</strong> added item <strong>'${article.title}'</strong> on your <strong>wishlist</strong>.</div>`
                setTimeout(() =>{
                    
                    alert.innerHTML = ''
                }, 3000);    
                
            }
        }
}