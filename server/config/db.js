import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://Morris:UnoH1DqQGARh0a0P@sistemalavanderia.1zlxi7y.mongodb.net/db-laundry-system?retryWrites=true&w=majority&appName=SistemaLavanderia",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Conexión exitosa a MongoDB");
  } catch (error) {
    console.error("Error al conectar a MongoDB:", error);
    process.exit(1); // Terminar el proceso con error
  }
};

export default mongoose;
