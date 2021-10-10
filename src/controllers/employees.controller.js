import Employee from "../models/employee";

//Create new Employee with POST
export async function createNewEmployee(req, res) {
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

    if (!!newEmployee) {
      return res.status(201).json({
        message: "Employee created successfully",
        data: newEmployee,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Something went wrong while creating an employee",
      data: {},
    });
  }
}

//Get all the employees in the Employees table with GET
export async function getAllEmployees(req, res) {
  try {
    const employees = await Employee.findAll();

    if (!!employees) {
      res.status(200).json({
        message: "All employees fetched successfully",
        data: employees,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Something went wrong while fetching employees",
      data: {},
    });
  }
}

//Get an employee by id with GET
export async function getEmployeeById(req, res) {
  try {
    const { id } = req.params;
    const employee = await Employee.findOne({
      where: {
        id: id,
      },
    });

    if (!!employee) {
      res.status(200).json({
        message: "Employee fetched successfully",
        data: employee,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Something went wrong while fetching an employee",
      data: {},
    });
  }
}

//Delete an Employee by id with DELETE
export async function deleteEmployeeById(req, res) {
  try {
    const { id } = req.params;
    const employee = await Employee.destroy({
      where: {
        id: id,
      },
    });

    if (!!employee) {
      res.status(200).json({
        message: "Employee deleted successfully",
        data: employee,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Something went wrong while deleting an employee",
      data: {},
    });
  }
}

//Update an Employee by id with PUT
export async function updateAnEmployee(req, res) {
  const { id } = req.params;
  const { fullName, numberPhone, email, job, state, city } = req.body;
  try {
    let employees = await Employee.findAll({
      attributes: ["fullName", "numberPhone", "email", "job", "state", "city"],
      where: {
        id: id,
      },
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
    }

    return res.status(201).json({
      message: "Employee updated successfully",
      data: employees,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Something went wrong while updating an employee",
      data: {},
    });
  }
}
