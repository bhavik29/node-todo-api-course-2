const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {ToDo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// ToDo.remove({}).then((res) => {
//     console.log(res);
// });

// ToDo.findOneAndRemove({})
// ToDo.findByIdAndRemove()


ToDo.findByIdAndRemove('5be5297202e82cdd21067943').then((todo) => {
    console.log(todo);
}); 