const priceRange = document.getElementById("priceRange");
const priceValue = document.getElementById("priceValue");
const productList = document.getElementById("product-list");
const productDetails = document.getElementById("product-details");

let currentCategory = null;

// Show/Hide sections
function showSection(id) {
  document.querySelectorAll("section").forEach(sec => sec.style.display = "none");
  document.getElementById(id).style.display = "block";
}

// Filter by category
function filterCategory(category) {
  currentCategory = category;
  showSection("products");
  displayProducts();
}

// Display products
function displayProducts() {
  productList.innerHTML = "";
  const maxPrice = parseInt(priceRange.value);

  const filtered = products.filter(p =>
    (!currentCategory || p.category === currentCategory) && p.price <= maxPrice
  );

  filtered.forEach(p => {
    const item = document.createElement("div");
    item.classList.add("product");
    item.innerHTML = `
      <img src="${p.image}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>$${p.price}</p>
      <button onclick="viewDetails(${p.id})">View Details</button>
    `;
    productList.appendChild(item);
  });
}

// Show details
function viewDetails(id) {
  const product = products.find(p => p.id === id);
  if (product) {
    productDetails.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h2>${product.name}</h2>
      <p>Price: $${product.price}</p>
      <p>Category: ${product.category}</p>
    `;
    showSection("details");
  }
}

// Price filter event
if (priceRange) {
  priceRange.addEventListener("input", () => {
    priceValue.textContent = priceRange.value;
    displayProducts();
  });
}
