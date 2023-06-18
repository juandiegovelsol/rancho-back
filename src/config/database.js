import mongoose, { Mongoose } from "mongoose";

class Database {
  /* private connection:Mongoose||null; */
  constructor() {
    this.connection = null;
  }

  async connect() {
    if (this.connection) return this.connection;
    return mongoose
      .connect(process.env.DB || "")
      .then((connection) => {
        this.connection = connection;
        console.log("Connected database!");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async disconnect() {
    return mongoose
      .disconnect()
      .then(() => {
        console.log("Disconnected database");
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

export default Database;
