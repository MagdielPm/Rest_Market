import Employee from "../models/employee";

//Create new Employee with POST
export async function createNewEmployee(req, res) {
  logger.log({
    level: "info",
    log_type: "request_info",
    verb: req.method,
    route: "/api/employees/",
    query_parameters: req.query,
    headers: req.headers,
  });
  logger.log({
    level: "debug",
    log_type: "request_debug",
    verb: req.method,
    route: "/api/employees/",
    body: req.body,
  });
  const { fullName, numberPhone, email, job, state, city } = req.body;
  try {
    let newEmployee = await Employee.create(
      {
        fullName: fullName,
        numberPhone: numberPhone,
        email: email,
        job: job,
        state: state,
        city: city,
      },
      {
        fields: ["fullName", "numberPhone", "email", "job", "state", "city"],
      }
    );

    logger.log({
      level: "debug",
      log_type: "query",
      verb: req.method,
      route: "/api/employees/",
      query: `INSERT INTO Employees (fullName, numberPhone, job, state, city) VALUES (${fullName}, ${numberPhone}, ${email}, ${job}, ${state}, ${city})`,
    });

    if (!!newEmployee) {
      logger.log({
        level: "debug",
        log_type: "method_call",
        verb: req.method,
        route: "/api/employees/",
        method_name: "res.status(201).json()",
        method_parameters: {
          message: "Employee created successfully.",
          data: newEmployee,
        },
      });
      return res.status(201).json({
        message: "Employee created successfully",
        data: newEmployee,
      });
    }
  } catch (error) {
    console.log(error);
    logger.log({
      level: "error",
      log_type: "error",
      verb: req.method,
      error_message: "Something went wrong while creating an employee",
      stack_trace: error.stack,
    });
    res.status(500).json({
      message: "Something went wrong while creating an employee",
      data: {},
    });
  }
}

//Get all the employees in the Employees table with GET
export async function getAllEmployees(req, res) {
  logger.log({
    level: "info",
    log_type: "request_info",
    verb: req.method,
    route: "/api/employees/",
    query_parameters: req.query,
    headers: req.headers,
  });
  logger.log({
    level: "debug",
    log_type: "request_debug",
    verb: req.method,
    route: "/api/employees/",
    body: req.body,
  });
  try {
    const employees = await Employee.findAll();
    logger.log({
      level: "debug",
      log_type: "query",
      verb: req.method,
      route: "/api/products/",
      query: "SELECT * FROM Employees",
    });

    if (!!employees) {
      res.status(200).json({
        message: "All employees fetched successfully",
        data: employees,
      });
      logger.log({
        level: "debug",
        log_type: "method_call",
        verb: req.method,
        route: "/api/employees/",
        method_name: "res.status(200).json()",
        method_parameters: {
          message: "All employees fetched successfully.",
          data: employees,
        },
      });
    }
  } catch (error) {
    console.log(error);
    logger.log({
      level: "error",
      log_type: "error",
      verb: req.method,
      error_message: "Something went wrong while fetching employees.",
      stack_trace: error.stack,
    });
    res.status(500).json({
      message: "Something went wrong while fetching employees",
      data: {},
    });
  }
}

//Get an employee by id with GET
export async function getEmployeeById(req, res) {
  logger.log({
    level: "info",
    log_type: "request_info",
    verb: req.method,
    route: "/api/employees" + req.path,
    query_parameters: req.query,
    headers: req.headers,
  });
  logger.log({
    level: "debug",
    log_type: "request_debug",
    verb: req.method,
    route: "/api/employees" + req.path,
    body: req.body,
  });
  try {
    const { id } = req.params;
    const employee = await Employee.findOne({
      where: {
        id: id,
      },
    });

    logger.log({
      level: "debug",
      log_type: "query",
      verb: req.method,
      route: "/api/employees" + req.path,
      query: `SELECT * FROM Employees WHERE id = ${req.params["id"]}`,
    });

    if (!!employee) {
      res.status(200).json({
        message: "Employee fetched successfully",
        data: employee,
      });

      logger.log({
        level: "debug",
        log_type: "method_call",
        verb: req.method,
        route: "/api/employees" + req.path,
        method_name: "res.status(200).json()",
        method_parameters: {
          message: "Employee fetched successfully.",
          data: employee,
        },
      });
    }
  } catch (error) {
    console.log(error);
    logger.log({
      level: "error",
      log_type: "error",
      verb: req.method,
      error_message: "Something went wrong while fetching a employee.",
      stack_trace: error.stack,
    });
    res.status(500).json({
      message: "Something went wrong while fetching an employee",
      data: {},
    });
  }
}

//Delete an Employee by id with DELETE
export async function deleteEmployeeById(req, res) {
  logger.log({
    level: "info",
    log_type: "request_info",
    verb: req.method,
    route: "/api/employees" + req.path,
    query_parameters: req.query,
    headers: req.headers,
  });
  logger.log({
    level: "debug",
    log_type: "request_debug",
    verb: req.method,
    route: "/api/employees" + req.path,
    body: req.body,
  });
  try {
    const { id } = req.params;
    const employee = await Employee.destroy({
      where: {
        id: id,
      },
    });

    logger.log({
      level: "debug",
      log_type: "query",
      verb: req.method,
      route: "/api/employees" + req.path,
      query: `DELETE FROM Employees WHERE id = ${req.params["id"]}`,
    });

    if (!!employee) {
      res.status(200).json({
        message: "Employee deleted successfully",
        data: employee,
      });
      logger.log({
        level: "debug",
        log_type: "method_call",
        verb: req.method,
        route: "/api/employees" + req.path,
        method_name: "res.status(200).json()",
        method_parameters: {
          message: "Employee deleted successfully.",
          data: employee,
        },
      });
    }
  } catch (error) {
    console.log(error);
    logger.log({
      level: "error",
      log_type: "error",
      verb: req.method,
      error_message: "Something went wrong while deleting a employee.",
      stack_trace: error.stack,
    });
    res.status(500).json({
      message: "Something went wrong while deleting an employee",
      data: {},
    });
  }
}

//Update an Employee by id with PUT
export async function updateAnEmployee(req, res) {
  logger.log({
    level: "info",
    log_type: "request_info",
    verb: req.method,
    route: "/api/employees" + req.path,
    query_parameters: req.query,
    headers: req.headers,
  });
  logger.log({
    level: "debug",
    log_type: "request_debug",
    verb: req.method,
    route: "/api/employees" + req.path,
    body: req.body,
  });
  const { id } = req.params;
  const { fullName, numberPhone, email, job, state, city } = req.body;
  try {
    let employees = await Employee.findAll({
      attributes: ["fullName", "numberPhone", "email", "job", "state", "city"],
      where: {
        id: id,
      },
    });
    logger.log({
      level: "debug",
      log_type: "query",
      verb: req.method,
      route: "/api/employees" + req.path,
      query: `SELECT * FROM Employees WHERE id = ${req.params["id"]}`,
    });

    if (!!employees) {
      employees.forEach(async (employee) => {
        await employee.update({
          id: id,
          fullName: fullName,
          numberPhone: numberPhone,
          email: email,
          job: job,
          state: state,
          city: city,
        });
      });
      logger.log({
        level: "debug",
        log_type: "query",
        verb: req.method,
        route: "/api/employees" + req.path,
        query: `UPDATE Employees SET (id, fullName, numberPhone, email, job, state, city) = (${id}, ${fullName}, ${numberPhone}, ${email}, ${job}, ${state}, ${city}) WHERE id = ${req.params["id"]}`,
      });
    }

    logger.log({
      level: "debug",
      log_type: "method_call",
      verb: req.method,
      route: "/api/employees" + req.path,
      method_name: "res.status(201).json()",
      method_parameters: {
        message: "Employee updated successfully.",
        data: employees,
      },
    });

    return res.status(201).json({
      message: "Employee updated successfully",
      data: employees,
    });
  } catch (error) {
    console.log(error);
    logger.log({
      level: "error",
      log_type: "error",
      verb: req.method,
      error_message: "Something went wrong while updating a employee.",
      stack_trace: error.stack,
    });
    res.status(500).json({
      message: "Something went wrong while updating an employee",
      data: {},
    });
  }
}
