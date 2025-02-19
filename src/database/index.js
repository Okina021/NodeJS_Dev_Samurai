import { Sequelize } from "sequelize";
import config from "../config/database";

import Customer from "../app/models/Customer";
import Contact from "../app/models/Contact";
import User from "../app/models/User";

const models = [User, Customer, Contact];

class Database {
    constructor() {
        this.connection = new Sequelize(config);
        this.init();
        this.associateModels(); // Adicionando a associação
    }

    init() {
        models.forEach((model) => model.init(this.connection));
    }

    associateModels() {
        models.forEach((model) => {
            if (model.associate) {
                model.associate(this.connection.models);
            }
        });
    }
}

export default new Database();
