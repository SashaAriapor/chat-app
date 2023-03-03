const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();


const server = require("./app/server");

if (process.env.NODE_ENV !== "PRODUCTSHEN") {
    require("dotenv").config();
}

const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;

server(PORT, MONGO_URI).catch(error => {
    console.error(error.message);
}).finally(async () => {
    await prisma.$disconnect();
})