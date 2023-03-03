const cors = require("cors");
const morgan = require("morgan");
const express = require("express");
const path = require("path");

function expressConfig(app) {
    app.use(morgan("dev"));
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(express.static(path.join(__dirname, "..", "public")));
}

module.exports = {
    expressConfig
}