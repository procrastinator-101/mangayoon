import * as React from "react";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Chip from "@mui/material/Chip";

import { genresList } from "./../../../../shared/genre.mjs";

interface IGenresSelectProps {
	fullWidth: boolean;
	genres: string[];
	setGenres: (genres: string[]) => void;
}

const GenresSelect: React.FC<IGenresSelectProps> = ({
	fullWidth = false,
	genres,
	setGenres,
}) => {
	const handleChange = (event: SelectChangeEvent<typeof genres>) => {
		const value = event.target.value;
		// On autofill we get a stringified value.
		const newGenres = typeof value === "string" ? value.split(",") : value;
		setGenres(newGenres);
	};

	const DropDown: React.FC<{ list: string[] }> = ({ list }) => {
		return (
			<Box>
				{list.map((elm) => (
					<Chip key={elm} label={elm} />
				))}
			</Box>
		);
	};

	return (
		<div className="w-full">
			<FormControl fullWidth={fullWidth} size="small">
				<InputLabel id="demo-multiple-chip-label">Genres</InputLabel>
				<Select
					multiple
					labelId="demo-multiple-chip-label"
					id="demo-multiple-chip"
					value={genres}
					onChange={handleChange}
					input={
						<OutlinedInput
							id="select-multiple-chip"
							label="Genres"
						/>
					}
					renderValue={(selected) => <DropDown list={selected} />}
				>
					{genresList.map((name : string) => (
						<MenuItem key={name} value={name}>
							{name}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</div>
	);
};

export default GenresSelect;
