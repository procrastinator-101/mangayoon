import { Button, TextField } from "@mui/material";
import React, { ChangeEvent, useEffect, useState } from "react";

import MangaPoster from "./MangaPoster";
import GenresSelect from "./GenresSelect";

import { IManga } from "@/types/manga";

interface IMangaFormProps {
	title: string;
	btnLabel: string;
	onSubmit: (manga: IManga) => void;
	manga: IManga;
}

const MangaForm: React.FC<IMangaFormProps> = ({
	title,
	btnLabel,
	onSubmit,
	manga,
}) => {
	const [data, setData] = useState(manga);

	useEffect(() => {
		setData(manga);
	}, [manga])
	
	function submitHandler() {
		onSubmit(data);
	}
	
	function updateField(
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) {
		const name = e.target.name;
		const val = e.target.value;
		setData((prev: IManga) => ({ ...prev, [name]: val }));
	}

	function updateGenres(genres: string[]) {
		setData((prev: IManga) => ({ ...prev, genres }));
	}

	function updatePoster(poster: string, posterFile: File) {
		setData((prev: IManga) => ({ ...prev, poster, posterFile }));
	}

	return (
		<form className="flex flex-col items-center w-full gap-6">
			<h1 className="text-5xl font-semibold text-black-light">{title}</h1>
			<MangaPoster poster={data.poster} setPoster={updatePoster} />
			<div className="flex items-center w-full gap-5">
				<TextField
					name="name"
					label="Name"
					size="small"
					fullWidth
					id="outlined-size-small"
					value={data.name}
					onChange={updateField}
				/>
				<TextField
					name="chapters"
					label="Chapters"
					size="small"
					type="number"
					fullWidth
					id="outlined-number"
					value={data.chapters}
					onChange={updateField}
				/>
			</div>
			<TextField
				name="description"
				label="Description"
				multiline
				rows={4}
				size="small"
				fullWidth
				id="outlined-multiline-static"
				value={data.description}
				onChange={updateField}
			/>
			<GenresSelect
				fullWidth
				genres={data.genres}
				setGenres={updateGenres}
			/>

			<Button variant="contained" onClick={submitHandler}>
				{btnLabel}
			</Button>
		</form>
	);
};

export default MangaForm;
