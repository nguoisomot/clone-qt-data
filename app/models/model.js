User = mongoose => {
  var User = new mongoose.Schema({
    full_name: { type: String },
    email: { type: String },
    username: { type: String },
    address:{type:String},
    gender:{type:String},
    birthday:{type:String}
    
  },{
    collection:'User'
  });
  const UserModel = mongoose.model('User',User);

  return UserModel;
}
const Model = {
  User: User
}
module.exports = Model