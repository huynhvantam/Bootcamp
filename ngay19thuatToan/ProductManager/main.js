var product = [
  "Sony Xperia",
  "Samsung Galaxy",
  "Nokia 6",
  "Xiaomi Redmi Note 4"
];

var tbody = document.getElementById("tbody");
function display(arr, active) {
  var data = "";

  for (let i in arr) {
    if (i !== active) {
      data += `<tr>
      <td>${++i}</td>
      <td>${arr[--i]}</td>
      <td><input type="button"  onclick="edit('${i}')" value="Edit"/></td>
      <td><input type="button" onclick="del('${i}')" value="Delete"/></td>
    </tr>`;
    } else {
      data += `<tr>
      <td>${++i}</td>
      <td><input type="text"  id="update"</td>
      <td><input type="button"  onclick="update('${--i}')" value="Update"/></td>
      <td><input type="button" onclick="display(product)" value="    X    "/></td>
    </tr>`;
    }
  }

  tbody.innerHTML = data;
}

display(product);

var input = document.getElementById("inputProduct");

function add() {
  let check = input.value;
  if (check === "") {
    return alert("empty input");
  } else {
    alert("success !");
  }
  product.push(check);
  input.value = "";
  countProduct();
  display(product);
}

function edit(index) {
  display(product, index);
}

function update(index) {
  let preUpdate = document.getElementById("update").value;
  if (preUpdate === "") {
    return alert("Empty product");
  }
  for (let i in product) {
    if (i === index) {
      product[i] = preUpdate;
    }
  }
  display(product);
}

function del(index) {
  product.splice(index, 1);
  countProduct();
  display(product);
}

var thead = document.getElementById("thead");
function countProduct() {
  var headData = `
  <tr>
    <th colspan ="3">Product Name</th>
    <th class="right">${product.length} products</th>
  </tr>`;

  thead.innerHTML = headData;
}

countProduct();
