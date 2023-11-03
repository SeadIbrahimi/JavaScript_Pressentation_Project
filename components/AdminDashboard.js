export function composeOrders(data){
    console.log(data)
    let html = `
        <div class="card-body p-3" style="max-height: 620px; overflow-y: scroll;">
        <table class="table table-hover"  >
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                    <th scope="col">City</th>
                    <th scope="col">Address</th>
                    <th scope="col">Message</th>
                  </tr>
                </thead>
                <tbody>
                  `
        if(data){
            let i = 0
            for(let order of data){   
                console.log(order)                        
                html += `
                <tr>
                    <td>${order.name} ${order.surname}</td>
                    <td>${order.email}</td>
                    <td>${order.phone}</td>
                    <td>${order.city}</td>
                    <td>${order.address}</td>
                    <td>${order.message}</td>
                    <td colspan="2">
                        <a href="#submenu${i}" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                        <i class="fs-4 bi-grid"></i> <span class="ms-1 d-none d-sm-inline">Products</span> </a>
                            <div class="collapse nav flex-column ms-1 p5" id="submenu${i}" data-bs-parent="#menu">
                                <table class="table table-hover"  >
                                    
                                    <thead>
                                        <tr>
                                            <th scope="col">ID</th>
                                            <th scope="col">Title</th>
                                        </tr>
                                    <thead>
                                    <tbody>`
                                for(let item of order.order.items){
                                html+=`
                                        
                                        <tr>
                                            <td>${item.id}</td>
                                            <td>${item.title}</td>
                                        </tr>`
                                }
                           html+=`</table></tbody> </div>
                    </td>
                </tr>`
                i++
            }
        }
        html += `</tbody>
            </table>
        </div>`
        
    return html
}