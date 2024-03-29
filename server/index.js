const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const connectDatabase = require("./utils/connectDatabase");
const dotenv = require("dotenv");
const productURL = require("./routes/productRoute");
const userURL = require("./routes/userRoute");
const cartURL = require("./routes/cartRoute");

//Use dotenv package wit the path
dotenv.config({ path: "./.env" });

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cookieParser());

//Fix cors issues
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT"],
    credentials: true, // enable set cookie
  })
);

//Connect to database
connectDatabase();
app.use("/product", productURL);
app.use("/account", userURL);
app.use("/cart", cartURL);

app.listen(PORT, () => {
  console.log(`Server is running: ${PORT}`);
});
