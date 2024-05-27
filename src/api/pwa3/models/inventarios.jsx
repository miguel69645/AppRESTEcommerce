import * as mongoose from "mongoose";

const inventariosSchema = new mongoose.Schema({
  IdInstitutoOK: { type: String, required: true },
  IdProdServOK: { type: String, required: true },
  IdPresentaOK: { type: String, required: true },
  negocios: [
    {
      IdNegocioOK: { type: String, required: true },
      ControlaSerie: { type: String, required: true },
      almacenes: [
        {
          IdAlmacenOK: { type: String, required: true },
          Principal: { type: String, required: true },
          CantidadActual: { type: Number, required: true },
          CantidadDisponible: { type: Number, required: true },
          CantidadApartada: { type: Number, required: true },
          CantidadTransito: { type: Number, required: true },
          CantidadMerma: { type: Number, required: true },
          StockMaximo: { type: Number, required: true },
          StockMinimo: { type: Number, required: true },
          series: [
            {
              Serie: { type: String, required: true },
              Placa: { type: String, required: true },
              Observacion: { type: String, required: false },
              estatus_fisico: [
                {
                  IdTipoEstatusOK: { type: String, required: true },
                  Actual: { type: String, required: true },
                  Observacion: { type: String, required: false },
                },
              ],
              estatus_venta: [
                {
                  IdTipoEstatusOK: { type: String, required: true },
                  Actual: { type: String, required: true },
                  Observacion: { type: String, required: false },
                },
              ],
              ubicaciones: [
                {
                  IdAlmacenOK: { type: String, required: false },
                  Ubicacion: { type: String, required: true },
                  Actual: { type: String, required: true },
                },
              ],
            },
          ],
        },
      ],
    },
  ],
});

const prodservSchema = new mongoose.Schema({
  IdInstitutoOK: {type: String},
  IdProdServOK: {type: String},
  IdProdServBK: {type: String},
  CodigoBarras: {type: String},
  DesProdServ: {type: String},
  Indice: {type: String},
  presentaciones: [
    {
      IdPresentaOK: {type: String},
      IdPresentaBK: {type: String},
      CodigoBarras: {type: String},
      DesPresenta: {type: String},
      Indice: {type: String},
      Principal: {type: String},
    },
  ],
});

const Inventarios = mongoose.model(
  "cat_inventarios",
  inventariosSchema,
  "cat_inventarios"
);
const Prodserv = mongoose.model(
  "cat_prod_serv",
  prodservSchema,
  "cat_prod_serv"
);

export { Inventarios, Prodserv };
