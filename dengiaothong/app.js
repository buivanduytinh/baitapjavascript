var denXanh = document.getElementById("denxanh");
var denDo = document.getElementById("dendo");
var denVang = document.getElementById("denvang");

function sunshine() {
document.getElementById("denxanh").style.backgroundColor = "white";
document.getElementById("dendo").style.backgroundColor = "white";
document.getElementById("denvang").style.backgroundColor = "white";
}

function denxanh() {
sunshine();
denXanh.style.backgroundColor = "green";
}

function dendo() {
sunshine();
denDo.style.backgroundColor = "red";
}

function denvang() {
sunshine();
denVang.style.backgroundColor = "yellow";
}
