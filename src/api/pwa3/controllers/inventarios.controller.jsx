import * as InventariosServices from "../services/inventarios.services";
import boom from "@hapi/boom";

// *************************************************************************
//                               CAT_INVENTARIOS
// *************************************************************************

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

// GET ALL STORES
export const getAllStores = async (req, res, next) => {
  try {
    const { id, selectedBusinessId } = req.params;
    const almacenes = await InventariosServices.getAllStores(
      id,
      selectedBusinessId
    );
    if (!almacenes) {
      throw boom.notFound(
        "No se encontraron almacenes para el negocio seleccionado."
      );
    } else {
      res.status(200).json(almacenes);
    }
  } catch (error) {
    next(error);
  }
};

// GET ALL SERIES
export const getAllSeries = async (req, res, next) => {
  try {
    const { id, selectedBusinessId, selectedStoresId } = req.params;
    const series = await InventariosServices.getAllSeries(
      id,
      selectedBusinessId,
      selectedStoresId
    );
    if (!series) {
      throw boom.notFound(
        "No se encontraron series para el almacén seleccionado."
      );
    } else {
      res.status(200).json(series);
    }
  } catch (error) {
    next(error);
  }
};

// GET ALL STATUS
export const getAllStatus = async (req, res, next) => {
  try {
    const { id, selectedBusinessId, selectedStoresId, selectedSeriesId } =
      req.params;
    const status = await InventariosServices.getAllStatus(
      id,
      selectedBusinessId,
      selectedStoresId,
      selectedSeriesId
    );
    if (!status) {
      throw boom.notFound(
        "No se encontraron estados para la serie seleccionada."
      );
    } else {
      res.status(200).json(status);
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

// POST (ADD) NEGOCIO
export const postNegocio = async (req, res, next) => {
  try {
    const { id } = req.params;
    const negocio = req.body;
    const response = await InventariosServices.postNegocio(id, negocio);
    if (!response) {
      throw boom.badRequest("No se pudo agregar el negocio.");
    } else {
      res.status(201).json(response);
    }
  } catch (error) {
    next(error);
  }
};
// POST (ADD) ALMACÉN
export const postAlmacen = async (req, res, next) => {
  try {
    const { id, idNegocioOk } = req.params;
    const almacen = req.body;
    const response = await InventariosServices.postAlmacen(
      id,
      idNegocioOk,
      almacen
    );
    if (!response) {
      throw boom.badRequest("No se pudo agregar el almacén.");
    } else {
      res.status(201).json(response);
    }
  } catch (error) {
    next(error);
  }
};

// POST (ADD) SERIE
export const postSerie = async (req, res, next) => {
  try {
    const { id, idNegocioOk, idAlmacenOk } = req.params;
    const serie = req.body;
    const response = await InventariosServices.postSerie(
      id,
      idNegocioOk,
      idAlmacenOk,
      serie
    );
    if (!response) {
      throw boom.badRequest("No se pudo agregar la serie.");
    } else {
      res.status(201).json(response);
    }
  } catch (error) {
    next(error);
  }
};

// POST (ADD) ESTATUS FÍSICO
export const postEstatusFisico = async (req, res, next) => {
  try {
    const { id, idNegocioOk, idAlmacenOk, serie } = req.params;
    const estatusFisico = req.body;
    const response = await InventariosServices.postEstatusFisico(
      id,
      idNegocioOk,
      idAlmacenOk,
      serie,
      estatusFisico
    );
    if (!response) {
      throw boom.badRequest("No se pudo agregar el estatus físico.");
    } else {
      res.status(201).json(response);
    }
  } catch (error) {
    next(error);
  }
};

// POST (ADD) ESTATUS VENTA
export const postEstatusVenta = async (req, res, next) => {
  try {
    const { id, idNegocioOk, idAlmacenOk, serie } = req.params;
    const estatusVenta = req.body;
    const response = await InventariosServices.postEstatusVenta(
      id,
      idNegocioOk,
      idAlmacenOk,
      serie,
      estatusVenta
    );
    if (!response) {
      throw boom.badRequest("No se pudo agregar el estatus de venta.");
    } else {
      res.status(201).json(response);
    }
  } catch (error) {
    next(error);
  }
};

// POST (ADD) UBICACIÓN
export const postUbicacion = async (req, res, next) => {
  try {
    const { id, idNegocioOk, idAlmacenOk, serie } = req.params;
    const ubicacion = req.body;
    const response = await InventariosServices.postUbicacion(
      id,
      idNegocioOk,
      idAlmacenOk,
      serie,
      ubicacion
    );
    if (!response) {
      throw boom.badRequest("No se pudo agregar la ubicación.");
    } else {
      res.status(201).json(response);
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

// PUT (MODIFY) NEGOCIO
export const putNegocio = async (req, res, next) => {
  try {
    const { id, idNegocioOk } = req.params;
    const negocio = req.body;
    const response = await InventariosServices.putNegocio(
      id,
      idNegocioOk,
      negocio
    );
    if (!response) {
      throw boom.badRequest("No se pudo actualizar el negocio.");
    } else {
      res.status(200).json(response);
    }
  } catch (error) {
    next(error);
  }
};

// PUT (MODIFY) ALMACÉN
export const putAlmacen = async (req, res, next) => {
  try {
    const { id, idNegocioOk, idAlmacenOk } = req.params;
    const almacen = req.body;
    const response = await InventariosServices.putAlmacen(
      id,
      idNegocioOk,
      idAlmacenOk,
      almacen
    );
    if (!response) {
      throw boom.badRequest("No se pudo actualizar el almacén.");
    } else {
      res.status(200).json(response);
    }
  } catch (error) {
    next(error);
  }
};

// PUT (MODIFY) SERIE
export const putSerie = async (req, res, next) => {
  try {
    const { id, idNegocioOk, idAlmacenOk, serieId } = req.params;
    const serie = req.body;
    const response = await InventariosServices.putSerie(
      id,
      idNegocioOk,
      idAlmacenOk,
      serieId,
      serie
    );
    if (!response) {
      throw boom.badRequest("No se pudo actualizar la serie.");
    } else {
      res.status(200).json(response);
    }
  } catch (error) {
    next(error);
  }
};

// PUT (MODIFY) ESTATUS FÍSICO
export const putEstatusFisico = async (req, res, next) => {
  try {
    const { id, idNegocioOk, idAlmacenOk, serie, estatusFisicoId } = req.params;
    const estatusFisico = req.body;
    const response = await InventariosServices.putEstatusFisico(
      id,
      idNegocioOk,
      idAlmacenOk,
      serie,
      estatusFisicoId,
      estatusFisico
    );
    if (!response) {
      throw boom.badRequest("No se pudo actualizar el estatus físico.");
    } else {
      res.status(200).json(response);
    }
  } catch (error) {
    next(error);
  }
};

// PUT (MODIFY) ESTATUS VENTA
export const putEstatusVenta = async (req, res, next) => {
  try {
    const { id, idNegocioOk, idAlmacenOk, serie, estatusVentaId } = req.params;
    const estatusVenta = req.body;
    const response = await InventariosServices.putEstatusVenta(
      id,
      idNegocioOk,
      idAlmacenOk,
      serie,
      estatusVentaId,
      estatusVenta
    );
    if (!response) {
      throw boom.badRequest("No se pudo actualizar el estatus de venta.");
    } else {
      res.status(200).json(response);
    }
  } catch (error) {
    next(error);
  }
};

// PUT (MODIFY) UBICACIÓN
export const putUbicacion = async (req, res, next) => {
  try {
    const { id, idNegocioOk, idAlmacenOk, serie, ubicacionId } = req.params;
    const ubicacion = req.body;
    const response = await InventariosServices.putUbicacion(
      id,
      idNegocioOk,
      idAlmacenOk,
      serie,
      ubicacionId,
      ubicacion
    );
    if (!response) {
      throw boom.badRequest("No se pudo actualizar la ubicación.");
    } else {
      res.status(200).json(response);
    }
  } catch (error) {
    next(error);
  }
};

// DELETE INVENTARIO BY ID
export const deleteInventario = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedInventario = await InventariosServices.deleteInventario(id);
    if (!deletedInventario) {
      throw boom.badRequest("No se pudo eliminar el Inventario.");
    } else {
      res.status(200).json(deletedInventario);
    }
  } catch (error) {
    next(error);
  }
};

// DELETE NEGOCIO BY ID
export const deleteNegocio = async (req, res, next) => {
  try {
    const { id, idNegocioOk } = req.params;
    const response = await InventariosServices.deleteNegocio(id, idNegocioOk);
    if (!response) {
      throw boom.badRequest("No se pudo eliminar el negocio.");
    } else {
      res.status(200).json(response);
    }
  } catch (error) {
    next(error);
  }
};

// DELETE ALMACÉN BY ID
export const deleteAlmacen = async (req, res, next) => {
  try {
    const { id, idNegocioOk, idAlmacenOk } = req.params;
    const response = await InventariosServices.deleteAlmacen(
      id,
      idNegocioOk,
      idAlmacenOk
    );
    if (!response) {
      throw boom.badRequest("No se pudo eliminar el almacén.");
    } else {
      res.status(200).json(response);
    }
  } catch (error) {
    next(error);
  }
};

// DELETE SERIE BY ID
export const deleteSerie = async (req, res, next) => {
  try {
    const { id, idNegocioOk, idAlmacenOk, serieId } = req.params;
    const response = await InventariosServices.deleteSerie(
      id,
      idNegocioOk,
      idAlmacenOk,
      serieId
    );
    if (!response) {
      throw boom.badRequest("No se pudo eliminar la serie.");
    } else {
      res.status(200).json(response);
    }
  } catch (error) {
    next(error);
  }
};

// DELETE ESTATUS FÍSICO BY ID
export const deleteEstatusFisico = async (req, res, next) => {
  try {
    const { id, idNegocioOk, idAlmacenOk, serie, estatusFisicoId } = req.params;
    const response = await InventariosServices.deleteEstatusFisico(
      id,
      idNegocioOk,
      idAlmacenOk,
      serie,
      estatusFisicoId
    );
    if (!response) {
      throw boom.badRequest("No se pudo eliminar el estatus físico.");
    } else {
      res.status(200).json(response);
    }
  } catch (error) {
    next(error);
  }
};

// DELETE ESTATUS VENTA BY ID
export const deleteEstatusVenta = async (req, res, next) => {
  try {
    const { id, idNegocioOk, idAlmacenOk, serie, estatusVentaId } = req.params;
    const response = await InventariosServices.deleteEstatusVenta(
      id,
      idNegocioOk,
      idAlmacenOk,
      serie,
      estatusVentaId
    );
    if (!response) {
      throw boom.badRequest("No se pudo eliminar el estatus de venta.");
    } else {
      res.status(200).json(response);
    }
  } catch (error) {
    next(error);
  }
};

// DELETE UBICACIÓN BY ID
export const deleteUbicacion = async (req, res, next) => {
  try {
    const { id, idNegocioOk, idAlmacenOk, serie, ubicacionId } = req.params;
    const response = await InventariosServices.deleteUbicacion(
      id,
      idNegocioOk,
      idAlmacenOk,
      serie,
      ubicacionId
    );
    if (!response) {
      throw boom.badRequest("No se pudo eliminar la ubicación.");
    } else {
      res.status(200).json(response);
    }
  } catch (error) {
    next(error);
  }
};

// *************************************************************************
//                               CAT_PROD_SERV
// *************************************************************************

// GET ALL PRODSERV
export const getAllProdserv = async (req, res, next) => {
  try {
    const prodservList = await InventariosServices.getAllProdserv();
    if (!prodservList) {
      throw boom.notFound("No se encontraron productos o servicios.");
    } else {
      res.status(200).json(prodservList);
    }
  } catch (error) {
    next(error);
  }
};

// GET PRODUCT PRESENTATIONS
export const getProductPresentations = async (req, res, next) => {
  try {
    const productPresentations =
      await InventariosServices.getProductPresentations();
    if (!productPresentations) {
      throw boom.notFound("No se encontraron presentaciones de productos.");
    } else {
      res.status(200).json(productPresentations);
    }
  } catch (error) {
    next(error);
  }
};

// GET CONCATENATED DESCRIPTION
export const getConcatenatedDescription = async (req, res, next) => {
  try {
    const description = await InventariosServices.getConcatenatedDescription();
    if (!description) {
      throw boom.notFound("No se encontró la descripción concatenada.");
    } else {
      res.status(200).json(description);
    }
  } catch (error) {
    next(error);
  }
};
