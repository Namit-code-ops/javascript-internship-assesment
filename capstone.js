
const products = [
    { name: "Laptop", price: 60000 },
    { name: "Mouse", price: 800 }
];

// Format prices in Indian Rupees
const formatPrice = (amount) =>
    new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 2
    }).format(amount);

// Determine product category using switch
function getCategory(price) {
    switch (true) {
        case price <= 1000:
            return "Budget";
        case price <= 10000:
            return "Standard";
        default:
            return "Premium";
    }
}

// Calculate inventory statistics
function calculateStats(items) {
    let total = 0;
    let count = 0;

    for (const product of items) {
        if (
            typeof product.price !== "number" ||
            !Number.isFinite(product.price) ||
            product.price < 0
        ) {
            continue;
        }

        total += product.price;
        count++;
    }

    const average = count > 0 ? total / count : 0;

    return { count, total, average };
}

// Demo tax calculation, not a statement of actual Indian tax rates
const calculateDemoTax = (amount) => {
    const demoTaxRate = 0.08;
    return amount * demoTaxRate;
};

// Display dashboard information
function renderDashboard() {
    const stats = calculateStats(products);

    document.getElementById("totalProducts").textContent = stats.count;
    document.getElementById("totalValue").textContent =
        formatPrice(stats.total);
    document.getElementById("averagePrice").textContent =
        formatPrice(stats.average);

    // Display inventory table
    const table = document.getElementById("productTable");
    table.textContent = "";

    products.forEach((product) => {
        const row = document.createElement("tr");

        const nameCell = document.createElement("td");
        nameCell.textContent = product.name;

        const priceCell = document.createElement("td");
        priceCell.textContent = formatPrice(product.price);

        const categoryCell = document.createElement("td");
        const badge = document.createElement("span");
        const category = getCategory(product.price);

        badge.textContent = category;
        badge.className = "badge " + category.toLowerCase();

        categoryCell.appendChild(badge);
        row.append(nameCell, priceCell, categoryCell);
        table.appendChild(row);
    });

    // Show affordable products priced under ₹5,000
    const affordable = products.filter(
        (product) => product.price < 5000
    );

    const affordableList = document.getElementById("affordableProducts");
    affordableList.textContent = "";

    affordable.forEach((product) => {
        const item = document.createElement("li");
        item.textContent =
            `${product.name} - ${formatPrice(product.price)}`;
        affordableList.appendChild(item);
    });

    // Create a formatted inventory report using map
    const report = products.map(
        (product) =>
            `${product.name.toUpperCase()}: ${formatPrice(product.price)}`
    );

    const reportList = document.getElementById("formattedReport");
    reportList.textContent = "";

    report.forEach((line) => {
        const item = document.createElement("li");
        item.textContent = line;
        reportList.appendChild(item);
    });

    const demoTax = calculateDemoTax(stats.total);
    console.log("Demo tax at 8%:", formatPrice(demoTax));
}

// Add a new product
document.getElementById("productForm").addEventListener(
    "submit",
    function (event) {
        event.preventDefault();

        const nameInput = document.getElementById("productName");
        const priceInput = document.getElementById("productPrice");
        const message = document.getElementById("message");

        const name = nameInput.value.trim();
        const price = Number(priceInput.value);

        if (name === "") {
            message.textContent = "Please enter a product name.";
            return;
        } else if (
            priceInput.value.trim() === "" ||
            !Number.isFinite(price) ||
            price < 0
        ) {
            message.textContent = "Please enter a valid, non-negative price.";
            return;
        }

        products.push({ name, price });

        message.textContent = "Product added successfully!";
        nameInput.value = "";
        priceInput.value = "";

        renderDashboard();
    }
);

// Add inventory search button
const searchButton = document.createElement("button");
searchButton.type = "button";
searchButton.textContent = "Search Inventory";
searchButton.style.marginTop = "12px";

const inventoryPanel = document
    .getElementById("productTable")
    .closest(".panel");

inventoryPanel.appendChild(searchButton);

const searchResult = document.createElement("p");
searchResult.setAttribute("role", "status");
inventoryPanel.appendChild(searchResult);

searchButton.addEventListener("click", function () {
    const query = prompt("Enter product name to search:");

    if (query === null || query.trim() === "") {
        searchResult.textContent = "Search cancelled or empty.";
        return;
    }

    let found = null;

    for (const product of products) {
        if (!product.name) {
            continue;
        }

        if (product.name.toLowerCase() === query.trim().toLowerCase()) {
            found = product;
            break;
        }
    }

    if (found) {
        searchResult.textContent =
            `Found: ${found.name} - ${formatPrice(found.price)}`;
    } else {
        searchResult.textContent = "Product not found.";
    }
});

// Render initial dashboard
renderDashboard();
