let menuItems = [ 
{ id: 1, name: "Pizza", price: 200 }, 
{ id: 2, name: "Burger", price: 120 }, 
{ id: 3, name: "Pasta", price: 150 }, 
{ id: 4, name: "Juice", price: 80 } 
]; 
let cart = JSON.parse(localStorage.getItem("cart")) || []; 
function displayMenu() { 
document.getElementById("menu").innerHTML = 
menuItems.map(i => 
      `<div class="item"> 
        <h3>${i.name}</h3> 
        <p>₹${i.price}</p> 
        <button onclick="addToCart(${i.id})">Add</button> 
      </div>` 
    ).join(""); 
} 
function addToCart(id) { 
  let item = menuItems.find(i => i.id == id); 
  let exist = cart.find(i => i.id == id); 
  exist ? exist.qty++ : cart.push({ ...item, qty: 1 }); 
  saveCart(); updateCart(); 
} 
function updateCart() { 
  let sub = 0; 
  document.getElementById("cart").innerHTML = 
    cart.map((i, x) => { 
      sub += i.price * i.qty; 
      return `${i.name} Qty:${i.qty} 
        <button onclick="changeQty(${x},1)">+</button> 
        <button onclick="changeQty(${x},-1)">-</button> 
        <button onclick="removeItem(${x})">X</button><br>`; 
    }).join(""); 
  calculateBill(sub); 
} 
function changeQty(i, v) { 
  cart[i].qty += v; 
  if (cart[i].qty <= 0) cart.splice(i, 1); 
  saveCart(); updateCart(); 
} 
 
function removeItem(i) { 
cart.splice(i, 1); 
saveCart(); updateCart(); 
} 
function saveCart() { 
localStorage.setItem("cart", JSON.stringify(cart)); 
} 
function calculateBill(sub) { 
let gst = sub * 0.05; 
let dis = sub > 500 ? sub * 0.1 : 0; 
document.getElementById("subtotal").innerText = sub; 
document.getElementById("gst").innerText = gst.toFixed(2); 
document.getElementById("discount").innerText = dis.toFixed(2); 
document.getElementById("total").innerText = (sub + gst - dis).toFixed(2); 
} 
function placeOrder() { 
if (!cart.length) return alert("Cart is empty!"); 
alert("Order Placed! ID: ORD" + Math.floor(Math.random() * 10000)); 
cart = []; saveCart(); updateCart(); 
} 
displayMenu(); 
updateCart();