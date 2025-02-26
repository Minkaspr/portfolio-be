# 🚀 Express + TypeScript Starter

Este proyecto es una configuración básica para iniciar una API con **Express y TypeScript** desde cero.

---

## 📌 Requisitos previos

- **Node.js** instalado (versión recomendada: `>=16`)
- **pnpm** instalado globalmente (`npm i -g pnpm`) (Opcional, pero recomendado)

---

## 📥 Instalación

Clona este repositorio y sigue los pasos:

```sh
# 1️⃣ Clonar el repositorio
git clone <URL_DEL_REPOSITORIO>
cd nombre-del-proyecto

# 2️⃣ Instalar dependencias
pnpm install  # O usa npm install

# 3️⃣ Crear el archivo .env
cp .env.example .env  # Copia el archivo de ejemplo
```

---

## 🔧 Configuración del archivo `.env`

Debes crear un archivo **`.env`** en la raíz del proyecto con las siguientes variables:

```ini
PORT=4000
AUTHOR=TuNombre
```

Si `PORT` no está definido, se usará el puerto **3000** por defecto.

---

## 🚀 Scripts disponibles

En el archivo `package.json` encontrarás los siguientes comandos:

```json
"scripts": {
  "dev": "ts-node-dev --respawn --transpile-only src/app.ts",
  "build": "tsc",
  "start": "npm run build && node ./dist/app.js"
}
```

- **`npm run dev`** → Ejecuta el servidor en desarrollo con recarga automática.
- **`npm run build`** → Compila el código TypeScript a JavaScript.
- **`npm run start`** → Compila el código y ejecuta el servidor en producción.

---

## 🛠 Tecnologías utilizadas

- **TypeScript**
- **Express**
- **dotenv** (Para manejar variables de entorno en desarrollo)

---

## 📌 Estructura del proyecto

```
📦 src
 ┣ 📂modules
 ┣ 📂routes
 ┣ 📂server
 ┗ 📜app.ts
```

- `app.ts` → Punto de entrada de la aplicación.
- `server/` → Configuración del servidor Express.
- `routes/` → Definición de rutas de la API.
- `modules/` → Módulos de la aplicación.

---

## 🚀 Despliegue

Si despliegas en plataformas como **Railway, Vercel o Render**, recuerda:

1. **No subas el `.env` a Git** (`.gitignore` ya lo maneja).
2. **Configura las variables de entorno en la plataforma**.
3. **Ejecuta `npm run start` en producción**.

---

## 🚀 Crear un Proyecto Express con TypeScript desde Cero

Si deseas crear un nuevo proyecto desde cero, sigue estos pasos:

### 1️⃣ Inicializar el proyecto
```sh
npm init -y
```

### 2️⃣ Instalar dependencias
```sh
npm install express dotenv
```

### 3️⃣ Instalar dependencias de desarrollo
```sh
npm install -D typescript @types/express ts-node-dev
```

### 4️⃣ Generar configuración de TypeScript
```sh
npx tsc --init
```

### 5️⃣ Configurar `tsconfig.json`
Edita el archivo `tsconfig.json` para definir las carpetas de entrada y salida:

```json
{
  "compilerOptions": {
    "target": "ES6",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "moduleResolution": "node"
  },
  "include": ["src"],
  "exclude": ["node_modules"]
}
```

### 6️⃣ Crear la estructura del proyecto
```sh
mkdir src
cd src
mkdir routes modules server
```
Crea los archivos principales:
```sh
touch src/app.ts src/routes/routes.ts src/server/server.ts
```

### 7️⃣ Configurar `app.ts`
Dentro de `src/app.ts`:
```ts
import express from 'express';
import routes from "./routes/routes";

const app = express();

app.use(express.json());
app.use("/api/v1", routes);

export default app;
```

### 8️⃣ Configurar `server.ts`
Dentro de `src/server/server.ts`:
```ts
import app from "../app";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
```

### 9️⃣ Configurar `routes.ts`
Dentro de `src/routes/routes.ts`:
```ts
import { Router } from "express";
const router = Router();

router.get("/", (req, res) => {
  res.send("Hello World");
});

export default router;
```

### 🔟 Configurar scripts en `package.json`
Edita `package.json` y reemplaza la sección de scripts:

```json
"scripts": {
  "dev": "ts-node-dev --respawn --transpile-only src/app.ts",
  "build": "tsc",
  "start": "npm run build && node ./dist/app.js"
}
```

### 🚀 Ejecutar la aplicación

Para correr en desarrollo:
```sh
npm run dev
```

Para compilar y ejecutar en producción:
```sh
npm run start
```

### 🎯 ¡Listo! Ya tienes tu base de Express con TypeScript funcionando. 🚀

---

¡Con esto puedes iniciar un nuevo proyecto o configurar uno desde cero de manera sencilla! 🚀🔥



