const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("category");

const productList = document.getElementById("product-list");
const priceRange = document.getElementById("priceRange");
const priceValue = document.getElementById("priceValue");

function displayProducts() {
  productList.innerHTML = "";
  const maxPrice = parseInt(priceRange.value);

  const filteredProducts = products.filter(
    p => (!category || p.category === category) && p.price <= maxPrice
  );

  filteredProducts.forEach(p => {
    const item = document.createElement("div");
    item.classList.add("product");
    item.innerHTML = `
      <img src="${p.image}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>$${p.price}</p>
      <a href="product.html?id=${p.id}">View Details</a>
    `;
    productList.appendChild(item);
  });
}

priceRange.addEventListener("input", () => {
  priceValue.textContent = priceRange.value;
  displayProducts();
});

displayProducts();
