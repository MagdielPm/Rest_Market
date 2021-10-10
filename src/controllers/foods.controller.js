import Food from "../models/food";

//Create new Food with POST
export async function createNewFood(req, res) {
  const { foodName, foodDescription, ingredients} = req.body;
  try {
    let newFood = await Employee.create(
      {
        foodName: foodName,
        foodDescription: foodDescription,
        ingredients: ingredients,
      },
      {
        fields: ["foodName", "foodDescription", "ingredients"],
      }
    );

    if (!!newFood) {
      return res.status(201).json({
        message: "Food created successfully",
        data: newFood,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Something went wrong while creating an food",
      data: {},
    });
  }
}

//Get all foods in the Foods table with GET
export async function getAllFoods(req, res) {
  try {
    const foods = await Food.findAll();

    if (!!foods) {
      res.status(200).json({
        message: "All foods fetched successfully",
        data: foods,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Something went wrong while fetching foods",
      data: {},
    });
  }
}

//Get a food by id with GET
export async function getFoodById(req, res) {
  try {
    const { id } = req.params;
    const food = await Food.findOne({
      where: {
        id: id,
      },
    });

    if (!!food) {
      res.status(200).json({
        message: "Food fetched successfully",
        data: food,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Something went wrong while fetching a Food",
      data: {},
    });
  }
}

//Delete an Employee by id with DELETE
export async function deletFoodById(req, res) {
  try {
    const { id } = req.params;
    const food = await Food.destroy({
      where: {
        id: id,
      },
    });

    if (!!food) {
      res.status(200).json({
        message: "Food deleted successfully",
        data: food,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Something went wrong while deleting a Food",
      data: {},
    });
  }
}

//Update an Employee by id with PUT
export async function updateAFood(req, res) {
  const { id } = req.params;
  const { foodName, foodDescription, ingredients} = req.body;
  try {
    let foods = await Food.findAll({
      attributes: ["foodName", "foodDescription", "ingredients"],
      where: {
        id: id,
      },
    });

    if (!!foods) {
      foods.forEach(async (food) => {
        await food.update({
          id: id,
          foodName: foodName,
          foodDescription: foodDescription,
          ingredients: ingredients,
        });
      });
    }

    return res.status(201).json({
      message: "Food updated successfully",
      data: foods,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Something went wrong while updating a Food",
      data: {},
    });
  }
}
