
require("dotenv").config()
import express from "express"
import configViewEngine from "./config/viewEngine"
import initWebRoutes from "./routes/web"

let app = express();

//config view Engine
configViewEngine(app)

//init all web routes
initWebRoutes(app);

let port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}`)
})