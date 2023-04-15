# Proyecto final Coderhouse Backend

## Informacion:

Este es mi proyecto final para el curso de desarrollo backend en el cual utilizamos nodejs y express.
Utiliza el modelo vista controlador (MVC) y usa mongodb atlas para almacenamiento en la nube.

## Contenido:

- Es un ecommerce que a la vez contiene la opcion de editar, crear o borrar productos.
- Tiene un sistema de logeo utilizando passportJS y passport-local.
- Utiliza plantillas de ejs para mostrar todas las vistas.
- Tambien contiene un chat realizado con socket.io donde se chatea en tiempo real.
- Su deploy esta en render.com.


## Comandos

Para inicio:

```
npm run start
```

## Explicando cada carpeta/archivo:

- public/views: se encuentran las vistas hechas con ejs.
- src: encuentro todo el codigo de mi app.
- src/api: es donde hago peticiones a la base de datos.
- src/controllers: es donde manejo como funciona cada ruta.
- src/db: es donde hago la conexion a la base de datos.
- src/models: es donde hago los modelos de datos con el orm de mongoose.
- src/routes: es donde organizo mis rutas y apunto a cada controlador segun lo que se requiera,todas las rutas estan a index.routes.js donde se encuentra el archivo principal donde manejo todas las rutas.
- src/utils: es donde hago funciones de utilidad que utilizo en distintos puntos de la app.
- server.js: es el archivo incial donde arranca el servidor.

## Rutas:

Se recomienda utilizar el front-end desarrollado ya que utilizando postman por ejemplo para hacer peticiones, no va a dejar hacerlo ya que todas las rutas requieren de la autenticacion del usuario para poder pasar por ellas.

- /api/productos
- /api/registro
- /api/login
- /api/logout
- /api/carrito
- /api/checkout
- /api/mensajes

y dentro de cada una tiene sus rutas especificas.
