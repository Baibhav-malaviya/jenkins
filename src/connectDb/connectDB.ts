import mongoose, { ConnectOptions } from "mongoose";

// const MONGODB_URI = process.env.MONGODB_URL!;
const MONGODB_URI =
	"mongodb+srv://baibhav:Thapar%4098@cluster0.o020bxn.mongodb.net"; //!Here @(only in the) is replaced with %40, because @ is a special character

const DB_NAME = "pick-life";

interface ConnectionOptions extends ConnectOptions {
	useUnifiedTopology?: boolean;
}

let cachedConnection: mongoose.Connection | null = null;

export default async function connectDB() {
	if (cachedConnection) {
		return cachedConnection;
	}

	try {
		const options: ConnectionOptions = {
			useUnifiedTopology: true,
		};

		const connection = await mongoose.connect(`${MONGODB_URI}/${DB_NAME}`);
		cachedConnection = connection.connection;

		cachedConnection.on("error", (err) => {
			console.log("MongoDB connection error:", err);
		});

		cachedConnection.once("open", () => {
			console.log(`Connected to MongoDB at ${MONGODB_URI}`);
		});

		cachedConnection.on("disconnected", () => {
			console.log("MongoDB disconnected");
		});
	} catch (error) {
		console.error("Failed to connect to MongoDB: ");
		process.exit(1);
	}

	return cachedConnection;
}