

export function composeArticle(article){
    console.log(article)
    let ratingValue = `${article.rating}`.split('.')
    let html = `
    <div class="card mb-3" style="max-width: 100%;">
        <div class="row g-0">
            <div class="col-md-5 container ">
                <div id="carouselExampleIndicators" class="carousel slide">
                    <div class="carousel-inner">`
                    let i = 0
                    for (let image of article.images){
                    html += `<div class=${(i===0) ? `"carousel-item active"` : "carousel-item"}>
                                <img src="${image}" class="d-block w-100">
                            </div>`
                        i++
                    }
            html +=`</div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                    <div class="carousel-indicators">`
                    let x = 0
                    for (let image2 of article.images){
                        html += `<button type="button" style="background-image: url('${image2}')" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="${x}" ${(x===0 ? `data-bs-slide-to="${x}" class="active" aria-current="true" aria-label="Slide ${x+1}"` : `data-bs-slide-to="${x}" aria-label="Slide ${x+1}"`)} ></button>`
                        x++
                    }
            html += `</div>
                </div>
            </div>
            <div class="col-md-7 container">
                <div  class="card-body">
                    <div class="d-inline-flex p-2 justify-content-between">
                        <div class="d-inline-flex p-2 justify-content-between">
                            <h3 class="card-title mt-3 w-100 align-self-center text-uppercase">${article.title}</h3>
                        
                            <div class="align-self-center align-items-end">
                                <a href="#" class="btn btn-danger"><i class="bi bi-bag-plus-fill"> Add to card</i></a>
                                <a href="#" class="btn btn-danger"><i class="bi bi-bag-plus-fill"> Buy and proceed</i></a>
                            </div>
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
                    <p class="card-text">Description: </br> ${article.description}</p>
                    <div class="d-flex justify-content-between mt-5 w-100>
                        <p class="card-text">Discount ${article.discountPercentage}%</p>
                        <p class="card-text">Price ${article.price}€</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
        
    `
    return html
}

export function composeFeedback(messages, postId){
    
    
    let html = `<div class="card">
                    <div class="card-header">
                        Feedback
                    </div>`
    // console.log(messages, postId)
    for (let message of messages.comments){
        if (postId = messages.comments.postId){
            console.log(message)
            html += `
                
                    <div class="card-body rounded-pill">
                        <blockquote class="blockquote mb-0">
                        <p>${message.body}</p>
                        <footer class="blockquote-footer">Username: <cite class="text-capitalize" title="Source Title">${message.user.username}</cite></footer>
                        </blockquote>
                    </div>
                
            `
        
        }else {
            html = `
                <div class="card rounded-pill">
                    <div class="card-header">
                        No Feedback!
                    </div>
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