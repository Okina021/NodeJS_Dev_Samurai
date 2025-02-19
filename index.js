// const express = require("express");

// const app = express();
// app.use(express.json());

// let customers = [
//   {
//     id: 1,
//     name: "Dev Samurai",
//     site: "http://devsamurai.com.br",
//   },
//   {
//     id: 2,
//     name: "Google",
//     site: "http://google.com",
//   },
//   {
//     id: 3,
//     name: "UOL",
//     site: "http://uol.com.br",
//   },
// ];

// app.get("/customers", (req, res) => {
//   return res.json(customers);
// });

// app.get("/customers/:id", (req, res) => {
//   const id = Number(req.params.id);
//   const customer = customers.find((customer) => customer.id === id);
//   const status = customer ? 200 : 404;
//   res.status(status).json(customer);
// });

// app.post("/customers", (req, res) => {
//   const { name, site } = req.body;
//   const id = customers[customers.length - 1].id + 1;

//   const newCustomer = { id, name, site };
//   customers.push(newCustomer);

//   return res.status(201).json(newCustomer);
// });

// app.put("/customers/:id", (req, res) => {
//   const id = Number(req.params.id);
//   const { name, site } = req.body;

//   const customerIndex = customers.findIndex((customer) => customer.id === id);

//   if (customerIndex === -1) {
//     return res.status(404).json({ error: "customer not found" });
//   }

//   customers[customerIndex] = { id, name, site };

//   return res.status(200).json(customers[customerIndex]);
// });

// app.delete("/customers/:id", (req, res) => {
//   const id = Number(req.params.id);
//   const customerIndex = customers.findIndex((customer) => customer.id === id);

//   if (customerIndex === -1) {
//     return res.status(404).json({ error: "customer not found" });
//   }

//   customers.splice(customerIndex, 1);

//   return res.status(204).send();
// });

// app.listen(3000, () => {
//   console.log("Server is running on port 3000");
// });
