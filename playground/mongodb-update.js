// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
    if(err){
      return console.log('Unable to connect to mongoDB server');
    }
    console.log('Connected to mongoDB server');

    // db.collection('ToDos').findOneAndUpdate({_id: new ObjectID('5bd918e3e23f9e44904a6548')},
    // {
    //   $set: {
    //     completed: true
    //   }
    // }, {
    //   returnOriginal: false
    // })
    // .then((result) => {
    //   console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({_id: new ObjectID('5bd7d44e4f481e7e1aae4b64')},
    {
      $set: {
        name: 'Bhavik Thakkar'
      },
      $inc: {
        age: 1
      }
    }, {
      returnOriginal: false
    }).then((result) => {
      console.log(result);
    });

    // db.close();
});
