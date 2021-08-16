const express = require("express"); // web framework that handles routing stufs
const connectDB = require("./config/db");
const multiparty = require("connect-multiparty");
var path = require("path");
const app = express(); // initializing the axpress

// Connect database

connectDB();
//multyparty middleware
app.use(express.static(path.join(__dirname, "images")));

const multipartyMiddleware = multiparty({ uploadDir: "./images" });
// init Middleware

app.use(express.json({ extended: false }));

// Define Routes
app.use("/api/auth", require("./routes/auth.js"));
app.use("/api/users", require("./routes/user.js"));
app.use("/api/portfolio", require("./routes/portfolio.js"));
app.use("/api/contact", require("./routes/contact.js"));
//ckimgUpload
app.post("/ckimgUpload", multipartyMiddleware, (req, res) => {
  let tempFile = req.files.upload;
  let path = tempFile.path;
  let pathArray = path.split("\\");
  res.status(200).json({
    uploaded: true,
    url: `http://localhost:5000/${pathArray[1]}`,
  });
});

// serve static assects in production

if (process.env.NODE_ENV == "production") {
  //  set static folder
  app.use(express.static("client/build"));
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

const PORT = process.env.port || 5000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
