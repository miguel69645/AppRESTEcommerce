import * as movimientosServices from "../services/movimientos.service";
import boom from "@hapi/boom";

// GET ALL MOVIMIENTOS
export const getMovimientosList = async (req, res, next) => {
    try {
        const movimientosList = await movimientosServices.getMovimientos();
        if (!movimientosList) {
            throw boom.notFound("No movimientos found.");
        } else {
            res.status(200).json(movimientosList);
        }
    } catch (error) {
        next(error);
    }
};
