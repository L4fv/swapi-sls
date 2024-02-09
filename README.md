# API-CANAL-SOAT
Servicio que incluye todas las funciones necesarias para cotizar un producto.

## Getting Started
A continuación se listarán las instruciones neecesarias para ejecutar el API desde una máquina local.

### Pre requisites

```
nodejs v18.20.0
Visual Studio Code (o tu IDE preferido)
```

### Installing

Para realizar la instalación se deben ejecutar los siguientes comandos:

```
npm install

npm install -g serverless
```

Además, se debe solicitar en archivo *env.yml* a la persona responsable del proyecto y copiarlo en la raíz del proyecto, ete archivo contiene las conexiones a diferentes fuentes de datos.

## Running the tests

Para ejecutar las pruebas unitarias del proyecto se debe ejecutar el comando: 

```
npm test
```

Para ejecutar las pruebas unitarias del proyecto y obtener el coverage alcanado se debe ejecutar el comando: 

```
npm run-scrip testc
```

Para ejecutar las pruebas unitarias de una determinada función o sólo una prueba unitaria por su descripción se debe ejecutar el comando: 

```
npm run-scrip testw
```
### Break down into end to end tests

Esta prueba se puede realizar de las siguientes dos formas: 
La primera es probar los endpoints generados en el proyecto, para esto se instanciará un servidor local en la PC ejecuntando el siguiente comando:

```
npm start
```

La segunda es probar cada funcion completa, para esto se debe ejecutar el siguiente comando tomando en cuenta reemplazar myfunction por el nombre de la función a probar:

```
npm run-script start-myfunction
```

### Coding style tests

Esta prueba se realiza para revisar el código escrito y señalar errores y posibles bugs que podemos corregir para mejorar nuestros programas. Para ejecutar esta prueba se debe ejecutar el comando:  

```
npm run-scrip lint
```

## Deployment

Los despliegues en desarrollo y test se realizan mediante Jenkins haciendo un git push al proyecto. Para realizar un mantenimiento deberá de solicitar un pull request para que las personas a cargo del proyecto puedan realizar la acción.

## Built With

* [serverless framework](https://serverless.com/framework/docs/getting-started/) - To build serverless applications
* [NPM](https://www.npmjs.com/) - Dependency Management
* [JEST](https://rometools.github.io/rome/) - To build unit testing

## TODOs:

- Función Crear Cotización - createCotizacion
- Función Crear Cronograma de Pago - createCronogramaPago
- Función Obtener Cotización - getCotizacion
- Función Ejecutar Motor de Formula - executeMotorReglas
- Función Ejecutar Motor de Reglas - executeMotorFormulas


## Versioning

Se usa [SemVer](http://semver.org/) para organizar los versionamientos. Para las versiones disponibles, ver los [tags en este repositorio](http://10.126.11.131/cotizacion/api-prima). 

## Authors

* **Arturo Galvez**
