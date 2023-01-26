const mongoose = require("mongoose");
const { yellow, red } = require("colors");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_CNN, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`${yellow("DATABASE IS CONNECTED!")}`);
  } catch (error) {
    console.log(`${red(error)}`);
    throw new Error("Db connection error");
  }
};

module.exports = {
  connectDB,
};
