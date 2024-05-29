import Listas from "../models/listas";
import boom from "@hapi/boom";

// GET LISTAS LIST
export const getListas = async () => {
  let listasList;
  try {
    listasList = await Listas.find();
    return listasList;
  } catch (error) {
    throw boom.internal(error);
  }
};

// GET LISTA BY ID
export const getLista = async (id) => {
  let listaItem;
  try {
    listaItem = await Listas.findById(id);
    return listaItem;
  } catch (error) {
    throw boom.internal(error);
  }
};

// PUT (MODIFY) LISTA
export const putListaItem = async (id, paListaItem) => {
  try {
    return await Listas.findByIdAndUpdate(id, paListaItem, {
      new: true,
    });
  } catch (error) {
    throw boom.badImplementation(error);
  }
};

// DELETE LISTA BY ID
export const deleteLista = async (id) => {
  try {
    const deletedLista = await Listas.findByIdAndDelete(id);
    if (!deletedLista) {
      throw boom.badRequest("No se pudo eliminar la Lista.");
    }
    return deletedLista;
  } catch (error) {
    throw boom.badImplementation(error);
  }
};
