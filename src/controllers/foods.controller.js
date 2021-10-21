import Food from "../models/food";
import LoggerService from "../services/logger.service";
var logger = new LoggerService();
logger = logger.logger;
//import { OSQP } from "../services/logger.service";

// Create a new Food with POST
export async function createNewFood(req, res) {
    // Log HTTP request
    logger.log({ level: "info", log_type: "request_info", verb: req.method, route: "/api/foods/", query_parameters: req.query, headers: req.headers });
    logger.log({ level: "debug", log_type: "request_debug", verb: req.method, route: "/api/foods/", body: req.body });
    const { foodName, foodDescription, ingredients, foodPrice, foodExpiration} = req.body;
    try {
        let newFood = await Food.create(
            {
              foodName: foodName,
              foodDescription: foodDescription,
              ingredients: ingredients,
              foodPrice: foodPrice,
              foodExpiration: foodExpiration
            },
            {
                fields: ["foodName", "foodDescription", "ingredients", "foodPrice", "foodExpiration"],
            }
        );
        // Log db query
        logger.log({ level: "debug", log_type: "query", verb: req.method, route: "/api/foods/", 
        query: `INSERT INTO FOODS (foodName, foodDescription, ingredients, foodPrice, foodExpiration) VALUES (${foodName}, ${foodDescription}, ${ingredients}, ${foodPrice}, ${foodExpiration})` });
  
        if (!!newFood) {
            return res.status(201).json({
                message: "Food created successfully.",
                data: newFood,
            });
        }
    } catch (error) {
        if (error.foodName == "SequelizeUniqueConstraintError" && error.message == "Validation error") {
            // Log validation error
            logger.log({ level: "warn", log_type: "validation_error", verb: req.method, route: "/api/foods/", message: `"name" field must be unique.` });
            res.status(500).json({
                message: `"foodName" field must be unique.`,
                data: {},
            });
        }
        else if (error.foodName == "SequelizeValidationError" && error.message.split(":")[0] == "notNull Violation") {
            let null_fields_str = "";
            let null_fields_count = 0;
            if (!foodName) {null_fields_str += `"foodName" `; null_fields_count += 1;}
            if (!foodPrice) {null_fields_str += `"foodPrice" `; null_fields_count += 1;}
            if (!foodExpiration) {null_fields_str += `"foodExpiration" `; null_fields_count += 1;}
            
            if(null_fields_count == 1){
                // Log validation error
                logger.log({ level: "warn", log_type: "validation_error", verb: req.method, route: "/api/foods/", message: `${null_fields_str}field cannot be null.` });
                res.status(500).json({
                    message: `${null_fields_str}field cannot be null.`,
                    data: {},
                });
            }
            else {
                // Log validation error
                logger.log({ level: "warn", log_type: "validation_error", verb: req.method, route: "/api/foods/", message: `${null_fields_str}fields cannot be null.` });
                res.status(500).json({
                    message: `${null_fields_str}fields cannot be null.`,
                    data: {},
                });
            }
        }
        else {
            // Log error
            logger.log({ level: "error", log_type: "error", verb: req.method, error_message: "Something went wrong while fetching foods.", stack_trace: error.stack });
            res.status(500).json({
                message: "Something went wrong while creating a Food.",
                data: {},
            });
        }
    }
}

// Get all the foods in the Food table with GET
export async function getAllFoods(req, res) {
    // Log HTTP request
    logger.log({ level: "info", log_type: "request_info", verb: req.method, route: "/api/foods/", query_parameters: req.query, headers: req.headers });
    logger.log({ level: "debug", log_type: "request_debug", verb: req.method, route: "/api/foods/", body: req.body });
    try {
        const foods = await Food.findAll();
        // Log db query
        logger.log({ level: "debug", log_type: "query", verb: req.method, route: "/api/foods/", query: "SELECT * FROM Foods" });
  
        if (!!foods) {
            res.status(200).json({
            message: "All foods fetched successfully.",
            data: foods,
            });
            // Log method call
            logger.log({ level: "debug", log_type: "method_call", verb: req.method, route: "/api/foods/", method_name: "res.status(200).json()", 
            method_parameters: {message: "All foods fetched successfully.", data: foods}});
        }
    } catch (error) {
        console.log(error);
        // Log error
        logger.log({ level: "error", log_type: "error", verb: req.method, error_message: "Something went wrong while fetching foods.", stack_trace: error.stack });
        res.status(500).json({
            message: "Something went wrong while fetching foods.",
            data: {},
        });
    }
}

//Get a food by id with GET
export async function getFoodById(req, res) {
    try {
        const { id } = req.params;
        const food = await Food.findOne({
            where: {
                id: id,
            },
        });

       // Log db query
      logger.log({ level: "debug", log_type: "query", verb: req.method, route: "/api/foods"+req.path, query: `SELECT * FROM Foods WHERE id = ${req.params["id"]}` });
  
        if (!!food) {
            res.status(200).json({
                message: "Food fetched successfully.",
                data: food,
            });
           // Log method call
           logger.log({ level: "debug", log_type: "method_call", verb: req.method, route: "/api/foods"+req.path, method_name: "res.status(200).json()", 
           method_parameters: {message: "Food fetched successfully.", data: food}});
        }
        else {
            res.status(500).json({
                message: "Could not find a food with that id.",
                data: {},
            });
              // Log validation error
              logger.log({ level: "warn", log_type: "validation_error", verb: req.method, route: "/api/foods"+req.path, message: "Could not find a product with that id." });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Something went wrong while fetching a food.",
            data: {},
        });
         // Log error
         logger.log({ level: "error", log_type: "error", verb: req.method, error_message: "Something went wrong while fetching a food.", stack_trace: error.stack });
    }
}

// Delete a food by id with DELETE
export async function deleteFoodById(req, res) {
   // Log HTTP request
   logger.log({ level: "info", log_type: "request_info", verb: req.method, route: "/api/foods"+req.path, query_parameters: req.query, headers: req.headers });
   logger.log({ level: "debug", log_type: "request_debug", verb: req.method, route: "/api/foods"+req.path, body: req.body });
    try {
        const { id } = req.params;
        const food = await Food.destroy({
            where: {
                id: id,
            },
        });
          // Log db query
          logger.log({ level: "debug", log_type: "query", verb: req.method, route: "/api/foods"+req.path, query: `DELETE FROM Foods WHERE id = ${req.params["id"]}` });
  
        if (!!food) {
            res.status(200).json({
                message: "Food deleted successfully.",
                data: food,
            });
            // Log method call
            logger.log({ level: "debug", log_type: "method_call", verb: req.method, route: "/api/foods"+req.path, method_name: "res.status(200).json()", 
            method_parameters: {message: "Food deleted successfully.", data: food}});
        }
        else {
            res.status(500).json({
                message: "Could not delete a food with that id.",
                data: {},
              });
           // Log validation error
            logger.log({ level: "warn", log_type: "validation_error", verb: req.method, route: "/api/foods"+req.path, message: "Could not delete a food with that id." });
        }
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "Something went wrong while deleting a Food.",
        data: {},
      });
        // Log error
        logger.log({ level: "error", log_type: "error", verb: req.method, error_message: "Something went wrong while deleting a food.", stack_trace: error.stack });
    }
}

// Update a Food by id with PUT
export async function updateAFood(req, res) {
  logger.log({ level: "info", log_type: "request_info", verb: req.method, route: "/api/foods"+req.path, query_parameters: req.query, headers: req.headers });
  logger.log({ level: "debug", log_type: "request_debug", verb: req.method, route: "/api/foods"+req.path, body: req.body });

    const { id } = req.params;
    const { foodName, foodDescription, ingredients,foodPrice,foodExpiration } = req.body;
    try {
        let food = await Food.findOne({
            attributes: ["foodName", "foodDescription", "ingredients", "foodPrice", "foodExpiration"],
            where: {
                id: id,
            },
        });
         // Log db query
         logger.log({ level: "debug", log_type: "query", verb: req.method, route: "/api/foods"+req.path, query: `SELECT * FROM Foods WHERE id = ${req.params["id"]}` });
        if (!!food) {
            await food.update({
                id: id,
                foodName: foodName,
                foodDescription: foodDescription,
                ingredients: ingredients,
                foodPrice: foodPrice,
                foodExpiration: foodExpiration
            });
             // Log db query
             logger.log({ level: "debug", log_type: "query", verb: req.method, route: "/api/foods"+req.path, 
             query: `UPDATE Foods SET (id, foodName, foodDescription, ingredients, foodPrice, foodExpiration) = (${id}, ${foodName}, ${foodDescription}, ${ingredients}, ${foodPrice}, ${foodExpiration}) WHERE id = ${req.params["id"]}` });
 
             // Log method call
             logger.log({ level: "debug", log_type: "method_call", verb: req.method, route: "/api/foods"+req.path, method_name: "res.status(201).json()", 
             method_parameters: {message: "Food updated successfully.", data: food}});
            
            return res.status(201).json({
                message: "Food updated successfully.",
                data: food,
            });
        }
        else {
            res.status(500).json({
                message: "Could not update a food with that id.",
                data: {},
            });
             // Log validation error
             logger.log({ level: "warn", log_type: "validation_error", verb: req.method, route: "/api/foods"+req.path, message: "Could not update a food with that id." });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Something went wrong while updating a food.",
            data: {},
        });
         // Log error
         logger.log({ level: "error", log_type: "error", verb: req.method, error_message: "Something went wrong while updating a food.", stack_trace: error.stack });
    }
  }
