
let enteredpin;

function validatepin()
{
enteredpin = document.getElementById("login-fieldid").value;

if(enteredpin == "1000")
{
    window.location.href = "stock.html";
}
else{
    alert("Incorrect pin");
}
}

