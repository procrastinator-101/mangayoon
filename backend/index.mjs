import path from "path";
import 'dotenv/config'
import express from "express";
import cors from 'cors'
import mangas from "./src/manga/index.mjs"

import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

app.listen(8080, () => {
	console.log("listenning on port 8080...");
});

//set up cors
app.use(cors());

//app body parsers
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//static files setup
app.use(express.static(path.join(__dirname, "public")));

//mangas micro app
app.use("/mangas", mangas);

