const ringButtons = document.querySelectorAll(".ring-button");
let productImageBase = "../images/"

for(let i = 0; i < ringButtons.length; i++){
    const ringBtn = ringButtons[i];
    ringBtn.addEventListener("click", 
        function(event){
            const color = event.target.id.replace("-color", "");
            console.log(color);
// purple ad korar aga sob gula k check kore purple thakle  remove kore dibo ebong onno ekta border add kore dibo
   for(let j = 0; j < ringButtons.length; j++) {
    ringButtons[j].classList.remove("border-purple-600");
    ringButtons[j].classList.add("border-gray-300");

   }        



// color add kortesi
event.target.classList.add("border-purple-600");
event.target.classList.remove("border-gray-300");

const productImage = document.getElementById("product-image");
// productImage.src = "../images/teal.png";
productImage.src = "../images/" + color + ".png";
        });
}

function selectWristSize(size){
    const sizes = ["S", "M", "L", "XL"]

    for(let i =0; i < sizes.length; i++){
        const button = document.getElementById("size-" + sizes[i]);
        // size -s , size-matchMedia, size-length, size-xl
        // console.log(button);
        const element =  sizes[i];
        if(size === element){
            button.classList.add("border-purple-600");

        }
        else{
            button.classList.remove("border-purple-600");
        }
    }
}

const quantityElements = document.querySelectorAll(".quantity-button");
for(let btn of quantityElements){
    btn.addEventListener("click", function(event){
        const amount = event.target.innerText === "+" ? 1: -1;
        // console.log(amount);

     const quantityElement = document.getElementById("quantity");
     const currentQuantity = parseInt(quantityElement.innerText);

     const newQuantity = Math.max(0, currentQuantity + amount);
quantityElement.innerText = newQuantity;
    });
}
// add to cart
let cartCount = 0;
let cartItems = [];
document.getElementById('add-to-cart').addEventListener("click", function(){
    const quantity = parseInt(document.getElementById("quantity").innerText);
if(quantity > 0){

    document.getElementById("checkout-container").classList.remove("hidden");
cartCount = cartCount + quantity;
document.getElementById("cart-count").innerText = cartCount;
const selectedColorButton = document.querySelector("button.border-purple-600.w-6");
const selectedColor= selectedColorButton.id.split("-")[0];


const selectedSizeButtons = document.querySelector(
    "button.border-purple-600:not(.w-6)"

);
const selectedSize = selectedSizeButtons.innerText.split(" ")[0];

const selectedPrice = selectedSizeButtons.innerText.split(" ")[1].split("$")[1];
cartItems.push({
    image: selectedColor + ".png",
    title: "Classy Modern Smart Watch",
    color: selectedColor,
    size: selectedSize,
    quantity: quantity,
    price: quantity * parseInt(selectedPrice),
});
console.log(cartItems);
}else{
    alert("please select a quantity....");
}

});

document.getElementById('checkout-btn').addEventListener('click', function(){

    const cartModal = document.getElementById("cart-modal");

    const cartContainer = document.getElementById("cart-items");
    for(let i = 0; i < cartItems.length; i++){
        const item = cartItems[i]

const row = document.createElement("tr");
row.classList.add("border-b");
row.innerHTML = `

<td class="py-2 px-4">
<div class ="flex items-center space-x-2">
<img class="h-12 w-12 object-cover rounded-md" src="${productImageBase}${item.image}" alt="">
<span class = " font-semibold">${item.title}</span>

</div>

</td>
    <td class="py-2 px-4">${item.color}</td>
    <td class="py-2 px-4">${item.size}</td>
    <td class="py-2 px-4">${item.quantity}</td>
    <td class="py-2 px-4">$${item.price}</td>


`;
cartContainer.appendChild(row);

    }

 cartModal.classList.remove("hidden");
});
document.getElementById('continue-shopping').addEventListener('click',function(){
    document.getElementById('click-modal').classList.add("hidden");
})