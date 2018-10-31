// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
    if(err){
      return console.log('Unable to connect to mongoDB server');
    }
    console.log('Connected to mongoDB server');

    db.collection('Users').deleteMany({name: 'Bhavik Thakkar'})
    .then((result) => {
      console.log(result);
    });

    db.collection('Users').findOneAndDelete({_id: new ObjectID('5bd7e3bc13c34a05e14a90df')})
    .then((result) => {
      console.log(result);
    });

    // db.close();
});
