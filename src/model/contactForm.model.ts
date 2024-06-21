import mongoose, { Schema, Document, model } from "mongoose";

// Define an interface for the document
interface IContactForm extends Document {
	name: string;
	email: string;
	phone: string;
	message?: string;
	createdAt: Date;
	updatedAt: Date;
}

// Create the schema
const contactFormSchema = new Schema<IContactForm>(
	{
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
		},
		phone: {
			type: String,
			required: true,
		},
		message: {
			type: String,
		},
	},
	{ timestamps: true }
);

// Create and export the model
const ContactForm =
	(mongoose.models.contactForms as mongoose.Model<IContactForm>) ||
	model<IContactForm>("contactForms", contactFormSchema);

export default ContactForm;
