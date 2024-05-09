import Negocios from "../models/negocios";
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
