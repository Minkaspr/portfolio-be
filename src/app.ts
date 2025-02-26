import dotenv from 'dotenv';
dotenv.config();

import app from './server/server';
import { testConnection } from './server/prisma';

const PORT = process.env.PORT || 3000;
const AUTHOR = process.env.AUTHOR || "Desconocido";

/* async function startServer() {
  // Verificar conexión a la BD antes de iniciar el servidor
  await testConnection(); 

  app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
    console.log(`👨‍💻 Desarrollado por: ${AUTHOR}`);
  });
}

startServer(); */

testConnection().then(() => {
  if (process.env.VERCEL !== "1") {
    app.listen(PORT, () => {
      console.log(`🚀 Server is running on port ${PORT}`);
      console.log(`👨‍💻 Desarrollado por: ${AUTHOR}`);
    });
  }
});

export default app;