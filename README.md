# AngularAppDgmxTech

Este es un proyecto de ejemplo de una aplicación web desarrollada con Angular para la empresa DgmxTech.

## Descripción

Este proyecto es una aplicación web desarrollada con Angular y con backend desarrollado con NodeJs y hace uso de Sequelize.

## Características

- [x] Listado de Pedidos.
- [x] Edición de Pedidos.
- [x] Agregar Pedidos.
- [x] Integración con servicios RESTful.

## Tecnologías Utilizadas

- Angular
- TypeScript
- HTML5
- CSS3
- Bootstrap
- NodeJS
- Express
- Sequelize
- toastr

## Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/CorvoHyatt/AngularAppDgmxTech.git
cd AngularAppDgmxTech
```
### Ejecutar el Backend

1. Accede a la carpeta del backend
```bash
cd backend
npm install
npm run serve
```
El servidor estará disponible en `http://localhost:3000/`.


2. Ejecuta los scripts del backend para definir la base de datos y los datos iniciales
```bash
     cd backend\src\scripts
     mysql -u usuario -p < database_schema.sql
     mysql -u usuario -p < seed_data.sql
```
Asegúrate de reemplazar `usuario` con el nombre de usuario de tu base de datos y proporcionar la contraseña cuando se solicite.

### Ejecutar el frontend

1. Dirigete a la carpeta del frontend
```bash
cd frontend
npm install
```
2. Inicia la aplicación Angular:

```bash
ng serve
```

La aplicación estará disponible en `http://localhost:4200/`.

## Contribución

Las contribuciones son bienvenidas. Si encuentras algún error o tienes alguna sugerencia de mejora, por favor, abre un issue o envía un pull request.

## Licencia

Este proyecto está bajo la licencia [MIT](LICENSE).
