import express from "express";
import weatherRoute from "./routes/weatherRoutes.js";
import cors from "cors"
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors())
app.use("/api/weather", weatherRoute);
app.listen(PORT, () => {
  console.log("server is listening on port ${PORT}");
});
