const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const stripeRoute = require("./routes/stripe");
const sliderRoute = require("./routes/slider");
const bannerRoute = require("./routes/banner")
<<<<<<< HEAD
const newsletterRoute = require("./routes/newsletter")
=======
>>>>>>> 1661d3374a76b1ea61cfa8bb03e71b925ab048aa
const cors = require("cors");

dotenv.config();

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("DBConnection Successfull!"))
    .catch((err) => {
    console.log(err);
});

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);
app.use("/api/search", productRoute);
app.use("/api/sliders", sliderRoute);
app.use("/api/banners", bannerRoute);
<<<<<<< HEAD
app.use("/api/newsletters", newsletterRoute);
=======
>>>>>>> 1661d3374a76b1ea61cfa8bb03e71b925ab048aa


app.listen(process.env.PORT || 5000, () => {
    console.log("Backend server is running!")
});