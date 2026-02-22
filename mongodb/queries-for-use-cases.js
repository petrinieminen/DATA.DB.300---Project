use("tobak_express");

// Case 1 - Read: Get all products by category
db.products.find({ category: "portion" });

// Case 2 - Read: Open product details
const product = db.products.findOne({ name: "General Original Portion" });
db.products.findOne({ _id: product._id });

// Case 3 - Read: Search for a product by brand or name
db.products.find({ $or: [
  { name:  { $regex: "general", $options: "i" } },
  { brand: { $regex: "general", $options: "i" } },
]});

// Case 4 - Read: See reviews for a product
const reviewProduct = db.products.findOne({ name: "General Original Portion" });
db.reviews.find({ productId: reviewProduct._id }).sort({ createdAt: -1 });

// Case 5 - Read: Get customer by customer id
const customer = db.customers.findOne({ email: "olof.palme@gmail.se" });
db.customers.findOne({ _id: customer._id });

// Case 6 - Write: Register a new customer
db.customers.insertOne({
  firstName: "Astrid",
  lastName: "Lindgren",
  email: "astrid.lindgren@gmail.se",
  phone: "+46701112233",
  country: "SE",
  address: {
    street: "Dalagatan 46",
    city: "Stockholm",
    postalCode: "11324",
  },
  createdAt: new Date(),
});

// Case 7 - Write: Place a new order
const orderCustomer = db.customers.findOne({ email: "olof.palme@gmail.se" });
const orderProduct  = db.products.findOne({ name: "Ettan Original Portion" });
db.orders.insertOne({
  customerId: orderCustomer._id,
  status: "pending",
  items: [
    { productId: orderProduct._id, name: orderProduct.name, qty: 2, price: orderProduct.price },
  ],
  totalPrice: orderProduct.price * 2,
  createdAt: new Date(),
});

// Case 8 - Write: Add a review for a product
const reviewCustomer = db.customers.findOne({ email: "olof.palme@gmail.se" });
const reviewedProduct = db.products.findOne({ name: "Ettan Lös" });
db.reviews.insertOne({
  productId: reviewedProduct._id,
  customerId: reviewCustomer._id,
  rating: 5,
  comment: "Klassiker som alltid levererar!",
  createdAt: new Date(),
});

// Case 9 - Write: Update customer information
const updateCustomer = db.customers.findOne({ email: "olof.palme@gmail.se" });
db.customers.updateOne(
  { _id: updateCustomer._id },
  { $set: {
    phone: "+46709999999",
    "address.street": "Sveavägen 44",
    "address.postalCode": "11134",
  }}
);

// Case 10 - Read: Get all orders for a customer
const ordersCustomer = db.customers.findOne({ email: "olof.palme@gmail.se" });
db.orders.find({ customerId: ordersCustomer._id }).sort({ createdAt: -1 });
