import express from "express";
import { PORT } from "./config/config.js";
import router from "./routes/api.js";

const app = express();

app.use("/api",router);

app.listen(PORT,()=>{
    console.log(`App is running on port ${PORT}`);
    
});