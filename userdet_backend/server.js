const express = require("express");
const app = express();
const mong = require("mongoose");
const dotenv = require("dotenv");
/*
mong.connect("mongodb://127.0.0.1:27017/mondb").
then(() => {
    console.log("Connected !!");
}).catch((error) => {
    console.log("error",error);
});

app.get("/", (req, res) => {
  res.send("api successfully running");
});

app.listen(4000);
*/
dotenv.config();

const cors = require("cors");

app.use(cors());
const userRoute = require("./routes/userRoute");

app.use(express.json());

mong
  .connect(process.env.URI)
  .then(() => {
    console.log("Connected Successfully");
    app.listen(process.env.PORT || 8000, (err) => {
      if (err) console.log(err);
      console.log(`running at port ${process.env.PORT}`);
    });
  })
  .catch((error) => console.log("Failed to connect", error));

app.use(userRoute);
