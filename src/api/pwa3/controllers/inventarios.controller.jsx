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
// GET NEGOCIOS BY PARAMETERS
export const getNegociosByParams = async (req, res, next) => {
  try {
    const { IdInstitutoOK, IdProdServOK, IdPresentaOK } = req.params;
    const negocio = await InventariosServices.getNegociosByParams(
      IdInstitutoOK,
      IdProdServOK,
      IdPresentaOK
    );
    if (!negocio) {
      throw boom.notFound(
        "No se encontró el negocio con los parámetros dados."
      );
    } else {
      res.status(200).json({ IdNegocioOK: negocio });
    }
  } catch (error) {
    next(error);
  }
};
// POST NEGOCIO
export const postNegocioController = async (req, res, next) => {
  const { IdInstitutoOK, IdProdServOK, IdPresentaOK } = req.params;
  const negocioData = req.body;
  try {
    const newNegocio = await InventariosServices.postNegocio(
      IdInstitutoOK,
      IdProdServOK,
      IdPresentaOK,
      negocioData
    );
    if (!newNegocio) {
      throw boom.notFound(
        "No se pudo crear el negocio con los datos proporcionados."
      );
    } else {
      res.status(201).json(newNegocio);
    }
  } catch (error) {
    next(error);
  }
};

// PUT NEGOCIO BY PARAMETERS
export const putNegocioByParamsController = async (req, res, next) => {
  const { IdInstitutoOK, IdProdServOK, IdPresentaOK, IdNegocioOK } = req.params;
  const negocioData = req.body;
  try {
    const updatedNegocio = await InventariosServices.putNegocioByParams(
      IdInstitutoOK,
      IdProdServOK,
      IdPresentaOK,
      IdNegocioOK,
      negocioData
    );
    if (!updatedNegocio) {
      throw boom.notFound(
        "No se pudo actualizar el negocio con los datos proporcionados."
      );
    } else {
      res.status(200).json(updatedNegocio);
    }
  } catch (error) {
    next(error);
  }
};

// DELETE NEGOCIO BY PARAMETERS
export const deleteNegocioByParamsController = async (req, res, next) => {
  const { IdInstitutoOK, IdProdServOK, IdPresentaOK, IdNegocioOK } = req.params;
  try {
    const message = await InventariosServices.deleteNegocioByParams(
      IdInstitutoOK,
      IdProdServOK,
      IdPresentaOK,
      IdNegocioOK
    );
    if (!message) {
      throw boom.notFound(
        "No se pudo eliminar el negocio con los datos proporcionados."
      );
    } else {
      res.status(200).json(message);
    }
  } catch (error) {
    next(error);
  }
};

// GET ALMACENES BY PARAMETERS
export const getAlmacenesByParams = async (req, res, next) => {
  try {
    const { IdInstitutoOK, IdProdServOK, IdPresentaOK, IdNegocioOK } =
      req.params;
    const almacenes = await InventariosServices.getAlmacenesByParams(
      IdInstitutoOK,
      IdProdServOK,
      IdPresentaOK,
      IdNegocioOK
    );
    if (!almacenes) {
      throw boom.notFound(
        "No se encontraron almacenes con los parámetros dados."
      );
    } else {
      res.status(200).json(almacenes);
    }
  } catch (error) {
    next(error);
  }
};
// GET ALMACEN BY PARAMETERS
export const getAlmacenByParams = async (req, res, next) => {
  try {
    const {
      IdInstitutoOK,
      IdProdServOK,
      IdPresentaOK,
      IdNegocioOK,
      IdAlmacenOK,
    } = req.params;
    const almacen = await InventariosServices.getAlmacenByParams(
      IdInstitutoOK,
      IdProdServOK,
      IdPresentaOK,
      IdNegocioOK,
      IdAlmacenOK
    );
    if (!almacen) {
      throw boom.notFound(
        "No se encontró el almacén con los parámetros dados."
      );
    } else {
      res.status(200).json(almacen);
    }
  } catch (error) {
    next(error);
  }
};
