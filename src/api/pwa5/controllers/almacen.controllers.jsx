import * as AlmacenesServices from "../services/almacen.services";
import boom from "@hapi/boom";

// GET ALMACENES LIST
export const getAlmacenesList = async (req, res, next) => {
  try {
    const almacenesList = await AlmacenesServices.getAlmacenes();
    if (!almacenesList) {
      throw boom.notFound("No se encontraron almacenes registrados.");
    } else {
      res.status(200).json(almacenesList);
    }
  } catch (error) {
    next(error);
  }
};

// GET ALMACEN BY ID
export const getAlmacen = async (req, res, next) => {
  try {
    const { id } = req.params;
    const almacenItem = await AlmacenesServices.getAlmacen(id);
    if (!almacenItem) {
      throw boom.notFound("No se encontró el almacen registrado.");
    } else {
      res.status(200).json(almacenItem);
    }
  } catch (error) {
    next(error);
  }
};

// POST (ADD) ALMACEN
export const postAlmacen = async (req, res, next) => {
  try {
    const paAlmacenItem = req.body;
    const newAlmacenItem = await AlmacenesServices.postAlmacen(paAlmacenItem);
    if (!newAlmacenItem) {
      throw boom.badRequest("No se pudo crear el almacen.");
    } else {
      res.status(201).json(newAlmacenItem);
    }
  } catch (error) {
    next(error);
  }
};

// PUT (MODIFY) ALMACEN
export const putAlmacenItem = async (req, res, next) => {
  try {
    const { id } = req.params;
    const paAlmacenItem = req.body;
    const updatedAlmacenItem = await AlmacenesServices.putAlmacenItem(
      id,
      paAlmacenItem
    );
    if (!updatedAlmacenItem) {
      throw boom.badRequest("No se pudo actualizar el almacen.");
    } else {
      res.status(200).json(updatedAlmacenItem);
    }
  } catch (error) {
    next(error);
  }
};

// DELETE ALMACEN BY ID
export const deleteAlmacen = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedAlmacenItem = await AlmacenesServices.deleteAlmacen(id);
    if (!deletedAlmacenItem) {
      throw boom.badRequest("No se pudo eliminar el almacen.");
    } else {
      res.status(200).json({ message: "Almacen eliminado correctamente." });
    }
  } catch (error) {
    next(error);
  }
};
