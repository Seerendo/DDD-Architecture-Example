import 'reflect-metadata';
import express from 'express';
const app = express();

async function main() {
  try {
    app.listen(3000, () => {
      console.log('Conectado a la base de datos');
      console.log('Server corriendo en el puerto', 3000);
    });
  } catch (error) {
    console.error(error);
  }
}

main();
