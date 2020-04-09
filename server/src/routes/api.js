import express from "express";

import { isLoggedIn } from "../middlewares/isLoggedIn";

const router = express.Router();

router.use("/customProtectedPage", isLoggedIn, (req, res) => {
  res.send("Succesfully logged in!");
});

router.use("/customPageSubmit", (req, res) => {
  res.send(req.body);
});

export default router;
