import { Op } from "sequelize";
import { parseISO } from "date-fns";
import Customer from "../models/Customer";
import Database from "../../database/index.js";

class CustomersController {
    async index(req, res) {
        const {
            name,
            email,
            status,
            createdBefore,
            createdAfter,
            updatedBefore,
            updatedAfter,
            sort,
        } = req.query;

        const page = req.params.page || 1;
        const limit = req.query.limit || 25;
        const offset = (page - 1) * limit;

        let where = {};

        if (name) {
            where = {
                ...where,
                name: {
                    [Op.iLike]: name,
                },
            };
        }
        if (email) {
            where = {
                ...where,
                email: {
                    [Op.iLike]: email,
                },
            };
        }
        if (status) {
            where = {
                ...where,
                status: {
                    [Op.in]: status
                        .split(",")
                        .map((item) => item.toUpperCase()),
                },
            };
        }
        if (createdBefore) {
            where = {
                ...where,
                createdAt: {
                    [Op.gte]: parseISO(createdBefore),
                },
            };
        }
        if (createdAfter) {
            where = {
                ...where,
                createdAt: {
                    [Op.lte]: parseISO(createdAfter),
                },
            };
        }
        if (updatedBefore) {
            where = {
                ...where,
                updatedAt: {
                    [Op.gte]: parseISO(updatedBefore),
                },
            };
        }
        if (updatedAfter) {
            where = {
                ...where,
                updatedAt: {
                    [Op.lte]: parseISO(updatedAfter),
                },
            };
        }
        if (sort) {
            order = sort.split(",").map((item) => item.split(":"));
        }

        const data = await Customer.findAll({
            where,
            order,
            limit,
            offset: limit * page - limit,
        });
        return res.json(data);
    }

    async show(req, res) {
        const id = Number(req.params.id);
        const customer = await customers.find((customer) => customer.id === id);
        const status = customer ? 200 : 404;
        return res.status(status).json(customer);
    }

    async create(req, res) {
        const { name, site } = req.body;
        const id = Database[customers.length - 1].id + 1;

        const newCustomer = { id, name, site };
        customers.push(newCustomer);

        return res.status(201).json(newCustomer);
    }
    async update(req, res) {
        const id = Number(req.params.id);
        const { name, site } = req.body;

        const customerIndex = customers.findIndex(
            (customer) => customer.id === id
        );

        if (customerIndex === -1) {
            return res.status(404).json({ error: "customer not found" });
        }

        customers[customerIndex] = { id, name, site };

        return res.status(200).json(customers[customerIndex]);
    }
    destroy(req, res) {
        const id = Number(req.params.id);
        const customerIndex = customers.findIndex(
            (customer) => customer.id === id
        );

        if (customerIndex === -1) {
            return res.status(404).json({ error: "customer not found" });
        }

        customers.splice(customerIndex, 1);

        return res.status(204).send();
    }
}

export default new CustomersController();
