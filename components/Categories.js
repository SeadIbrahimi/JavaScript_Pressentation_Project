

export function composeCategories(category){
  let html = `
  <nav class="navbar navbar-expand-lg ">
    <div class="container-fluid">
      <div class="collapse navbar-collapse navbar2 d-flex justify-content-center" id="navbarNav">
        <ul class="navbar-nav align-items-center ">`
  
  for (let product of category){
    html += 
        `<li class="nav-item btn-parent">
          <button id="${product}"  class="nav-link btn-nav text-capitalize ">
          ${product.includes('-') ? product.replace('-', ' ') : product}
          </button>
        </li>`
    }
           
  html +=
        `</ul>
      </div>
    </div>
  </nav>`
  return html
}