import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import { Chip } from "@mui/material";
import { useNavigate } from "react-router-dom";

import MangaCardFooter from "./MangaCardFooter";

import { IManga } from "@/types/manga";
import { routes } from "@/routes/routes";
import { setPathParams } from "@/utils/routines/setPathParams";

interface IMangaCardProps extends IManga {
	deleteManga: (id: string) => void;
}

const MangaCard: React.FC<IMangaCardProps> = ({
	id,
	name,
	description,
	chapters,
	genres,
	poster,
	deleteManga,
}) => {
	const navigate = useNavigate();
	const [expanded, setExpanded] = React.useState(false);

	const toggleExpansion = () => {
		setExpanded(!expanded);
	};

	function editManga() {
		const path = setPathParams(routes.noAuth.mangaEdit.path, [
			{
				key: "id",
				value: id,
			},
		]);
		navigate(path);
	}

	function removeManga() {
		deleteManga(id);
	}

	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardHeader title={name} subheader={`${chapters} chapters`} />
			<CardMedia
				component="img"
				height="194"
				image={poster}
				alt={`${name}'s poster`}
			/>
			<CardContent>
				<Typography variant="body2" color="text.secondary">
					<span className={expanded ? "" : "line-clamp-2"}>
						{description}
					</span>
				</Typography>
				<div className="flex items-center gap-2 py-3">
					{genres.map((genre) => (
						<Chip
							label={genre}
							variant="outlined"
							size="small"
							key={genre}
						/>
					))}
				</div>
			</CardContent>
			<MangaCardFooter
				expanded={expanded}
				toggleExpansion={toggleExpansion}
				editManga={editManga}
				deleteManga={removeManga}
			/>
		</Card>
	);
};

export default MangaCard;
