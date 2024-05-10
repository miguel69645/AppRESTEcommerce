import Almacenes from "../models/almacen";
import boom from "@hapi/boom";

// GET ALMACENES LIST
export const getAlmacenes = async () => {
  let almacenesList;
  try {
    almacenesList = await Almacenes.find();
    return almacenesList;
  } catch (error) {
    throw boom.internal(error);
  }
};

// GET ALMACEN BY ID
export const getAlmacen = async (id) => {
  let almacenItem;
  try {
    almacenItem = await Almacenes.findOne({
      IdAlmacenOK: id,
    });
    return almacenItem;
  } catch (error) {
    throw boom.internal(error);
  }
};

// POST (ADD) ALMACEN
export const postAlmacen = async (paAlmacenItem) => {
  try {
    const newAlmacenItem = new Almacenes(paAlmacenItem);
    return await newAlmacenItem.save();
  } catch (error) {
    throw error;
  }
};

// PUT (MODIFY) ALMACEN
export const putAlmacenItem = async (id, paAlmacenItem) => {
  try {
    return await Almacenes.findOneAndUpdate(
      { IdAlmacenOK: id },
      paAlmacenItem,
      {
        new: true,
      }
    );
  } catch (error) {
    throw boom.badImplementation(error);
  }
};

// DELETE ALMACEN BY ID
export const deleteAlmacen = async (id) => {
  try {
    const deletedAlmacen = await Almacenes.findOneAndDelete({
      IdAlmacenOK: id,
    });
    if (!deletedAlmacen) {
      throw boom.badRequest("No se pudo eliminar el Almacen.");
    }
    return deletedAlmacen;
  } catch (error) {
    throw boom.badImplementation(error);
  }
};
