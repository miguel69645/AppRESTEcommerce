import { Inventarios, Prodserv } from "../models/inventarios";
import boom from "@hapi/boom";

// *************************************************************************
//                               CAT_INVENTARIOS
// *************************************************************************

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
    inventarioItem = await Inventarios.findById(id);
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

// GET ALL STORES
export const getAllStores = async (id, selectedBusinessId) => {
  try {
    const inventarioItem = await Inventarios.findById(id);
    if (!inventarioItem) {
      throw boom.notFound("Inventario no encontrado.");
    }

    const selectedBusiness = inventarioItem.negocios.find(
      (negocio) => negocio.IdNegocioOK === selectedBusinessId
    );

    if (!selectedBusiness) {
      throw boom.notFound("Negocio no encontrado.");
    }

    const almacenes = selectedBusiness.almacenes.map((almacen) => ({
      IdAlmacenOK: almacen.IdAlmacenOK,
      Principal: almacen.Principal,
      CantidadActual: almacen.CantidadActual,
      CantidadDisponible: almacen.CantidadDisponible,
      CantidadApartada: almacen.CantidadApartada,
      CantidadTransito: almacen.CantidadTransito,
      CantidadMerma: almacen.CantidadMerma,
      StockMaximo: almacen.StockMaximo,
      StockMinimo: almacen.StockMinimo,
    }));

    return almacenes;
  } catch (error) {
    throw boom.internal(error);
  }
};

// GET ALL SERIES
export const getAllSeries = async (
  id,
  selectedBusinessId,
  selectedStoresId
) => {
  try {
    const inventarioItem = await Inventarios.findById(id);
    if (!inventarioItem) {
      throw boom.notFound("Inventario no encontrado.");
    }

    const selectedBusiness = inventarioItem.negocios.find(
      (negocio) => negocio.IdNegocioOK === selectedBusinessId
    );

    if (!selectedBusiness) {
      throw boom.notFound("Negocio no encontrado.");
    }

    const selectedStore = selectedBusiness.almacenes.find(
      (almacen) => almacen.IdAlmacenOK === selectedStoresId
    );

    if (!selectedStore) {
      throw boom.notFound("Almacén no encontrado.");
    }

    const series = selectedStore.series.map((serie) => ({
      Serie: serie.Serie,
      Placa: serie.Placa,
      Observacion: serie.Observacion,
    }));

    return series;
  } catch (error) {
    throw boom.internal(error);
  }
};

// GET ALL STATUS
export const getAllStatus = async (
  id,
  selectedBusinessId,
  selectedStoresId,
  selectedSeriesId
) => {
  try {
    const inventarioItem = await Inventarios.findById(id);
    if (!inventarioItem) {
      throw boom.notFound("Inventario no encontrado.");
    }

    const selectedBusiness = inventarioItem.negocios.find(
      (negocio) => negocio.IdNegocioOK === selectedBusinessId
    );

    if (!selectedBusiness) {
      throw boom.notFound("Negocio no encontrado.");
    }

    const selectedStore = selectedBusiness.almacenes.find(
      (almacen) => almacen.IdAlmacenOK === selectedStoresId
    );

    if (!selectedStore) {
      throw boom.notFound("Almacén no encontrado.");
    }

    const selectedSeries = selectedStore.series.find(
      (serie) => serie.Serie === selectedSeriesId
    );

    if (!selectedSeries) {
      throw boom.notFound("Serie no encontrada.");
    }

    const status = [
      ...selectedSeries.estatus_venta.map((status) => ({
        IdTipoEstatusOK: status.IdTipoEstatusOK,
        Actual: status.Actual,
      })),
      ...selectedSeries.estatus_fisico.map((status) => ({
        IdTipoEstatusOK: status.IdTipoEstatusOK,
        Actual: status.Actual,
      })),
    ];

    const location = [
      selectedSeries.ubicaciones.map((location) => ({
        IdAlmacenOK: location.IdAlmacenOK,
        Ubicacion: location.Ubicacion,
        Actual: location.Actual,
      })),
    ];

    return { status, location };
  } catch (error) {
    throw boom.internal(error);
  }
};

// *************************************************************************
//                               CAT_PROD_SERV
// *************************************************************************

// GET ALL PRODSERV
export const getAllProdserv = async () => {
  try {
    const prodservList = await Prodserv.find();
    return prodservList;
  } catch (error) {
    throw boom.internal(error);
  }
};

// GET PRODUCT PRESENTATIONS
export const getProductPresentations = async () => {
  try {
    const productPresentations = await Prodserv.aggregate([
      {
        $unwind: "$presentaciones",
      },
      {
        $project: {
          idProducto: "$IdProdServOK",
          idPresentacion: "$presentaciones.IdPresentaOK",
          descripcionDePresentacion: {
            $concat: ["$DesProdServ", " - ", "$presentaciones.DesPresenta"],
          },
        },
      },
    ]);
    return productPresentations;
  } catch (error) {
    throw boom.internal(error);
  }
};

// GET CONCATENATED DESCRIPTION
export const getConcatenatedDescription = async () => {
  try {
    const result = await Inventarios.aggregate([
      {
        $lookup: {
          from: "cat_prod_serv",
          localField: "IdProdServOK",
          foreignField: "IdProdServOK",
          as: "prod_serv",
        },
      },
      { $unwind: "$prod_serv" },
      { $unwind: "$prod_serv.presentaciones" },
      {
        $match: {
          $expr: {
            $eq: ["$IdPresentaOK", "$prod_serv.presentaciones.IdPresentaOK"],
          },
        },
      },
      {
        $addFields: {
          DescripcionConcatenada: {
            $concat: [
              "$prod_serv.DesProdServ",
              " - ",
              "$prod_serv.presentaciones.DesPresenta",
            ],
          },
        },
      },
      {
        $project: {
          _id: 0,
          DescripcionConcatenada: 1,
        },
      },
    ]);
    return result;
  } catch (error) {
    throw boom.internal(error);
  }
};
