const { faker } = require("@faker-js/faker");
const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017";
// const uri =
//   "mongodb+srv://GenesisPriscete:priscete051@cluster0.jjeoklm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri);

async function insertTokens(cantidad) {
  try {
    const database = client.db("BarberShop");
    const coleccion = database.collection("tokensAdmins");

    // Eliminar la colección si existe
    await coleccion.deleteMany({});

    // Generar tokens aleatorios
    const tokens = Array.from({ length: cantidad }, () => ({
      token: faker.string.alphanumeric(6), // Generar un string alfanumérico de 6 caracteres
    }));

    const result = await coleccion.insertMany(tokens);
    console.log(`${result.insertedCount} tokens insertados correctamente.`);
  } catch (err) {
    console.error("Error insertando tokens:", err);
  } finally {
    await client.close(); // Cerrar la conexión después de insertar
  }
}

insertTokens(6);
