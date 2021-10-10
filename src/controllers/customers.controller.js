import Customer from "../models/customer";

//Create new Customer with POST
export async function createNewCustomer(req, res) {
  const { fullName, numberPhone, email } = req.body;
  try {
    let newCustomer = await Customer.create(
      {
        fullName: fullName,
        numberPhone: numberPhone,
        email: email,
      },
      {
        fields: ["fullName", "numberPhone", "email"],
      }
    );

    if (!!newCustomer) {
      return res.status(201).json({
        message: "Customer created successfully",
        data: newCustomer,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Something went wrong while creating a customer",
      data: {},
    });
  }
}

//Get all the customers in the Customers table with GET
export async function getAllCustomers(req, res) {
  try {
    const customers = await Customer.findAll();

    if (!!customers) {
      res.status(200).json({
        message: "All customers fetched successfully",
        data: customers,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Something went wrong while fetching customers",
      data: {},
    });
  }
}

//Get a customer by id with GET
export async function getCustomerById(req, res) {
  try {
    const { id } = req.params;
    const customer = await Customer.findOne({
      where: {
        id: id,
      },
    });

    if (!!customer) {
      res.status(200).json({
        message: "Customer fetched successfully",
        data: customer,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Something went wrong while fetching a customer",
      data: {},
    });
  }
}

//Delete a Customer by id with DELETE
export async function deleteCustomerById(req, res) {
  try {
    const { id } = req.params;
    const customer = await Customer.destroy({
      where: {
        id: id,
      },
    });

    if (!!customer) {
      res.status(200).json({
        message: "Customer deleted successfully",
        data: customer,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Something went wrong while deleting an customer",
      data: {},
    });
  }
}

//Update an Customer by id with PUT
export async function updateACustomer(req, res) {
  const { id } = req.params;
  const { fullName, numberPhone, email } = req.body;
  try {
    let customers = await customer.findAll({
      attributes: ["fullName", "numberPhone", "email"],
      where: {
        id: id,
      },
    });

    if (!!customers) {
      customers.forEach(async (customer) => {
        await customer.update({
          id: id,
          fullName: fullName,
          numberPhone: numberPhone,
          email: email,
        });
      });
    }

    return res.status(201).json({
      message: "Customer updated successfully",
      data: customers,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Something went wrong while updating a customer",
      data: {},
    });
  }
}
