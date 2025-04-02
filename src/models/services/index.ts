import ConnectionMongoDB from "@/services/mongoDB";
import { NewService, UpdateService } from "@/types/services";
import { ObjectId } from "mongodb";

async function getAllServices() {
  const client = await ConnectionMongoDB.getConnection();
  if (!client) {
    throw new Error("Error connecting to MongoDB");
  }
  const database = client.db("BarberShop");
  const services = database.collection("services");
  return await services.find().toArray();
}

async function newService(newService: NewService) {
  const client = await ConnectionMongoDB.getConnection();
  if (!client) {
    throw new Error("Error connecting to MongoDB");
  }
  const database = client.db("BarberShop");
  const services = database.collection("services");

  const result = await services.insertOne(newService);
  if (!result.acknowledged) {
    throw new Error("Error inserting service into MongoDB");
  }
  return result.insertedId.toString();
}

async function updateService(updateService: UpdateService) {
  const { _id, description, image, title } = updateService;
  if (!_id) {
    throw new Error("ID is required to update a service");
  }

  console.log("ID", _id);

  const client = await ConnectionMongoDB.getConnection();
  if (!client) {
    throw new Error("Error connecting to MongoDB");
  }
  const database = client.db("BarberShop");
  const services = database.collection("services");
  const filter = { _id: new ObjectId(_id) };
  const update = {
    $set: {
      ...(description && { description }),
      ...(image && { image }),
      ...(title && { title }),
    },
  };
  const result = await services.updateOne(filter, update);
  if (!result.acknowledged) {
    throw new Error("Error updating service in MongoDB");
  }
  return result.modifiedCount > 0;
}

async function deleteService(id: string) {
  const client = await ConnectionMongoDB.getConnection();
  if (!client) {
    throw new Error("Error connecting to MongoDB");
  }
  const database = client.db("BarberShop");
  const services = database.collection("services");
  const filter = { _id: new ObjectId(id) };
  const result = await services.deleteOne(filter);
  if (!result.acknowledged) {
    throw new Error("Error deleting service in MongoDB");
  }
  return result.deletedCount > 0;
}

export { getAllServices, newService, updateService, deleteService };
