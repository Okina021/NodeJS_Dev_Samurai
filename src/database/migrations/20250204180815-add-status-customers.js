"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.addColumn("customers", "status", {
            type: Sequelize.ENUM("ACTIVE", "ARCHIVED"),
            allowNull: true,
            defaultValue: "ACTIVE",
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.sequelize.transaction((transaction) => {
            queryInterface.removeColumn("customers", "status");
            queryInterface.sequelize.query("DROP TYPE enum_customers_status");
        });
    },
};
