const productList = document.getElementById("product-list");
if (productList && products) {
  products.forEach((product) => {
    const div = document.createElement("div");
    div.innerHTML = `
      <h3>${product.name}</h3>
      <p>${product.price} руб.</p>
      <button onclick="addToCart(${product.id})">В корзину</button>
    `;
    productList.appendChild(div);
  });
}
function addToCart(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const product = products.find(p => p.id === id);
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Товар добавлен в корзину");
}
