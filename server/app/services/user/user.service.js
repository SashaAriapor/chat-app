const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const autobind = require("auto-bind")
module.exports = new class UserService {
    constructor() {
        autobind(this);
    }
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
    async updateUserProfile(info, data) {
        const user = await prisma.user.update({
            where: info,
            data
        });
        return user;
    }
    async findByUsername(username) {
        const user = await prisma.user.findFirst({
            where: {
                username
            }
        });
        return user;
    }
    async checkUsernameIsAvailable(username) {
        const user = await this.findByUsername(username);
        if (user) {
            return false;
        }
        else {
            return true;
        }
    }
}