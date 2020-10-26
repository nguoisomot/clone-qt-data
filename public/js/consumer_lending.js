window.onscroll = function () { myFunction(); myFunction2(); myFunction3(); myFunction4(); myFunction5();
  myFunction6(); myFunction7(); myFunction8() };
//  1;
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
var show_row_1_right_2 = row_1_right_2.offsetTop - row_1_right_2.offsetHeight - 150;
console.log(show_row_1_right_2)

function myFunction3() {
  if (window.pageYOffset > show_row_1_right_2) {
    row_1_right_2.classList.add("row_1-right_show");
  }
}
// 4
var header_2 = document.getElementById("row_1_img_2");
var sticky_2 = header_2.offsetTop - header_2.offsetHeight- 150 ;

function myFunction4() {
  if (window.pageYOffset > sticky_2) {
    header_2.classList.add("row_1_img");
  }
}
//5
var row_1_right_3 = document.getElementById("row_3");
var show_row_1_right_3 = row_1_right_3.offsetTop - row_1_right_3.offsetHeight - 150;
console.log(show_row_1_right_3)

function myFunction5() {
  if (window.pageYOffset > show_row_1_right_3) {
    row_1_right_3.classList.add("row_1-right_show");
  }
}
//6
var header_3 = document.getElementById("row_1_img_3");
var sticky_3 = header_3.offsetTop - header_3.offsetHeight - 150;

function myFunction6() {
  if (window.pageYOffset > sticky_3) {
    header_3.classList.add("row_1_img");
  }
}
//7
var row_1_right_4 = document.getElementById("row_4");
var show_row_1_right_4 = row_1_right_4.offsetTop - row_1_right_4.offsetHeight - 150;
console.log(show_row_1_right_4)

function myFunction7() {
  if (window.pageYOffset > show_row_1_right_4) {
    row_1_right_4.classList.add("row_1-right_show");
  }
}
//8
var header_5 = document.getElementById("row_1_img_4");
var sticky_5 = header_5.offsetTop - header_5.offsetHeight - 150;

function myFunction8() {
  if (window.pageYOffset > sticky_3) {
    header_5.classList.add("row_1_img");
  }
}


