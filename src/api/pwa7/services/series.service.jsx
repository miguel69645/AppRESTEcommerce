import Series from "../models/series";
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
