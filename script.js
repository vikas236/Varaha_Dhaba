// Variable Declaration
const ham = document.querySelector('.ham');
const s_bar = document.querySelector('.s_bar');
const dim = document.querySelector('.dim');
const section = document.querySelectorAll('h2');
const title = document.querySelectorAll('.title');
const link = document.querySelectorAll('.link');
const dish = document.querySelectorAll('.dish');
const add = document.querySelectorAll('.add');
const cart_list = document.querySelector('.cart_list')
const cart = document.querySelector('.cart');
let order = [];
let item = "";
let price = "";
let list_item = "";
let quantity = 1;


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
const assign_add_icons = function(arr) {
    for (i=0; i<arr.length; i++) {
        arr[i].childNodes[1].classList.add('bx', 'bx-sm', 'bxs-plus-circle');
    };
};
const loop = function(arr, action) {
    for (i=0; i<arr.length; i++) {
        arr[i].addEventListener('click', action);
    };
};
const added_show = function() {
    if (this.childNodes[1].classList.contains('bxs-plus-circle')) {
        this.childNodes[1].classList.remove('bxs-plus-circle');
        this.childNodes[1].classList.add('bxs-minus-circle');
        item = (this.innerText).substr(0, this.innerText.length-5);
        price = this.childNodes[2].innerText;
        let htmlToAdd = `<li>${item}<span>${price}</span></li>`;
        cart_list.innerHTML += htmlToAdd;
    }
    else if (this.childNodes[1].classList.contains('bxs-minus-circle')){
        this.childNodes[1].classList.remove('bxs-minus-circle');
        this.childNodes[1].classList.add('bxs-plus-circle');
        let cart_item = cart_list.childNodes;
        item = (this.innerText).substr(0, this.innerText.length-5);
        price = this.childNodes[2].innerText;
        for (k=0; k<cart_item.length; k++) {
            let cart_item_name = (cart_item[k].innerText).substr(0, cart_item[k].innerText.length-5);
            if (cart_item_name==item) {
                cart_list.removeChild(cart_item[k]);
            };
        };
    };
    let cart_item = cart_list.childNodes;
    if (cart_item.length>0 && !cart.classList.contains("active")) { cart.classList.add("active"); }
    else if (cart_item.length<1 && cart.classList.contains("active")) { cart.classList.remove("active");}
};


// Function Calling
ham.addEventListener('click', hello);
loop(section, menu);
dim.addEventListener('click', hello);
loop(link, hello);
assign_add_icons(dish);
loop(dish, added_show);