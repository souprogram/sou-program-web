import express from "express";
import apiRoutes from "./routes/api";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send(Date.now().toString());
});

app.use("/api", apiRoutes);

export default app;
