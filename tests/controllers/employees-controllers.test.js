import supertest from "supertest";
import app from "../../__mocks__/app.mock";

// Function mock controller -> getAllEmployees
describe("Get all the employees with GET controller", () => {
  it("Should response all the mock elements", async () => {
    const response = await supertest(app).get("/api/employees");
    expect(response.body).toEqual({
      data: [
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
      ],
    });
  });
});

// Function mock controller -> createNewEmployee
describe("Create an employe with POST controller", () => {
  it("Should return the new employee", async () => {
    const response = await supertest(app).post("/api/employees");
    expect(response.body).toEqual({
      data: {
        id: 1,
        fullName: "Manuel Pancracio",
        numberPhone: "9995748922",
        email: "manuel@hotmail.com",
        job: "Taquero",
        state: "New Mexico",
        city: "Albuquerque",
      },
    });
  });
});

// Function mock controller -> getEmployeeById
describe("Get an employee by id with GET BY ID controller", () => {
  it("Should response the employee", async () => {
    const response = await supertest(app).get("/api/employees/2");
    expect(response.body).toEqual({
      data: {
        id: "2",
        fullName: "Victor Rodriguez",
        numberPhone: "9283674901",
        email: "Victor@hotmail.com",
        job: "Frontend developer",
        state: "New Mexico",
        city: "Albuquerque",
      },
    });
  });
});

// Function mock controller -> deleteEmployeeById
describe("Delete an employee with DELETE controller", () => {
  it("Should response the long of the delete", async () => {
    const response = await supertest(app).delete("/api/employees/1");
    expect(response.body).toEqual({ data: "1" });
  });
});

// Function mock controller -> updateAnEmployee
describe("Update an employee with PUT controller", () => {
  it("Should response the new employee", async () => {
    const response = await supertest(app).put("/api/employees/2");
    expect(response.body).toEqual({
      data: {
        id: 3,
        fullName: "Manuel Perez",
        numberPhone: "9625674901",
        email: "Manuel@hotmail.com",
        job: "Backend developer",
        state: "New Mexico",
        city: "Albuquerque",
      },
    });
  });
});
