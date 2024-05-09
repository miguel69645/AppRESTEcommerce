import * as SerieServices from "../services/series.service";
import boom from "@hapi/boom";

// GET ALL SERIES
export const getSeriesList = async (req, res, next) => {
    try {
        const seriesList = await SerieServices.getSeries();
        if (!seriesList) {
            throw boom.notFound("No se encontraron series registradas.");
        } else {
            res.status(200).json(seriesList);
        }
    } catch (error) {
        next(error);
    }
};

// GET SERIE BY ID
export const getSerie = async (req, res, next) => {
    try {
        const { id } = req.params;
        const serieItem = await SerieServices.getSerie(id);
        if (!serieItem) {
            throw boom.notFound("No se encontró la serie registrada.");
        } else {
            res.status(200).json(serieItem);
        }
    } catch (error) {
        next(error);
    }
};

// POST (ADD) SERIE
export const postSerie = async (req, res, next) => {
    try {
        const paSerieItem = req.body;
        const newSerieItem = await SerieServices.postSerie(paSerieItem);
        if (!newSerieItem) {
            throw boom.badRequest("No se pudo crear la serie.");
        } else {
            res.status(201).json(newSerieItem);
        }
    } catch (error) {
        next(error);
    }
};

// PUT SERIE
export const putSerieItem = async (req, res, next) => {
    try {
        const { id } = req.params;
        const paSerieItem = req.body;
        const updatedSerieItem = await SerieServices.putSerieItem(id, paSerieItem);
        if (!updatedSerieItem) {
            throw boom.badRequest("No se pudo actualizar la serie.");
        } else {
            res.status(200).json(updatedSerieItem);
        }
    } catch (error) {
        next(error);
    }
};

// DELETE SERIE
export const deleteSerie = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deletedSerieItem = await SerieServices.deleteSerie(id);
        if (!deletedSerieItem) {
            throw boom.badRequest("No se pudo eliminar la serie.");
        } else {
            res.status(200).json({ message: "Serie eliminada correctamente." });
        }
    } catch (error) {
        next(error);
    }
};
