const express = require("express");
const app = express();

const { MongoClient, ObjectId } = require("mongodb");
app.use(express.json());

// connection to db :
let dbConix;
MongoClient.connect("mongodb://localhost:27017")
  .then((client) => {
    dbConix = client.db("tp1_onzy");
    console.log("Connected with success");
  })
  .catch((err) => {
    console.log(err);
  });

// read :
app.get("/auteurs/:id", (req, res) => {
  dbConix
    .collection("Auteurs")
    .findOne({ _id: new ObjectId(req.params.id) })
    .then((doc) => res.status(200).json(doc))
    .catch(() => res.status(500).json({ err: "error" }));
});

// create :
app.post("/auteurs", (req, res) => {
  const auteur = req.body;
  dbConix
    .collection("Auteurs")
    .insertOne(auteur)
    .then((doc) => res.status(201).json(doc))
    .catch(() => res.status(500).json({ err: "error" }));
});

// update :
app.put("/auteurs/:id", (req, res) => {
  const auteur = req.body;
  dbConix
    .collection("Auteurs")
    .updateOne({ _id: new ObjectId(req.params.id) }, { $set: auteur })
    .then((doc) => res.status(201).json(doc))
    .catch(() => res.status(500).json({ err: "error" }));
});

app.listen(3000);
