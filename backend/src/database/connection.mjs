import mongoose from "mongoose";

//connection with mongoDb setup
const connection = mongoose
	.createConnection("mongodb://127.0.0.1:27017/mangaYoon")
	.asPromise()
	.catch((error) => {
		console.log(error);
		process.exit();
	});

export default await connection;
