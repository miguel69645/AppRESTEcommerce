import * as labelsServices from "../services/labels.service";
import boom from "@hapi/boom";

// GET ALL LABELS
export const getLabelsList = async (req, res, next) => {
  try {
    const labelsList = await labelsServices.getLabels();
    if (!labelsList) {
      throw boom.notFound("No labels found.");
    } else {
      res.status(200).json(labelsList);
    }
  } catch (error) {
    next(error);
  }
};
