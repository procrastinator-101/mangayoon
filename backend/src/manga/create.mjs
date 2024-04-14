import { uploadPoster } from "./upload.mjs";
import { Manga } from "../database/manga.mjs";

//create manga and add it to the database
const createManga = async (req, res) => {
	const { name, description, chapters, genres } = JSON.parse(req.body.data);
	const { filename } = req.file;
	const manga = await Manga.create({
		name,
		description,
		chapters,
		genres,
		poster: filename,
	});
	res.status(201).json({ msg: "manga created succesfully" });
};

export default [uploadPoster.single("poster"), createManga];
