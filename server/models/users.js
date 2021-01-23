const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema({
  email: String,
  password: String,
  quote: { type: String, default: 'You have no quote' },
  username: String,
})
const UserPosts = new mongoose.Schema({
  userid: Number,
  title: String,
  username: String,
  content: String,
})
const User = mongoose.model('User', UserSchema)
const Posts = mongoose.model('Posts', UserPosts)
module.exports = {
  User,
  Posts,
}
