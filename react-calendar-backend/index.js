const { connectDB } = require("./database/config");
const { config } = require("dotenv");
const { green } = require('colors');
const app = require('./app');

config();

const PORT = process.env.PORT;

async function main() {
  await connectDB();

  app.listen(PORT, () =>
    console.log(`${green('Servidor corriendo en puerto ' + PORT)}`)
  );
}

main();
