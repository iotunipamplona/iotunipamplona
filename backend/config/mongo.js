const mongoose = require("mongoose");

const dbconexion = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MONGODB Atlas");
  } catch (error) {
    console.error(error);
  }
};

module.exports = dbconexion;