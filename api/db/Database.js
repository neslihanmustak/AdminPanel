const mongoose = require('mongoose'); //bu sayede import edilir ayrıcada projeye terminal(npm i --S mongoose) üzerinden dahil edilmelidir.
let instance = null;
class Database {

constructor() {//singleton bir yapıda instance oluşturuldu.
    if (!instance) {
        this.mongoConnection=null;
        instance = this;
  }
  return instance;
}

async connect(options) {
    try{
    console.log("Connecting to MongoDB...");
    let db=await mongoose.connect(options.CONNECTION_STRING);
    this.mongoConnection=db;
    console.log("MongoDB connected successfully.");
    }
    catch(error){
        console.error("MongoDB connection error:", error);
        process.exit(1); //uygulamayı kapatıyoruz.
        }
   

}
}
module.exports = Database;