let errorMsg = "" // string that'll display each error
let blankInputs = document.createElement("p");

// Reg Ex
const usernameRegEx = /(^[a-z0-9]{4,}$)/
const emailRegEx = /^([\w\d+_.-]+@[\w\d.-]+(?:.com|.net|.edu|.org))$/;
const phoneRegEx = /^\((\d{3})\)- ?(\d{3}-\d{4})$/ 
const passwordRegEx = /^(?=.*[\d])(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,}$/ //at least 1 lower, 1 upper, 1 num, 1 special char
function checkForm() {
    // User Inputs
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let phoneNumber = document.getElementById("phoneNumber").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let genderM = document.getElementById("m")
    let genderF = document.getElementById("f")
    let genderO = document.getElementById("o")
    let age = document.getElementById("age").value;
    
    // Error Messages: first checks if empty, then if in valid format
    if (username == '') errorMsg += "Please Enter <span style='color:red'>Username</span><br/>";
    else if(!usernameRegEx.test(username))  errorMsg += "Please Enter <span style='color:orange'>A Valid Username</span><br/>";
    if (email == '') errorMsg += "Please Enter <span style='color:red'>Email</span><br/>";
    else if(!emailRegEx.test(email) && (email != ''))  errorMsg += "Please Enter <span style='color:orange'>A Valid Email</span><br/>";
    if (phoneNumber == '') errorMsg += "Please Enter <span style='color:red'>Phone Number</span><br/>";
    else if(!phoneRegEx.test(phoneNumber) && (phoneNumber != ''))  errorMsg += "Please Enter <span style='color:orange'>A Valid Phone Number</span><br/>";
    if (password == '') errorMsg += "Please Enter <span style='color:red'>Password</span><br/>"
    else if(!passwordRegEx.test(password) && (password != ''))  errorMsg += "Please Enter <span style='color:orange'>A Valid Password</span><br/>";
    if(!genderM.checked && !genderF.checked && !genderO.checked) errorMsg += "Please Select <span style='color:red'>Gender</span><br/>"
    if (confirmPassword != password) alert("passwords do not match")
    if (age == 'blank') errorMsg += "Please Enter <span style='color:red'>Age Gap</span><br/>";
    // Output Error Message in HTML Doc
    blankInputs.innerHTML = errorMsg;
    blankInputs.id = "blank";
    let user = document.getElementById("warnings");
    user.appendChild(blankInputs)
    errorMsg = '' // clear error message
}

function clearForm(){
    blankInputs.innerHTML =''
    errorMsg = ''
}