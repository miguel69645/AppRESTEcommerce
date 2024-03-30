//Commerce
import ProdServ from "../models/ProdServ";
import boom from "@hapi/boom";

//FIC: GET PRODUCTS AND SERVICES LIST
export const getProdServList = async () => {
  let prodServList;
  try {
    prodServList = await ProdServ.find();
    return prodServList;
  } catch (error) {
    //res.status(500).json({ message: 'Error: ' + ficError });
    throw boom.internal(error);
  }
};

//FIC: GET PRODUCT OR SERVICE BY ID
export const getProdServItem = async (id, keyType) => {
  let prodServItem;

  try {
    if (keyType === "OK") {
      prodServItem = await ProdServ.findOne({
        IdProdServOK: id,
        
      });
    } else if (keyType === "BK") {
      prodServItem = await ProdServ.findOne({
        IdProdServBK: id,
      });
    }
    return prodServItem;
  } catch (error) {
    throw boom.internal(error);
  }
};

// POST (ADD) Productos y/o Servicios.
export const postProdServItem = async (paProdServItem) => {
  try {
    const newProdServItem = new ProdServ(paProdServItem);
    return await newProdServItem.save();
  } catch (error) {
    throw error;
  }
};

//FIC: SERVICES PUT
// PUT (MODIFY) Productos y/o Servicios.
export const putProdServItem = async (id, paProdServItem) => {
  try {
    //console.log("FIC: PUT API INSTITUTO", id);
    return await ProdServ.findOneAndUpdate(
      { IdProdServOK: id },
      paProdServItem,
      {
        new: true,
      }
    );
  } catch (error) {
    throw boom.badImplementation(error);
  }
};

// DELETE (REMOVE) PRODSERV
export const deleteProdServItem = async (id) => {
  try {
    const deletedProdServItem = await ProdServ.findOneAndDelete({
      IdProdServOK: id,
    });
    if (!deletedProdServItem) {
      throw boom.badRequest("No se pudo eliminar el Producto y/o Servicio.");
    }
    return deletedProdServItem;
  } catch (error) {
    throw boom.badImplementation(error);
  }
};
