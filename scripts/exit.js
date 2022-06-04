

function Exit(){
    let b = 0
    b = confirm("Are you sure?")
    if(b) {
        console.log('exit')
        localStorage.setItem("role", '')
        localStorage.setItem("token", '')
        localStorage.setItem("userId", 0)
    }
}