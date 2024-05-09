import * as MovimientoServices from "../services/movimientos.service";
import boom from "@hapi/boom";

// GET ALL MOVIMIENTOS
export const getMovimientosList = async (req, res, next) => {
    try {
        const movimientosList = await MovimientoServices.getMovimientos();
        if (!movimientosList) {
            throw boom.notFound("No se encontraron movimientos registrados.");
        } else {
            res.status(200).json(movimientosList);
        }
    } catch (error) {
        next(error);
    }
};

// GET MOVIMIENTO BY ID
export const getMovimiento = async (req, res, next) => {
    try {
        const { id } = req.params;
        const movimientoItem = await MovimientoServices.getMovimiento(id);
        if (!movimientoItem) {
            throw boom.notFound("No se encontró el movimiento registrado.");
        } else {
            res.status(200).json(movimientoItem);
        }
    } catch (error) {
        next(error);
    }
};

// POST (ADD) MOVIMIENTO
export const postMovimiento = async (req, res, next) => {
    try {
        const paMovimientoItem = req.body;
        const newMovimientoItem = await MovimientoServices.postMovimiento(paMovimientoItem);
        if (!newMovimientoItem) {
            throw boom.badRequest("No se pudo crear el movimiento.");
        } else {
            res.status(201).json(newMovimientoItem);
        }
    } catch (error) {
        next(error);
    }
};

// PUT MOVIMIENTO
export const putMovimientoItem = async (req, res, next) => {
    try {
        const { id } = req.params;
        const paMovimientoItem = req.body;
        const updatedMovimientoItem = await MovimientoServices.putMovimientoItem(id, paMovimientoItem);
        if (!updatedMovimientoItem) {
            throw boom.badRequest("No se pudo actualizar el movimiento.");
        } else {
            res.status(200).json(updatedMovimientoItem);
        }
    } catch (error) {
        next(error);
    }
};

// DELETE MOVIMIENTO
export const deleteMovimiento = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deletedMovimientoItem = await MovimientoServices.deleteMovimiento(id);
        if (!deletedMovimientoItem) {
            throw boom.badRequest("No se pudo eliminar el movimiento.");
        } else {
            res.status(200).json({ message: "Movimiento eliminado correctamente." });
        }
    } catch (error) {
        next(error);
    }
};
