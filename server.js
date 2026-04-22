const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// তোমার HTML অনুযায়ী product data
const products = [
    { id: 1, name: "চামিচ সেট", price: 100, unit: "5 pieces" },
    { id: 2, name: "থালা সেট", price: 200, unit: "3 pieces" },
    { id: 3, name: "আমসত্ত্বা", price: 80, unit: "2 packets" },
    { id: 4, name: "ময়দা", price: 50, unit: "1kg" },
    { id: 5, name: "আমের আচার", price: 90, unit: "3 packets" },
    { id: 6, name: "বাটি সেট", price: 100, unit: "3 pieces" },
    { id: 7, name: "গ্লাস সেট", price: 120, unit: "4 pieces" },
    { id: 8, name: "Flour", price: 70, unit: "1kg" },
    { id: 9, name: "চা পাতি", price: 30, unit: "500gm" },
    { id: 10, name: "আটা", price: 60, unit: "1kg" },
    { id: 11, name: "আদা গুড়া", price: 40, unit: "1kg" },
    { id: 12, name: "সুজি", price: 45, unit: "1kg" },
    { id: 13, name: "নোডলস", price: 50, unit: "1kg" },
    { id: 14, name: "পাস্তা", price: 60, unit: "1kg" },
    { id: 15, name: "গরম মশলার গুড়া", price: 47, unit: "500gm" }
];

// Home route
app.get('/', (req, res) => {
    res.send("Dhaka Wholesaler Backend API চলছে 🚀");
});

// সব product
app.get('/products', (req, res) => {
    res.json(products);
});

// single product
app.get('/products/:id', (req, res) => {
    const product = products.find(p => p.id == req.params.id);
    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ message: "Product not found" });
    }
});

// order route (demo)
app.post('/order', (req, res) => {
    const order = req.body;
    res.json({
        message: "Order received successfully ✅",
        order: order
    });
});

// server start
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});