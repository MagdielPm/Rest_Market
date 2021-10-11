import supertest from "supertest";
import app from "../../__mocks__/app.mock";

// Function mock controller -> getAllFoods
describe("Get all foods with GET controller", () => {
  it("Should response all the mock elements", async () => {
    const response = await supertest(app).get("/api/foods");
    expect(response.body).toEqual({
      data: [
        {
            id: 1,
            foodName: "Tacos de Canasta",
            foodDescription: "Tortillas rellenas de guisos populares, bañadas en aceite o manteca derretida",
            ingredients: "Tortilla, papa,chicharrón, aceite",
            foodPrice: "$10",
            foodExpiration: "11/10/2021",
          },
          {
            id: 2,
            foodName: "Tacos de Cochinita",
            foodDescription: "Tortilla rellena de cerdo guisado yucateco",
            ingredients: "Tortilla, cerdo, recado, naranja",
            foodPrice: "$20",
            foodExpiration: "11/10/2021",
          },
      ],
    });
  });
});

// Function mock controller -> createNewFood
describe("Create an Food with POST controller", () => {
  it("Should return the new food", async () => {
    const response = await supertest(app).post("/api/foods");
    expect(response.body).toEqual({
      data: {
        id: 1,
        foodName: "Tacos de Canasta",
        foodDescription: "Tortillas rellenas de guisos populares, bañadas en aceite o manteca derretida",
        ingredients: "Tortilla, papa,chicharrón, aceite",
        foodPrice: "$10",
        foodExpiration: "11/10/2021",
      },
    });
  });
});

// Function mock controller -> getFoodById
describe("Get an food by id with GET BY ID controller", () => {
  it("Should response the food", async () => {
    const response = await supertest(app).get("/api/foods/2");
    expect(response.body).toEqual({
      data: {
        id: 2,
        foodName: "Tacos de Cochinita",
        foodDescription: "Tortilla rellena de cerdo guisado yucateco",
        ingredients: "Tortilla, cerdo, recado, naranja",
        foodPrice: "$20",
        foodExpiration: "11/10/2021",
      },
    });
  });
});

// Function mock controller -> deleteFoodById
describe("Delete a food with DELETE controller", () => {
  it("Should response the long of the delete", async () => {
    const response = await supertest(app).delete("/api/foods/1");
    expect(response.body).toEqual({ data: "1" });
  });
});

// Function mock controller -> updateAFood
describe("Update an food with PUT controller", () => {
  it("Should response the new food", async () => {
    const response = await supertest(app).put("/api/foods/2");
    expect(response.body).toEqual({
      data: {
        id: 3,
        foodName: "Empanada",
        foodDescription: "Masa en forma de media luna rellena de carne molida",
        ingredients: "Masa, carne molida, pasas, tomate",
        foodPrice: "$15",
        foodExpiration: "11/10/2021",
      },
    });
  });
});
