const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

let _db;
const mongoConnect = (callback) => {
  MongoClient.connect(
    "mongodb+srv://chaithanyakumar167:Chaithanya167@cluster0.8jnsblk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
    .then((client) => {
      console.log("connected");
      _db = client.db()
      callback();
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

const getDb = () =>{
  if(_db){
    return _db
  }
  throw 'no database found'
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;