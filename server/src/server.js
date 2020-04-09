import express from "express";
import path from "path";
import morgan from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";

import routes from "./routes"

const app = express();

// middlewares
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan("tiny"));

// apply routes
app.use(routes);

// serve UI
app.use(express.static(path.join(__dirname, "build")));
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Unexpected error");
});

export default app;
