const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();
const { allTalks, save, talkSchema, Talk } = require("../database/index.js");

const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "public")));

app.get("/", (req, res) => {
  res.send("server working");
  console.log("server working");
});

app.post("/post", (req, res) => {
  var myData = new Talk({
    name: req.body.name,
    message: req.body.message,
    room: req.body.room,
    password: req.body.password,
  });
  myData
    .save()
    .then((item) => {
      res.send("item saved to database");
    })
    .catch((err) => {
      res.status(400).send("unable to save to database");
    });
});

app.get("/talk", (req, res) => {
  allTalks()
    .then((repos) => {
      res.status(200).json(repos);
    })
    .catch((err) => {
      res.status(500);
    });
});

app.delete("/delete/:_id/", (req, res) => {
  Talk.deleteOne({ _id: req.params._id }, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

app.put("/update/:_id", (req, res) => {
  Talk.findOneAndUpdate(
    { _id: req.params._id },
    { name: req.body.name },
    (err, result) => {
      if (err) {
        res.json(err);
      } else {
        res.json(result);
      }
    }
  );
});

app.listen(port, () => {
  console.log(`Server listening at localhost:${port}!`);
});
