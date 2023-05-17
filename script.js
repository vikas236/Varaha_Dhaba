// Variable Declaration
const ham = document.querySelector('.ham');
const s_bar = document.querySelector('.s_bar');
const dim = document.querySelector('.dim');
const section = document.querySelectorAll("h2");
const title = document.querySelectorAll(".title");
const link = document.querySelectorAll(".link");
const dish = document.querySelectorAll('.dish');
const cart_item = document.querySelectorAll('.cart_item')
const add = document.querySelectorAll('.add');
const cart_list = document.querySelector('.cart_list')
let item = "";
let price = "";
let list_item = "";


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
const added_show = function() {
    if (this.childNodes[1].classList.contains('bxs-plus-circle')) {
        this.childNodes[1].classList.remove('bxs-plus-circle');
        this.childNodes[1].classList.add('bxs-minus-circle');
        item = (this.innerText).substr(0, this.innerText.length-4);
        price = this.childNodes[2].innerText;
        cart_list.appendChild(document.createElement("li")).innerText = item;
    }
    else if (this.childNodes[1].classList.contains('bxs-minus-circle')){
        this.childNodes[1].classList.remove('bxs-minus-circle');
        this.childNodes[1].classList.add('bxs-plus-circle');
        for (k=0; k<cart_list.childNodes.length; k++) {
            list_item = (cart_list.childNodes[i].innerText).replace(/[^a-zA-Z\s]/g, "");
            item = (this.innerText).substr(0, this.innerText.length-4);
            item = item.split("");
            item.pop();
            if (item.join("") == list_item.trim()) {
                cart_list.removeChild(cart_list.childNodes[k])
            }
        }
    }
};
const cart_item_count = function() {
    for (i=0; i<cart_item.length; i++) {
        cart_item[i].childNodes[1].classList.add('bx', 'bx-sm', 'bxs-minus-circle');
        cart_item[i].childNodes[4].classList.add('bx', 'bx-sm', 'bxs-plus-circle'); 
    };
};


// Function Calling
ham.addEventListener('click', hello);
loop(section, menu);
dim.addEventListener('click', hello);
loop(link, hello);
assign(dish);
loop(dish, added_show);
cart_item_count();