//Create new Mock Food with POST
export async function createNewFood(req, res) {
    const newFood = {
      id: 1,
      foodName: "Tacos de Canasta",
      foodDescription: "Tortillas rellenas de guisos populares, bañadas en aceite o manteca derretida",
      ingredients: "Tortilla, papa,chicharrón, aceite",
      foodPrice: "$10",
      foodExpiration: "11/10/2021",
    };
    return res.status(201).json({ data: newFood });
  }
  
  //Get all the Mock foods in the Foods table with GET
  export async function getAllFoods(req, res) {
    const allFoods = [
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
    ];
    return res.status(200).json({
      data: allFoods,
    });
  }
  
  //Get an Mock food by id with GET
  export async function getFoodById(req, res) {
    const id = req.params.id;
    const foodById = {
        id: 2,
        foodName: "Tacos de Cochinita",
        foodDescription: "Tortilla rellena de cerdo guisado yucateco",
        ingredients: "Tortilla, cerdo, recado, naranja",
        foodPrice: "$20",
        foodExpiration: "11/10/2021",
    };
    return res.status(200).json({ data: foodById });
  }
  
  //Delete an Mock Food by id with DELETE
  export async function deleteFoodById(req, res) {
    const id = req.params.id;
    return res.status(200).json({ data: id });
  }
  
  //Update an Food by id with PUT
  export async function updateAFood(req, res) {
    const updateFood = {
        id: 3,
        foodName: "Empanada",
        foodDescription: "Masa en forma de media luna rellena de carne molida",
        ingredients: "Masa, carne molida, pasas, tomate",
        foodPrice: "$15",
        foodExpiration: "11/10/2021",
    };
    return res.status(201).json({ data: updateFood });
  }
  