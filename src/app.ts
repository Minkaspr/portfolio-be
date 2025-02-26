import app from './server/server';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 3000;
const AUTHOR = process.env.AUTHOR || "Desconocido";

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
  console.log(`👨‍💻 Desarrollado por: ${AUTHOR}`);
});