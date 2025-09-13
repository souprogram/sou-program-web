import "dotenv/config";
import express from "express";
import apiRoutes from "./routes/api";

const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(Date.now().toString());
});

app.use("/api", apiRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
