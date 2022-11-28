const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://127.0.0.1:27017/MessagingApp",
  { useNewUrlParser: true, useUnifiedTopology: true },
  function (err, db) {
    if (err) {
      console.log(err);
    }
  }
);

const Schema = mongoose.Schema;
var talkSchema = new Schema({
  name: String,
  message: String,
  room: Number,
  password: String,
  image: String,
});

let Talk = mongoose.model("Talk", talkSchema);

const save = (talk) => {
  return Talk.insertMany(talk);
};

const allTalks = () => {
  return Talk.find({});
};

module.exports.save = save;
module.exports.Talk = Talk;
module.exports.allTalks = allTalks;
module.exports.talkSchema = talkSchema;
