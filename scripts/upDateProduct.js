

function upDate(evt){
    evt.preventDefault();
    let product = {
        name: document.getElementById('nameProduct1').value,
        price: document.getElementById('price1').value,
        number: document.getElementById('numberProduct1').value,
        description: document.getElementById('descriptionProduct1').value,
        img: document.getElementById('imgProduct1').value
    }

    console.log(product);
    let id = localStorage.getItem("productId")
    let token = localStorage.getItem("token")
     return fetch('http://127.0.0.1:3000/products/' + id, {
        //mode: "no-cors",
        method: "PUT",
        //cache: "no-cache"
        headers: {
            'Content-Type': 'application/json',
            'x-access-token':  token
        },
        body: JSON.stringify(product)
    })
}
