export function initFooter(categories){
    let html = ` 
    <div class="container pt-4">
        <div class="row align-items-center">
            <div class="col-3"><img class="w-50 mt-3" src="../assets/img/logo.png"></div>
            <div class="row col-9 align-items-center">
                <nav class="col-8 row">
                    <strong class="col-12 row justify-content-center mb-3">Categories</strong>
                    <div class="col-12">
                        <ul id="f-categories" class="border-end border-start d-flex justify-content-center flex w-100 flex-wrap d-block" width="150px">`
                        for (let category of categories){
                            html += 
                            `<li class="nav-item btn-parent p-2">
                                <a id="${category}" class="btn active nav-link btn-nav-f text-capitalize">
                                    ${category.includes('-') ? category.replace('-', ' ') : category}
                                </a>
                            </li>`
                            
                        }
                html += `</ul>
                    </div>
                </nav>
                <nav class="col 4">
                    <ul class="nav-item row">
                        <li class="col-6 p-2"><a class="btn btn-dark" href="./login.html">Login</a></li>
                        <li class="col-5 p-2"><a class="btn btn-dark" href="./register.html">Register</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
    `
    return html
}
export function initFoterNoCategories(div){
    div.innerHTML = `
        <div class="container p-5 d-flex justify-content-center" style="height: 140px !important;">
            <img class="h-100" src="../assets/img/logo.png">
        </div>
        `
}