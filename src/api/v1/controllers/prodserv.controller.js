import * as ProdServServices from '../services/prodServ.service';
import boom from '@hapi/boom';

//FIC: API GET
//----------------------------------------
//FIC: Todos los Productos/Servicios.
export const getProdServList = async (req, res, next) => {
  try {
    const prodServList = await ProdServServices.getProdServList();
    if (!prodServList) {
      throw boom.notFound('No se encontraron productos/servicios registrados.');
    } else if (prodServList) {
      res.status(200).json(prodServList);
    }

  } catch (error) {
    next(error);
  }
};

//FIC: Solo un Producto/Servicio.
export const getProdServItem = async (req, res, next) => {
  try {
    //FIC: obtener parametro id mediante la
    //desestructuracion de objetos
    const { id } = req.params;
    //FIC: se obtiene parametro de la forma
    //clase/objeto.
    //const idProdServ = req.params.id;
    const keyType = req.query.keyType || 'OK';
    const prodServItem = await ProdServServices.getProdServItem(id, keyType);
    if (!prodServItem) {
      throw boom.notFound('No se encontraron productos/servicios registrados.');
    } else if (prodServItem) {
      res.status(200).json(prodServItem);
    }
  } catch (error) {
    next(error);
  }
};


//FIC: API POST.
//----------------------------------------
//FIC: API POST (ADD) Producto y/o Servicio.
export const postProdServItem = async (req, res, next) => {
  try {
    const paProdServItem = req.body;
    const newProdServItem = await ProdServServices.postProdServItem(paProdServItem);
    if (!newProdServItem) {
      throw boom.badRequest('No se pudo crear el Producto y/o Servicio.');
    } else if (newProdServItem) {
      res.status(201).json(newProdServItem);
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
};

//Commerce
//FIC: API PUT (UPDATE) Productos y/o Servicios.
export const putProdServItem = async (req, res, next) => {
  try {
    const { id } = req.params;
    const keyType = req.query.keyType || 'OK';
    const updatedFields = req.body;
    const updatedProdServItem = await ProdServServices.putProdServItem(id, keyType, updatedFields);
    if (!updatedProdServItem) {
      throw boom.notFound('No se encontró el Producto y/o Servicio a actualizar.');
    } else {
      res.status(200).json(updatedProdServItem);
    }
  } catch (error) {
    next(error);
  }
};

//Commerce
//FIC: API DELETE (DELETE) Productos y/o Servicios.
export const deleteProdServItem = async (req, res, next) => {
  try {
    const { id } = req.params;
    const keyType = req.query.keyType || 'OK';
    const deletedProdServItem = await ProdServServices.deleteProdServItem(id, keyType);
    if (!deletedProdServItem) {
      throw boom.notFound('No se encontró el Producto y/o Servicio a eliminar.');
    } else {
      res.status(204).send();
    }
  } catch (error) {
    next(error);
  }
};
