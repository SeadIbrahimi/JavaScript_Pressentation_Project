export function initHeader(div){
    const user_is_loggedin = localStorage.getItem('loggedin_user')
    let user = 'Guest'
    let icon = ''

    if(user_is_loggedin == null){
      icon = `<a href="login.html" class="nav-link"><i class="bi bi-people"></i></a>`
    }else if (user_is_loggedin == 'admin@hotmail.com'){
      user = user_is_loggedin
      icon = `
        <li class="nav-item dropdown">
          <button class="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            ${user_is_loggedin} 
          </button>
          <ul class="dropdown-menu dropdown-menu-dark">
            <li><a class="dropdown-item" href="adminDashboard.html">Dashboard</a></li>
            <li><a id="logout" type="button" class="btn dropdown-item">Log Out</a></li>
          </ul>
        </li>`
    }else{
      user = user_is_loggedin
      icon = `
        <li class="nav-item dropdown">
          <button class="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            ${user_is_loggedin} 
          </button>
          <ul class="dropdown-menu dropdown-menu-dark">
            <li><a class="dropdown-item" href="dashboard.html"> Wishlist <i class="bi bi-heart"></i></a></li>
            <li><a id="logout" type="button" class="btn dropdown-item">Log Out</a></li>
          </ul>
        </li>`
    }
    
    div.innerHTML= `
    <nav class="navbar d-flex justify-content-center navbar-expand-lg bg-body-tertiary text-light">
        
        <div class="container-fluid bg-dark">
            <!-- tablet mode  -->
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button> 

          <div class="container p-3 collapse navbar-collapse d-inline-flex flex-row justify-content-between" id="navbarTogglerDemo01">

            <a class="navbar-brand" href="index.html"><img src="./assets/img/logo.png" alt=""></a>
            
            <form class="search" role="search">
              <input class="form-control search-nav  me-2 bg-secondary" type="search" placeholder="Kërko produkte..." aria-label="Search">
            </form>

            <ul class="navbar-nav mb-2 mb-lg-0">
                <li class="nav-item">
                  ${icon}
                </li>
                
                <li class="nav-item">
                  <a href="cart.html" class="nav-link"><i class="bi bi-cart-check"></i> <i class="bi bi-0-circle added1"></i></a>
                </li>
            </ul>

          </div>
        </div>

    </nav>
      

    `
}
