# ⚙️ proyecto Bit Backend by jonathan viracachá

Backend del proyecto **Bit**, desarrollado con Node.js, Express y MongoDB. 
Provee la API para gestionar clientes y registros financieros.

## 🚀 Tecnologías
- Node.js
- Express
- MongoDB con Mongoose
- Dotenv
- Cors

## 📂 Estructura del proyecto
```
src/
 ├── config/        # Configuración de base de datos y entorno
 ├── controllers/   # Lógica de negocio
 ├── models/        # Modelos de datos (Mongoose)
 ├── routers/       # Definición de rutas API
 └── server.js      # Punto de entrada del servidor
```

## ⚙️ Instalación
Clona el repositorio:
```bash
git clone https://github.com/Jviracacha/bit-backend.git
cd bit-backend
```

Instala dependencias:
```bash
npm install
```

Configura las variables de entorno:
Crea un archivo `.env` en la raíz con el contenido de `.env.example`

Ejemplo:
```
PORT=4000
MONGO_URI=mongodb://localhost:27017/bitdb
```

## ▶️ Ejecución
En modo desarrollo:
```bash
npm run dev
```

En modo producción:
```bash
npm start
```

## 📡 Endpoints principales
- `GET /api/clientes` → Listar clientes
- `POST /api/clientes` → Crear cliente
- `GET /api/registros` → Listar registros
- `POST /api/registros` → Crear registro
