import { Manga } from "../database/manga.mjs";

const getManga = async (req, res) => {
	const { id } = req.params;
	const manga = await Manga.findById(id);
	if (manga !== null) {
		manga.transformPosterPath();
		res.json({ manga });
	} else {
		errorHandler(res, `no manga with id : <${id}> found`);
	}
};

function errorHandler(res, msg) {
	res.status(404).json({msg});
}

export default getManga;
