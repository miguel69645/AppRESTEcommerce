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
          info_ad: [
            {
              IdEtiquetaOK: { type: String, required: false },
              IdEtiqueta: { type: String, required: true },
              Etiqueta: { type: String, required: true },
              Valor: { type: String, required: true },
              IdTipoSeccionOK: { type: String, required: true },
              Secuencia: { type: Number, required: true },
              detail_row: {
                Activo: { type: String, required: true },
                Borrado: { type: String, required: true },
                FechaReg: { type: Date, required: false },
                UsuarioReg: { type: String, required: false },
              },
            },
          ],
          movtos: [
            {
              CantidadMovto: { type: Number, required: true },
              CantidadAnt: { type: Number, required: true },
              CantidadAct: { type: Number, required: true },
              IdTipoMovtoOK: { type: String, required: true },
              IdClaseMovtoOK: { type: String, required: true },
              Referencia: { type: String, required: true },
              detail_row: {
                Activo: { type: String, required: true },
                Borrado: { type: String, required: true },
                FechaReg: { type: Date, required: false },
                UsuarioReg: { type: String, required: false },
              },
            },
          ],
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
                  detail_row: {
                    Activo: { type: String, required: true },
                    Borrado: { type: String, required: true },
                    FechaReg: { type: Date, required: false },
                    UsuarioReg: { type: String, required: false },
                  },
                },
              ],
              estatus_venta: [
                {
                  IdTipoEstatusOK: { type: String, required: true },
                  Actual: { type: String, required: true },
                  Observacion: { type: String, required: false },
                  detail_row: {
                    Activo: { type: String, required: true },
                    Borrado: { type: String, required: true },
                    FechaReg: { type: Date, required: false },
                    UsuarioReg: { type: String, required: false },
                  },
                },
              ],
              ubicaciones: [
                {
                  IdAlmacenOK: { type: String, required: false },
                  Ubicacion: { type: String, required: true },
                  Actual: { type: String, required: true },
                  detail_row: {
                    Activo: { type: String, required: true },
                    Borrado: { type: String, required: true },
                    FechaReg: { type: Date, required: false },
                    UsuarioReg: { type: String, required: false },
                  },
                },
              ],
              detail_row: {
                Activo: { type: String, required: true },
                Borrado: { type: String, required: true },
                FechaReg: { type: Date, required: false },
                UsuarioReg: { type: String, required: false },
              },
            },
          ],
          detail_row: {
            Activo: { type: String, required: true },
            Borrado: { type: String, required: true },
            FechaReg: { type: Date, required: false },
            UsuarioReg: { type: String, required: false },
          },
        },
      ],
      detail_row: {
        Activo: { type: String, required: true },
        Borrado: { type: String, required: true },
        FechaReg: { type: Date, required: false },
        UsuarioReg: { type: String, required: false },
      },
    },
  ],
  detail_row: {
    Activo: { type: String, required: true },
    Borrado: { type: String, required: true },
    FechaReg: { type: Date, required: false },
    UsuarioReg: { type: String, required: false },
  },
});

export default mongoose.model(
  "cat_inventarios",
  inventariosSchema,
  "cat_inventarios"
);
