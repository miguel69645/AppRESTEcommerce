import * as CatUbicacionesServices from "../services/ubicaciones.services";
import boom from "@hapi/boom";

// GET CAT_UBICACIONES LIST
export const getCatUbicacionesList = async (req, res, next) => {
  try {
    const catUbicacionesList = await CatUbicacionesServices.getCatUbicaciones();
    if (!catUbicacionesList) {
      throw boom.notFound("No se encontraron ubicaciones registradas.");
    } else {
      res.status(200).json(catUbicacionesList);
    }
  } catch (error) {
    next(error);
  }
};

// GET CAT_UBICACION BY UBICACION
export const getCatUbicacion = async (req, res, next) => {
  try {
    const { id } = req.params;
    const catUbicacionItem = await CatUbicacionesServices.getCatUbicacion(
      id
    );
    if (!catUbicacionItem) {
      throw boom.notFound("No se encontró la ubicación registrada.");
    } else {
      res.status(200).json(catUbicacionItem);
    }
  } catch (error) {
    next(error);
  }
};

// POST (ADD) CAT_UBICACION
export const postCatUbicacion = async (req, res, next) => {
  try {
    const paCatUbicacionItem = req.body;
    const newCatUbicacionItem = await CatUbicacionesServices.postCatUbicacion(
      paCatUbicacionItem
    );
    if (!newCatUbicacionItem) {
      throw boom.badRequest("No se pudo crear la ubicación.");
    } else {
      res.status(201).json(newCatUbicacionItem);
    }
  } catch (error) {
    next(error);
  }
};

// PUT (MODIFY) CAT_UBICACION
export const putCatUbicacionItem = async (req, res, next) => {
  try {
    const { id } = req.params;
    const paCatUbicacionItem = req.body;
    const updatedCatUbicacionItem =
      await CatUbicacionesServices.putCatUbicacionItem(id, paCatUbicacionItem);
    if (!updatedCatUbicacionItem) {
      throw boom.badRequest("No se pudo actualizar la ubicación.");
    } else {
      res.status(200).json(updatedCatUbicacionItem);
    }
  } catch (error) {
    next(error);
  }
};

// DELETE CAT_UBICACION BY UBICACION
export const deleteCatUbicacion = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedCatUbicacionItem =
      await CatUbicacionesServices.deleteCatUbicacion(id);
    if (!deletedCatUbicacionItem) {
      throw boom.badRequest("No se pudo eliminar la ubicación.");
    } else {
      res.status(200).json({ message: "Ubicación eliminada correctamente." });
    }
  } catch (error) {
    next(error);
  }
};
