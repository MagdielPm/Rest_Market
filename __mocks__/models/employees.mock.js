import MockDBConnection from "../mock/mock_db";

const Employee = MockDBConnection.define("Employees", [
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
]);

export default Employee;
