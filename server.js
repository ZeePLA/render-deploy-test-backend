import express from "express";
const app = express();

app.get("/test", (req, res) => {
  res.status(200).json("katkat-backend is active! on render");
});

app.listen(5005, () => {
  console.log("server is running on 5005!");
});
