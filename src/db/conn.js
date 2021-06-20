const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/student-api", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection Successful...");
  })
  .catch((e) => {
    console.log("Connection failed");
  });

  