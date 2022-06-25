import express from "express";
import mongoose from "mongoose";
import cards from "./dbCards.js";
import cors from 'cors'
//app config
const app = express();
const port = process.env.PORT || 8001;
const connection_url =
  "mongodb+srv://swag19602:Swagbidisha1986@cluster0.r4o0k.mongodb.net/tinderdb?retryWrites=true&w=majority";

//middle wares
app.use(express.json());
app.use(cors())
//db config
mongoose.connect(connection_url, {
  useNewUrlParser: true,
  // useCreateIndex:false,
  useUnifiedTopology: true,
});
//api endpoints
app.get("/", (req, res) => {
  res.status(200).send("Hello World");
});
app.post("/tinder/cards", (req, res) => {
  const dbCards = req.body;
  cards.create(dbCards, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.get("/tinder/cards", (req, res) => {
  cards.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});
//listener
app.listen(port, () => {
  console.log(`server running on localhost:${port}`);
});


if(process.env.NODE_ENV=='production'){
  app.use(express.static("../tinder-clone/build"));

}