function nameGenerator(phoneNumber) {
    const name = `USER${phoneNumber.slice(3)}`;
    return name;
}

module.exports = {
    nameGenerator
}