/* eslint-disable @typescript-eslint/no-require-imports */
const { faker } = require("@faker-js/faker");
const { MongoClient } = require("mongodb");

// const uri = "mongodb://localhost:27017";
const uri =
  "mongodb+srv://GenesisPriscete:priscete051@cluster0.jjeoklm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri);

async function insertBarbers(cantidad = 6) {
  try {
    const database = client.db("BarberShop");
    const coleccion = database.collection("barbers");

    // Eliminar la colección si existe
    await coleccion.deleteMany({});

    const barbers = Array.from({ length: cantidad }, () => ({
      name: faker.person.fullName(),
      rol: faker.helpers.arrayElement(["Fundador", "Barbero"]),
      description: `Hola chicos, soy ${faker.person.firstName()} de ${faker.location.city()}. Soy director de arte senior y ${faker.helpers.arrayElement(
        ["fundador", "barbero"]
      )} de The Barber Shop ${faker.helpers.arrayElement([
        "Company",
        "Market",
        "Website",
      ])}.`,
      image: faker.image.urlPicsumPhotos({ width: 300, height: 300 }),
    }));

    const result = await coleccion.insertMany(barbers);
    console.log(`${result.insertedCount} barberos insertados correctamente.`);
  } catch (err) {
    console.error("Error insertando barberos:", err);
  }
}

async function insertServices(cantidad = 6) {
  try {
    const database = client.db("BarberShop");
    const coleccion = database.collection("services");

    // Eliminar la colección si existe
    await coleccion.deleteMany({});

    const services = Array.from({ length: cantidad }, () => ({
      title: faker.helpers.arrayElement([
        "Cuidado de Barba y Bigote",
        "Sesión de Fotos en Estudio",
        "Limpieza Detallada con Plumas",
        "Formación de la Barba",
        "Cuidado Facial y de la Piel",
        "Lavado de Cabello",
      ]),
      description: faker.lorem.sentences(2),
      image: faker.image.urlPicsumPhotos({ width: 300, height: 300 }),
    }));

    const result = await coleccion.insertMany(services);
    console.log(`${result.insertedCount} servicios insertados correctamente.`);
  } catch (err) {
    console.error("Error insertando servicios:", err);
  }
}

async function run() {
  try {
    await client.connect();
    await insertBarbers(6);
    await insertServices(6);
  } catch (err) {
    console.error("Error en la inserción de datos:", err);
  } finally {
    await client.close();
  }
}

run();
