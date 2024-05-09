import * as negociosServices from "../services/negocios.service";
import boom from "@hapi/boom";

// GET ALL NEGOCIOS
export const getNegociosList = async (req, res, next) => {
    try {
        const negociosList = await negociosServices.getNegocios();
        if (!negociosList) {
            throw boom.notFound("No negocios found.");
        } else {
            res.status(200).json(negociosList);
        }
    } catch (error) {
        next(error);
    }
};
