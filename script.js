// Variable Declaration
const ham = document.querySelector('.ham');
const s_bar = document.querySelector('.s_bar');
const dim = document.querySelector('.dim');
const section = document.querySelectorAll("h2");
const title = document.querySelectorAll(".title");
const link = document.querySelectorAll(".link");
const add_to_cart = document.querySelectorAll('.bx-sm');
const dish = document.querySelectorAll('.dish');

// Functions
const hello = function() {
    ham.classList.toggle("active")
    s_bar.classList.toggle("active");
    if (getComputedStyle(dim).display=="none") { dim.style.display="block"; }
    else { dim.style.display="none"; };
};
const menu = function() {
    this.nextElementSibling.classList.toggle("active");
};
const assign = function(arr) {
    for (i=0; i<arr.length; i++) {
        arr[i].childNodes[1].classList.add('bx', 'bx-sm', 'bxs-plus-circle');
    };
};
const loop = function(arr, action) {
    for (i=0; i<arr.length; i++) {
        arr[i].addEventListener('click', action);
    };
};
const added = function() {
    this.childNodes[1].classList.toggle('bxs-plus-circle');
    this.childNodes[1].classList.toggle('bxs-minus-circle');
};


// Function Calling
ham.addEventListener('click', hello);
loop(section, menu);
dim.addEventListener('click', hello);
loop(link, hello);
assign(dish);
loop(dish, added);