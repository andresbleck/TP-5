# TP-5
Qué características hacen que esta sea una API REST?
 - Usa HTTP como prrotocolo.
 - Cada acción (Crear, Leer, Eliminar) se hace con su verbo HTTP correspondiente.
 - Es sttateless, Cada petición contiene toda la info necesaria. El servidor no guarda estado entre peticiones.
 - Respuestas en formato json.
 - La forma de interactuar con la API es consistente en todos los endpoints.
   
Qué diferencias hay entre este diseño y el de la arquitectura de 3 capas anterior. Los cambios realizados fueron:
- Usás los verbos HTTP adecuados para CRUD.
- URLs limpias, orientadas a recursos (REST).
- Respuestas en JSON + códigos HTTP correctos (201, 404, etc.).
- Cada request es independiente (sin estado).
- Manejo de errores con try/catch y respuestas claras.
- Ahora es mas facil de consumir para los diferejtes dispositivos, movil, web , etc.
- Mas facil y ligera de escalar
