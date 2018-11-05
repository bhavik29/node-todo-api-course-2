const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {ToDo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5bdf2f9fc09e13ad6ffe64611';

// if(!ObjectID.isValid(id)){
//     console.log('Id not valid');
// }

// ToDo.find({
//     _id: id
// }).then((todos) => {
//     console.log('todos', todos);
// });

// ToDo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('todo', todo);
// });

// ToDo.findById(id).then((todo) => {
//     if(!todo){
//         return console.log('Id not found');
//     }
//     console.log('todo By Id', todo);
// }).catch((e) => {
//     return console.log(e);
// });

var id = '5bdbcae91905b40e4d7d6df2';

User.findById(id).then((user) => {
    if(!user){
        return console.log('Id not found');
    }

    console.log(JSON.stringify(user, undefined, 2));
}).catch((e) => {
    console.log('Id not valid');
})