import mongoose from 'mongoose';

var Schema = mongoose.Schema({
  createdAt:{
  type: Date,
  default: Date.now
},
  title: String,
  costo: Number,
})

module.exports = mongoose.model('Article', Schema);


// import mongoose from 'mongoose';
// var Schema = mongoose.Schema({
//   createdAt:{
//     type: Date,
//     default: Date.now
//   },
//   fullName: String,
//   todoText: String
// });
// export default mongoose.model('Todo', Schema);
