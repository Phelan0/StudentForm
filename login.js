const listAccount = [
    {
        username: "admin0",
        password: "00000"
    },
    {
        username: "admin1",
        password: "11111"
    }
]
let islogin = !!localStorage.getItem("token")

function CheckLogin(){
    if(islogin){
        window.location.href = "nextpage.html"
    }
}

function Login(){
    let username = document.getElementById("username").value
    let password = document.getElementById("password").value
    let checkLogin = listAccount.some(value => value.username === username && value.password === password)
    if (checkLogin){
        localStorage.getItem("token", username)
        islogin = true
        CheckLogin()
    }else{
        alert("nhap sai")
    }
}