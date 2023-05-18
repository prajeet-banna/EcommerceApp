const mongoose = require("mongoose");

const connectDB = () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/nikhilmeena", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    .then((data) => {
      console.log("Connected to MongoDB" + data.connection.host);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connectDB;
