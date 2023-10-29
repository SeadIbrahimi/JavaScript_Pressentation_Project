export function addToCart(article){
    let alert = document.querySelector('#alerts')
    let addedToCart = []
    addedToCart = (localStorage.getItem('addedToCart') == null) ? [] : JSON.parse(localStorage.getItem('addedToCart'))
    
    
        if(addedToCart.length > 0) {
            let itemExists = addedToCart.filter(a => a.id == article.id)
            if(itemExists.length > 0) {
                localStorage.setItem('addedToCart', JSON.stringify([...addedToCart, article]))
                console.log(addedToCart)
                alert.innerHTML =  
                    `<div class="alert alert-info mt-5 container">You have added item <strong>'${article.title}'</strong> more than ones, you can remove it from your <strong><a style="text-decoration: underline; color: none;" href="cart.html">cart</a></strong>.</div>`
                    
                setTimeout(() =>{
                    alert.innerHTML = ''
                }, 3000);
            } else {
                localStorage.setItem('addedToCart', JSON.stringify([...addedToCart, article]))
                alert.innerHTML =  
                    `<div class="alert alert-success mt-5 container">You have <strong>successfully</strong> added item <strong>'${article.title}'</strong> on your <strong>cart</strong>.</div>`
                    
                setTimeout(() =>{
                    alert.innerHTML = ''
                }, 3000);  
            }
        } else {
            localStorage.setItem('addedToCart',JSON.stringify([article]))
            
            alert.innerHTML =  
                `<div class="alert alert-success mt-5 container">You have <strong>successfully</strong> added item <strong>'${article.title}'</strong> on your <strong>cart</strong>.</div>`
            setTimeout(() =>{
                
                alert.innerHTML = ''
            }, 3000);    
            
        }
    
}