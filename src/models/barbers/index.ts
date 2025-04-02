import ConnectionMongoDB from "@/services/mongoDB";
import { NewBarber, UpdateBarber } from "@/types/barbers";
import { ObjectId } from "mongodb";

async function getAllBarbers() {
  const client = await ConnectionMongoDB.getConnection();
  if (!client) {
    throw new Error("Error connecting to MongoDB");
  }
  const database = client.db("BarberShop");
  const barbers = database.collection("barbers");
  return await barbers.find().toArray();
}

async function newBarber(newBarber: NewBarber) {
  const client = await ConnectionMongoDB.getConnection();
  if (!client) {
    throw new Error("Error connecting to MongoDB");
  }
  const database = client.db("BarberShop");
  const barbers = database.collection("barbers");
  const result = await barbers.insertOne(newBarber);
  if (!result.acknowledged) {
    throw new Error("Error inserting service into MongoDB");
  }
  return result.insertedId.toString();
}

async function updateBarber(updateBarber: UpdateBarber) {
  const { _id, description, image, name, rol } = updateBarber;
  if (!_id) {
    throw new Error("ID is required to update a service");
  }
  const client = await ConnectionMongoDB.getConnection();
  if (!client) {
    throw new Error("Error connecting to MongoDB");
  }

  const database = client.db("BarberShop");
  const barbers = database.collection("barbers");
  const result = await barbers.updateOne(
    { _id: new ObjectId(_id) },
    {
      $set: {
        ...(description && { description }),
        ...(image && { image }),
        ...(name && { name }),
        ...(rol && { rol }),
      },
    }
  );
  if (!result.acknowledged) {
    throw new Error("Error updating service in MongoDB");
  }
  return result.modifiedCount > 0;
}

async function deleteBarber(id: string) {
  if (!id) {
    throw new Error("ID is required to delete a service");
  }
  const client = await ConnectionMongoDB.getConnection();
  if (!client) {
    throw new Error("Error connecting to MongoDB");
  }
  const database = client.db("BarberShop");
  const barbers = database.collection("barbers");
  const result = await barbers.deleteOne({ _id: new ObjectId(id) });
  if (!result.acknowledged) {
    throw new Error("Error deleting service in MongoDB");
  }
  return result.deletedCount > 0;
}

export { getAllBarbers, newBarber, updateBarber, deleteBarber };
