let openShopping = document.querySelector('.cart');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Christmas Santa & Helper',
        image: 'q (5).jpg',
        price: 300.00
    },
    {
        id: 2,
        name: 'Healthy Bird Feeds',
        image: 'q (8).jpg',
        price: 449.00
    },
    {
        id: 3,
        name: 'Net For Bird Food',
        image: 'q (6).jpg',
        price: 30.00
    },
    {
        id: 4,
        name: 'Banana cloth For Dog',
        image: 'q (4).jpg',
        price: 449.00
    },
    {
        id: 5,
        name: 'Christmas Santa & Helper',
        image: 'q (5).jpg',
        price: 300.00
    },
    {
        id: 6,
        name: 'Net For Bird Food',
        image: 'q (6).jpg',
        price: 449.00
    }
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <div class="frame">
            <img class="productpic" src="image/${value.image}"></div>
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button class="button1" onclick="addToCard(${key})">Add To Cart</button>
            <button class="button2" >Buy Now </button>`;
            
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}

window.addEventListener("scroll", () => {
    var toTop = document.querySelector(".to-top img"); // Select the to-top img element
    if (window.scrollY > 40) {
      toTop.classList.add("active");
    } else {
      toTop.classList.remove("active");
    }
  });

