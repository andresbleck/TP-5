const datos = require('./data.js');

function listarProductos() {
  return datos.obtenerTodos();
}

function obtenerProductoPorId(id) {
  const producto = datos.obtenerPorId(id);
  if (!producto) throw new Error('Producto no encontrado');
  return producto;
}

function agregarProducto(nombre, precio) {
  if (!nombre || !precio) throw new Error('Nombre y precio son requeridos');
  return datos.crearProducto({ nombre, precio });
}


function eliminarProducto(id) {
  const eliminado = datos.eliminarProducto(id);
  if (!eliminado) throw new Error('Producto no encontrado');
  return eliminado;
}

module.exports = {
  listarProductos,
  obtenerProductoPorId,
  agregarProducto,
  eliminarProducto
};
