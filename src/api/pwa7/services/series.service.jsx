// Education
import Series from "../models/Series";
import boom from "@hapi/boom";

// GET ALL SERIES
export const getSeries = async () => {
    let seriesList;
    try {
        seriesList = await Series.find();
        return seriesList;
    } catch (error) {
        throw boom.internal(error);
    }
};

// GET SERIE BY ID
export const getSerie = async (id) => {
    let serieItem;
    try {
        serieItem = await Series.findOne({ Serie: id });
        return serieItem;
    } catch (error) {
        throw boom.internal(error);
    }
};

// POST (ADD) SERIE
export const postSerie = async (paSerieItem) => {
    try {
        const newSerieItem = new Series(paSerieItem);
        return await newSerieItem.save();
    } catch (error) {
        throw error;
    }
};

// PUT (MODIFY) SERIE
export const putSerieItem = async (id, paSerieItem) => {
    try {
        return await Series.findOneAndUpdate({ Serie: id }, paSerieItem, { new: true });
    } catch (error) {
        throw boom.badImplementation(error);
    }
};

// DELETE SERIE BY ID
export const deleteSerie = async (id) => {
    try {
        const deletedSerie = await Series.findOneAndDelete({ Serie: id });
        if (!deletedSerie) {
            throw boom.badRequest("No se pudo eliminar la serie.");
        }
        return deletedSerie;
    } catch (error) {
        throw boom.badImplementation(error);
    }
};
