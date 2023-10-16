export function initHeader(div){
    div.innerHTML= `
    <nav class="navbar d-flex justify-content-center navbar-expand-lg bg-body-tertiary">
        
        <div class="container-fluid bg-dark">
            <!-- tablet mode  -->
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button> 

          <div class="container p-3 collapse navbar-collapse d-inline-flex flex-row justify-content-between" id="navbarTogglerDemo01">

            <a class="navbar-brand" href="#"><img src="./assets/img/logo-2.png" alt=""></a>
            
            <form class="search" role="search">
              <input class="form-control search-nav  me-2 bg-secondary" type="search" placeholder="Kërko produkte..." aria-label="Search">
            </form>

            <ul class="navbar-nav mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link " aria-current="page" href="#"><i class="bi bi-people"></i></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#"><i class="bi bi-heart"></i></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#"><i class="bi bi-cart-check"></i> <i class="bi bi-0-circle"></i></a>
                </li>
            </ul>

          </div>
        </div>

      </nav>
      

    `
}
