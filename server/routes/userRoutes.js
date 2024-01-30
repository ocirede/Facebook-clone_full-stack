import express from "express";
import {
  registerUser,
  signInUser,
  findLoggedUser,
  getAllUsers,
  updateUserProfilePicture,
} from "../controllers/userControllers.js";
import auth from "../middleware/userAuth.js";
import upload from "../middleware/middlewareLocalStorage.js";

const router = express.Router();

router.get("/healthcheck", (req, res) => {
  res.sendStatus(200);
});

router.post("/register", registerUser);

router.post("/login", signInUser);

router.get("/loggeduser", auth, findLoggedUser);

router.get("/fetchusers", getAllUsers);

router.post(
  "/edituser/:userId",
  upload.single("profilePic"),
  updateUserProfilePicture
);

//upload.single("profilePic") ==>> middleware

export default router;
