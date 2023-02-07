// ITERATION 1

function updateSubtotal(product) {
  /* console.log("Calculating subtotal, yey!"); */
  // Step 1: we store price and quantity inside two variables
  // Notice that we reference product, not document, because we are accessing price and quantity through the argument in the function, not directly reading from the html
  const price = product.querySelector(".price span");
  const quantity = product.querySelector(".quantity input");

  // Step 2 - 3: we access our variables' inner text and value respectively in order to turn them into real numbers that can be used in mathematical operations through the Number() method. Then we multiply them.
  const subtotalPrice = Number(price.innerText) * Number(quantity.value);

  // Step 4: we look for the span contained in the <td class="subtotal">
  const subtotalElement = product.querySelector(".subtotal span");

  // Step 5: we change the innerText through DOM manipulation and then we return the number that we got from our multiplication
  subtotalElement.innerText = subtotalPrice;
  return subtotalPrice;
  
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
 /*  const singleProduct = document.querySelector(".product");
  updateSubtotal(singleProduct); */
  // end of test

  // ITERATION 2
  let arrayProduct = document.getElementsByClassName("product");
  for(i= 0; i<= arrayProduct.length; i++){
    updateSubtotal(arrayProduct[i])
  }
  // ITERATION 3
  let arraySubtotal = document.getElementsByClassName("subtotal");
  
   for(i= 0; i<= arraySubtotal.length; i++){
    sum = parseFloat(arraySubtotal[i].innerText)
  }
  
  /* let sum = arraySubtotal.reduce((numOne,numTwo) => 
    numOne + numTwo, 0
  ); */
  let totalNumber = document.getElementById("total-value span")
  totalNumber.innerText = `${sum}`; 
  
  
    
  // ITERATION 3
  
  document.querySelector("#total-value span").innerHTML = `${total}`; 
}




// ITERATION 4

function removeProduct(event) {

  const target = event.currentTarget;
  // Verifciar que esta conectada la funcion post creacion del eventListener dentro del Window object
  console.log('The target in remove is:', target);

  // Usamos el parentNode para apuntar al ABUELO de row que contiene el evento especifico que estamos apuntando casualmente el abuelo de este evento es el elemento TR con la clase product.
  const row = target.parentNode.parentNode;
  console.log(row);

  // Usamos el parentNode en la variable row para aprovechar los selectores de manioluacion del DOM para eliminar el hijo de parent.
  const parent = row.parentNode;
  console.log(parent);

  // llamamos a parent con el metodo removeChild y le pasamos la variable row dentro del metodo.
  parent.removeChild(row);

  // calculateAll() - vuelve a calcular los numeros para tener un resultado correcto una vez borremos el producto.
  calculateAll();
}


// ITERATION 5

function createProduct() {
// Parte 1
const createRow = document.querySelector('.create-product');
let newProdNameInput = createRow.querySelector('input');
let newProdNameValue = newProdNameInput.value;
let newProdPriceInput = createRow.querySelector("input[type='number']");
let newProdPriceValue = Number(newProdPriceInput.valueAsNumber).toFixed(2);

// Parte 2
/* const newTableRow = document.createElement('tr');
newTableRow.className = 'product';
newTableRow.innerHTML = `
      <td class="name">
      <span>${newProdNameValue}</span>
      </td>
    <td class="price">$<span>${newProdPriceValue}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
`; */

// Parte 3
// Agarrr el padre de los rows mediante un poco de DOM
const parent = document.querySelector('#cart tbody');

// Adjuntar la variable newTableRow dentro de parent :)
parent.appendChild(newTableRow);

// Recibir logica de botones
const removeBtn = newTableRow.querySelector('.btn-remove');
removeBtn.addEventListener('click', removeProduct);

// Limpiar los inputs una vez el usaurio haya creado un producto
newProdNameInput.value = '';
newProdPriceInput.value = 0;
}

window.addEventListener('load', () => {
const calculatePricesBtn = document.getElementById('calculate');
calculatePricesBtn.addEventListener('click', calculateAll);

// DOM para borrar productos
const removeBtns = document.querySelectorAll('.btn-remove');
for (let removeBtn of removeBtns) {
  removeBtn.addEventListener('click', removeProduct);
}

// DOM para crear productos
const createBtn = document.querySelector('#create');
if (createBtn) {
  createBtn.addEventListener('click', createProduct);
}
});