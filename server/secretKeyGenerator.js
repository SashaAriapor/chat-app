const crypto = require("crypto");

const key = crypto.randomBytes(32).toString("hex").toUpperCase();
console.log(key);
// 03BF3305D096C63CA141A0A660D0A7FD19174F556B03A35BC493FD4682334775

