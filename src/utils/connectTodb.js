const { default: mongoose } = require("mongoose");

function connectToDb() {
  mongoose
    .connect(
      "mongodb+srv://expressUser:mupezXmXfci9yzPL@cluster0.ghbjfij.mongodb.net/?appName=Cluster0",{dbName:"ecommerce"}
    )
    .then(()=>console.log("connected to db"))
    .catch((e) => console.log(e.message));
}

module.exports=connectToDb