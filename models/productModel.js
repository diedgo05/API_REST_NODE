class ProductoModel {
    constructor() {
      this.productos = [
        {
          id: 1,
          nombre: "Laptop Dell",
          precio: 1200,
          categoria: "tecnologia"
        },
        {
          id: 2,
          nombre: "iPhone 15",
          precio: 999,
          categoria: "tecnologia"
        },
        {
          id: 3,
          nombre: "Silla Oficina",
          precio: 350,
          categoria: "oficina"
        },
        {
          id: 4,
          nombre: "Monitor 4K",
          precio: 450,
          categoria: "tecnologia"
        }
      ];
    }
  
    // Obtener todos los productos
    getAll(filtros = {}) {
      let resultado = this.productos;
      
      // Filtrar por categoría si se especifica
      if (filtros.categoria) {
        resultado = resultado.filter(p => p.categoria === filtros.categoria);
      }
      
      // Filtrar por precio máximo
      if (filtros.precio_max) {
        const max = parseFloat(filtros.precio_max);
        resultado = resultado.filter(p => p.precio <= max);
      }
      
      return resultado;
    }
  
    // Obtener producto por ID
    getById(id) {
      const numericId = parseInt(id);
      return this.productos.find(p => p.id === numericId);
    }
  }
  
  module.exports = new ProductoModel();
  