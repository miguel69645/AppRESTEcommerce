import * as seriesServices from "../services/series.service";
import boom from "@hapi/boom";

// GET ALL SERIES
export const getSeriesList = async (req, res, next) => {
    try {
        const seriesList = await seriesServices.getSeries();
        if (!seriesList) {
            throw boom.notFound("No series found.");
        } else {
            res.status(200).json(seriesList);
        }
    } catch (error) {
        next(error);
    }
};
