const products = [
  { name: "iPhone 14 Pro", price: 999, category: "Smartphones", img: "https://via.placeholder.com/200x180?text=iPhone+14+Pro" },
  { name: "Dell XPS 13", price: 1199, category: "Laptops", img: "https://via.placeholder.com/200x180?text=Dell+XPS+13" },
  { name: "Sony WH-1000XM5", price: 349, category: "Accessories", img: "https://via.placeholder.com/200x180?text=Sony+Headphones" },
  { name: "MacBook Air M2", price: 1299, category: "Laptops", img: "https://via.placeholder.com/200x180?text=MacBook+Air+M2" },
  { name: "Samsung Galaxy S23", price: 899, category: "Smartphones", img: "https://via.placeholder.com/200x180?text=Galaxy+S23" },
  { name: "Logitech MX Master 3", price: 99, category: "Accessories", img: "https://via.placeholder.com/200x180?text=MX+Mouse" },
];

let cart = [];
let selectedCategory = "All";

function displayProducts() {
  const grid = document.getElementById("productGrid");
  grid.innerHTML = "";

  const filtered = selectedCategory === "All"
    ? products
    : products.filter(p => p.category === selectedCategory);

  filtered.forEach(p => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${p.img}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>$${p.price.toFixed(2)}</p>
      <button onclick="addToCart('${p.name}', ${p.price})">Add to Cart</button>
    `;
    grid.appendChild(card);
  });
}

function filterProducts(category) {
  selectedCategory = category;
  displayProducts();
}

function addToCart(name, price) {
  cart.push({ name, price });
  updateCart();
}

function updateCart() {
  const cartList = document.getElementById("cartItems");
  const cartTotal = document.getElementById("cartTotal");
  cartList.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
    cartList.appendChild(li);
    total += item.price;
  });

  cartTotal.textContent = `Total: $${total.toFixed(2)}`;
}

window.onload = displayProducts;
