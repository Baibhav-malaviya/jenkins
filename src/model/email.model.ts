import mongoose, { Schema, Document, model } from "mongoose";

// Define an interface for the document
interface IEmail extends Document {
	email: string;
	createdAt: Date;
	updatedAt: Date;
}

// Create the schema
const emailSchema = new Schema<IEmail>(
	{
		email: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

// Create and export the model
const Email =
	(mongoose.models.Email as mongoose.Model<IEmail>) ||
	model<IEmail>("Email", emailSchema);

export default Email;
