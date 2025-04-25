let productos = [];
let idActual = 1;

function obtenerTodos() {
  return productos;
}

function obtenerPorId(id) {
  return productos.find(p => p.id === id);
}

function crearProducto(producto) {
  const nuevo = { id: idActual++, ...producto };
  productos.push(nuevo);
  return nuevo;
}

function eliminarProducto(id) {
  const index = productos.findIndex(p => p.id === id);
  if (index === -1) return false;
  productos.splice(index, 1);
  return true;
}

module.exports = {
  obtenerTodos,
  obtenerPorId,
  crearProducto,
  eliminarProducto
};
