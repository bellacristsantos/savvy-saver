const mongoose = require('mongoose');

const dbConnection = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/SavySaver' , {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB successfully! 🛜');
  } catch (error) {
    console.log('Failed to connect to MongoDB:🥲', error);
  }
}

module.exports =  dbConnection;
