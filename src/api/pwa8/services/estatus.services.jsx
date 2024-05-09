import Estatus from "../models/estatus";
import boom from "@hapi/boom";

// GET ESTATUS LIST
export const getEstatus = async () => {
  let estatusList;
  try {
    estatusList = await Estatus.find();
    return estatusList;
  } catch (error) {
    throw boom.internal(error);
  }
};

// GET ESTATUS BY ID
export const getEstatusById = async (id) => {
  let estatusItem;
  try {
    estatusItem = await Estatus.findOne({
      IdTipoEstatusOK: id,
    });
    return estatusItem;
  } catch (error) {
    throw boom.internal(error);
  }
};

// POST (ADD) ESTATUS
export const postEstatus = async (estatusItem) => {
  try {
    const newEstatusItem = new Estatus(estatusItem);
    return await newEstatusItem.save();
  } catch (error) {
    throw error;
  }
};

// PUT (MODIFY) ESTATUS
export const putEstatusItem = async (id, estatusItem) => {
  try {
    return await Estatus.findOneAndUpdate(
      { IdTipoEstatusOK: id },
      estatusItem,
      {
        new: true,
      }
    );
  } catch (error) {
    throw boom.badImplementation(error);
  }
};

// DELETE ESTATUS BY ID
export const deleteEstatus = async (id) => {
  try {
    const deletedEstatus = await Estatus.findOneAndDelete({
      IdTipoEstatusOK: id,
    });
    if (!deletedEstatus) {
      throw boom.badRequest("No se pudo eliminar el Estatus.");
    }
    return deletedEstatus;
  } catch (error) {
    throw boom.badImplementation(error);
  }
};
