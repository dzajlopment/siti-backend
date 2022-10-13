// import mongoose from "mongoose"
// import dotenv from "dotenv"
// import path from "path"
// import ReportModel from "./../../models/reportModel"

// dotenv.config({ path: path.resolve(__dirname, '../../.env') })

// const mongodb = process.env.DATABASE

// export default function postReport(title: string, lat: number, lng: number, date?: string, image?: BufferConstructor, description?: string) {
//     mongoose.connect(mongodb!)

//     const database = mongoose.connection
//     database.on("error", (error) => {
//         console.error(error)
//     })

//     const test = new ReportModel({ title: title, description: description, lat: lat, lng: lng, date: date, image: image });

//     test.save((err, result) => {
//         if (err) {
//             return console.error(err)
//         }
//         console.log(`Saved to db`);
//     })
// }
// postReport("asd", 12.23, 34.56)