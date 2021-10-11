import supertest from "supertest";
import app from "../../__mocks__/app.mock";

// Function mock controller -> getAllCustomers
describe("Get all the customers with GET controller", () => {
  it("Should response all the mock elements", async () => {
    const response = await supertest(app).get("/api/customers");
    expect(response.body).toEqual({
      data: [
        {
          id: 1,
          fullName: "Jhonatan Serrano",
          numberPhone: "9995748888",
          email: "jhonatan@hotmail.com",
          state: "Cancún",
          city: "Quintana Roo",
        },
        {
          id: 2,
          fullName: "Juan Carlos Pérez",
          numberPhone: "9283547894",
          email: "juanca@hotmail.com",
          state: "Tulum",
          city: "Quintana Roo",
        },
      ],
    });
  });
});

// Function mock controller -> createNewCustomer
describe("Create a customer with POST controller", () => {
  it("Should return the new customer", async () => {
    const response = await supertest(app).post("/api/customers");
    expect(response.body).toEqual({
      data: {
        id: 1,
        fullName: "Moisés Vinajera",
        numberPhone: "9996541237",
        email: "moi@hotmail.com",
        state: "Yucatán",
        city: "Mérida",
      },
    });
  });
});

// Function mock controller -> getCustomerById
describe("Get a customer by id with GET BY ID controller", () => {
  it("Should response the customer", async () => {
    const response = await supertest(app).get("/api/customers/2");
    expect(response.body).toEqual({
      data: {
        id: "2",
        fullName: "Jhonatan Serrano",
        numberPhone: "9995748888",
        email: "jhonatan@hotmail.com",
        state: "Quintana Roo",
        city: "Cancún",
      },
    });
  });
});

// Function mock controller -> deleteCustomerById
describe("Delete a customer with DELETE controller", () => {
  it("Should response the long of the delete", async () => {
    const response = await supertest(app).delete("/api/customers/1");
    expect(response.body).toEqual({ data: "1" });
  });
});

// Function mock controller -> updateACustomer
describe("Update an customer with PUT controller", () => {
  it("Should response the new customer", async () => {
    const response = await supertest(app).put("/api/customers/2");
    expect(response.body).toEqual({
      data: {
        id: 3,
        fullName: "Naila Rubí",
        numberPhone: "1234567890",
        email: "naila@hotmail.com",
        state: "Yucatan",
        city: "Valladolid",
      },
    });
  });
});
