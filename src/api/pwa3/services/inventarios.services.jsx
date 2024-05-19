import Inventarios from "../models/inventarios";
import boom from "@hapi/boom";

// GET INVENTARIOS LIST
export const getInventarios = async () => {
  let inventariosList;
  try {
    inventariosList = await Inventarios.find();
    return inventariosList;
  } catch (error) {
    throw boom.internal(error);
  }
};
// GET INVENTARIO BY ID
export const getInventario = async (id) => {
  let inventarioItem;
  try {
    inventarioItem = await Inventarios.findOne({
      IdInstitutoOK: id,
    });
    return inventarioItem;
  } catch (error) {
    throw boom.internal(error);
  }
};
// POST (ADD) INVENTARIO
export const postInventario = async (paInventarioItem) => {
  try {
    const newInventarioItem = new Inventarios(paInventarioItem);
    return await newInventarioItem.save();
  } catch (error) {
    throw error;
  }
};
// PUT (MODIFY) INVENTARIO
export const putInventarioItem = async (id, paInventarioItem) => {
  try {
    return await Inventarios.findOneAndUpdate(
      { IdInstitutoOK: id },
      paInventarioItem,
      {
        new: true,
      }
    );
  } catch (error) {
    throw boom.badImplementation(error);
  }
};
// DELETE INVENTARIO BY ID
export const deleteInventario = async (id) => {
  try {
    const deletedInventario = await Inventarios.findOneAndDelete({
      IdInstitutoOK: id,
    });
    if (!deletedInventario) {
      throw boom.badRequest("No se pudo eliminar el Inventario.");
    }
    return deletedInventario;
  } catch (error) {
    throw boom.badImplementation(error);
  }
};
// GET INVENTARIO BY PARAMETERS
export const getInventarioByParams = async (
  IdInstitutoOK,
  IdProdServOK,
  IdPresentaOK
) => {
  let inventarioItem;
  try {
    inventarioItem = await Inventarios.findOne({
      IdInstitutoOK: IdInstitutoOK,
      IdProdServOK: IdProdServOK,
      IdPresentaOK: IdPresentaOK,
    });
    return inventarioItem ? inventarioItem.negocios : null;
  } catch (error) {
    throw boom.internal(error);
  }
};
// GET ALMACENES BY PARAMETERS
export const getAlmacenesByParams = async (
  IdInstitutoOK,
  IdProdServOK,
  IdPresentaOK,
  IdNegocioOK
) => {
  let inventarioItem;
  try {
    inventarioItem = await Inventarios.findOne({
      IdInstitutoOK: IdInstitutoOK,
      IdProdServOK: IdProdServOK,
      IdPresentaOK: IdPresentaOK,
    });
    if (inventarioItem) {
      const negocio = inventarioItem.negocios.find(
        (negocio) => negocio.IdNegocioOK === IdNegocioOK
      );
      return negocio ? negocio.almacenes : null;
    }
    return null;
  } catch (error) {
    throw boom.internal(error);
  }
};
// GET ALMACEN BY PARAMETERS
export const getAlmacenByParams = async (
  IdInstitutoOK,
  IdProdServOK,
  IdPresentaOK,
  IdNegocioOK,
  IdAlmacenOK
) => {
  let inventarioItem;
  try {
    inventarioItem = await Inventarios.findOne({
      IdInstitutoOK: IdInstitutoOK,
      IdProdServOK: IdProdServOK,
      IdPresentaOK: IdPresentaOK,
    });
    if (inventarioItem) {
      const negocio = inventarioItem.negocios.find(
        (negocio) => negocio.IdNegocioOK === IdNegocioOK
      );
      if (negocio) {
        const almacen = negocio.almacenes.find(
          (almacen) => almacen.IdAlmacenOK === IdAlmacenOK
        );
        return almacen;
      }
    }
    return null;
  } catch (error) {
    throw boom.internal(error);
  }
};
