import { MongoClient } from "mongodb";

class ConnectionMongoDB {
  private static client: MongoClient | null = null;
  private static uri: string = "mongodb://localhost:27017";
  // private static uri: string =
  //   "mongodb+srv://GenesisPriscete:priscete051@cluster0.jjeoklm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

  private constructor() {}

  static async getConnection() {
    if (!this.client) {
      this.client = new MongoClient(this.uri);
      try {
        await this.client.connect();
        console.log("Connected successfully to server");
      } catch (e) {
        console.error("Error connecting to MongoDB:", e);
        this.client = null;
      }
    }
    return this.client;
  }

  static async closeConnection() {
    if (this.client) {
      try {
        await this.client.close();
        console.log("Connection closed successfully");
        this.client = null;
      } catch (e) {
        console.error("Error closing MongoDB connection:", e);
      }
    }
  }
}

export default ConnectionMongoDB;
