

export function composeArticle(article){
    let ratingValue = `${article.rating}`.split('.')
    let html = `
    <div class="card mb-3" style="max-width: 100%;">
        <div class="row g-0">
            <div class="col-md-5 container ">
                <div id="carouselExampleIndicators" class="carousel slide pb-3">
                    <div class="carousel-inner  d-flex w-100  align-items-center">`
                    let i = 0
                    for (let image of article.images){
                    html += `<div class=${(i===0) ? `"carousel-item active"` : "carousel-item"}>
                                <img src="${image}" class="d-block w-100">
                            </div>`
                        i++
                    }
            html +=`</div>
                    <button class="carousel-control-prev " type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                    </button>
                    <div class="carousel-indicators m-0 w-100 h-100 d-flex align-content-center flex-nowrap">`
                    let x = 0
                    for (let image2 of article.images){
                        html += `<button type="button" style="background-image: url('${image2}')" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="${x}" ${(x===0 ? `data-bs-slide-to="${x}" class="active" aria-current="true" aria-label="Slide ${x+1}"` : `data-bs-slide-to="${x}" aria-label="Slide ${x+1}"`)} ></button>`
                        x++
                    }
                html += `
                    </div>
                    
                </div>
            </div>
            <div class="border-start col-md-7 container">
                <div  class="card-body">
                    <div class="row g-0 w-100 mt-5 mb-5">
                            <div class="col-md-6 p-2">
                                <h1 class="card-title text-uppercase">${article.title}</h1>
                            </div>
                        
                            <div class="col-md-6 p-2">
                                <a href="#" class="btn btn-danger"><i class="bi bi-bag-plus-fill"> Add to card</i></a>
                                <a href="#" class="btn btn-danger"><i class="bi bi-bag-plus-fill"> Buy and proceed</i></a>
                            </div>
                        
                    </div>
                    <div class="d-flex justify-content-between mb-4 w-100>
                        <p class="card-text "><small class="text-body-secondary">Brand: ${article.brand}</small></p> 
                        <p class="card-text "><small class="text-body-secondary text-capitalize ">Category: ${article.category}</small></p> 
                    </div>
                    <div class="d-flex justify-content-between mb-4 w-100>
                        <p class="card-text "><small class="text-body-secondary">Available Stock: ${article.stock}pcs</small></p> 
                        <p class="card-text rating "> ${rating(ratingValue[0], ratingValue[1])}</p>
                    </div>
                    <p class="card-text mb-5">Description: </br> ${article.description}</p>
                    <div class="d-inline mt-5 w-100 text-end">
                        <h3 class="card-text">Discount ${article.discountPercentage}%</h3>
                        <h1 class="card-text border-top">Price ${article.price}€</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
        
    `
    return html
}

export function composeFeedback(messages, cardId){
    
    let html = `<div class="toast-container position-static bg-white border rounded">
                    <h1 class="m-5 border-bottom">Feedback</h1>`
                    
    let intCardId = parseInt(cardId)
    
    for (let message of messages.comments){
        if (message.postId = cardId){
            html += `
                    <div class="toast show mx-4" aria-live="assertive" aria-atomic="true">
                        <div class="toast-header">
                            <strong class="me-auto">${message.user.username}</strong>
                        </div>
                        <div class="toast-body">
                            ${message.body}
                        </div>
                    </div>
            `
        }else {
            html = `
                <div class="card rounded-pill">
                    <div class="card-header">
                        No Feedback!
                    </div>
            `
        }
    }

   
    html += `</div>`
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