import User from "../model/userModel.js";
import validator from "validator";
import bcrypt from "bcryptjs";
import { genToken, genToken1 } from "../config/token.js";

export const registration = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existUser = await User.findOne({ email });
    if (existUser) {
      return res.status(400).json({ message: `User already exist` });
    }
    if (!validator.isEmail(email)) {
      return res.status(400).json({ message: `Enter valid Email` });
    }
    if (password.length < 8) {
      return res.status(400).json({ message: "Enter strong Password" });
    }
    let hashPassword = await bcrypt.hash(password, 10);

    const user = await User.create({ name, email, password: hashPassword });

    let token = await genToken(user._id);

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "Lax",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.status(201).json(user);
  } catch (error) {
    console.log("registration error");
    return res.status(500).json({ message: `Registration error ${error}` });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: `User not Found` });
    }

    let isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: `Incorrect Password ` });
    }

    let token = await genToken(user._id);

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "Lax",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.status(201).json(user);
  } catch (error) {
    console.log(" LOGIN ERROR ");
    return res.status(500).json({ message: `Login error ${error}` });
  }
};

export const logout = async (req, res) => {
  try {
    res.clearCookie("token");
    return res.status(200).json({ message: `Logout successful` });
  } catch (error) {
    console.log(" LOGOUT ERROR ");
    return res.status(500).json({ message: `Logout error ${error}` });
  }
};

export const googleLogin = async (req, res) => {
  try {
    let { name, email } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      user = await User.create({ name, email });
    }

    let token = await genToken(user._id);

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "Lax",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.status(200).json(user);
  } catch (error) {
    console.log("googleLogin Error");
    return res.status(500).json({ message: `Google-Login Error ${error}` });
  }
};

export const adminLogin = async (req, res) => {
  try {
    let { email, password } = req.body;

    if (
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD
    ) {
      let token = await genToken1(email);

      res.cookie("token", token, {
        httpOnly: true,
        secure: false,
        sameSite: "Lax",
        maxAge: 1 * 24 * 60 * 60 * 1000,
      });

      return res.status(200).json(token);
    }

    return res
      .status(400)
      .json({ message: `adminLogin := Invalid Credentials` });
  } catch (error) {
    console.log("adminLogin Error");
    return res.status(500).json({ message: `Admin-Login Error ${error}` });
  }
};
