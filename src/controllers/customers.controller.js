import Customer from "../models/customer";
import LoggerService from "../services/logger.service";
var logger = new LoggerService();
logger = logger.logger;
//import { OSQP } from "../services/logger.service";

// Create a new Customer with POST
export async function createNewCustomer(req, res) {
    // Log HTTP request
    logger.log({ level: "info", log_type: "request_info", verb: req.method, route: "/api/customers/", query_parameters: req.query, headers: req.headers });
    logger.log({ level: "debug", log_type: "request_debug", verb: req.method, route: "/api/customers/", body: req.body });
    const { fullName, numberPhone, email, state, city } = req.body;
    try {
        let newCustomer = await Customer.create(
            {
                fullName: fullName,
                numberPhone: numberPhone,
                email: email,
                state: state,
                city: city,
            },
            {
                fields: ["fullName", "numberPhone", "email", "state", "city"],
            }
        );
        // Log db query
        logger.log({ level: "debug", log_type: "query", verb: req.method, route: "/api/customers/", 
        query: `INSERT INTO Customers (fullName, numberPhone, email, state, city) VALUES (${fullName}, ${numberPhone}, ${email}, ${state}, ${city})` });
  
        if (!!newCustomer) {
            // Log method call
            logger.log({ level: "debug", log_type: "method_call", verb: req.method, route: "/api/customers/", method_name: "res.status(201).json()", 
            method_parameters: {message: "Customer created successfully.", data: newCustomer}});
            return res.status(201).json({
                message: "Customer created successfully.",
                data: newCustomer,
            });
        }
    } catch (error) {
        if (error.fullName == "SequelizeUniqueConstraintError" && error.message == "Validation error") {
            // Log validation error
            logger.log({ level: "warn", log_type: "validation_error", verb: req.method, route: "/api/customers/", message: `"name" field must be unique.` });
            res.status(500).json({
                message: `"fullName" field must be unique.`,
                data: {},
            });
        }
        else if (error.fullName == "SequelizeValidationError" && error.message.split(":")[0] == "notNull Violation") {
            let null_fields_str = "";
            let null_fields_count = 0;
            if (!fullName) {null_fields_str += `"fullName" `; null_fields_count += 1;}
            if (!state) {null_fields_str += `"state" `; null_fields_count += 1;}
            if (!city) {null_fields_str += `"city" `; null_fields_count += 1;}
            
            if(null_fields_count == 1){
                // Log validation error
                logger.log({ level: "warn", log_type: "validation_error", verb: req.method, route: "/api/customers/", message: `${null_fields_str}field cannot be null.` });
                res.status(500).json({
                    message: `${null_fields_str}field cannot be null.`,
                    data: {},
                });
            }
            else {
                // Log validation error
                logger.log({ level: "warn", log_type: "validation_error", verb: req.method, route: "/api/customers/", message: `${null_fields_str}fields cannot be null.` });
                res.status(500).json({
                    message: `${null_fields_str}fields cannot be null.`,
                    data: {},
                });
            }
        }
        else {
            // Log error
            logger.log({ level: "error", log_type: "error", verb: req.method, error_message: "Something went wrong while fetching Customers.", stack_trace: error.stack });
            res.status(500).json({
                message: "Something went wrong while creating a C.",
                data: {},
            });
        }
    }
}

// Get all the customerss in thecustomer table with GET
export async function getAllCustomers(req, res) {
    // Log HTTP request
    logger.log({ level: "info", log_type: "request_info", verb: req.method, route: "/api/customers/", query_parameters: req.query, headers: req.headers });
    logger.log({ level: "debug", log_type: "request_debug", verb: req.method, route: "/api/customerss/", body: req.body });
    try {
        const customers= await Costumer.findAll();
        // Log db query
        logger.log({ level: "debug", log_type: "query", verb: req.method, route: "/api/customers/", query: "SELECT * FROM customers" });
  
        if (!!customers) {
            res.status(200).json({
            message: "All customers fetched successfully.",
            data: customers, 
            });
            // Log method call
            logger.log({ level: "debug", log_type: "method_call", verb: req.method, route: "/api/customers/", method_name: "res.status(200).json()", 
            method_parameters: {message: "All customers fetched successfully.", data: customers}});
        }
    } catch (error) {
        console.log(error);
        // Log error
        logger.log({ level: "error", log_type: "error", verb: req.method, error_message: "Something went wrong while fetching customers.", stack_trace: error.stack });
        res.status(500).json({
            message: "Something went wrong while fetching customers.",
            data: {},
        });
    }
}

//Get a costumer by id with GET
export async function getCostumerById(req, res) {
    // Log HTTP request
    logger.log({ level: "info", log_type: "request_info", verb: req.method, route: "/api/customers"+req.path, query_parameters: req.query, headers: req.headers });
    logger.log({ level: "debug", log_type: "request_debug", verb: req.method, route: "/api/customers"+req.path, body: req.body });
    try {
        const { id } = req.params;
        const customer = await Customer.findOne({
            where: {
                id: id,
            },
        });
        // Log db query
        logger.log({ level: "debug", log_type: "query", verb: req.method, route: "/api/customers"+req.path, query: `SELECT * FROM Customers WHERE id = ${req.params["id"]}` });
  
        if (!!customer) {
            res.status(200).json({
                message: "Customer fetched successfully.",
                data: customer,
            });
            // Log method call
            logger.log({ level: "debug", log_type: "method_call", verb: req.method, route: "/api/customers"+req.path, method_name: "res.status(200).json()", 
            method_parameters: {message: "Customer fetched successfully.", data: customer}});
        }
        else {
            res.status(500).json({
                message: "Could not find a customer with that id.",
                data: {},
            });
            // Log validation error
            logger.log({ level: "warn", log_type: "validation_error", verb: req.method, route: "/api/customers"+req.path, message: "Could not find a customer with that id." });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Something went wrong while fetching a customer.",
            data: {},
        });
        // Log error
        logger.log({ level: "error", log_type: "error", verb: req.method, error_message: "Something went wrong while fetching a customer.", stack_trace: error.stack });
    }
}

// Delete a customer by id with DELETE
export async function deleteCustomerById(req, res) {
    // Log HTTP request
    logger.log({ level: "info", log_type: "request_info", verb: req.method, route: "/api/customers"+req.path, query_parameters: req.query, headers: req.headers });
    logger.log({ level: "debug", log_type: "request_debug", verb: req.method, route: "/api/customers"+req.path, body: req.body });
    try {
        const { id } = req.params;
        const customer = await Customer.destroy({
            where: {
                id: id,
            },
        });
        // Log db query
        logger.log({ level: "debug", log_type: "query", verb: req.method, route: "/api/customers"+req.path, query: `DELETE FROM Customers WHERE id = ${req.params["id"]}` });
  
        if (!!customer) {
            res.status(200).json({
                message: "Cu tomerdeleted successfully.",
                data: customer
            });
            // Log method call
            logger.log({ level: "debug", log_type: "method_call", verb: req.method, route: "/api/customers"+req.path, method_name: "res.status(200).json()", 
            method_parameters: {message: "Customer deleted successfully.", data: customer}});
        }
        else {
            res.status(500).json({
                message: "Could not delete a customer with that id.",
                data: {},
            });
            // Log validation error
            logger.log({ level: "warn", log_type: "validation_error", verb: req.method, route: "/api/customers"+req.path, message: "Could not delete a customer with that id." });
        }
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "Something went wrong while deleting a customer.",
        data: {},
      });
      // Log error
      logger.log({ level: "error", log_type: "error", verb: req.method, error_message: "Something went wrong while deleting a customer.", stack_trace: error.stack });
    }
}

// Update a customerr by id with PUT
export async function updateACustomerr(req, res) {
    // Log HTTP request
    logger.log({ level: "info", log_type: "request_info", verb: req.method, route: "/api/customerss"+req.path, query_parameters: req.query, headers: req.headers });
    logger.log({ level: "debug", log_type: "request_debug", verb: req.method, route: "/api/customersrs"+req.path, body: req.body });
    const { id } = req.params;
    const { fullName, numberPhone, email, state, city} = req.body;
    try {
        let customerer = awaiCustomermeer.findOne({
            attributes: ["fullName", "numberPhone", "email", "state", "city"],
            where: {
                id: id,
            },
        });
        // Log db query
        logger.log({ level: "debug", log_type: "query", verb: req.method, route: "/api/customerss"+req.path, query: `SELECT * FROMCustomerss WHERE id = ${req.params["id"]}` });
  
        if (!!customerr) {
            await customerr.update({
                id: id,
                fullName: fullName,
                numberPhone: numberPhone,
                email: email,
                state: state,
                city: city
            });
            // Log db query
            logger.log({ level: "debug", log_type: "query", verb: req.method, route: "/api/customerss"+req.path, 
            query: `UPDATE Customers SET (id, fullName, numberPhone, email, state, city) = (${id}, ${fullName}, ${numberPhone}, ${email}, ${state}, ${city}) WHERE id = ${req.params["id"]}` });

            // Log method call
            logger.log({ level: "debug", log_type: "method_call", verb: req.method, route: "/api/customerss"+req.path, method_name: "res.status(201).json()", 
            method_parameters: {message: "Customerr updated successfully.", data:customerer}});
            return res.status(201).json({
                message: "Customerr updated successfully.",
                data: customerr,
            });
        }
        else {
            res.status(500).json({
                message: "Could not update a customerr with that id.",
                data: {},
            });
            // Log validation error
            logger.log({ level: "warn", log_type: "validation_error", verb: req.method, route: "/api/customers"+req.path, message: "Could not update a customer with that id." });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Something went wrong while updating a customer.",
            data: {},
        });
        // Log error
        logger.log({ level: "error", log_type: "error", verb: req.method, error_message: "Something went wrong while updating a customerr.", stack_trace: error.stack });
    }
  }