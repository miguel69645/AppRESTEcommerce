"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var InventariosController = _interopRequireWildcard(require("../controllers/inventarios.controller"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
//Inventarios

var router = (0, _express.Router)();

// GET
router.get("/", InventariosController.getInventariosList);
router.get("/description", InventariosController.getConcatenatedDescription);
router.get("/:id", InventariosController.getInventario);
router.get("/:id/:selectedBusinessId", InventariosController.getAllStores);
router.get("/:id/:selectedBusinessId/:selectedStoresId", InventariosController.getAllSeries);
router.get("/:id/:selectedBusinessId/:selectedStoresId/:selectedSeriesId", InventariosController.getAllStatus);
// POST
router.post("/", InventariosController.postInventario);
router.post("/:id/negocios", InventariosController.postNegocio);
router.post("/:id/negocios/:idNegocioOk/almacenes", InventariosController.postAlmacen);
router.post("/:id/negocios/:idNegocioOk/almacenes/:idAlmacenOk/series", InventariosController.postSerie);
router.post("/:id/negocios/:idNegocioOk/almacenes/:idAlmacenOk/series/:serie/estatus_fisico", InventariosController.postEstatusFisico);
router.post("/:id/negocios/:idNegocioOk/almacenes/:idAlmacenOk/series/:serie/estatus_venta", InventariosController.postEstatusVenta);
router.post("/:id/negocios/:idNegocioOk/almacenes/:idAlmacenOk/series/:serie/ubicaciones", InventariosController.postUbicacion);
// PUT
router.put("/:id", InventariosController.putInventarioItem);
router.put("/:id/negocios/:idNegocioOk", InventariosController.putNegocio);
router.put("/:id/negocios/:idNegocioOk/almacenes/:idAlmacenOk", InventariosController.putAlmacen);
router.put("/:id/negocios/:idNegocioOk/almacenes/:idAlmacenOk/series/:serieId", InventariosController.putSerie);
router.put("/:id/negocios/:idNegocioOk/almacenes/:idAlmacenOk/series/:serie/estatus_fisico/:estatusFisicoId", InventariosController.putEstatusFisico);
router.put("/:id/negocios/:idNegocioOk/almacenes/:idAlmacenOk/series/:serie/estatus_venta/:estatusVentaId", InventariosController.putEstatusVenta);
router.put("/:id/negocios/:idNegocioOk/almacenes/:idAlmacenOk/series/:serie/ubicaciones/:ubicacionId", InventariosController.putUbicacion);
// DELETE
router["delete"]("/:id", InventariosController.deleteInventario);
router["delete"]("/:id/negocios/:idNegocioOk", InventariosController.deleteNegocio);
router["delete"]("/:id/negocios/:idNegocioOk/almacenes/:idAlmacenOk", InventariosController.deleteAlmacen);
router["delete"]("/:id/negocios/:idNegocioOk/almacenes/:idAlmacenOk/series/:serieId", InventariosController.deleteSerie);
router["delete"]("/:id/negocios/:idNegocioOk/almacenes/:idAlmacenOk/series/:serie/estatus_fisico/:estatusFisicoId", InventariosController.deleteEstatusFisico);
router["delete"]("/:id/negocios/:idNegocioOk/almacenes/:idAlmacenOk/series/:serie/estatus_venta/:estatusVentaId", InventariosController.deleteEstatusVenta);
router["delete"]("/:id/negocios/:idNegocioOk/almacenes/:idAlmacenOk/series/:serie/ubicaciones/:ubicacionId", InventariosController.deleteUbicacion);
var _default = exports["default"] = router;