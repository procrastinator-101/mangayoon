import fs from "fs";

import { Manga } from "../database/manga.mjs";

const deleteManga = async (req, res) => {
	const { id } = req.params;
	const manga = await Manga.findByIdAndDelete(id);
	fs.rm(process.env.POSTER_UPLOAD_PATH + "/" + manga.poster, (err) => {
		if (err) console.log(err);
	});
	res.status(200).json({ msg: "manga deleted succesfully" });
};

export default deleteManga;
