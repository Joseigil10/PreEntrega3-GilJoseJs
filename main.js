// Function to create a product object
function createProduct() {
  const product = {};

  product.nombre = document.getElementById("nombre").value;
  product.talla = document.getElementById("talla").value;
  product.color = document.getElementById("color").value;
  product.stock = parseInt(document.getElementById("stock").value);
  product.marca = document.getElementById("marca").value;
  product.precio = parseInt(document.getElementById("precio").value);

  return product;
}

// Funcion para agregar producto a la lista
function addProduct() {
  const newProduct = createProduct();
  products.push(newProduct);
  saveProductsToStorage();
  clearProductForm();
}

// Funcion para limpiar los forms de los productos
function clearProductForm() {
  document.getElementById("nombre").value = "";
  document.getElementById("talla").value = "";
  document.getElementById("color").value = "";
  document.getElementById("stock").value = "";
  document.getElementById("marca").value = "";
  document.getElementById("precio").value = "";
}

// Funcion para buscar el producto por nombre
function searchProduct() {
  const searchName = document
    .getElementById("search-nombre")
    .value.toLowerCase();
  let foundProduct = null;

  for (let i = 0; i < products.length; i++) {
    if (products[i].nombre === searchName) {
      foundProduct = products[i];
      break;
    }
  }

  displaySearchResult(foundProduct);
}

// Funcion para mostrar los resultados de la busqueda
function displaySearchResult(product) {
  const productInfoElement = document.getElementById("product-info");

  if (product) {
    const productInfo = `Nombre: ${product.nombre}\nTalla: ${product.talla}\nColor: ${product.color}\nStock: ${product.stock}\nMarca: ${product.marca}\nPrecio: ${product.precio}`;
    productInfoElement.textContent = productInfo;
  } else {
    productInfoElement.textContent = "Producto no encontrado.";
  }
}

// Funcion para guardar los productos en el storage
function saveProductsToStorage() {
  localStorage.setItem("products", JSON.stringify(products));
}

// Funcion para cargar los producto del local

function loadProductsFromStorage() {
  const storedProducts = localStorage.getItem("products");

  if (storedProducts) {
    products = JSON.parse(storedProducts);
  }
}

// Array donde tenemos los productos
let products = [];

// cargar los productos del load
window.addEventListener("load", loadProductsFromStorage);

// agregar los productos
document.getElementById("add-product").addEventListener("click", addProduct);

// event listener para el boton buscar
document
  .getElementById("search-product")
  .addEventListener("click", searchProduct);
