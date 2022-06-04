let token = localStorage.getItem('token')
console.log(token)
function getDemand(evt) {
    evt.preventDefault();
    return fetch('http://127.0.0.1:3000/productDemands', {
        //mode: "no-cors",
        method: "GET",
        //cache: "no-cache",
    }).then((response) => {
        console.log(response);
        return response.json();
    }).then((value) => {
        console.log(value);
        let data = value
        console.log(data);
        let main = document.getElementById('Main1')
        for(let i = 0; i < data.length; i++){
            let div = document.createElement('div')
            div.innerText = `User id = ${value[i].user_id}   Product name = ${data[i].nameProduct}   message = ${data[i].message}`
            div.classList.add('demandDiv')
            main.appendChild(div)
        }
    })
}
