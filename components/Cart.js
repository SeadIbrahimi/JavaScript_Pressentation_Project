export function cart(articles){
    let loggedin_user = localStorage.getItem('loggedin_user')
    let html =`
    <div class="container">
          <div class="row">
            <div class="col-xl-8 col-lg-8 mb-4">
              <div class="card mb-4 border shadow-0">
                <div class="p-4 d-flex justify-content-between">
                  <div class="">
                    ${(loggedin_user) ? `<h5>Hello!</h5>` : `<h5>Do you have an account?</h5>`}
                    ${(loggedin_user) ? `<p class="mb-0 text-wrap ">Dear ${loggedin_user}</p>` : `<p class="mb-0 text-wrap ">If you don't have an account you can register right now!</p>`}
                  </div>
                  <div class="d-flex align-items-center justify-content-center flex-column flex-md-row">
                  ${(loggedin_user) ? `<p class="mb-0 text-wrap ">You must check our new products!</p>` : `<a href="/register.html" class="btn btn-outline-secondary me-0 me-md-2 mb-2 mb-md-0 w-100">Register</a>`}
                  ${(loggedin_user) ? `<a href="/index.html" class="ms-4 btn btn-primary shadow-0 text-nowrap w-100">Go here!</a>` : `<a href="/login.html" class="btn btn-secondary shadow-0 text-nowrap w-100">Log in</a>`}
                  </div>
                </div>
              </div>
      
              <!-- Checkout -->
              <form id="order" class="card shadow-0 border">
                <div class="p-4">
                  <h5 class="card-title mb-3">Guest checkout</h5>
                  <div class="row">
                    <div class="col-6 mb-3">
                      <p class="mb-0">First name</p>
                      <div class="form-outline">
                        <input type="text" id="name" placeholder="ex: John" class="form-control" required/>
                      </div>
                    </div>
      
                    <div class="col-6">
                      <p class="mb-0">Last name</p>
                      <div class="form-outline">
                        <input type="text" id="surname" placeholder="ex: Smith" class="form-control" required/>
                      </div>
                    </div>
      
                    <div class="col-6 mb-3">
                      <p class="mb-0">Phone</p>
                      <div class="form-outline">
                        <input type="tel" id="phone"  class="form-control" placeholder="+1 (XXX) XXX XXX" required/>
                      </div>
                    </div>
      
                    <div class="col-6 mb-3">
                      <p class="mb-0">Email</p>
                      <div class="form-outline">
                        <input type="email" id="Email" placeholder="ex: example@gmail.com" class="form-control" required/>
                      </div>
                    </div>
                  </div>
      
                  <hr class="my-4" />
      
                  <h5 class="card-title mb-3">Shipping info</h5>
      
                  
      
                  <div class="row">
                    <div class="col-sm-8 mb-3">
                      <p class="mb-0">Address</p>
                      <div class="form-outline">
                        <input type="text" id="address" placeholder="Write here your street name" class="form-control" required/>
                      </div>
                    </div>
      
                    <div class="col-sm-4 col-6 mb-3">
                      <p class="mb-0">City</p>
                      <div class="form-outline">
                        <input type="text" id="city" placeholder="ex: Berlin" class="form-control" required/>
                      </div>
                    </div>
      
                    <div class="col-sm-4 col-6 mb-3">
                      <p class="mb-0">Postal code</p>
                      <div class="form-outline">
                        <input type="text" id="postcode" class="form-control" required />
                      </div>
                    </div>
                  </div>
      
                  <div class="mb-3">
                    <p class="mb-0">Message to seller</p>
                    <div class="form-outline">
                      <textarea class="form-control" placeholder="Optional" id="message" rows="2"></textarea>
                    </div>
                  </div>
      
                  <div class="float-end">
                    <button id="cancel" class="btn btn-light border">Cancel</button>
                    <button id="buy" class="btn btn-danger shadow-0 border">Continue</button>
                  </div>
                </div>
              </form>
              <!-- Checkout -->
            </div>
            <div class="col-xl-4 col-lg-4 d-flex justify-content-center justify-content-lg-end">
              <div class="ms-lg-4 mt-4 mt-lg-0" style="width: 320px;">
                <h6 class="mb-3">Summary</h6>
                
                <div style="max-height: 300px; overflow-y:scroll; overflow-y: auto;">`
                if (articles){
                  console.log(articles)
                  if(articles !== null && articles.length > 0){
                    for (let article of articles){
                      html +=`
                      <div class="d-flex justify-content-between">
                        <p class="mb-2">${article.title}</p>
                        <p class="mb-2">${article.price}€</p>
                      </div>
                      `
                    }
                  }else{
                    html += `<div class="price text-muted">You did not added any itmes on the card.</br>Go <a href='index.html'>here</a> to add your products</div>`
                  }
                }
                else{
                    html += `<div class="price text-muted">No products added</div>`
                }

                html += `</div>
                <hr />`
                let result = 0
                if (articles){
                  if(articles !== null && articles.length > 0){
                    for (let article of articles){
                      result += article.price
                    }
                  }
                }
                html += `<div class="d-flex justify-content-between">
                    <p class="mb-2">Total price:</p>
                    <p class="mb-2 fw-bold">${result}€</p>
                  </div>
                <hr />
                <h6 class="text-dark my-4">Items in cart</h6>
                <div style="max-height: 400px; overflow-y:scroll; overflow-y: auto;">`
              if (articles){
                  if(articles !== null && articles.length > 0){
                    for (let article of articles){
                      let img = (article.thumbnail !== null) ? article.thumbnail : '../assets/img/no_image.png'
                      html += `
                                <div class="d-flex align-items-center mb-4">
                                  <div class="mt-3 me-3 position-relative">
                                    <button type="button" id="removeFromCard" class="btn btn-danger position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-danger p-2" ><i class="bi bi-x-circle"></i></button>
                                    <a href="article.html?id=${article.id}">
                                    <img src="${img}" style="height: 96px; width: 96x;" class="img-sm rounded border" />
                                    </a>
                                  </div>
                                  <div class="id">
                                    <a href="article.html?id=${article.id}" class="nav-link">
                                    ${article.title}
                                    </a>
                                    <div class="price text-muted">Price: ${article.price}€</div>
                                  </div>
                                </div>
                                `
                    }

                }else{
                  html += `<div class="price text-muted">You did not added any itmes on the card.</br>Go <a href='index.html'>here</a> to add your products</div>`
                }
              }else{
                  html += `<div class="price text-muted">You did not added any itmes on the card.</br>Go <a href='index.html'>here</a> to add your products</div>`
                }
              html +=` </div>   
              </div>
            </div>`

          html += `
          </div>
        </div>
    `

    return html
    
}

