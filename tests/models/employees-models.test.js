import EmployeeMock from "../../__mocks__/models/employees.mock";

//Model Testing
// findAll method for Get http request
describe("Test sequelize mocking model findAll function", () => {
  it("Should get all values in the mock db", async () => {
    const employees = await EmployeeMock.findAll();
    const allEmployees = [];
    allEmployees.push(employees[0].dataValues["0"]);
    allEmployees.push(employees[0].dataValues["1"]);
    expect(allEmployees).toEqual([
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
  });
});

// destroy method for Deleted by Id http request
describe("Test sequelize mocking model destroy function", () => {
  it("Should delete the element in the mock db", async () => {
    const employee = await EmployeeMock.destroy({
      where: {
        id: 1,
      },
    });

    expect(employee).toBe(1);
  });
});

// destroy method for Get by Id http request
describe("Test sequelize mocking model findOne function", () => {
  it("Should return the element by id from the mock db", async () => {
    const employee = await EmployeeMock.findOne({
      where: {
        id: 1,
      },
    });
    expect(employee.dataValues["0"]).toEqual({
      id: 1,
      fullName: "Manuel Pancracio",
      numberPhone: "9995748922",
      email: "manuel@hotmail.com",
      job: "Taquero",
      state: "New Mexico",
      city: "Albuquerque",
    });
  });
});

// update method for post http request
describe("Test sequelize mocking model update function", () => {
  it("Should return [1]", async () => {
    const employee = await EmployeeMock.update([
      {
        fullName: "Esdras Panucho ",
        numberPhone: "9987631011",
        email: "panucho@hotmail.com",
        job: "Panuchero",
        state: "New Mexico",
        city: "Albuquerque",
      },
    ]);
    expect(employee).toEqual([1]);
  });
});

// create method for  put http request
describe("Test sequelize mocking model create function", () => {
  it("Should return the new user", async () => {
    const employee = await EmployeeMock.create([
      {
        id: 3,
        fullName: "Esdras Panucho ",
        numberPhone: "9987631011",
        email: "panucho@hotmail.com",
        job: "Panuchero",
        state: "New Mexico",
        city: "Albuquerque",
      },
    ]);
    expect(employee.dataValues["0"]).toEqual({
      id: 3,
      fullName: "Esdras Panucho ",
      numberPhone: "9987631011",
      email: "panucho@hotmail.com",
      job: "Panuchero",
      state: "New Mexico",
      city: "Albuquerque",
    });
  });
});
