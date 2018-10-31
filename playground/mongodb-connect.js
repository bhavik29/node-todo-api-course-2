// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();

console.log(obj);

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
    if(err){
      return console.log('Unable to connect to mongoDB server');
    }
    console.log('Connected to mongoDB server');

    // db.collection('ToDos').insertOne({
    //   text: 'Something to do',
    //   completed: false
    // }, (err, result) => {
    //   if(err){
    //     return console.log('Unable to insert todo',err);
    //   }
    //   console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // db.collection('Users').insertOne({
    //   name: 'Bhavik Thakkar',
    //   age:  22,
    //   location: 'New Delhi'
    // }, (err, result) => {
    //   if(err){
    //     return console.log('Unable to insert user');
    //   }
    //   console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
    // })

    db.close();
});
