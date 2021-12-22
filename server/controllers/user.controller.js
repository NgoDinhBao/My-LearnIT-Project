import User from '../models/User.js';
import jwt from 'jsonwebtoken';
import bcryptjs from 'bcryptjs';

export const getUser = async (req, res) => {
  try {
    const user = await User.find();
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//
export const createUser = async (req, res) => {
  // console.log(req.body);
  const { username, password } = req.body;
  if (!username || !password) return res.status(400).json({ success: false, message: 'Missing username or password' }); //400 Bad request
  try {
    //check for existing user
    const user = await User.findOne({ username });
    if (user) return res.status(400).json({ success: false, message: 'Username already taken' });

    const newUser = new User({ username, password });
    await newUser.save();

    res.json({ success: true, message: 'OK' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message }); //server error
  }
};

export const loginUser = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) return res.status(400).json({ success: false, message: 'Missing username or password' }); //400 Bad request
  try {
    //check for existing user
    const user = await User.findOne({ username });
    if (!user) return res.status(400).json({ success: false, message: 'Username or password incorrect' });

    //check password
    const isMatch = await bcryptjs.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ success: false, message: 'Username or password incorrect' });

    //Return token
    const accessToken = jwt.sign({ userId: user._id }, process.env.ACCESS_TOKEN_SECRET);
    res.json({ success: true, message: 'Login success!', accessToken });

  } catch (error) {
    res.status(500).json({ success: false, message: error.message }); //server error
  }
};
