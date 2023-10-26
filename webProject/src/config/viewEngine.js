import express from "express";
import morgan from "morgan"

/*
config view engine for nodejs app
*/

let configViewEngine = (app) => {
    app.use(express.static("./src/public"));
    app.set("view engine", "ejs");
    app.set("views", "./src/resources/views");
    app.use(morgan('combined'));
}

module.exports = configViewEngine;