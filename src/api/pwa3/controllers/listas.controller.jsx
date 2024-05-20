import * as ListasServices from "../services/listas.services";
import boom from "@hapi/boom";

// GET LISTAS LIST
export const getListasList = async (req, res, next) => {
  try {
    const listasList = await ListasServices.getListas();
    if (!listasList) {
      throw boom.notFound("No se encontraron listas registradas.");
    } else {
      res.status(200).json(listasList);
    }
  } catch (error) {
    next(error);
  }
};

// GET LISTA BY ID
export const getLista = async (req, res, next) => {
  try {
    const { id } = req.params;
    const listaItem = await ListasServices.getLista(id);
    if (!listaItem) {
      throw boom.notFound("No se encontró la lista registrada.");
    } else {
      res.status(200).json(listaItem);
    }
  } catch (error) {
    next(error);
  }
};

// POST (ADD) LISTA
export const postLista = async (req, res, next) => {
  try {
    const paListaItem = req.body;
    const newListaItem = await ListasServices.postLista(paListaItem);
    if (!newListaItem) {
      throw boom.badRequest("No se pudo crear la lista.");
    } else {
      res.status(201).json(newListaItem);
    }
  } catch (error) {
    next(error);
  }
};

// PUT (MODIFY) LISTA
export const putListaItem = async (req, res, next) => {
  try {
    const { id } = req.params;
    const paListaItem = req.body;
    const updatedListaItem = await ListasServices.putListaItem(id, paListaItem);
    if (!updatedListaItem) {
      throw boom.badRequest("No se pudo actualizar la lista.");
    } else {
      res.status(200).json(updatedListaItem);
    }
  } catch (error) {
    next(error);
  }
};

// DELETE LISTA BY ID
export const deleteLista = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedListaItem = await ListasServices.deleteLista(id);
    if (!deletedListaItem) {
      throw boom.badRequest("No se pudo eliminar la lista.");
    } else {
      res.status(200).json({ message: "Lista eliminada correctamente." });
    }
  } catch (error) {
    next(error);
  }
};
