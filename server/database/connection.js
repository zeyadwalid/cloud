const mongoose = require('mongoose');
PORT = 3000
MONGO_URI = "mongodb+srv://khaledshaaban926:26EzpMouMmo4bXFC@cluster0.iwjiarl.mongodb.net/test"
const connectDB = async () => {
    try{

        const con = await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        })

        console.log(`MongoDB connected : ${con.connection.host}`);
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB