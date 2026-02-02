const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Shiper backend is running");
});

app.post("/submit", (req, res) => {
  const data = req.body;

  console.log("Form data:", data);

  // sirf contact / message data hona chahiye
  res.json({
    success: true,
    message: "Data received successfully"
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
