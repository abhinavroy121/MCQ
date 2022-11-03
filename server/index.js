const express = require("express");
const connection = require("./db/db.js");
const app = express();
const UserRouter = require("./routes/UserRouter");
// const AdminRouter = require("./routes/admin/AdminRouter");
app.use(express.json());

app.use("/users", UserRouter);
// app.use("/admin", AdminRouter);

app.get("/", (req, res) => {
  res.send("app");
});

app.listen(8000, async () => {
  try {
    await connection;
    console.log("listening on http://localhost:8000");
  } catch (err) {
    console.log(err, "error while connection to server");
  }
});
