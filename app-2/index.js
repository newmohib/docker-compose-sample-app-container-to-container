const express = require("express");
const cors = require("cors");
const app = express();
const port = 4000;

app.use(express.json());

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/users", (req, res) => {
  let employees = [
    { id: 1, name: "Mohib" },
    { id: 2, name: "Korin" },
    { id: 3, name: "Rohim" },
  ];
  res.send(employees);
});

app.listen(port, () => {
  console.log("Example app listening on port port!", port);
});

//Run app, then load http://localhost:port in a browser to see the output.
