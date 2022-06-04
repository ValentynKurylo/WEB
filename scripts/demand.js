token = localStorage.getItem('token')

function Demand(evt){
    if(token) {
        evt.preventDefault();
        let product = {
            user_id: localStorage.getItem('userId'),
            message: document.getElementById('message').value,
            nameProduct: document.getElementById('dName').value,

        }
        console.log(product);
        return fetch('http://127.0.0.1:3000/productDemands/', {
            //mode: "no-cors",
            method: "POST",
            //cache: "no-cache"
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': token
            },
            body: JSON.stringify(product)
        })
    }
    else {
        alert("You need to sign in !!!")
    }
}

