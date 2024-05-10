import * as InventariosServices from "../services/inventarios.services";
import boom from "@hapi/boom";

// GET INVENTARIOS LIST
export const getInventariosList = async (req, res, next) => {
  try {
    const inventariosList = await InventariosServices.getInventarios();
    if (!inventariosList) {
      throw boom.notFound("No se encontraron inventarios registrados.");
    } else {
      res.status(200).json(inventariosList);
    }
  } catch (error) {
    next(error);
  }
};

// GET INVENTARIO BY ID
export const getInventario = async (req, res, next) => {
  try {
    const { id } = req.params;
    const inventarioItem = await InventariosServices.getInventario(id);
    if (!inventarioItem) {
      throw boom.notFound("No se encontró el inventario registrado.");
    } else {
      res.status(200).json(inventarioItem);
    }
  } catch (error) {
    next(error);
  }
};

// POST (ADD) INVENTARIO
export const postInventario = async (req, res, next) => {
  try {
    const paInventarioItem = req.body;
    const newInventarioItem = await InventariosServices.postInventario(
      paInventarioItem
    );
    if (!newInventarioItem) {
      throw boom.badRequest("No se pudo crear el inventario.");
    } else {
      res.status(201).json(newInventarioItem);
    }
  } catch (error) {
    next(error);
  }
};

// PUT (MODIFY) INVENTARIO
export const putInventarioItem = async (req, res, next) => {
  try {
    const { id } = req.params;
    const paInventarioItem = req.body;
    const updatedInventarioItem = await InventariosServices.putInventarioItem(
      id,
      paInventarioItem
    );
    if (!updatedInventarioItem) {
      throw boom.badRequest("No se pudo actualizar el inventario.");
    } else {
      res.status(200).json(updatedInventarioItem);
    }
  } catch (error) {
    next(error);
  }
};

// DELETE INVENTARIO BY ID
export const deleteInventario = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedInventarioItem = await InventariosServices.deleteInventario(
      id
    );
    if (!deletedInventarioItem) {
      throw boom.badRequest("No se pudo eliminar el inventario.");
    } else {
      res.status(200).json({ message: "Inventario eliminado correctamente." });
    }
  } catch (error) {
    next(error);
  }
};
