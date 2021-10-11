import MockDBConnection from "../mock/mock_db";

const Food= MockDBConnection.define("Foods", [
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

export default Food;
