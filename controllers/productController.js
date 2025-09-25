const ProductModel = require('../models/productModel');

class ProductController {
  
  // GET /api/productos
  getAll(req, res, query) {
    try {
      const productos = ProductModel.getAll(query);
      
      const respuesta = {
        success: true,
        total: productos.length,
        data: productos
      };
      
      res.writeHead(200);
      res.end(JSON.stringify(respuesta, null, 2));
    } catch (error) {
      res.writeHead(500);
      res.end(JSON.stringify({ 
        success: false, 
        error: 'Error al obtener productos' 
      }));
    }
  }

  // GET /api/productos/:id
  getById(req, res, id) {
    try {
      // Validar que el ID sea un número
      if (isNaN(parseInt(id))) {
        res.writeHead(400);
        res.end(JSON.stringify({ 
          success: false, 
          error: 'ID debe ser un número' 
        }));
        return;
      }

      const producto = ProductModel.getById(id);
      
      if (!producto) {
        res.writeHead(404);
        res.end(JSON.stringify({ 
          success: false, 
          error: 'Producto no encontrado' 
        }));
        return;
      }

      res.writeHead(200);
      res.end(JSON.stringify({ 
        success: true, 
        data: producto 
      }, null, 2));
    } catch (error) {
      res.writeHead(500);
      res.end(JSON.stringify({ 
        success: false, 
        error: 'Error al obtener producto' 
      }));
    }
  }
}

module.exports = new ProductController();