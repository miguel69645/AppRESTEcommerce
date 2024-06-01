//Inventarios
import { Router } from "express";
import * as InventariosController from "../controllers/inventarios.controller";

const router = Router();

// GET
router.get("/", InventariosController.getInventariosList);
router.get("/description", InventariosController.getConcatenatedDescription);
router.get("/:id", InventariosController.getInventario);
router.get("/:id/:selectedBusinessId", InventariosController.getAllStores);
router.get(
  "/:id/:selectedBusinessId/:selectedStoresId",
  InventariosController.getAllSeries
);
router.get(
  "/:id/:selectedBusinessId/:selectedStoresId/:selectedSeriesId",
  InventariosController.getAllStatus
);
// POST
router.post("/", InventariosController.postInventario);
router.post("/:id/negocios", InventariosController.postNegocio);
router.post(
  "/:id/negocios/:idNegocioOk/almacenes",
  InventariosController.postAlmacen
);
router.post(
  "/:id/negocios/:idNegocioOk/almacenes/:idAlmacenOk/series",
  InventariosController.postSerie
);
router.post(
  "/:id/negocios/:idNegocioOk/almacenes/:idAlmacenOk/series/:serie/estatus_fisico",
  InventariosController.postEstatusFisico
);
router.post(
  "/:id/negocios/:idNegocioOk/almacenes/:idAlmacenOk/series/:serie/estatus_venta",
  InventariosController.postEstatusVenta
);
router.post(
  "/:id/negocios/:idNegocioOk/almacenes/:idAlmacenOk/series/:serie/ubicaciones",
  InventariosController.postUbicacion
);
// PUT
router.put("/:id", InventariosController.putInventarioItem);
router.put("/:id/negocios/:idNegocioOk", InventariosController.putNegocio);
router.put(
  "/:id/negocios/:idNegocioOk/almacenes/:idAlmacenOk",
  InventariosController.putAlmacen
);
router.put(
  "/:id/negocios/:idNegocioOk/almacenes/:idAlmacenOk/series/:serieId",
  InventariosController.putSerie
);
router.put(
  "/:id/negocios/:idNegocioOk/almacenes/:idAlmacenOk/series/:serie/estatus_fisico/:estatusFisicoId",
  InventariosController.putEstatusFisico
);
router.put(
  "/:id/negocios/:idNegocioOk/almacenes/:idAlmacenOk/series/:serie/estatus_venta/:estatusVentaId",
  InventariosController.putEstatusVenta
);
router.put(
  "/:id/negocios/:idNegocioOk/almacenes/:idAlmacenOk/series/:serie/ubicaciones/:ubicacionId",
  InventariosController.putUbicacion
);
// DELETE
router.delete("/:id", InventariosController.deleteInventario);
router.delete(
  "/:id/negocios/:idNegocioOk",
  InventariosController.deleteNegocio
);
router.delete(
  "/:id/negocios/:idNegocioOk/almacenes/:idAlmacenOk",
  InventariosController.deleteAlmacen
);
router.delete(
  "/:id/negocios/:idNegocioOk/almacenes/:idAlmacenOk/series/:serieId",
  InventariosController.deleteSerie
);
router.delete(
  "/:id/negocios/:idNegocioOk/almacenes/:idAlmacenOk/series/:serie/estatus_fisico/:estatusFisicoId",
  InventariosController.deleteEstatusFisico
);
router.delete(
  "/:id/negocios/:idNegocioOk/almacenes/:idAlmacenOk/series/:serie/estatus_venta/:estatusVentaId",
  InventariosController.deleteEstatusVenta
);
router.delete(
  "/:id/negocios/:idNegocioOk/almacenes/:idAlmacenOk/series/:serie/ubicaciones/:ubicacionId",
  InventariosController.deleteUbicacion
);

export default router;
