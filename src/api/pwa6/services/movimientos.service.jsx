import Movimientos from "../models/movimientos";
import boom from "@hapi/boom";

// GET ALL MOVIMIENTOS
export const getMovimientos = async () => {
    let movimientosList;
    try {
        movimientosList = await Movimientos.find();
        return movimientosList;
    } catch (error) {
        throw boom.internal(error);
    }
};
