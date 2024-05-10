import CatUbicaciones from "../models/ubicaciones";
import boom from "@hapi/boom";

// GET CAT_UBICACIONES LIST
export const getCatUbicaciones = async () => {
  let catUbicacionesList;
  try {
    catUbicacionesList = await CatUbicaciones.find();
    return catUbicacionesList;
  } catch (error) {
    throw boom.internal(error);
  }
};

// GET CAT_UBICACION BY ID
export const getCatUbicacion = async (id) => {
  let catUbicacionItem;
  try {
    catUbicacionItem = await CatUbicaciones.findOne({
      Ubicacion: id,
    });
    return catUbicacionItem;
  } catch (error) {
    throw boom.internal(error);
  }
};

// POST (ADD) CAT_UBICACION
export const postCatUbicacion = async (paCatUbicacionItem) => {
  try {
    const newCatUbicacionItem = new CatUbicaciones(paCatUbicacionItem);
    return await newCatUbicacionItem.save();
  } catch (error) {
    throw error;
  }
};

// PUT (MODIFY) CAT_UBICACION
export const putCatUbicacionItem = async (id, paCatUbicacionItem) => {
  try {
    return await CatUbicaciones.findOneAndUpdate(
      { Ubicacion: id },
      paCatUbicacionItem,
      {
        new: true,
      }
    );
  } catch (error) {
    throw boom.badImplementation(error);
  }
};

// DELETE CAT_UBICACION BY ID
export const deleteCatUbicacion = async (id) => {
  try {
    const deletedCatUbicacion = await CatUbicaciones.findOneAndDelete({
      Ubicacion: id,
    });
    if (!deletedCatUbicacion) {
      throw boom.badRequest("No se pudo eliminar la Ubicacion.");
    }
    return deletedCatUbicacion;
  } catch (error) {
    throw boom.badImplementation(error);
  }
};
