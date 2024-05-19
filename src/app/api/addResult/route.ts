// import multer from "multer";
// import { NextApiRequest, NextApiResponse } from "next";

// // Set up multer for file storage
// const upload = multer({
// 	storage: multer.diskStorage({
// 		destination: "./public/uploads", // Specify the directory to save the uploaded files
// 		filename: (req, file, cb) => {
// 			cb(null, file.originalname); // Use the original file name
// 		},
// 	}),
// });

// // Disable the default body parser to allow multer to handle the request
// export const config = {
// 	api: {
// 		bodyParser: false,
// 	},
// };

// // Custom handler to wrap multer's middleware
// const runMiddleware = (req, res, fn) => {
// 	return new Promise((resolve, reject) => {
// 		fn(req, res, (result) => {
// 			if (result instanceof Error) {
// 				return reject(result);
// 			}
// 			return resolve(result);
// 		});
// 	});
// };

// const uploadMiddleware = upload.single("file");

// export default async function handler(req, res) {
// 	if (req.method === "POST") {
// 		try {
// 			// Apply the multer middleware
// 			await runMiddleware(req, res, uploadMiddleware);

// 			// Handle the file upload
// 			res
// 				.status(200)
// 				.json({ message: "File uploaded successfully", file: req.file });
// 		} catch (error) {
// 			res.status(500).json({ error: error.message });
// 		}
// 	} else {
// 		res.status(405).json({ message: "Method Not Allowed" });
// 	}
// }
