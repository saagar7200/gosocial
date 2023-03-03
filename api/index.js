const app = require("./app");
const mongoose = require("mongoose");
const cloudinary = require("cloudinary");

process.on("uncaughtException", (err) => {
  console.log(`uncaught Error: ${err.message}`);
  console.log(`Shutting down the server due to uncaught Exception`);
  process.exit(1);
});

mongoose.set("strictQuery", false);

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected to mongod");
  })
  .catch((err) => {
    console.log("DB connection error:", err.message);
  });

// Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

//creating server
const server = app.listen(process.env.PORT, () => {
  console.log(
    `Backend server is running at https://localhost:${process.env.PORT}.`
  );
});

//unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to unhandled Promise Rejection`);
  server.close(() => {
    process.exit(1);
  });
});
