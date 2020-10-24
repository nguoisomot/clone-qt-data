window.onscroll = function () { myFunction(); myFunction2(); myFunction3(); myFunction4() };
//  1
var header = document.getElementById("row_1_img");
var sticky = header.offsetTop-500;
console.log(sticky)

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("row_1_img");
  }
}

//  2
var row_1_right = document.getElementById("row_1");
var show_row_1_right = row_1_right.offsetTop - 500;
console.log(show_row_1_right)

function myFunction2() {
  if (window.pageYOffset > show_row_1_right) {
    row_1_right.classList.add("row_1-right_show");
  }
}
// 3
var row_1_right_2 = document.getElementById("row_2");
var show_row_1_right_2 = row_1_right_2.offsetTop - row_1_right_2.offsetHeight;
console.log(show_row_1_right_2)

function myFunction3() {
  if (window.pageYOffset > show_row_1_right_2) {
    row_1_right_2.classList.add("row_1-right_show");
  }
}
// 4
var header_2 = document.getElementById("row_1_img_2");
var sticky_2 = header_2.offsetTop - header_2.offsetHeight ;

function myFunction4() {
  if (window.pageYOffset > sticky_2) {
    header_2.classList.add("row_1_img");
  }
}



