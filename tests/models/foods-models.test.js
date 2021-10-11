import FoodMock from "../../__mocks__/models/foods.mock";

//Model Testing
// findAll method for Get http request
describe("Test sequelize mocking model findAll function", () => {
  it("Should get all values in the mock db", async () => {
    const foods = await FoodMock.findAll();
    const allFoods = [];
    allFoods.push(foods[0].dataValues["0"]);
    allFoods.push(foods[0].dataValues["1"]);
    expect(allFoods).toEqual([
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
    ]);
  });
});

// destroy method for Deleted by Id http request
describe("Test sequelize mocking model destroy function", () => {
  it("Should delete the element in the mock db", async () => {
    const food = await FoodMock.destroy({
      where: {
        id: 1,
      },
    });

    expect(food).toBe(1);
  });
});

// destroy method for Get by Id http request
describe("Test sequelize mocking model findOne function", () => {
  it("Should return the element by id from the mock db", async () => {
    const food = await FoodMock.findOne({
      where: {
        id: 1,
      },
    });
    expect(food.dataValues["0"]).toEqual({
        id: 1,
        foodName: "Tacos de Canasta",
        foodDescription: "Tortillas rellenas de guisos populares, bañadas en aceite o manteca derretida",
        ingredients: "Tortilla, papa,chicharrón, aceite",
        foodPrice: "$10",
        foodExpiration: "11/10/2021",
    });
  });
});

// update method for post http request
describe("Test sequelize mocking model update function", () => {
  it("Should return [1]", async () => {
    const food = await FoodMock.update([
      {
        foodName: "Queso Relleno",
        foodDescription: "Plato tradicional hecho con queso de bola y relleno de carne molida",
        ingredients: "Queso de bola, carne molida, col, tomate",
        foodPrice: "$150",
        foodExpiration: "11/10/2021",
      },
    ]);
    expect(food).toEqual([1]);
  });
});

// create method for  put http request
describe("Test sequelize mocking model create function", () => {
  it("Should return the new user", async () => {
    const food = await FoodMock.create([
      {
        id: 3,
        foodName: "Queso Relleno",
        foodDescription: "Plato tradicional hecho con queso de bola y relleno de carne molida",
        ingredients: "Queso de bola, carne molida, col, tomate",
        foodPrice: "$150",
        foodExpiration: "11/10/2021",
      },
    ]);
    expect(food.dataValues["0"]).toEqual({
        id: 3,
        foodName: "Queso Relleno",
        foodDescription: "Plato tradicional hecho con queso de bola y relleno de carne molida",
        ingredients: "Queso de bola, carne molida, col, tomate",
        foodPrice: "$150",
        foodExpiration: "11/10/2021",
    });
  });
});
