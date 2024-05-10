import * as NegocioServices from "../services/negocios.service";
import boom from "@hapi/boom";

// GET ALL NEGOCIOS
export const getNegociosList = async (req, res, next) => {
    try {
        const negociosList = await NegocioServices.getNegocios();
        if (!negociosList) {
            throw boom.notFound("No se encontraron negocios registrados.");
        } else {
            res.status(200).json(negociosList);
        }
    } catch (error) {
        next(error);
    }
};

// GET NEGOCIO BY ID
export const getNegocio = async (req, res, next) => {
    try {
        const { id } = req.params;
        const keyType = req.query.keyType || "OK";
        const negocioItem = await NegocioServices.getNegocio(id, keyType);
        if (!negocioItem) {
            throw boom.notFound("No se encontró el negocio registrado.");
        } else {
            res.status(200).json(negocioItem);
        }
    } catch (error) {
        next(error);
    }
};

// POST (ADD) NEGOCIO
export const postNegocio = async (req, res, next) => {
    try {
        const paNegocioItem = req.body;
        const newNegocioItem = await NegocioServices.postNegocio(paNegocioItem);
        if (!newNegocioItem) {
            throw boom.badRequest("No se pudo crear el negocio.");
        } else {
            res.status(201).json(newNegocioItem);
        }
    } catch (error) {
        next(error);
    }
};

// PUT NEGOCIO
export const putNegocioItem = async (req, res, next) => {
    try {
        const { id } = req.params;
        const paNegocioItem = req.body;
        const updatedNegocioItem = await NegocioServices.putNegocioItem(id, paNegocioItem);
        if (!updatedNegocioItem) {
            throw boom.badRequest("No se pudo actualizar el negocio.");
        } else {
            res.status(200).json(updatedNegocioItem);
        }
    } catch (error) {
        next(error);
    }
};

// DELETE NEGOCIO
export const deleteNegocio = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deletedNegocioItem = await NegocioServices.deleteNegocio(id);
        if (!deletedNegocioItem) {
            throw boom.badRequest("No se pudo eliminar el negocio.");
        } else {
            res.status(200).json({ message: "Negocio eliminado correctamente." });
        }
    } catch (error) {
        next(error);
    }
};
