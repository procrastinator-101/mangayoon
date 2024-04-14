import { Schema } from "mongoose";
import connection from "./connection.mjs";
import { genresList } from "../../../shared/genre.mjs";

const omitMongooseProperties = (doc, ret, game) => {
	delete ret.__v;
	ret.id = ret._id.toString();
	delete ret._id;
};

const options = {
	toJSON: {
		transform: omitMongooseProperties,
	},
	toObject: {
		transform: omitMongooseProperties,
	},
};

const mangaSchema = new Schema(
	{
		name: { type: String, required: true },
		description: { type: String, required: true },
		poster: { type: String, required: true },
		chapters: {
			type: Number,
			min: 0,
			required: true,
		},
		genres: {
			type: [String],
			required: true,
			enum: genresList,
		},
	},
	options
);

mangaSchema.methods.transformPosterPath = function () {
	this.poster = process.env.BACKEND_URI + "/mangas/" + this.id + "/poster";
	return this;
};

// mangaSchema.post("findMany", function(manga) {
// 	manga.poster = process.env.BACKEND_URI + "/mangas/" + manga.id + "/poster";
// })

const Manga = connection.model("Manga", mangaSchema);

export { Manga };
