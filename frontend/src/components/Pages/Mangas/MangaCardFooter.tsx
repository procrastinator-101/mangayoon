import React from "react";
import CardActions from "@mui/material/CardActions";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

import { styled } from "@mui/material";

interface IMangaCardFooterProps {
	expanded: boolean;
	editManga: () => void;
	toggleExpansion: () => void;
	deleteManga: () => void;
}

const MangaCardFooter: React.FC<IMangaCardFooterProps> = ({
	expanded,
	editManga,
	toggleExpansion,
	deleteManga,
}) => {
	return (
		<CardActions disableSpacing>
			<IconButton
				aria-label="edit"
				className="hover:text-green-600"
				onClick={editManga}
			>
				<EditOutlinedIcon />
			</IconButton>
			<IconButton
				aria-label="delete"
				className="hover:text-red-600"
				onClick={deleteManga}
			>
				<DeleteOutlineOutlinedIcon />
			</IconButton>
			<ExpandMore
				expand={expanded}
				onClick={toggleExpansion}
				aria-expanded={expanded}
				aria-label="show more"
			>
				<ExpandMoreIcon />
			</ExpandMore>
		</CardActions>
	);
};

interface ExpandMoreProps extends IconButtonProps {
	expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
	const { expand, ...other } = props;
	return <IconButton {...other} />;
})(({ theme, expand }) => ({
	transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
	marginLeft: "auto",
	transition: theme.transitions.create("transform", {
		duration: theme.transitions.duration.shortest,
	}),
}));

export default MangaCardFooter;
