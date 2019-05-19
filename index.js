import express from "express";
import bodyParser from "body-parser";

// import router
import accountsRoute from "./server/routes/AccountRoutes";

const { log } = console;

const API_PREFIX = "/api/v1";

const app = express();

app.use(bodyParser({ extended: false }));

app.get("/", (req, res) => res.send("Welcome to Edustripe savers app"));
app.use(`${API_PREFIX}/accounts`, accountsRoute);

const PORT = process.env.PORT || 6000;

app.listen(PORT, () => {
  log(`Server is up and running on Port ${PORT}`);
});
