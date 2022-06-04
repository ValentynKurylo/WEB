console.log(localStorage.getItem("productId"))
let role = localStorage.getItem("role")


function product(evt){
    //evt.preventDefault();
    let id = localStorage.getItem("productId")
    fetch('http://127.0.0.1:3000/products/' + id, {
    //mode: "no-cors",
    method: "GET",
    //cache: "no-cache"
}).then((response) => {
    console.log(response);
    return response.json();
}).then((value => {
    let product = value.user
        console.log(product)
        let box = document.getElementById('box1')
        let center = document.createElement('center')
        let h = document.createElement('h2')
        h.innerText = `${product.name}`
        center.appendChild(h)
        box.appendChild(center)
        console.log(box)
        let contest = document.createElement('div')
        contest.classList.add('Contest')
        let div1 = document.createElement('div')
        let img = document.createElement('img')
        img.alt = `${product.name}`
        img.src = `${product.img}`
        div1.appendChild(img)
        contest.appendChild(div1)
        box.appendChild(contest)
        let div2 = document.createElement('div')
        div2.classList.add('Buy')
        let hr = document.createElement('hr')
        div2.appendChild(hr)
        let p = document.createElement('p')
        p.innerText = `Price - ${product.price} grn`
        div2.appendChild(p)
        let hr1 = document.createElement('hr')
        div2.appendChild(hr1)
        let but = document.createElement('button')
        let a = document.createElement('a')
        a.href = 'product.html'
        a.innerText = 'Buy'
        but.appendChild(a)
        div2.appendChild(but)
        let center1 = document.createElement('center')
        center1.appendChild(div2)
        div1.appendChild(center1)
        let descDiv = document.createElement('div')
        descDiv.classList.add('Description')
        let p1 = document.createElement('p')
        p1.innerText = 'Description'
        descDiv.appendChild(p1)
        let hr3 = document.createElement('hr')
        descDiv.appendChild(hr3)
        let p4 = document.createElement('p')
        p4.innerText = `${product.description}`
        descDiv.appendChild(p4)
        contest.appendChild(descDiv)
        if (role === "admin" || role === "worker") {
            let upDate = document.createElement('a')
            upDate.innerText = 'Up date'
            upDate.href = 'upDateProduct.html'
            contest.appendChild(upDate)
            let del = document.createElement('a')
            del.innerText = 'Delete'
            let b = 0
            del.onclick =()=>{
                b = confirm("Are you sure?")
                console.log(b)
            }
            if (b === true) {
                console.log('dddd')
                fetch('http://127.0.0.1:3000/products/' + id, {
                    //mode: "no-cors",
                    method: "DELETE",
                    //cache: "no-cache"
                    headers: {
                        'x-access-token': token
                    }
                }).then((response) => {
                    console.log(response);
                    return response.json();
                })
            }
            //del.onclick="Del(event)"
            contest.appendChild(del)
        }

        return product
    }))
}
let res = product()
