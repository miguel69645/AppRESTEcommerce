// Education
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

// GET MOVIMIENTO BY ID
export const getMovimiento = async (id) => {
    let movimientoItem;
    try {
        movimientoItem = await Movimientos.findOne({ IdTipoMovtoOK: id });
        return movimientoItem;
    } catch (error) {
        throw boom.internal(error);
    }
};

// POST (ADD) MOVIMIENTO
export const postMovimiento = async (paMovimientoItem) => {
    try {
        const newMovimientoItem = new Movimientos(paMovimientoItem);
        return await newMovimientoItem.save();
    } catch (error) {
        throw error;
    }
};

// PUT (MODIFY) MOVIMIENTO
export const putMovimientoItem = async (id, paMovimientoItem) => {
    try {
        return await Movimientos.findOneAndUpdate({ IdTipoMovtoOK: id }, paMovimientoItem, { new: true });
    } catch (error) {
        throw boom.badImplementation(error);
    }
};

// DELETE MOVIMIENTO BY ID
export const deleteMovimiento = async (id) => {
    try {
        const deletedMovimiento = await Movimientos.findOneAndDelete({ IdTipoMovtoOK: id });
        if (!deletedMovimiento) {
            throw boom.badRequest("No se pudo eliminar el movimiento.");
        }
        return deletedMovimiento;
    } catch (error) {
        throw boom.badImplementation(error);
    }
};
