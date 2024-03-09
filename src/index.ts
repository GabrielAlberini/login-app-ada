import express from "express";
import { provincesRoutes } from "./routes/provinces";
import { usersRouter } from "./routes/users";
import jsonfile from "jsonfile";

const app = express();

app.use(express.json());

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const db = jsonfile.readFileSync("./src/db/db.json");

  const userDb = db.users.find((user: any) => user.email === email);

  if (!userDb) return res.status(404).json({ error: "USER_NOT_FOUND" });

  if (userDb.password !== password)
    return res.status(404).json({ error: "PASSWORD_NOT_FOUND" });

  res.status(200).json({ message: "USER_LOGGER_SUCCESFULY" });
});

app.use("/api/provinces", provincesRoutes);
app.use("/api/users", usersRouter);

app.use("/api", (req, res) => {
  const data = jsonfile.readFileSync("./src/db/db.json");
  res.json(data.info);
});

app.use("*", (req, res) => {
  res.json({ error: "Not found" });
});

app.listen(3000, () => {
  console.log(`Server listening on port http://localhost:3000`);
});
