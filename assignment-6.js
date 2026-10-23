
const products = [
    { name: "Laptop", price: 800 },
    { name: "Mouse", price: 25 },
    { name: "Keyboard", price: 45 },
    { name: "Monitor", price: 150 },
    { name: "Headphones", price: 80 }
];

console.log("1. All Products");

products.forEach(function (product) {
    console.log(`${product.name}: $${product.price}`);
});


console.log("\n2. Products Under $100");

const affordableProducts = products.filter(
    product => product.price < 100
);

console.log(affordableProducts);


console.log("\n3. Formatted Product List");

const formattedProducts = products.map(
    product => `${product.name.toUpperCase()}: $${product.price}`
);

formattedProducts.forEach(product => console.log(product));
