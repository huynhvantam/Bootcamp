var product = ["test", "test2"];
var input = document.getElementById("product");

function add() {
    var getInput = input.value;
    if (getInput == "") {
        return alert("Empty product");
    }
    getInput = getInput.trim();
    product.push(getInput);

    render(product);
    input.value = "";
}

function edit(item) {
    var change = prompt('Change product');
    if (change == "" || change == null) {
        return alert('Empty Name');
    }

    for (let produck in product) {
        if (product[produck] == item) {
            console.log(product[produck]);
            product[produck] = change;
        }
    }
    render(product);

}

function deleteProduct(item) {
    product.splice(item, 1);
    render(product);
}

var table = document.getElementById("tableProduct");

function render(array) {
    var content = array.map(item => (
        `<tr>
        <td>${item}</td>
        <td><button onclick="edit('${item}')" class="btn">Edit</button></td>
        <td><button onclick= "deleteProduct('${item}')" class="btn">Delete</button></td>
    </tr>`
    ));
    console.log(content);
    table.innerHTML = content.join('');
}
render(product);

var count = document.getElementById('countProduct');

function countPr() {
    var productCounted = `<tr><th colspan ="2">Product Name</th><th class="right">${product.length} product</th></tr>`;
    count.innerHTML = productCounted;
}
countPr();