const authController = require("../controllers/authController");

const router = require("express").Router();
const { verifyToken } = require("../controllers/verifyToken");

//REGISTER
router.post("/register", authController.registerUser);

//REFRESH TOKEN
router.post("/refreshToken", authController.requestRefreshToken);
//LOG IN
router.post("/login", authController.loginUser);

module.exports = router;
