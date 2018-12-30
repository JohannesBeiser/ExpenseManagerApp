module.exports ={
 // database : 'mongodb://localhost:27017/meanauth',
 database: process.env.MONGODB_URI, // || "mongodb://localhost:27017/meanauth",
 secret : 'yoursecret'
};