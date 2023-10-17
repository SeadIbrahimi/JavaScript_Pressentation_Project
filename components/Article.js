export function composeArticle(article){
 let html = `
    <div class="container">
        <div class="card mb-3">
            <div class="row g-1">
                <div class="col-md-5">
                    <img src="${article.images[0]}" class="img-fluid rounded-start" alt="${article.title}">
                    <div class="row g-1">
                        `
                                for (let image of article.images){
                                    html += `
                                        <div class="col-md-3">
                                            <img src="${image}" class="img-fluid rounded-start">
                                        </div>
                                `}
                        html += `
                    </div>
                </div>
                <div class="col-md-7">
                <div class="card-body">
                    <h5 class="card-title">${article.title}</h5>
                    <p class="card-text">${article.description}</p>
                    <p class="card-text"><small class="text-body-secondary">${article.stock}</small></p>
                </div>
                </div>
            </div>

        </div>
        <div class="card mb-3">
            <div class="row g-0">
                <div class="col-md-4">
                <div class="card-body">
                    <h5 class="card-title">COMMENTS</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                    </div>
                </div>
                <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                </div>
                </div>
            </div>
        </div>
    </div>`
    return html
}