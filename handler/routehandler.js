const bcrypt = require("bcryptjs");
const { User } = require("../database/Connection.js");
async function handleRegisterrequest(req, res) {
  try { 
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      res.status(400).json({
        message: "All fields are required",
      });
    }
    const find = await User.findOne({ email: email });
    if (find) {
      console.log("email already exists");
      return res.status(400).json({
        message: "Email already in use try different email",
      });
    }
    const hashedpassword = await bcrypt.hash(password, 10);
    const result = await User.create({
      username: username,
      email: email,
      password: hashedpassword,
    });
    if (!result) {
      return res.status(500).json({
        message: "Error in creating user",
      });
    } else {
      console.log("User created successfully");
      console.log(result);
      return res.status(201).json({
        message: "User created successfully",
        isRegistered: true,
      });
    }
  } catch (err) {
    res.status(500).json({
      message: "internal server error",
    });
  }
}

async function handleLoginrequest(req, res) {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({
      message: "ALL fields are required",
    });
  }

  const find = await User.findOne({ email: email });
  if (!find) {
    console.log("User not found, please register first");
    return res.status(400).json({
      message: "User not found, please register first",
    });
  } else {
    const passwordfetch = find.password;
    const isMatch = await bcrypt.compare(password, passwordfetch);
    if (!isMatch) {
      console.log("Invalid credentials");
      return res.status(400).json({
        message: "Invalid password",
      });
    } else {
      console.log("login successful");
      req.session.username = email;
      req.session.uid = find._id;
      console.log(req.session.username + "" + req.session.uid);
      return res.status(200).json({
        message: "Login successful",
        userId: req.session.userId,
        username: req.session.username,
        isAuthenticated: true,
      });
    }
  }
}
function handledashboardrequest(req, res) {
  res.json({ message: `Welcome ${req.session.username}, to your dashboard!` });
}

function handleLogoutrequest(req, res) {
  req.session.destroy((err) => {
    if (err) {
      console.log("error in destroyin session", err);
      return res.status(500).json({
        message: "Logout failed",
      });
    } else {
      res.clearCookie("connect.sid");
      return res.status(200).json({
        message: "Logout successful",
        isLoggedIn: false,
      });
    }
  });
}
function handlechekAuth(req, res) {
  if (!req.session.uid)
    return res.status(401).json({
      message: "Unauthorized",
      isAuthenticated: false,
    });
  res.json(
    {
      message: "user is authenticated",
      isAuthenticated: true,
    },
    []
  );
}

module.exports = {
  handleRegisterrequest,
  handleLoginrequest,
  handleLogoutrequest,
  handledashboardrequest,
  handlechekAuth,
};
