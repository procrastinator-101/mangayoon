import multer from "multer";
import mime from "mime-types";

//upload manga poster with multer
const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, process.env.POSTER_UPLOAD_PATH);
	},
	filename: function (req, file, cb) {
		const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
		cb(
			null,
			file.fieldname +
				"-" +
				uniqueSuffix +
				"." +
				mime.extension(file.mimetype)
		);
	},
});

export const uploadPoster = multer({ storage: storage });

