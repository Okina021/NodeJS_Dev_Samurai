import Sequelize, { Model } from "sequelize";

class Contact extends Model {
    static init(sequelize) {
        super.init(
            {
                name: Sequelize.STRING,
                email: Sequelize.STRING,
                status: Sequelize.ENUM("ACTIVE", "ARCHIVED"),
            },
            {
                sequelize,
                tableName: "contacts", // Definição explícita do nome da tabela
            }
        );
    }

    static associate(models) {
        this.belongsTo(models.Customer, {
            foreignKey: "customer_id",
            as: "customer",
        });
    }
}

export default Contact;
