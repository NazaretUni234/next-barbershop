import ConnectionMongoDB from "@/services/mongoDB";
import { GetUser, NewUser, User } from "@/types/users";
import { ObjectId } from "mongodb";

async function newUser(user: NewUser) {
  const client = await ConnectionMongoDB.getConnection();
  if (!client) {
    throw new Error("Error connecting to MongoDB");
  }
  let role = "user";
  if (user.tokenAdmin.trim()) {
    const tokens = client.db("BarberShop").collection("tokensAdmins");
    const token = await tokens.findOne({ token: user.tokenAdmin });
    if (!token) {
      throw new Error("Invalid token");
    }
    role = "admin";
  }
  const users = client.db("BarberShop").collection("users");

  const sendable = {
    name: user.name,
    lastName: user.lastName,
    email: user.email,
    phone: user.phone,
    password: user.password,
    role,
  };

  const result = await users.insertOne(sendable);
  if (!result.acknowledged) {
    throw new Error("Error inserting user into MongoDB");
  }
  return result.insertedId.toString();
}

async function getUserByEmail(email: string): Promise<User> {
  const client = await ConnectionMongoDB.getConnection();
  if (!client) {
    throw new Error("Error connecting to MongoDB");
  }
  const users = client.db("BarberShop").collection("users");
  const userData = await users.findOne({ email });
  if (!userData) {
    throw new Error("User not found");
  }

  return userData as unknown as User;
}

async function getUserById(id: string): Promise<GetUser> {
  console.log("id", id);
  const client = await ConnectionMongoDB.getConnection();
  if (!client) {
    throw new Error("Error connecting to MongoDB");
  }
  const users = client.db("BarberShop").collection("users");
  const objectId = new ObjectId(id);
  const userData = await users.findOne({ _id: objectId });
  if (!userData) {
    throw new Error("User not found");
  }

  const sendable: GetUser = {
    _id: userData._id.toString(),
    name: userData.name,
    lastName: userData.lastName,
    email: userData.email,
    phone: userData.phone,
    role: userData.role,
  };

  return sendable;
}

export { newUser, getUserByEmail, getUserById };
