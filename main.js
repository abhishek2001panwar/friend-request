// var isRemove = document.querySelector("remove");
// var istatus = document.querySelector("add");

// isRemove.addEventListener("click", function(){
//   document.getElementById("header").innerHTML = "stranger";


// });
// istatus.addEventListener("click", function(){
//   document.getElementById("header").innerHTML = "friends";


// });
var isRemove = document.getElementById("remove");
var istatus = document.getElementById("add");

isRemove.addEventListener("click", function () {
  document.getElementById("header").innerHTML = "stranger";
});

istatus.addEventListener("click", function () {
  document.getElementById("header").innerHTML = "friends";
});
