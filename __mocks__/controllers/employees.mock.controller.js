//Create new Mock Employee with POST
export async function createNewEmployee(req, res) {
  const newEmployee = {
    id: 1,
    fullName: "Manuel Pancracio",
    numberPhone: "9995748922",
    email: "manuel@hotmail.com",
    job: "Taquero",
    state: "New Mexico",
    city: "Albuquerque",
  };
  return res.status(201).json({ data: newEmployee });
}

//Get all the Mock employees in the Employees table with GET
export async function getAllEmployees(req, res) {
  const allEmployees = [
    {
      id: 1,
      fullName: "Manuel Pancracio",
      numberPhone: "9995748922",
      email: "manuel@hotmail.com",
      job: "Taquero",
      state: "New Mexico",
      city: "Albuquerque",
    },
    {
      id: 2,
      fullName: "Victor Rodriguez",
      numberPhone: "9283674901",
      email: "Victor@hotmail.com",
      job: "Frontend developer",
      state: "New Mexico",
      city: "Albuquerque",
    },
  ];
  return res.status(200).json({
    data: allEmployees,
  });
}

//Get an Mock employee by id with GET
export async function getEmployeeById(req, res) {
  const id = req.params.id;
  const employeeById = {
    id: id,
    fullName: "Victor Rodriguez",
    numberPhone: "9283674901",
    email: "Victor@hotmail.com",
    job: "Frontend developer",
    state: "New Mexico",
    city: "Albuquerque",
  };
  return res.status(200).json({ data: employeeById });
}

//Delete an Mock Employee by id with DELETE
export async function deleteEmployeeById(req, res) {
  const id = req.params.id;
  return res.status(200).json({ data: id });
}

//Update an Employee by id with PUT
export async function updateAnEmployee(req, res) {
  const updateEmployee = {
    id: 3,
    fullName: "Manuel Perez",
    numberPhone: "9625674901",
    email: "Manuel@hotmail.com",
    job: "Backend developer",
    state: "New Mexico",
    city: "Albuquerque",
  };
  return res.status(201).json({ data: updateEmployee });
}
