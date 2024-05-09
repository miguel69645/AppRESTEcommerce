import * as EstatusServices from "../services/estatus.services";
import boom from "@hapi/boom";

// GET ESTATUS LIST
export const getEstatusList = async (req, res, next) => {
  try {
    const estatusList = await EstatusServices.getEstatus();
    if (!estatusList) {
      throw boom.notFound("No se encontraron estatus registrados.");
    } else {
      res.status(200).json(estatusList);
    }
  } catch (error) {
    next(error);
  }
};

// GET ESTATUS BY ID
export const getEstatus = async (req, res, next) => {
  try {
    const { id } = req.params;
    const estatusItem = await EstatusServices.getEstatusById(id);
    if (!estatusItem) {
      throw boom.notFound("No se encontró el estatus registrado.");
    } else {
      res.status(200).json(estatusItem);
    }
  } catch (error) {
    next(error);
  }
};

// POST (ADD) ESTATUS
export const postEstatus = async (req, res, next) => {
  try {
    const paEstatusItem = req.body;
    const newEstatusItem = await EstatusServices.postEstatus(paEstatusItem);
    if (!newEstatusItem) {
      throw boom.badRequest("No se pudo crear el estatus.");
    } else {
      res.status(201).json(newEstatusItem);
    }
  } catch (error) {
    next(error);
  }
};

// PUT (MODIFY) ESTATUS
export const putEstatusItem = async (req, res, next) => {
  try {
    const { id } = req.params;
    const paEstatusItem = req.body;
    const updatedEstatusItem = await EstatusServices.putEstatusItem(
      id,
      paEstatusItem
    );
    if (!updatedEstatusItem) {
      throw boom.badRequest("No se pudo actualizar el estatus.");
    } else {
      res.status(200).json(updatedEstatusItem);
    }
  } catch (error) {
    next(error);
  }
};

// DELETE ESTATUS BY ID
export const deleteEstatus = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedEstatusItem = await EstatusServices.deleteEstatus(id);
    if (!deletedEstatusItem) {
      throw boom.badRequest("No se pudo eliminar el estatus.");
    } else {
      res.status(200).json({ message: "Estatus eliminado correctamente." });
    }
  } catch (error) {
    next(error);
  }
};
