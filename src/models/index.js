import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

// try {
//     mongoose.connect(`${process.env.dbUrl}/${process.env.dbName}`)
//     console.log("mongoose connected ")
// } catch (error) {
//     console.log(error)
// }

const mongoUri = `${process.env.dbUrl}/${process.env.dbName}`;

console.log("URL",mongoUri);

mongoose.connect(mongoUri)
.then(() => console.log('mongoos connected'))
.catch((err) => console.log("mongoos connection error: ", err))


export default mongoose