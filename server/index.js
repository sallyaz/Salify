const express = require("express");
const cors = require("cors");
const axios = require("axios");

const PORT = process.env.PORT || 8000;

const app = express();

app.use(express.json());
app.use(cors());

app.get("/sally", async (req, res) => {
  // const response = await axios.get('');
  res.status(200).json({ message: "Sally The Bex!!!" });
});

app.listen(PORT, () => {
  console.log("Listining to port ", PORT);
});
