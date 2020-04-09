import app from "./server";

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log("API server started on " + PORT));
