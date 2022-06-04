
token = localStorage.getItem('token');
console.log(token)
function worker(){
    //evt.preventDefault();
    return fetch('http://127.0.0.1:3000/users/CurrentUser/', {
    //mode: "no-cors",
    method: "GET",
    //cache: "no-cache"
    headers: {
                'x-access-token':  token
            }
}).then((response) => {
    console.log(response);
    return response.json();
}).then((data) => {
        console.log(data);
    })
}