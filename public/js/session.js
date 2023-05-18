var myOutput = document.getElementById("productsContainer");
var products_req = new XMLHttpRequest();
var myResponse = [];
products_req.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        myResponse = JSON.parse(this.response);
        myOutput.innerHTML = "";
        for (let index = 0; index < myResponse.length; index++) {
            const product = myResponse[index];
            myOutput.innerHTML += `
            <div class="col-md-4 g-5 d-flex justify-content-center">
                <div class="card" style="width: 18rem;">
                    <img src="${product.category.image}" class="card-img-top" alt="${product.description}">
                    <div class="card-body">
                        <h5 class="card-title">${product.description}</h5>
                        <p class="card-text">${product.title}</p>
                        
                        <ul class="list-unstyled d-flex justify-content-center mb-1">
                            <li>
                                <i class="text-warning fa fa-star"></i>
                                <i class="text-warning fa fa-star"></i>
                                <i class="text-warning fa fa-star"></i>
                                <i class="text-muted fa fa-star"></i>
                                <i class="text-muted fa fa-star"></i>
                            </li>
                        </ul>
                        <p class="text-center mb-0">$250.00</p>
                    </div>
                </div>
            </div>`;
        }
    }
};
products_req.open("GET", "data/persons.json");
// products_req.open("GET" , "http://api.escuelajs.co/api/v1/products");
products_req.send();