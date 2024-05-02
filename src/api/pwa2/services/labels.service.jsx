import Labels from "../models/labels";
import boom from "@hapi/boom";

// GET ALL LABELS
export const getLabels = async () => {
  let labelsList;
  try {
    labelsList = await Labels.find();
    return labelsList;
  } catch (error) {
    throw boom.internal(error);
  }
};
