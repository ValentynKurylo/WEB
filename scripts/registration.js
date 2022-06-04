function regstration(evt){
    evt.preventDefault();
    let user = {
        name: document.getElementById('username').value,
        login: document.getElementById('email').value,
        password: document.getElementById('password').value,
        role: "user"
    }
    if(!user.name || !user.login){
        return alert("You did not enter name or email !!!")
    }
    if(user.password !== document.getElementById('confirmPassword').value){
        return alert("Check your password")
    }
    console.log(user);
    return fetch('http://127.0.0.1:3000/users/', {
        //mode: "no-cors",
        method: "POST",
        //cache: "no-cache"
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user)
    })
}