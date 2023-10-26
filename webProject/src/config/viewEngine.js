import express from "express";
<<<<<<< HEAD
import morgan from "morgan"
=======
>>>>>>> 55ea728db675b2ded78aa9415da0a95b62f0469f

/*
config view engine for nodejs app
*/

let configViewEngine = (app) => {
    app.use(express.static("./src/public"));
    app.set("view engine", "ejs");
<<<<<<< HEAD
    app.set("views", "./src/resources/views");
    app.use(morgan('combined'));
=======
    app.set("views", "./src/views");
>>>>>>> 55ea728db675b2ded78aa9415da0a95b62f0469f
}

module.exports = configViewEngine;