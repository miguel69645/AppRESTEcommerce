//Education
import Condiciones from "../models/Institutos";
import boom from "@hapi/boom";

// FIC: GET INSTITUTOS LIST
export const getCondiciones = async () => {
  let condicionesList;
  try {
    condicionesList = await Condiciones.find();
    return condicionesList;
  } catch (error) {
    throw boom.internal(error);
  }
};

// FIC: GET INSTITUTO BY ID
export const getInstituto = async (id, keyType) => {
  let institutoItem;

  try {
    if (keyType === "OK") {
      institutoItem = await Institutos.findOne({
        IdInstitutoOK: id,
      });
    } else if (keyType === "BK") {
      institutoItem = await Institutos.findOne({
        IdInstitutoBK: id,
      });
    }
    return institutoItem;
  } catch (error) {
    throw boom.internal(error);
  }
};

//Education
// FIC: POST (ADD) Instituto.
export const postInstituto = async (paInstitutoItem) => {
  try {
    const newInstitutoItem = new Institutos(paInstitutoItem);
    return await newInstitutoItem.save();
  } catch (error) {
    throw error;
  }
};

//FIC: SERVICES PUT
// PUT (MODIFY) INSTITUTOS
export const putInstitutoItem = async (id, paInstitutoItem) => {
  try {
    //console.log("FIC: PUT API INSTITUTO", id);
    return await Institutos.findOneAndUpdate(
      { IdInstitutoOK: id },
      paInstitutoItem,
      {
        new: true,
      }
    );
  } catch (error) {
    throw boom.badImplementation(error);
  }
};

// FIC: DELETE INSTITUTO BY ID
export const deleteInstituto = async (id) => {
  try {
    const deletedInstituto = await Institutos.findOneAndDelete({
      IdInstitutoOK: id,
    });
    if (!deletedInstituto) {
      throw boom.badRequest("No se pudo eliminar el Instituto.");
    }
    return deletedInstituto;
  } catch (error) {
    throw boom.badImplementation(error);
  }
};