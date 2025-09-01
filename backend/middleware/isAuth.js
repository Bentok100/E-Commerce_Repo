import jwt from "jsonwebtoken";

const isAuth = (req, res, next) => {
  try {
    const { token } = req.cookies;

    if (!token) {
      return res.status(400).json({ message: "No token provided" });
    }

    const verifyToken = jwt.verify(token, process.env.JWT_SECRET);

    if (!verifyToken || (!verifyToken.userId && !verifyToken.email)) {
      return res.status(400).json({ message: "Invalid token" });
    }

    req.userId = verifyToken.userId || null;
    req.email = verifyToken.email || null;

    next();
  } catch (error) {
    console.error("isAuth Middleware Error:", error.message);
    return res.status(500).json({ message: `isAuth error: ${error.message}` });
  }
};

export default isAuth;
