import Sequelize, { Model } from "sequelize";

class Customer extends Model {
    static init(sequelize) {
        super.init(
            {
                name: Sequelize.STRING,
                email: Sequelize.STRING,
                status: Sequelize.ENUM("ACTIVE", "ARCHIVED"),
            },
            {
                sequelize,
                tableName: "customers", // Definir explicitamente o nome da tabela
            }
        );
    }

    static associate(models) {
        this.hasMany(models.Contact, {
            foreignKey: "customer_id",
            as: "contacts",
        });
    }
}

export default Customer;
