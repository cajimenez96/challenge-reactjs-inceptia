2.1) ¿Cómo implementarías las acciones del frontend utilizando redux? (por ejemplo autenticación, solicitud de clientes activos para el usuario y solicitud de casos por cliente)
# `Para la implementación de Redux utilicé una branch llamada feature/redux la cual contiene el store y los slice correspondientes para la autenticación y solicitud de clientes y filtros.`

2.2) Si quisiéramos agregar una ruta nueva a la app, ¿cómo reestructurarías el index.js?
### `Actualmente el proyecto fué actualizado con vite y se agregó un archivo llamado routes.tsx el cual va a renderizar las rutas. Para agregar la ruta simplemente se debe agregar el componente Route con el path de la ruta y el componente a renderizar`