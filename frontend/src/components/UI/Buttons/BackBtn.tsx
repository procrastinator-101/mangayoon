import React from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

import { IconButton } from "@mui/material";

interface IBackBtnProps {
	className?: string;
}

const BackBtn: React.FC<IBackBtnProps> = ({ className }) => {
	function goBack() {
		history.back();
	}

	return (
		<div onClick={goBack} className={className}>
			<IconButton aria-label="back" size="small">
				<KeyboardBackspaceIcon />
			</IconButton>
		</div>
	);
};

export default BackBtn;
