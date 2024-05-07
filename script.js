function toastifiyError(msg){
    Toastify({
        text: msg,
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(135deg, orange 50%, cyan)",
        },
        onClick: function(){} // Callback after click
      }).showToast();
}


let users = []

function signUp(){
    let email = document.getElementById("email").value;

if(!email){
    toastifiyError("Please type your email")
    return
} else users.push(email)
toastifiyError("Registered Successfully")

}

function login(){
    let email = document.getElementById("loginEmail").value;

    if(!email){
        toastifiyError("Please type your email for login")
        return
    } else {
        if (users.includes(email)){
            toastifiyError("Login successfuly for: " + email);
        }else {
            toastifiyError("Invalide email")
        }
    }
}
