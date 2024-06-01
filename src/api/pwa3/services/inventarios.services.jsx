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
      Descripcion: almacen.Descripcion,
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

// POST (ADD) INVENTARIO
export const postInventario = async (paInventarioItem) => {
  try {
    const newInventarioItem = new Inventarios(paInventarioItem);
    return await newInventarioItem.save();
  } catch (error) {
    throw error;
  }
};

// POST (ADD) NEGOCIO
export const postNegocio = async (id, negocio) => {
  try {
    await Inventarios.updateOne({ _id: id }, { $push: { negocios: negocio } });
    return { message: "Negocio agregado con éxito" };
  } catch (error) {
    throw boom.internal(error);
  }
};

// POST (ADD) ALMACÉN
export const postAlmacen = async (id, idNegocioOk, almacen) => {
  try {
    await Inventarios.updateOne(
      { _id: id, negocios: { $elemMatch: { IdNegocioOK: idNegocioOk } } },
      { $push: { "negocios.$.almacenes": almacen } }
    );
    return { message: "Almacén agregado con éxito" };
  } catch (error) {
    throw boom.internal(error);
  }
};

// POST (ADD) SERIE
export const postSerie = async (id, idNegocioOk, idAlmacenOk, serie) => {
  try {
    // Encuentra el documento y el índice del subdocumento
    const inventario = await Inventarios.findOne({ _id: id }, { negocios: 1 });
    const negocioIndex = inventario.negocios.findIndex(
      (negocio) => negocio.IdNegocioOK === idNegocioOk
    );
    const almacenIndex = inventario.negocios[negocioIndex].almacenes.findIndex(
      (almacen) => almacen.IdAlmacenOK === idAlmacenOk
    );

    if (negocioIndex === -1 || almacenIndex === -1) {
      throw boom.notFound("Negocio o almacén no encontrado");
    }

    // Construye el camino de la serie correctamente
    const path = `negocios.${negocioIndex}.almacenes.${almacenIndex}.series`;

    // Prepara la actualización con $push
    const update = {
      $push: {
        [path]: {
          Serie: serie.Serie,
          Placa: serie.Placa,
          Observacion: serie.Observacion,
          estatus_fisico: serie.estatus_fisico,
          estatus_venta: serie.estatus_venta,
          ubicaciones: serie.ubicaciones,
        },
      },
    };

    // Ejecuta la actualización
    await Inventarios.updateOne({ _id: id }, update);

    return { message: "Serie agregada con éxito" };
  } catch (error) {
    throw boom.internal(error);
  }
};

// POST (ADD) ESTATUS FÍSICO
export const postEstatusFisico = async (
  id,
  idNegocioOk,
  idAlmacenOk,
  serie,
  estatusFisico
) => {
  try {
    await Inventarios.updateOne(
      {
        _id: id,
        "negocios.IdNegocioOK": idNegocioOk,
        "negocios.almacenes.IdAlmacenOK": idAlmacenOk,
        "negocios.almacenes.series.Serie": serie,
      },
      {
        $push: {
          "negocios.$[n].almacenes.$[a].series.$[s].estatus_fisico":
            estatusFisico,
        },
      },
      {
        arrayFilters: [
          { "n.IdNegocioOK": idNegocioOk },
          { "a.IdAlmacenOK": idAlmacenOk },
          { "s.Serie": serie },
        ],
      }
    );
    return { message: "Estatus físico agregado con éxito" };
  } catch (error) {
    throw boom.internal(error);
  }
};

// POST (ADD) ESTATUS VENTA
export const postEstatusVenta = async (
  id,
  idNegocioOk,
  idAlmacenOk,
  serie,
  estatusVenta
) => {
  try {
    await Inventarios.updateOne(
      {
        _id: id,
        "negocios.IdNegocioOK": idNegocioOk,
        "negocios.almacenes.IdAlmacenOK": idAlmacenOk,
        "negocios.almacenes.series.Serie": serie,
      },
      {
        $push: {
          "negocios.$[n].almacenes.$[a].series.$[s].estatus_venta":
            estatusVenta,
        },
      },
      {
        arrayFilters: [
          { "n.IdNegocioOK": idNegocioOk },
          { "a.IdAlmacenOK": idAlmacenOk },
          { "s.Serie": serie },
        ],
      }
    );
    return { message: "Estatus de venta agregado con éxito" };
  } catch (error) {
    throw boom.internal(error);
  }
};

// POST (ADD) UBICACIÓN
export const postUbicacion = async (
  id,
  idNegocioOk,
  idAlmacenOk,
  serie,
  ubicacion
) => {
  try {
    await Inventarios.updateOne(
      {
        _id: id,
        "negocios.IdNegocioOK": idNegocioOk,
        "negocios.almacenes.IdAlmacenOK": idAlmacenOk,
        "negocios.almacenes.series.Serie": serie,
      },
      {
        $push: {
          "negocios.$[n].almacenes.$[a].series.$[s].ubicaciones": ubicacion,
        },
      },
      {
        arrayFilters: [
          { "n.IdNegocioOK": idNegocioOk },
          { "a.IdAlmacenOK": idAlmacenOk },
          { "s.Serie": serie },
        ],
      }
    );
    return { message: "Ubicación agregada con éxito" };
  } catch (error) {
    throw boom.internal(error);
  }
};

// PUT (MODIFY) INVENTARIO
export const putInventarioItem = async (id, paInventarioItem) => {
  try {
    return await Inventarios.updateOne(
      { _id: id },
      {
        $set: {
          IdInstitutoOK: paInventarioItem.IdInstitutoOK,
          IdProdServOK: paInventarioItem.IdProdServOK,
          IdPresentaOK: paInventarioItem.IdPresentaOK,
        },
      },
      { new: true }
    );
  } catch (error) {
    throw boom.badImplementation(error);
  }
};

// PUT (MODIFY) NEGOCIO
export const putNegocio = async (id, idNegocioOk, negocio) => {
  try {
    await Inventarios.updateOne(
      { _id: id, "negocios.IdNegocioOK": idNegocioOk },
      {
        $set: {
          "negocios.$.IdNegocioOK": negocio.IdNegocioOK,
          "negocios.$.descripcionNegocio": negocio.descripcionNegocio,
          "negocios.$.ControlaSerie": negocio.ControlaSerie,
        },
      }
    );
    return { message: "Negocio actualizado con éxito" };
  } catch (error) {
    throw boom.internal(error);
  }
};

// PUT (MODIFY) ALMACÉN
export const putAlmacen = async (id, idNegocioOk, idAlmacenOk, almacen) => {
  try {
    await Inventarios.updateOne(
      {
        _id: id,
        "negocios.IdNegocioOK": idNegocioOk,
        "negocios.almacenes.IdAlmacenOK": idAlmacenOk,
      },
      {
        $set: {
          "negocios.$[n].almacenes.$[a].Descripcion": almacen.Descripcion,
          "negocios.$[n].almacenes.$[a].Principal": almacen.Principal,
          "negocios.$[n].almacenes.$[a].CantidadActual": almacen.CantidadActual,
          "negocios.$[n].almacenes.$[a].CantidadDisponible":
            almacen.CantidadDisponible,
          "negocios.$[n].almacenes.$[a].CantidadApartada":
            almacen.CantidadApartada,
          "negocios.$[n].almacenes.$[a].CantidadTransito":
            almacen.CantidadTransito,
          "negocios.$[n].almacenes.$[a].CantidadMerma": almacen.CantidadMerma,
          "negocios.$[n].almacenes.$[a].StockMaximo": almacen.StockMaximo,
          "negocios.$[n].almacenes.$[a].StockMinimo": almacen.StockMinimo,
        },
      },
      {
        arrayFilters: [
          { "n.IdNegocioOK": idNegocioOk },
          { "a.IdAlmacenOK": idAlmacenOk },
        ],
      }
    );
    return { message: "Almacén actualizado con éxito" };
  } catch (error) {
    throw boom.internal(error);
  }
};

// PUT (MODIFY) SERIE
export const putSerie = async (
  id,
  idNegocioOk,
  idAlmacenOk,
  serieId,
  serie
) => {
  try {
    await Inventarios.updateOne(
      {
        _id: id,
        "negocios.IdNegocioOK": idNegocioOk,
        "negocios.almacenes.IdAlmacenOK": idAlmacenOk,
        "negocios.almacenes.series.Serie": serieId,
      },
      {
        $set: {
          "negocios.$[n].almacenes.$[a].series.$[s].Serie": serie.Serie,
          "negocios.$[n].almacenes.$[a].series.$[s].Placa": serie.Placa,
          "negocios.$[n].almacenes.$[a].series.$[s].Observacion":
            serie.Observacion,
        },
      },
      {
        arrayFilters: [
          { "n.IdNegocioOK": idNegocioOk },
          { "a.IdAlmacenOK": idAlmacenOk },
          { "s.Serie": serieId },
        ],
      }
    );
    return { message: "Serie actualizada con éxito" };
  } catch (error) {
    throw boom.internal(error);
  }
};

// PUT (MODIFY) ESTATUS FÍSICO
export const putEstatusFisico = async (
  id,
  idNegocioOk,
  idAlmacenOk,
  serie,
  estatusFisicoId,
  estatusFisico
) => {
  try {
    await Inventarios.updateOne(
      {
        _id: id,
        "negocios.IdNegocioOK": idNegocioOk,
        "negocios.almacenes.IdAlmacenOK": idAlmacenOk,
        "negocios.almacenes.series.Serie": serie,
        "negocios.almacenes.series.estatus_fisico.IdTipoEstatusOK":
          estatusFisicoId,
      },
      {
        $set: {
          "negocios.$[n].almacenes.$[a].series.$[s].estatus_fisico.$[ef]":
            estatusFisico,
        },
      },
      {
        arrayFilters: [
          { "n.IdNegocioOK": idNegocioOk },
          { "a.IdAlmacenOK": idAlmacenOk },
          { "s.Serie": serie },
          { "ef.IdTipoEstatusOK": estatusFisicoId },
        ],
      }
    );
    return { message: "Estatus físico actualizado con éxito" };
  } catch (error) {
    throw boom.internal(error);
  }
};

// PUT (MODIFY) ESTATUS VENTA
export const putEstatusVenta = async (
  id,
  idNegocioOk,
  idAlmacenOk,
  serie,
  estatusVentaId,
  estatusVenta
) => {
  try {
    await Inventarios.updateOne(
      {
        _id: id,
        "negocios.IdNegocioOK": idNegocioOk,
        "negocios.almacenes.IdAlmacenOK": idAlmacenOk,
        "negocios.almacenes.series.Serie": serie,
        "negocios.almacenes.series.estatus_venta.IdTipoEstatusOK":
          estatusVentaId,
      },
      {
        $set: {
          "negocios.$[n].almacenes.$[a].series.$[s].estatus_venta.$[ev]":
            estatusVenta,
        },
      },
      {
        arrayFilters: [
          { "n.IdNegocioOK": idNegocioOk },
          { "a.IdAlmacenOK": idAlmacenOk },
          { "s.Serie": serie },
          { "ev.IdTipoEstatusOK": estatusVentaId },
        ],
      }
    );
    return { message: "Estatus de venta actualizado con éxito" };
  } catch (error) {
    throw boom.internal(error);
  }
};

// PUT (MODIFY) UBICACIÓN
export const putUbicacion = async (
  id,
  idNegocioOk,
  idAlmacenOk,
  serie,
  ubicacionId,
  ubicacion
) => {
  try {
    await Inventarios.updateOne(
      {
        _id: id,
        "negocios.IdNegocioOK": idNegocioOk,
        "negocios.almacenes.IdAlmacenOK": idAlmacenOk,
        "negocios.almacenes.series.Serie": serie,
        "negocios.almacenes.series.ubicaciones.Ubicacion": ubicacionId,
      },
      {
        $set: {
          "negocios.$[n].almacenes.$[a].series.$[s].ubicaciones.$[u]":
            ubicacion,
        },
      },
      {
        arrayFilters: [
          { "n.IdNegocioOK": idNegocioOk },
          { "a.IdAlmacenOK": idAlmacenOk },
          { "s.Serie": serie },
          { "u.Ubicacion": ubicacionId },
        ],
      }
    );
    return { message: "Ubicación actualizada con éxito" };
  } catch (error) {
    throw boom.internal(error);
  }
};

// DELETE INVENTARIO BY ID
export const deleteInventario = async (id) => {
  try {
    const deletedInventario = await Inventarios.findByIdAndDelete(id);
    if (!deletedInventario) {
      throw boom.badRequest("No se pudo eliminar el Inventario.");
    }
    return deletedInventario;
  } catch (error) {
    throw boom.badImplementation(error);
  }
};

// DELETE NEGOCIO BY ID
export const deleteNegocio = async (id, idNegocioOk) => {
  try {
    const result = await Inventarios.updateOne(
      { _id: id },
      { $pull: { negocios: { IdNegocioOK: idNegocioOk } } }
    );
    if (result.modifiedCount === 0) {
      throw boom.badRequest("No se pudo eliminar el negocio.");
    }
    return { message: "Negocio eliminado con éxito" };
  } catch (error) {
    throw boom.badImplementation(error);
  }
};

// DELETE ALMACÉN BY ID
export const deleteAlmacen = async (id, idNegocioOk, idAlmacenOk) => {
  try {
    const result = await Inventarios.updateOne(
      { _id: id, "negocios.IdNegocioOK": idNegocioOk },
      { $pull: { "negocios.$.almacenes": { IdAlmacenOK: idAlmacenOk } } }
    );
    if (result.modifiedCount === 0) {
      throw boom.badRequest("No se pudo eliminar el almacén.");
    }
    return { message: "Almacén eliminado con éxito" };
  } catch (error) {
    throw boom.badImplementation(error);
  }
};

// DELETE SERIE BY ID
export const deleteSerie = async (id, idNegocioOk, idAlmacenOk, serieId) => {
  try {
    const result = await Inventarios.updateOne(
      {
        _id: id,
        "negocios.IdNegocioOK": idNegocioOk,
        "negocios.almacenes.IdAlmacenOK": idAlmacenOk,
      },
      { $pull: { "negocios.$.almacenes.$[a].series": { Serie: serieId } } },
      {
        arrayFilters: [{ "a.IdAlmacenOK": idAlmacenOk }],
      }
    );
    if (result.modifiedCount === 0) {
      throw boom.badRequest("No se pudo eliminar la serie.");
    }
    return { message: "Serie eliminada con éxito" };
  } catch (error) {
    throw boom.badImplementation(error);
  }
};

// DELETE ESTATUS FÍSICO BY ID
export const deleteEstatusFisico = async (
  id,
  idNegocioOk,
  idAlmacenOk,
  serie,
  estatusFisicoId
) => {
  try {
    const result = await Inventarios.updateOne(
      {
        _id: id,
        "negocios.IdNegocioOK": idNegocioOk,
        "negocios.almacenes.IdAlmacenOK": idAlmacenOk,
        "negocios.almacenes.series.Serie": serie,
      },
      {
        $pull: {
          "negocios.$[n].almacenes.$[a].series.$[s].estatus_fisico": {
            IdTipoEstatusOK: estatusFisicoId,
          },
        },
      },
      {
        arrayFilters: [
          { "n.IdNegocioOK": idNegocioOk },
          { "a.IdAlmacenOK": idAlmacenOk },
          { "s.Serie": serie },
        ],
      }
    );
    if (result.modifiedCount === 0) {
      throw boom.badRequest("No se pudo eliminar el estatus físico.");
    }
    return { message: "Estatus físico eliminado con éxito" };
  } catch (error) {
    throw boom.badImplementation(error);
  }
};

// DELETE ESTATUS VENTA BY ID
export const deleteEstatusVenta = async (
  id,
  idNegocioOk,
  idAlmacenOk,
  serie,
  estatusVentaId
) => {
  try {
    const result = await Inventarios.updateOne(
      {
        _id: id,
        "negocios.IdNegocioOK": idNegocioOk,
        "negocios.almacenes.IdAlmacenOK": idAlmacenOk,
        "negocios.almacenes.series.Serie": serie,
      },
      {
        $pull: {
          "negocios.$[n].almacenes.$[a].series.$[s].estatus_venta": {
            IdTipoEstatusOK: estatusVentaId,
          },
        },
      },
      {
        arrayFilters: [
          { "n.IdNegocioOK": idNegocioOk },
          { "a.IdAlmacenOK": idAlmacenOk },
          { "s.Serie": serie },
        ],
      }
    );
    if (result.modifiedCount === 0) {
      throw boom.badRequest("No se pudo eliminar el estatus de venta.");
    }
    return { message: "Estatus de venta eliminado con éxito" };
  } catch (error) {
    throw boom.badImplementation(error);
  }
};

// DELETE UBICACIÓN BY ID
export const deleteUbicacion = async (
  id,
  idNegocioOk,
  idAlmacenOk,
  serie,
  ubicacionId
) => {
  try {
    const result = await Inventarios.updateOne(
      {
        _id: id,
        "negocios.IdNegocioOK": idNegocioOk,
        "negocios.almacenes.IdAlmacenOK": idAlmacenOk,
        "negocios.almacenes.series.Serie": serie,
      },
      {
        $pull: {
          "negocios.$[n].almacenes.$[a].series.$[s].ubicaciones": {
            Ubicacion: ubicacionId,
          },
        },
      },
      {
        arrayFilters: [
          { "n.IdNegocioOK": idNegocioOk },
          { "a.IdAlmacenOK": idAlmacenOk },
          { "s.Serie": serie },
        ],
      }
    );
    if (result.modifiedCount === 0) {
      throw boom.badRequest("No se pudo eliminar la ubicación.");
    }
    return { message: "Ubicación eliminada con éxito" };
  } catch (error) {
    throw boom.badImplementation(error);
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
