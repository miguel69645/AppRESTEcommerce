import * as InstitutoServices from "../services/institutos.service";
import boom from "@hapi/boom";

//FIC: API GET
//----------------------------------------
//FIC: Todos los Institutos.
export const getInstitutosList = async (req, res, next) => {
  try {
    const institutosList = await InstitutoServices.getInstitutos();
    if (!institutosList) {
      throw boom.notFound("No se encontraron institutos registrados.");
    } else if (institutosList) {
      res.status(200).json(institutosList);
    }
  } catch (error) {
    next(error);
  }
};

//FIC: Solo un Instituto.
export const getInstituto = async (req, res, next) => {
  try {
    const { id } = req.params;
    const keyType = req.query.keyType || "OK";
    const institutoItem = await InstitutoServices.getInstituto(id, keyType);
    if (!institutoItem) {
      throw boom.notFound("No se encontró el instituto registrado.");
    } else if (institutoItem) {
      res.status(200).json(institutoItem);
    }
  } catch (error) {
    next(error);
  }
};

//FIC: API POST (ADD) Instituto.
export const postInstituto = async (req, res, next) => {
  try {
    const paInstitutoItem = req.body;
    const newInstitutoItem = await InstitutoServices.postInstituto(
      paInstitutoItem
    );
    if (!newInstitutoItem) {
      throw boom.badRequest("No se pudo crear el Instituto.");
    } else if (newInstitutoItem) {
      res.status(201).json(newInstitutoItem);
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const putInstitutoItem = async (req, res, next) => {
  try {
    const { id } = req.params;
    console.log("FIC: controller id -> ", id);
    const paInstitutoItem = req.body;
    console.log("FIC: controller body -> ", paInstitutoItem);
    const updatedInstitutoItem = await InstitutoServices.putInstitutoItem(
      id,
      paInstitutoItem
    );
    if (!updatedInstitutoItem) {
      throw boom.badRequest("No se pudo actualizar el Instituto.");
    } else if (updatedInstitutoItem) {
      res.status(200).json(updatedInstitutoItem);
    }
  } catch (error) {
    next(error);
  }
};

export const deleteInstituto = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedInstitutoItem = await InstitutoServices.deleteInstituto(id);
    if (!deletedInstitutoItem) {
      throw boom.badRequest("No se pudo eliminar el Instituto.");
    } else {
      res.status(200).json({ message: "Instituto eliminado correctamente." });
    }
  } catch (error) {
    next(error);
  }
};
