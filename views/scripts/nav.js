var myIndex = 0;
carousel();
var pathname = window.location.pathname;
if (pathname == '/login' || pathname == '/login.html') {
  if (localStorage.getItem("token") && localStorage.getItem("token") == '') {
    document.location.href = "myAccount.html";
  }
}
if (localStorage.getItem("token") && localStorage.getItem("token") != '') {
  if (localStorage.getItem("userType") && localStorage.getItem("userType") != 1) {
    if (pathname == '/admin.html' || pathname == '/admin' || pathname == '/add-product' || pathname == '/add-product.html' || pathname == '/update-product.html' || pathname == '/update-product') {
      document.location.href = "Myaccount.html";
    }
  }
}
if (pathname == '/admin.html' || pathname == '/admin' || pathname == '/add-product' || pathname == '/add-product.html' || pathname == '/update-product.html' || pathname == '/update-product') {
  if (localStorage.getItem("token") == null || localStorage.getItem("token") == '') {
    document.location.href = "login.html";
  }
}
(function () {

  var navButton = document.querySelector("#nav-menu-button");
  var navUl = document.querySelector(".nav-ul");

  function toggleMobileMenu() {
    navUl.classList.toggle("hide-ul");
  }

  navButton.onclick = toggleMobileMenu;


  if (localStorage.getItem("token") && localStorage.getItem("userType") == 1) {
    $(".nav-ul").append(`<li><a class="nav-link" href="admin.html">Admin</a></li>
    <li><a class="nav-link" href="products.html">Products</a></li>
    <li><a class="nav-link" href="add-product.html">Add Product</a></li>
    <li><a class="nav-link" href="update-product.html">Update Product</a></li>`);
  }
  if (localStorage.getItem("token")) {
    $(".nav-ul").append(`<li><a class="nav-link" id="logout" onclick="logout()" href="#">logout</a></li>`);
  } else {
    $(".nav-ul").append(`<li><a class="nav-link" href="login.html">login</a></li>`);
  }

}());

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {
    myIndex = 1
  }
  //x[myIndex-1].style.display = "block";
  setTimeout(carousel, 4000);
}

function logout() {
  if (localStorage.getItem("email")) {
    localStorage.removeItem("email");
    localStorage.removeItem("userType")
    localStorage.removeItem("token")
    document.location.href = "login.html";
  }
}