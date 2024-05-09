// Education
import Negocios from "../models/Negocios";
import boom from "@hapi/boom";

// GET ALL NEGOCIOS
export const getNegocios = async () => {
    let negociosList;
    try {
        negociosList = await Negocios.find();
        return negociosList;
    } catch (error) {
        throw boom.internal(error);
    }
};

// GET NEGOCIO BY ID
export const getNegocio = async (id, keyType) => {
    let negocioItem;
    try {
        if (keyType === "OK") {
            negocioItem = await Negocios.findOne({ IdNegocioOK: id });
        } else if (keyType === "BK") {
            negocioItem = await Negocios.findOne({ IdNegocioBK: id });
        }
        return negocioItem;
    } catch (error) {
        throw boom.internal(error);
    }
};

// POST (ADD) NEGOCIO
export const postNegocio = async (paNegocioItem) => {
    try {
        const newNegocioItem = new Negocios(paNegocioItem);
        return await newNegocioItem.save();
    } catch (error) {
        throw error;
    }
};

// PUT (MODIFY) NEGOCIOS
export const putNegocioItem = async (id, paNegocioItem) => {
    try {
        return await Negocios.findOneAndUpdate({ IdNegocioOK: id }, paNegocioItem, { new: true });
    } catch (error) {
        throw boom.badImplementation(error);
    }
};

// DELETE NEGOCIO BY ID
export const deleteNegocio = async (id) => {
    try {
        const deletedNegocio = await Negocios.findOneAndDelete({ IdNegocioOK: id });
        if (!deletedNegocio) {
            throw boom.badRequest("No se pudo eliminar el negocio.");
        }
        return deletedNegocio;
    } catch (error) {
        throw boom.badImplementation(error);
    }
};
