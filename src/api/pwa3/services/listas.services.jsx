import listas from "../models/listas";
import boom from "@hapi/boom";

// GET ALL LISTAS
export const getAllListas = async () => {
  let listasList;
  try {
    listasList = await listas.find();
    return listasList;
  } catch (error) {
    throw boom.internal(error);
  }
};

// GET LISTA BY ID
export const getLista = async (id) => {
  let listaItem;
  try {
    listaItem = await listas.findById(id);
    return listaItem;
  } catch (error) {
    throw boom.internal(error);
  }
};

// GET ALL PRICES IN LISTA
export const getAllPrices = async (id) => {
  try {
    const listaItem = await listas.findById(id);
    if (!listaItem) {
      throw boom.notFound("Lista no encontrada.");
    }

    const precios = listaItem.precios.map((precio) => ({
      IdProdServOK: precio.IdProdServOK,
      IdPresentaOK: precio.IdPresentaOK,
      PresentacionDelProducto: precio.PresentacionDelProducto,
      IdTipoFormulaOK: precio.IdTipoFormulaOK,
      Formula: precio.Formula,
      Precio: precio.Precio,
    }));

    return precios;
  } catch (error) {
    throw boom.internal(error.message);
  }
};

// GET ALL ROLES IN LISTA
export const getAllRoles = async (id) => {
  try {
    const listaItem = await listas.findById(id);
    if (!listaItem) {
      throw boom.notFound("Lista no encontrada.");
    }

    const roles = listaItem.roles.map((rol) => ({
      DesCondicion: rol.DesCondicion,
      FechaExpiraIni: rol.FechaExpiraIni,
      FechaExpiraFin: rol.FechaExpiraFin,
      Condicion: rol.Condicion,
    }));

    return roles;
  } catch (error) {
    throw boom.internal(error.message);
  }
};

// GET CONDICION DET BY CONDICION
export const getCondicionDet = async (id, condicion) => {
  try {
    const listaItem = await listas.findById(id);
    if (!listaItem) {
      throw boom.notFound("Lista no encontrada.");
    }

    const role = listaItem.roles.find((rol) => rol.Condicion === condicion);
    if (!role) {
      throw boom.notFound("Condición no encontrada.");
    }

    const condicionDet = role.condicion_det.map((cond) => ({
      IdTipoCondicionOK: cond.IdTipoCondicionOK,
      IdTipoOperadorOK: cond.IdTipoOperadorOK,
      // Valor: cond.Valor,
      Secuecia: cond.Secuecia,
    }));

    return condicionDet;
  } catch (error) {
    throw boom.internal(error.message);
  }
};

// GET VALOR BY ID TIPO CONDICION OK
export const getValorByIdTipoCondicionOK = async (
  id,
  condicion,
  IdTipoCondicionOK
) => {
  try {
    const listaItem = await listas.findById(id);
    if (!listaItem) {
      throw boom.notFound("Lista no encontrada.");
    }

    const role = listaItem.roles.find((rol) => rol.Condicion === condicion);
    if (!role) {
      throw boom.notFound("Condición no encontrada.");
    }

    const condicionDet = role.condicion_det.find(
      (cond) => cond.IdTipoCondicionOK === IdTipoCondicionOK
    );
    if (!condicionDet) {
      throw boom.notFound("Condición det no encontrada.");
    }

    return {
      Valor: condicionDet.Valor,
    };
  } catch (error) {
    throw boom.internal(error.message);
  }
};

// GET ALL PROMOTIONS IN LISTA
export const getAllPromotions = async (id) => {
  try {
    const listaItem = await listas.findById(id);
    if (!listaItem) {
      throw boom.notFound("Lista no encontrada.");
    }

    const promociones = listaItem.promociones.map((promo) => ({
      IdTipoPromoOK: promo.IdTipoPromoOK,
      DesPromo: promo.DesPromo,
      Formula: promo.Formula,
      FechaExpiraIni: promo.FechaExpiraIni,
      FechaExpiraFin: promo.FechaExpiraFin,
    }));

    return promociones;
  } catch (error) {
    throw boom.internal(error.message);
  }
};

// GET CONDICIONES BY PROMO ID
export const getCondicionesByPromo = async (id, IdTipoPromoOK) => {
  try {
    const listaItem = await listas.findById(id);
    if (!listaItem) {
      throw boom.notFound("Lista no encontrada.");
    }

    const promo = listaItem.promociones.find(
      (promo) => promo.IdTipoPromoOK === IdTipoPromoOK
    );
    if (!promo) {
      throw boom.notFound("Promoción no encontrada.");
    }

    const condiciones = promo.condiciones.map((cond) => ({
      IdEtiquetaOK: cond.IdEtiquetaOK,
      Etiqueta: cond.Etiqueta,
      IdOpComparaValores: cond.IdOpComparaValores,
      IdOpLogicoEtiqueta: cond.IdOpLogicoEtiqueta,
    }));

    return condiciones;
  } catch (error) {
    throw boom.internal(error.message);
  }
};

// GET VALORES BY ID ETIQUETA OK
export const getValoresByIdEtiquetaOK = async (
  id,
  IdTipoPromoOK,
  IdEtiquetaOK
) => {
  try {
    const listaItem = await listas.findById(id);
    if (!listaItem) {
      throw boom.notFound("Lista no encontrada.");
    }

    const promo = listaItem.promociones.find(
      (promo) => promo.IdTipoPromoOK === IdTipoPromoOK
    );
    if (!promo) {
      throw boom.notFound("Promoción no encontrada.");
    }

    const condicion = promo.condiciones.find(
      (cond) => cond.IdEtiquetaOK === IdEtiquetaOK
    );
    if (!condicion) {
      throw boom.notFound("Condición no encontrada.");
    }

    const valores = condicion.Valores.map((val) => ({
      Valor: val.valor,
      IdComparaValor: val.IdComparaValor,
    }));

    return valores;
  } catch (error) {
    throw boom.internal(error.message);
  }
};

// GET ALL BUSINESSES IN LISTA
export const getAllBusinesses = async (id) => {
  try {
    const listaItem = await listas.findById(id);
    if (!listaItem) {
      throw boom.notFound("Lista no encontrada.");
    }

    const negocios = listaItem.negocios.map((negocio) => ({
      IdNegocioOK: negocio.IdNegocioOK,
    }));

    return negocios;
  } catch (error) {
    throw boom.internal(error.message);
  }
};

// CREATE A NEW LISTA
export const createLista = async (data) => {
  try {
    const newLista = new listas(data);
    await newLista.save();
    return newLista;
  } catch (error) {
    throw boom.internal(error.message);
  }
};

// ADD NEW PRICE TO LISTA
export const addPriceToLista = async (id, priceData) => {
  try {
    const listaItem = await listas.findById(id);
    if (!listaItem) {
      throw boom.notFound("Lista no encontrada.");
    }

    listaItem.precios.push(priceData);
    await listaItem.save();

    return listaItem.precios;
  } catch (error) {
    throw boom.internal(error.message);
  }
};

// ADD NEW ROLE TO LISTA
export const addRoleToLista = async (id, roleData) => {
  try {
    const listaItem = await listas.findById(id);
    if (!listaItem) {
      throw boom.notFound("Lista no encontrada.");
    }

    listaItem.roles.push(roleData);
    await listaItem.save();

    return listaItem.roles;
  } catch (error) {
    throw boom.internal(error.message);
  }
};

// ADD NEW CONDITION DET TO ROLE
export const addCondicionDetToRole = async (
  id,
  condicion,
  condicionDetData
) => {
  try {
    const listaItem = await listas.findById(id);
    if (!listaItem) {
      throw boom.notFound("Lista no encontrada.");
    }

    const role = listaItem.roles.find((rol) => rol.Condicion === condicion);
    if (!role) {
      throw boom.notFound("Condición no encontrada.");
    }

    role.condicion_det.push(condicionDetData);
    await listaItem.save();

    return role.condicion_det;
  } catch (error) {
    throw boom.internal(error.message);
  }
};

// ADD NEW PROMOTION TO LISTA
export const addPromotionToLista = async (id, promoData) => {
  try {
    const listaItem = await listas.findById(id);
    if (!listaItem) {
      throw boom.notFound("Lista no encontrada.");
    }

    listaItem.promociones.push(promoData);
    await listaItem.save();

    return listaItem.promociones;
  } catch (error) {
    throw boom.internal(error.message);
  }
};

// ADD NEW CONDITION TO PROMO
export const addCondicionToPromo = async (id, IdTipoPromoOK, condicionData) => {
  try {
    const listaItem = await listas.findById(id);
    if (!listaItem) {
      throw boom.notFound("Lista no encontrada.");
    }

    const promo = listaItem.promociones.find(
      (promo) => promo.IdTipoPromoOK === IdTipoPromoOK
    );
    if (!promo) {
      throw boom.notFound("Promoción no encontrada.");
    }

    promo.condiciones.push(condicionData);
    await listaItem.save();

    return promo.condiciones;
  } catch (error) {
    throw boom.internal(error.message);
  }
};

// ADD NEW VALUE TO CONDITION IN PROMO
export const addValorToCondicion = async (
  id,
  IdTipoPromoOK,
  IdEtiquetaOK,
  valorData
) => {
  try {
    const listaItem = await listas.findById(id);
    if (!listaItem) {
      throw boom.notFound("Lista no encontrada.");
    }

    const promo = listaItem.promociones.find(
      (promo) => promo.IdTipoPromoOK === IdTipoPromoOK
    );
    if (!promo) {
      throw boom.notFound("Promoción no encontrada.");
    }

    const condicion = promo.condiciones.find(
      (cond) => cond.IdEtiquetaOK === IdEtiquetaOK
    );
    if (!condicion) {
      throw boom.notFound("Condición no encontrada.");
    }

    condicion.Valores.push(valorData);
    await listaItem.save();

    return condicion.Valores;
  } catch (error) {
    throw boom.internal(error.message);
  }
};

// ADD NEW BUSINESS TO LISTA
export const addBusinessToLista = async (id, businessData) => {
  try {
    const listaItem = await listas.findById(id);
    if (!listaItem) {
      throw boom.notFound("Lista no encontrada.");
    }

    listaItem.negocios.push(businessData);
    await listaItem.save();

    return listaItem.negocios;
  } catch (error) {
    throw boom.internal(error.message);
  }
};

// UPDATE LISTA
export const updateLista = async (id, data) => {
  try {
    const listaItem = await listas.findById(id);
    if (!listaItem) {
      throw boom.notFound("Lista no encontrada.");
    }

    // Only update the fields provided in data
    for (let key in data) {
      if (data.hasOwnProperty(key)) {
        listaItem[key] = data[key];
      }
    }

    await listaItem.save();

    return listaItem;
  } catch (error) {
    throw boom.internal(error.message);
  }
};

// UPDATE PRICE IN LISTA
export const updatePriceInLista = async (id, priceId, priceData) => {
  try {
    const listaItem = await listas.findById(id);
    if (!listaItem) {
      throw boom.notFound("Lista no encontrada.");
    }

    const priceIndex = listaItem.precios.findIndex(
      (price) => price.IdProdServOK.toString() === priceId
    );
    if (priceIndex === -1) {
      throw boom.notFound("Precio no encontrado.");
    }

    listaItem.precios[priceIndex] = {
      ...listaItem.precios[priceIndex].toObject(),
      ...priceData,
    };
    await listaItem.save();

    return listaItem.precios[priceIndex];
  } catch (error) {
    throw boom.internal(error.message);
  }
};

// UPDATE ROLE IN LISTA
export const updateRoleInLista = async (id, roleId, roleData) => {
  try {
    const listaItem = await listas.findById(id);
    if (!listaItem) {
      throw boom.notFound("Lista no encontrada.");
    }

    const roleIndex = listaItem.roles.findIndex(
      (role) => role.Condicion.toString() === roleId
    );
    if (roleIndex === -1) {
      throw boom.notFound("Rol no encontrado.");
    }

    // Only update the fields provided in roleData
    for (let key in roleData) {
      if (roleData.hasOwnProperty(key)) {
        listaItem.roles[roleIndex][key] = roleData[key];
      }
    }

    await listaItem.save();

    return listaItem.roles[roleIndex];
  } catch (error) {
    throw boom.internal(error.message);
  }
};

// UPDATE CONDITION DET IN ROLE
export const updateCondicionDetInRole = async (
  id,
  condicion,
  condicionDetId,
  condicionDetData
) => {
  try {
    const listaItem = await listas.findById(id);
    if (!listaItem) {
      throw boom.notFound("Lista no encontrada.");
    }

    const role = listaItem.roles.find((rol) => rol.Condicion === condicion);
    if (!role) {
      throw boom.notFound("Condición no encontrada.");
    }

    const condicionDetIndex = role.condicion_det.findIndex(
      (cond) => cond.IdTipoCondicionOK.toString() === condicionDetId
    );
    if (condicionDetIndex === -1) {
      throw boom.notFound("Condición det no encontrada.");
    }

    // Only update the fields provided in condicionDetData
    for (let key in condicionDetData) {
      if (condicionDetData.hasOwnProperty(key)) {
        role.condicion_det[condicionDetIndex][key] = condicionDetData[key];
      }
    }

    await listaItem.save();

    return role.condicion_det[condicionDetIndex];
  } catch (error) {
    throw boom.internal(error.message);
  }
};

// UPDATE PROMOTION IN LISTA
export const updatePromotionInLista = async (id, promoId, promoData) => {
  try {
    const listaItem = await listas.findById(id);
    if (!listaItem) {
      throw boom.notFound("Lista no encontrada.");
    }

    const promoIndex = listaItem.promociones.findIndex(
      (promo) => promo.IdTipoPromoOK.toString() === promoId
    );
    if (promoIndex === -1) {
      throw boom.notFound("Promoción no encontrada.");
    }

    // Only update the fields provided in promoData
    for (let key in promoData) {
      if (promoData.hasOwnProperty(key) && key !== "condiciones") {
        listaItem.promociones[promoIndex][key] = promoData[key];
      }
    }

    await listaItem.save();

    return listaItem.promociones[promoIndex];
  } catch (error) {
    throw boom.internal(error.message);
  }
};

// UPDATE CONDITION IN PROMO
export const updateCondicionInPromo = async (
  id,
  IdTipoPromoOK,
  condicionId,
  condicionData
) => {
  try {
    const listaItem = await listas.findById(id);
    if (!listaItem) {
      throw boom.notFound("Lista no encontrada.");
    }

    const promo = listaItem.promociones.find(
      (promo) => promo.IdTipoPromoOK === IdTipoPromoOK
    );
    if (!promo) {
      throw boom.notFound("Promoción no encontrada.");
    }

    const condicionIndex = promo.condiciones.findIndex(
      (cond) => cond.IdEtiquetaOK.toString() === condicionId
    );
    if (condicionIndex === -1) {
      throw boom.notFound("Condición no encontrada.");
    }

    // Only update the fields provided in condicionData
    for (let key in condicionData) {
      if (condicionData.hasOwnProperty(key) && key !== "Valores") {
        promo.condiciones[condicionIndex][key] = condicionData[key];
      }
    }

    await listaItem.save();

    return promo.condiciones[condicionIndex];
  } catch (error) {
    throw boom.internal(error.message);
  }
};

// UPDATE VALUE IN CONDITION IN PROMO
export const updateValorInCondicion = async (
  id,
  IdTipoPromoOK,
  IdEtiquetaOK,
  valorId,
  valorData
) => {
  try {
    const listaItem = await listas.findById(id);
    if (!listaItem) {
      throw boom.notFound("Lista no encontrada.");
    }

    const promo = listaItem.promociones.find(
      (promo) => promo.IdTipoPromoOK === IdTipoPromoOK
    );
    if (!promo) {
      throw boom.notFound("Promoción no encontrada.");
    }

    const condicion = promo.condiciones.find(
      (cond) => cond.IdEtiquetaOK === IdEtiquetaOK
    );
    if (!condicion) {
      throw boom.notFound("Condición no encontrada.");
    }

    const valorIndex = condicion.Valores.findIndex(
      (val) => val.valor.toString() === valorId
    );
    if (valorIndex === -1) {
      throw boom.notFound("Valor no encontrado.");
    }

    condicion.Valores[valorIndex] = {
      ...condicion.Valores[valorIndex].toObject(),
      ...valorData,
    };
    await listaItem.save();

    return condicion.Valores[valorIndex];
  } catch (error) {
    throw boom.internal(error.message);
  }
};

// UPDATE BUSINESS IN LISTA
export const updateBusinessInLista = async (id, businessId, businessData) => {
  try {
    const listaItem = await listas.findById(id);
    if (!listaItem) {
      throw boom.notFound("Lista no encontrada.");
    }

    const businessIndex = listaItem.negocios.findIndex(
      (business) => business.IdNegocioOK.toString() === businessId
    );
    if (businessIndex === -1) {
      throw boom.notFound("Negocio no encontrado.");
    }

    listaItem.negocios[businessIndex] = {
      ...listaItem.negocios[businessIndex].toObject(),
      ...businessData,
    };
    await listaItem.save();

    return listaItem.negocios[businessIndex];
  } catch (error) {
    throw boom.internal(error.message);
  }
};

// DELETE LISTA
export const deleteLista = async (id) => {
  try {
    const deletedLista = await listas.findByIdAndDelete(id);
    if (!deletedLista) {
      throw boom.notFound("Lista no encontrada.");
    }
    return deletedLista;
  } catch (error) {
    throw boom.internal(error.message);
  }
};

// DELETE PRICE IN LISTA
export const deletePriceInLista = async (id, priceId) => {
  try {
    const listaItem = await listas.findById(id);
    if (!listaItem) {
      throw boom.notFound("Lista no encontrada.");
    }

    const priceIndex = listaItem.precios.findIndex(
      (price) => price.IdProdServOK.toString() === priceId
    );
    if (priceIndex === -1) {
      throw boom.notFound("Precio no encontrado.");
    }

    listaItem.precios.splice(priceIndex, 1);
    await listaItem.save();

    return listaItem.precios;
  } catch (error) {
    throw boom.internal(error.message);
  }
};

// DELETE ROLE IN LISTA
export const deleteRoleInLista = async (id, roleId) => {
  try {
    const listaItem = await listas.findById(id);
    if (!listaItem) {
      throw boom.notFound("Lista no encontrada.");
    }

    const roleIndex = listaItem.roles.findIndex(
      (role) => role.Condicion.toString() === roleId
    );
    if (roleIndex === -1) {
      throw boom.notFound("Rol no encontrado.");
    }

    listaItem.roles.splice(roleIndex, 1);
    await listaItem.save();

    return listaItem.roles;
  } catch (error) {
    throw boom.internal(error.message);
  }
};

// DELETE CONDITION DET IN ROLE
export const deleteCondicionDetInRole = async (
  id,
  condicion,
  condicionDetId
) => {
  try {
    const listaItem = await listas.findById(id);
    if (!listaItem) {
      throw boom.notFound("Lista no encontrada.");
    }

    const role = listaItem.roles.find((rol) => rol.Condicion === condicion);
    if (!role) {
      throw boom.notFound("Condición no encontrada.");
    }

    const condicionDetIndex = role.condicion_det.findIndex(
      (cond) => cond.IdTipoCondicionOK.toString() === condicionDetId
    );
    if (condicionDetIndex === -1) {
      throw boom.notFound("Condición det no encontrada.");
    }

    role.condicion_det.splice(condicionDetIndex, 1);
    await listaItem.save();

    return role.condicion_det;
  } catch (error) {
    throw boom.internal(error.message);
  }
};

// DELETE PROMOTION IN LISTA
export const deletePromotionInLista = async (id, promoId) => {
  try {
    const listaItem = await listas.findById(id);
    if (!listaItem) {
      throw boom.notFound("Lista no encontrada.");
    }

    const promoIndex = listaItem.promociones.findIndex(
      (promo) => promo.IdTipoPromoOK.toString() === promoId
    );
    if (promoIndex === -1) {
      throw boom.notFound("Promoción no encontrada.");
    }

    listaItem.promociones.splice(promoIndex, 1);
    await listaItem.save();

    return listaItem.promociones;
  } catch (error) {
    throw boom.internal(error.message);
  }
};

// DELETE CONDITION IN PROMO
export const deleteCondicionInPromo = async (
  id,
  IdTipoPromoOK,
  condicionId
) => {
  try {
    const listaItem = await listas.findById(id);
    if (!listaItem) {
      throw boom.notFound("Lista no encontrada.");
    }

    const promo = listaItem.promociones.find(
      (promo) => promo.IdTipoPromoOK === IdTipoPromoOK
    );
    if (!promo) {
      throw boom.notFound("Promoción no encontrada.");
    }

    const condicionIndex = promo.condiciones.findIndex(
      (cond) => cond.IdEtiquetaOK.toString() === condicionId
    );
    if (condicionIndex === -1) {
      throw boom.notFound("Condición no encontrada.");
    }

    promo.condiciones.splice(condicionIndex, 1);
    await listaItem.save();

    return promo.condiciones;
  } catch (error) {
    throw boom.internal(error.message);
  }
};

// DELETE VALUE IN CONDITION IN PROMO
export const deleteValorInCondicion = async (
  id,
  IdTipoPromoOK,
  IdEtiquetaOK,
  valorId
) => {
  try {
    const listaItem = await listas.findById(id);
    if (!listaItem) {
      throw boom.notFound("Lista no encontrada.");
    }

    const promo = listaItem.promociones.find(
      (promo) => promo.IdTipoPromoOK === IdTipoPromoOK
    );
    if (!promo) {
      throw boom.notFound("Promoción no encontrada.");
    }

    const condicion = promo.condiciones.find(
      (cond) => cond.IdEtiquetaOK === IdEtiquetaOK
    );
    if (!condicion) {
      throw boom.notFound("Condición no encontrada.");
    }

    const valorIndex = condicion.Valores.findIndex(
      (val) => val.valor.toString() === valorId
    );
    if (valorIndex === -1) {
      throw boom.notFound("Valor no encontrado.");
    }

    condicion.Valores.splice(valorIndex, 1);
    await listaItem.save();

    return condicion.Valores;
  } catch (error) {
    throw boom.internal(error.message);
  }
};

// DELETE BUSINESS IN LISTA
export const deleteBusinessInLista = async (id, businessId) => {
  try {
    const listaItem = await listas.findById(id);
    if (!listaItem) {
      throw boom.notFound("Lista no encontrada.");
    }

    const businessIndex = listaItem.negocios.findIndex(
      (business) => business.IdNegocioOK.toString() === businessId
    );
    if (businessIndex === -1) {
      throw boom.notFound("Negocio no encontrado.");
    }

    listaItem.negocios.splice(businessIndex, 1);
    await listaItem.save();

    return listaItem.negocios;
  } catch (error) {
    throw boom.internal(error.message);
  }
};
