import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello world")
})

const server = app.listen(3000, () => {
  const host = server.address().address;
  const port = server.address().port;

  console.log(`App listen on ${host} : ${port}`)
})