import CustomerMock from "../../__mocks__/models/customers.mock";

//Model Testing
// findAll method for Get http request
describe("Test sequelize mocking model findAll function", () => {
  it("Should get all values in the mock db", async () => {
    const customers = await CustomerMock.findAll();
    const allCustomers = [];
    allCustomers.push(customers[0].dataValues["0"]);
    allCustomers.push(customers[0].dataValues["1"]);
    expect(allCustomers).toEqual([
      {
        id: 1,
        fullName: "Rocio Wabi",
        numberPhone: "9995546123",
        email: "rocio@hotmail.com",
        state: "Monterrey",
        city: "Nuevo León",
      },
      {
        id: 2,
        fullName: "Eduardo Rubí",
        numberPhone: "9281234567",
        email: "lalo@hotmail.com",
        state: "Cancún",
        city: "Quintana Roo",
      },
    ]);
  });
});

// destroy method for Deleted by Id http request
describe("Test sequelize mocking model destroy function", () => {
  it("Should delete the element in the mock db", async () => {
    const customer = await CustomerMock.destroy({
      where: {
        id: 1,
      },
    });

    expect(customer).toBe(1);
  });
});

// destroy method for Get by Id http request
describe("Test sequelize mocking model findOne function", () => {
  it("Should return the element by id from the mock db", async () => {
    const customer = await CustomerMock.findOne({
      where: {
        id: 1,
      },
    });
    expect(customer.dataValues["0"]).toEqual({
      id: 1,
      fullName: "Rocio Wabi",
      numberPhone: "9995546123",
      email: "rocio@hotmail.com",
      state: "Monterrey",
      city: "Nuevo León",
    });
  });
});

// update method for post http request
describe("Test sequelize mocking model update function", () => {
  it("Should return [1]", async () => {
    const customer = await CustomerMock.update([
      {
        fullName: "Naila Rubí",
        numberPhone: "1234567890",
        email: "naila@hotmail.com",
        state: "Chemax",
        city: "Yucatán",
      },
    ]);
    expect(customer).toEqual([1]);
  });
});

// create method for  put http request
describe("Test sequelize mocking model create function", () => {
  it("Should return the new user", async () => {
    const customer = await CustomerMock.create([
      {
        id: 3,
        fullName: "Naila Rubí",
        numberPhone: "1234567890",
        email: "naila@hotmail.com",
        state: "Chemax",
        city: "Yucatán",
      },
    ]);
    expect(customer.dataValues["0"]).toEqual({
      id: 3,
      fullName: "Naila Rubí",
      numberPhone: "1234567890",
      email: "naila@hotmail.com",
      state: "Chemax",
      city: "Yucatán",
    });
  });
});
