import jwt from "jsonwebtoken";
import User from "../models/User.js";
import dotenv from "dotenv";
dotenv.config();

export const requireAuth = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization)
    return res.status(401).json({ error: "authorization token required" });

  const token = authorization.split(" ")[1];

  try {
    const { _id } = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findOne({ _id }).select("_id");
    next();
  } catch (err) {
<<<<<<< HEAD
    // console.log(err);
=======
    console.log(err);
>>>>>>> 6f4f9cbf364843a30155649354dc71b07d8c7e16
    res.status(401).json({ error: "not authorized" });
    next(err);
  }
};
