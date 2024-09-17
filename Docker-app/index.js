const express = require("express");
const cors = require("cors");
const app = express();
const axios = require("axios");
const port = 3000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  axios
    .get("http://product-service-api:4000/users")
    .then((response) => {
      console.log(response.data);
      res.send(response.data);
    })
    .catch((err) => {
      console.log("err", err);
      res.send(" Err");
    });
});

app.listen(port, () => {
  console.log("Example app listening on port port!", port);
});

//Run app, then load http://localhost:port in a browser to see the output.
