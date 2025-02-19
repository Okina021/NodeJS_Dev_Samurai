module.exports = {
    dialect: "postgres",
    host: "localhost",
    username: "postgres",
    password: "postgres",
    database: "teste-dominando-nodejs",
    define: {
        timestamps: true, // Aqui o correto é "timestamps" no plural
        underscored: true,
        underscoredAll: true,
    },
};
