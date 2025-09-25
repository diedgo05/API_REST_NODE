const http = require('http');
const url = require('url');
const router = require('./routes/productRouter');

const PORT = 3000;

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  req.path = parsedUrl.pathname;
  req.query = parsedUrl.query;
  
  // Headers CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');
  
  console.log(`${req.method} ${req.path}`);
  
  // Procesar la ruta usando el router
  router.handle(req, res);
});

server.listen(PORT, () => {
  console.log(`🚀 Servidor ejecutándose en http://localhost:${PORT}`);
  console.log(`📋 Rutas disponibles:`);
  console.log(`   GET /api/productos`);
  console.log(`   GET /api/productos/1`);
});