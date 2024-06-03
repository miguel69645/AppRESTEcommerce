import * as ListasServices from "../services/listas.services";
import boom from "@hapi/boom";

// GET LISTAS LIST
export const getListasList = async (req, res, next) => {
  try {
    const listasList = await ListasServices.getAllListas();
    if (!listasList) {
      throw boom.notFound("No se encontraron listas registradas.");
    } else {
      res.status(200).json(listasList);
    }
  } catch (error) {
    next(error);
  }
};

// GET LISTA BY ID
export const getLista = async (req, res, next) => {
  try {
    const { id } = req.params;
    const listaItem = await ListasServices.getLista(id);
    if (!listaItem) {
      throw boom.notFound("No se encontró la lista registrada.");
    } else {
      res.status(200).json(listaItem);
    }
  } catch (error) {
    next(error);
  }
};

// GET ALL PRECIOS
export const getAllPrecios = async (req, res, next) => {
  try {
    const { id } = req.params;
    const precios = await ListasServices.getAllPrices(id);
    if (!precios) {
      throw boom.notFound("No se encontraron precios.");
    } else {
      res.status(200).json(precios);
    }
  } catch (error) {
    next(error);
  }
};

// GET ALL ROLES
export const getAllRoles = async (req, res, next) => {
  try {
    const { id } = req.params;
    const roles = await ListasServices.getAllRoles(id);
    if (!roles) {
      throw boom.notFound("No se encontraron roles.");
    } else {
      res.status(200).json(roles);
    }
  } catch (error) {
    next(error);
  }
};

// GET CONDICION DET BY CONDICION
export const getCondicionDet = async (req, res, next) => {
  try {
    const { id, condicion } = req.params;
    const condicionDet = await ListasServices.getCondicionDet(id, condicion);
    if (!condicionDet) {
      throw boom.notFound("No se encontraron detalles de la condición.");
    } else {
      res.status(200).json(condicionDet);
    }
  } catch (error) {
    next(error);
  }
};

// GET VALOR BY ID TIPO CONDICION OK
export const getValorByIdTipoCondicionOK = async (req, res, next) => {
  try {
    const { id, condicion, IdTipoCondicionOK } = req.params;
    const valor = await ListasServices.getValorByIdTipoCondicionOK(
      id,
      condicion,
      IdTipoCondicionOK
    );
    if (!valor) {
      throw boom.notFound("Valor no encontrado.");
    } else {
      res.status(200).json(valor);
    }
  } catch (error) {
    next(error);
  }
};

// GET ALL PROMOTIONS
export const getAllPromotions = async (req, res, next) => {
  try {
    const { id } = req.params;
    const promociones = await ListasServices.getAllPromotions(id);
    if (!promociones) {
      throw boom.notFound("No se encontraron promociones.");
    } else {
      res.status(200).json(promociones);
    }
  } catch (error) {
    next(error);
  }
};

// GET CONDICIONES BY PROMO ID
export const getCondicionesByPromo = async (req, res, next) => {
  try {
    const { id, promoId } = req.params;
    const condiciones = await ListasServices.getCondicionesByPromo(id, promoId);
    if (!condiciones) {
      throw boom.notFound("No se encontraron condiciones para la promoción.");
    } else {
      res.status(200).json(condiciones);
    }
  } catch (error) {
    next(error);
  }
};

// GET VALORES BY ID ETIQUETA OK
export const getValoresByIdEtiquetaOK = async (req, res, next) => {
  try {
    const { id, IdTipoPromoOK, IdEtiquetaOK } = req.params;
    const valores = await ListasServices.getValoresByIdEtiquetaOK(
      id,
      IdTipoPromoOK,
      IdEtiquetaOK
    );
    if (!valores) {
      throw boom.notFound("No se encontraron valores.");
    } else {
      res.status(200).json(valores);
    }
  } catch (error) {
    next(error);
  }
};

// GET ALL NEGOCIOS
export const getAllNegocios = async (req, res, next) => {
  try {
    const { id } = req.params;
    const negocios = await ListasServices.getAllBusinesses(id);
    if (!negocios) {
      throw boom.notFound("No se encontraron negocios.");
    } else {
      res.status(200).json(negocios);
    }
  } catch (error) {
    next(error);
  }
};

// CREATE A NEW LISTA
export const createLista = async (req, res, next) => {
  try {
    const data = req.body;
    const newLista = await ListasServices.createLista(data);
    res.status(201).json(newLista);
  } catch (error) {
    next(error);
  }
};

// ADD NEW PRICE TO LISTA
export const addPriceToLista = async (req, res, next) => {
  try {
    const { id } = req.params;
    const priceData = req.body;
    const precios = await ListasServices.addPriceToLista(id, priceData);
    res.status(201).json(precios);
  } catch (error) {
    next(error);
  }
};

// ADD NEW ROLE TO LISTA
export const addRoleToLista = async (req, res, next) => {
  try {
    const { id } = req.params;
    const roleData = req.body;
    const roles = await ListasServices.addRoleToLista(id, roleData);
    res.status(201).json(roles);
  } catch (error) {
    next(error);
  }
};

// ADD NEW CONDITION DET TO ROLE
export const addCondicionDetToRole = async (req, res, next) => {
  try {
    const { id, condicion } = req.params;
    const condicionDetData = req.body;
    const condicionDet = await ListasServices.addCondicionDetToRole(
      id,
      condicion,
      condicionDetData
    );
    res.status(201).json(condicionDet);
  } catch (error) {
    next(error);
  }
};

// ADD NEW PROMOTION TO LISTA
export const addPromotionToLista = async (req, res, next) => {
  try {
    const { id } = req.params;
    const promoData = req.body;
    const promociones = await ListasServices.addPromotionToLista(id, promoData);
    res.status(201).json(promociones);
  } catch (error) {
    next(error);
  }
};

// ADD NEW CONDITION TO PROMO
export const addCondicionToPromo = async (req, res, next) => {
  try {
    const { id, IdTipoPromoOK } = req.params;
    const condicionData = req.body;
    const condiciones = await ListasServices.addCondicionToPromo(
      id,
      IdTipoPromoOK,
      condicionData
    );
    res.status(201).json(condiciones);
  } catch (error) {
    next(error);
  }
};

// ADD NEW VALUE TO CONDITION IN PROMO
export const addValorToCondicion = async (req, res, next) => {
  try {
    const { id, IdTipoPromoOK, IdEtiquetaOK } = req.params;
    const valorData = req.body;
    const valores = await ListasServices.addValorToCondicion(
      id,
      IdTipoPromoOK,
      IdEtiquetaOK,
      valorData
    );
    res.status(201).json(valores);
  } catch (error) {
    next(error);
  }
};

// ADD NEW BUSINESS TO LISTA
export const addBusinessToLista = async (req, res, next) => {
  try {
    const { id } = req.params;
    const businessData = req.body;
    const negocios = await ListasServices.addBusinessToLista(id, businessData);
    res.status(201).json(negocios);
  } catch (error) {
    next(error);
  }
};

// UPDATE LISTA
export const updateLista = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const updatedLista = await ListasServices.updateLista(id, data);
    if (!updatedLista) {
      throw boom.notFound("Lista no encontrada.");
    } else {
      res.status(200).json(updatedLista);
    }
  } catch (error) {
    next(error);
  }
};

// UPDATE PRICE IN LISTA
export const updatePriceInLista = async (req, res, next) => {
  try {
    const { id, priceId } = req.params;
    const priceData = req.body;
    const updatedPrice = await ListasServices.updatePriceInLista(
      id,
      priceId,
      priceData
    );
    if (!updatedPrice) {
      throw boom.notFound("Precio no encontrado.");
    } else {
      res.status(200).json(updatedPrice);
    }
  } catch (error) {
    next(error);
  }
};

// UPDATE ROLE IN LISTA
export const updateRoleInLista = async (req, res, next) => {
  try {
    const { id, roleId } = req.params;
    const roleData = req.body;
    const updatedRole = await ListasServices.updateRoleInLista(
      id,
      roleId,
      roleData
    );
    if (!updatedRole) {
      throw boom.notFound("Rol no encontrado.");
    } else {
      res.status(200).json(updatedRole);
    }
  } catch (error) {
    next(error);
  }
};

// UPDATE CONDITION DET IN ROLE
export const updateCondicionDetInRole = async (req, res, next) => {
  try {
    const { id, condicion, condicionDetId } = req.params;
    const condicionDetData = req.body;
    const updatedCondicionDet = await ListasServices.updateCondicionDetInRole(
      id,
      condicion,
      condicionDetId,
      condicionDetData
    );
    if (!updatedCondicionDet) {
      throw boom.notFound("Condición det no encontrada.");
    } else {
      res.status(200).json(updatedCondicionDet);
    }
  } catch (error) {
    next(error);
  }
};

// UPDATE PROMOTION IN LISTA
export const updatePromotionInLista = async (req, res, next) => {
  try {
    const { id, promoId } = req.params;
    const promoData = req.body;
    const updatedPromo = await ListasServices.updatePromotionInLista(
      id,
      promoId,
      promoData
    );
    if (!updatedPromo) {
      throw boom.notFound("Promoción no encontrada.");
    } else {
      res.status(200).json(updatedPromo);
    }
  } catch (error) {
    next(error);
  }
};

// UPDATE CONDITION IN PROMO
export const updateCondicionInPromo = async (req, res, next) => {
  try {
    const { id, IdTipoPromoOK, condicionId } = req.params;
    const condicionData = req.body;
    const updatedCondicion = await ListasServices.updateCondicionInPromo(
      id,
      IdTipoPromoOK,
      condicionId,
      condicionData
    );
    if (!updatedCondicion) {
      throw boom.notFound("Condición no encontrada.");
    } else {
      res.status(200).json(updatedCondicion);
    }
  } catch (error) {
    next(error);
  }
};

// UPDATE VALUE IN CONDITION IN PROMO
export const updateValorInCondicion = async (req, res, next) => {
  try {
    const { id, IdTipoPromoOK, IdEtiquetaOK, valorId } = req.params;
    const valorData = req.body;
    const updatedValor = await ListasServices.updateValorInCondicion(
      id,
      IdTipoPromoOK,
      IdEtiquetaOK,
      valorId,
      valorData
    );
    if (!updatedValor) {
      throw boom.notFound("Valor no encontrado.");
    } else {
      res.status(200).json(updatedValor);
    }
  } catch (error) {
    next(error);
  }
};

// UPDATE BUSINESS IN LISTA
export const updateBusinessInLista = async (req, res, next) => {
  try {
    const { id, businessId } = req.params;
    const businessData = req.body;
    const updatedBusiness = await ListasServices.updateBusinessInLista(
      id,
      businessId,
      businessData
    );
    if (!updatedBusiness) {
      throw boom.notFound("Negocio no encontrado.");
    } else {
      res.status(200).json(updatedBusiness);
    }
  } catch (error) {
    next(error);
  }
};

// DELETE LISTA
export const deleteLista = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedLista = await ListasServices.deleteLista(id);
    if (!deletedLista) {
      throw boom.notFound("Lista no encontrada.");
    } else {
      res.status(200).json({ message: "Lista eliminada con éxito." });
    }
  } catch (error) {
    next(error);
  }
};

// DELETE PRICE IN LISTA
export const deletePriceInLista = async (req, res, next) => {
  try {
    const { id, priceId } = req.params;
    const updatedPrices = await ListasServices.deletePriceInLista(id, priceId);
    if (!updatedPrices) {
      throw boom.notFound("Precio no encontrado.");
    } else {
      res.status(200).json(updatedPrices);
    }
  } catch (error) {
    next(error);
  }
};

// DELETE ROLE IN LISTA
export const deleteRoleInLista = async (req, res, next) => {
  try {
    const { id, roleId } = req.params;
    const updatedRoles = await ListasServices.deleteRoleInLista(id, roleId);
    if (!updatedRoles) {
      throw boom.notFound("Rol no encontrado.");
    } else {
      res.status(200).json(updatedRoles);
    }
  } catch (error) {
    next(error);
  }
};

// DELETE CONDITION DET IN ROLE
export const deleteCondicionDetInRole = async (req, res, next) => {
  try {
    const { id, condicion, condicionDetId } = req.params;
    const updatedCondicionDet = await ListasServices.deleteCondicionDetInRole(
      id,
      condicion,
      condicionDetId
    );
    if (!updatedCondicionDet) {
      throw boom.notFound("Condición det no encontrada.");
    } else {
      res.status(200).json(updatedCondicionDet);
    }
  } catch (error) {
    next(error);
  }
};

// DELETE PROMOTION IN LISTA
export const deletePromotionInLista = async (req, res, next) => {
  try {
    const { id, promoId } = req.params;
    const updatedPromotions = await ListasServices.deletePromotionInLista(
      id,
      promoId
    );
    if (!updatedPromotions) {
      throw boom.notFound("Promoción no encontrada.");
    } else {
      res.status(200).json(updatedPromotions);
    }
  } catch (error) {
    next(error);
  }
};

// DELETE CONDITION IN PROMO
export const deleteCondicionInPromo = async (req, res, next) => {
  try {
    const { id, IdTipoPromoOK, condicionId } = req.params;
    const updatedCondiciones = await ListasServices.deleteCondicionInPromo(
      id,
      IdTipoPromoOK,
      condicionId
    );
    if (!updatedCondiciones) {
      throw boom.notFound("Condición no encontrada.");
    } else {
      res.status(200).json(updatedCondiciones);
    }
  } catch (error) {
    next(error);
  }
};

// DELETE VALUE IN CONDITION IN PROMO
export const deleteValorInCondicion = async (req, res, next) => {
  try {
    const { id, IdTipoPromoOK, IdEtiquetaOK, valorId } = req.params;
    const updatedValores = await ListasServices.deleteValorInCondicion(
      id,
      IdTipoPromoOK,
      IdEtiquetaOK,
      valorId
    );
    if (!updatedValores) {
      throw boom.notFound("Valor no encontrado.");
    } else {
      res.status(200).json(updatedValores);
    }
  } catch (error) {
    next(error);
  }
};

// DELETE BUSINESS IN LISTA
export const deleteBusinessInLista = async (req, res, next) => {
  try {
    const { id, businessId } = req.params;
    const updatedNegocios = await ListasServices.deleteBusinessInLista(
      id,
      businessId
    );
    if (!updatedNegocios) {
      throw boom.notFound("Negocio no encontrado.");
    } else {
      res.status(200).json(updatedNegocios);
    }
  } catch (error) {
    next(error);
  }
};
