<<<<<<< HEAD
import jwt from "jsonwebtoken";
import User from "../models/User.js";

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.JWT_SECRET, { expiresIn: "30d" });
=======
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const createToken = _id => {
    return jwt.sign(
        { _id },
        process.env.JWT_SECRET,  
        { expiresIn: '3d' }
    );
>>>>>>> 6f4f9cbf364843a30155649354dc71b07d8c7e16
};

// signup
export const signupUser = async (req, res) => {
<<<<<<< HEAD
  const { email, password } = req.body;

  try {
    const user = await User.signup(email, password);
    const token = createToken(user._id);
    res.status(200).json({ email, token });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
=======
    const { email, password } = req.body;

    try {
        const user = await User.signup(email, password);
        const token = createToken(user._id);
        res.status(200).json({ email, token });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
>>>>>>> 6f4f9cbf364843a30155649354dc71b07d8c7e16
};

// login
export const loginUser = async (req, res) => {
<<<<<<< HEAD
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);
    const token = createToken(user._id);
    res.status(200).json({ email, token });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
=======
    const { email, password } = req.body;

    try {
        const user = await User.login(email, password);
        const token = createToken(user._id);
        res.status(200).json({ email, token });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
>>>>>>> 6f4f9cbf364843a30155649354dc71b07d8c7e16
