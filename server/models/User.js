import mongoose from 'mongoose';
import bcryptjs from 'bcryptjs';

const userSchema = mongoose.Schema({
  username: { type: String, require: true, unique: true },
  password: { type: String, require: true },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

//hide password when return user
userSchema.methods.toJSON = function () {
  const user = this
  const userObject = user.toObject()

  delete userObject.password
  return userObject
}

// hash password before save into DB
userSchema.pre('save', function (next) {
  if (this.isModified('password')) {
      const salt = bcryptjs.genSaltSync(10)
      this.password = bcryptjs.hashSync(this.password, salt)
      return next()
  }
})

const User = mongoose.model('users', userSchema);
export default User;
