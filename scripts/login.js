console.log(localStorage.getItem('role'))
let token = '';
function login1(evt){
    evt.preventDefault();
    console.log('lll')
    let data;
    data = {
       login: document.getElementById('logEmail').value,
       password: document.getElementById('logPassword').value
    }
    if(!data.login || !data.password){
        return alert("You did not enter email or password")
    }
    console.log(data);
    return fetch('http://127.0.0.1:3000/users/login', {
        //mode: "no-cors",
        method: "POST",
        //cache: "no-cache"
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    }).catch(error => console.log(error)).then(response => response.json()).then(response => {
        console.log(response);
        token = response.token
        localStorage.setItem('token', token);
        console.log(token)
        return response
    })
}
