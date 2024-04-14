import express from "express";
const router = express.Router();

import getManga from "./get.mjs";
import createManga from "./create.mjs";
import updateManga from "./update.mjs";
import deleteManga from "./delete.mjs";

import { Manga } from "../database/manga.mjs";

router.route("/").get(async (req, res) => {
	const mangas = await Manga.find();
	for (const manga of mangas) manga.transformPosterPath();
	res.status(200).json({ mangas });
});

router.route("/new").post(createManga);

//check id compatibility with objectID
router.use("/:id", (req, res, next) => {
	const { id } = req.params;
	const hex = /[0-9A-Fa-f]{24}/;
	if (!hex.test(id)) {
		res.status(404).json({ msg: `wrong manga id : <${id}> !!` });
		return;
	}
	next();
});

router.route("/:id").get(getManga).put(updateManga).delete(deleteManga);

router.route("/:id/poster").get(async (req, res) => {
	const { id } = req.params;
	const manga = await Manga.findById(id);
	res.sendFile(
		manga.poster,
		{ root: process.env.POSTER_UPLOAD_PATH },
		(error) => {
			if (error) {
				res.status(404).json({ msg: "not such poster was found" });
			}
		}
	);
});

export default router;
