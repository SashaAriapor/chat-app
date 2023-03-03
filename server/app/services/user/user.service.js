const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = new class UserService {
    async findOrCreateUser(phoneNumber, firstName, token) {
        const user = await prisma.user.upsert({
            where: {
                phoneNumber
            },
            update: {
                token
            },
            create: {
                phoneNumber,
                firstName,
                token
            }
        });
        return user;
    }
    async updateUserProfile(phoneNumber, data) {
        const user = await prisma.user.update({
            where: {
                phoneNumber
            },
            data
        });
        return user;
    }
}