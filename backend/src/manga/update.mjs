import { Manga } from "../database/manga.mjs";
import fs from "fs";
import { uploadPoster } from "./upload.mjs";

const withoutPosterUpdate = async (id, manga) => {
	return Manga.findByIdAndUpdate(id, manga, {
		runValidators: true,
	});
};

const withPosterUpdate = async (id, manga) => {
	const oldManga = await Manga.findByIdAndUpdate(id, manga, {
		runValidators: true,
	});
	fs.rm(process.env.POSTER_UPLOAD_PATH + "/" + oldManga.poster, (err) => {
		if (err) console.log(err);
	});
};

const updateManga = async (req, res) => {
	const { id } = req.params;
	const { name, description, chapters, genres } = JSON.parse(req.body.data);
	const newManga = { name, description, chapters, genres };
	if (req.file && req.file.filename) {
		withPosterUpdate(id, { ...newManga, poster: req.file.filename });
	} else {
		withoutPosterUpdate(id, newManga);
	}
	res.status(200).json({ msg: "manga updated succesfully" });
};

export default [uploadPoster.single("poster"), updateManga];
