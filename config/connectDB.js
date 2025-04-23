//REQUIRE MONGOOSE
const mongoose=require("mongoose")

const connectDB= async ()=>{
    try {
        await mongoose.connect(process.env.DB_URI)
        console.log("DB CONNECTED")

    } catch (error) {
        console.error("DB NOT CONNECTED",error)
        process.exit(1)
    }
}

module.exports=connectDB

