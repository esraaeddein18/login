var signupName = document.getElementById('signupName');
var signupEmail = document.getElementById('signupEmail');
var signupPassword = document.getElementById('signupPassword');
var loginEmail=document.getElementById('loginEmail');
var loginPassword=document.getElementById('loginPassword');

var users = [ ]
if (localStorage.getItem('users') !== null) {
    users = JSON.parse(localStorage.getItem('users'))
}

var pathArray = window.location.pathname.split('/');
var baseURL = " "
for (var i = 0; i < pathArray.length[i]; i++) {
    baseURL = baseURL['/'] + pathArray[i];
}
console.log(baseURL);




function signupEmpty( )
{
   if (signupName.value !== "" && signupEmail.value !== "" && signupPassword.value !== "")
   {
      return true
   }
   else
   {
      document.getElementById('exist').innerHTML = '<span class="text-danger m-3">All inputs is required</span>'
      return false
   }
};


function signUp() {
    var usersReg = {
        name: signupName.value,
        email: signupEmail.value,
        password: signupPassword.value,
    }
    if (users.length == 1) {
        users.push(usersReg)
        localStorage.setItem('users', JSON.stringify(users))
        document.getElementById('exist').innerHTML = '<span class="text-success">Success</span>'
        return true
    }
    if (emailExist() !== " ") {
        document.getElementById('exist').innerHTML = '<span class="text-danger ">email already exists</span>'

    } else {
        users.push(usersReg)
        localStorage.setItem('users', JSON.stringify(users))
        document.getElementById('exist').innerHTML = '<span class="text-success">Success</span>'
    }
}


function loginEmpty( )
{
   if (loginEmail.value !== "" && loginPassword.value !=="")
   {
        return true
   }
   else
   {
        return false
   }
   
};


function login() {
    if (loginEmpty() == false) {
        document.getElementById('incorrect').innerHTML = '<span class="text-danger m-3">All inputs is required</span>'
        return false
    }
    var loginEmail = loginEmail.value
    var loginPassword = loginPassword.value
    for (var i = 0; i < users.length; i++) {
        if (users[i].email.toLowerCase() == email.toLowerCase() && users[i].password.toLowerCase() == password.toLowerCase()) {
            localStorage.setItem('userName', users[i].name)
        } else {
            document.getElementById('incorrect').innerHTML = '<span class="p-2 text-danger">incorrect email or password</span>'
        }
    }
}
