# ERP-API

## Instalación
### 1. Clonar el repositorio
    $ git clone https://github.com/devmyfriend/erp-productos-almacen.git
### 2. Dependencias
```bash

# Para instalar dependencias ejecuta este comando en la raíz:
$ npm install

```
### 3. Credenciales

```bash
# Antes de ejecutar el servidor, asegurate de crear tu archivo .env

DB_USER=root
DB_PASSWORD='root'
DB_HOST=localhost
DB_NAME='name'
DB_PORT=3306


```
## Linter
#### Este proyecto tiene reglas de eslint y prettier configuradas, se re comienda instalar as extenciones respectivas en visual studio code:

#### Eslint : dbaeumer.vscode-eslint

![image](https://user-images.githubusercontent.com/85807291/223141938-3e1dc625-0ca6-4074-b227-9dcfb6aadf47.png)


#### Prettier : esbenp.prettier-vscode

![image](https://user-images.githubusercontent.com/85807291/223141790-e59a323f-834b-461f-bccf-c767ce136354.png)


## Ejecutar el servidor
```bash
# Desarrollo:
$ npm run dev

# Formatear el código en general

$ npm run lint
```



## Estructura de carpetas
```bash
├─ src
│   ├───controllers
│   │
│   ├───database
│   │
│   ├───models
│   │
│   ├───routes
│   │
│   └───schemas
│
├── .env
│
├── README
│
│
├── app.js
│
├── index.js
│
│
├── DockerFile
│ 
└── docke-compose.yaml
```

## Swagger

#### Swagger es una herramienta usada para documentación de API y testing

#### Una vez la aplicacon se este ejecutando debe entrar en la siguiente URL:

    http://localhost:5000/docs




