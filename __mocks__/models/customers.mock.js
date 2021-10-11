import MockDBConnection from "../mock/mock_db";

const Employee = MockDBConnection.define("Customers", [
  {
    id: 1,
    fullName: "Rocio Wabi",
    numberPhone: "9995546123",
    email: "rocio@hotmail.com",
    job: "Taquero",
    state: "Monterrey",
    city: "Nuevo León",
  },
  {
    id: 2,
    fullName: "Eduardo Rubí",
    numberPhone: "9281234567",
    email: "lalo@hotmail.com",
    job: "Frontend developer",
    state: "Cancún",
    city: "Quintana Roo",
  },
]);

export default Employee;
