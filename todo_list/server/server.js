import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

//-------------------------Set------------------------------------------//
const app = express();
dotenv.config();
const PORT = process.env.PORT 
const MONGOURL = process.env.MONGO_URL;
app.use(express.json());


//------------------------Connect--------------------------------------------//

// Connect to MongoDB 
mongoose.connect(MONGOURL)
  .then(() => {
    console.log("Database connected successfully.");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Database connection failed.", err);
    process.exit(1); 
  });

  const userSchema = new mongoose.Schema({
  todo_item: String,
}, {
  collection: 'mytodolist'
});


const UserModel = mongoose.model("mytodolist", userSchema);



//---------------------------------------------------------------------------//

app.get("/dummy", async (req, res) => {
  try {  
    const userData = await UserModel.find();
    res.json(userData);
    // res.json({message:"Hello"});
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
});


// app.listen(5000,()=>{
//     console.log('server started')
// })
