import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: { type: String, require: true },
  description: { type: String },
  url: { type: String },
  status: { type: String, enum: ['TO LEARN', 'LEARNING', 'LEARNED'] },
  user: { type: Schema.Types.ObjectId, ref: 'users' },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Post = mongoose.model('Posts', postSchema);

export default Post;
