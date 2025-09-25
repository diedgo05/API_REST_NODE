const productController = require('../controllers/productController');

class Router {
  
  handle(req, res) {
    const { method, path, query } = req;
    
    // Solo aceptar GET requests
    if (method !== 'GET') {
      res.writeHead(405);
      res.end(JSON.stringify({ error: 'Método no permitido' }));
      return;
    }
    
    // Definir rutas
    if (path === '/api/productos') {
      productController.getAll(req, res, query);
    } 
    else if (path.startsWith('/api/productos/')) {
      const id = path.split('/')[3]; // Extraer ID de la URL
      productController.getById(req, res, id);
    } 
    else if (path === '/') {
      // Ruta de bienvenida
      res.writeHead(200);
      res.end(JSON.stringify({ 
        message: 'Bienvenido a la API de Productos',
        rutas: [
          'GET /api/productos',
          'GET /api/productos/:id'
        ]
      }, null, 2));
    }
    else {
      // 404 - Ruta no encontrada
      res.writeHead(404);
      res.end(JSON.stringify({ error: 'Ruta no encontrada' }));
    }
  }
}

module.exports = new Router();