import Post from '../models/Post.js';

export const getPosts = async (req, res) => {
  try {
    // console.log(req.userId);
    const post = await Post.find({ user: req.userId });
    // const post = await Post.find({ user: req.userId }).populate('user');
    res.status(200).json({ success: true, post });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// @desc Create Post
export const createPost = async (req, res) => {
  // console.log(req.body);
  const { title, description, url, status } = req.body;
  // Simple validation
  if (!title) return res.status(400).json({ success: false, message: 'Title is require' });
  try {
    const newPost = new Post({
      title,
      description,
      url: url.startsWith('https//') ? url : `https//${url}`,
      status: status || 'TO LEARN',
      user: req.userId,
    });

    await newPost.save();
    res.status(201).json({ success: true, message: 'Happy learning!', post: newPost });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc Update Post
export const updatePost = async (req, res) => {
  // console.log(req.body);
  const { title, description, url, status } = req.body;
  // Simple validation
  if (!title) return res.status(400).json({ success: false, message: 'Title is require' });
  try {
    let updatePost = {
      title,
      description: description || '',
      url: (url.startsWith('https//') ? url : `https//${url}`) || '',
      status: status || 'TO LEARN',
    };
    const postUpdateCondition = { _id: req.params.id, user: req.userId };
    updatePost = await Post.findByIdAndUpdate(postUpdateCondition, updatePost, { new: true });
    //User not authorised to update post
    if (!updatePost) return res.status(401).json({ success: false, message: 'Post not found or user not authorised' });
    res.status(200).json({ success: true, message: 'Update success', post: updatePost });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc Delete Post
export const deletePost = async (req, res) => {
  try {
    const postDeleteCondition = { _id: req.params.id, user: req.userId };
    const deletePost = await Post.findByIdAndDelete(postDeleteCondition);
    //User not authorised to update post
    if (!deletePost) return res.status(401).json({ success: false, message: 'Post not found or user not authorised' });
    res.status(200).json({ success: true, message: 'Delete success', post: deletePost });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
