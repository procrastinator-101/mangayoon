import { IconButton } from "@mui/material";
import React, { ChangeEvent, useRef } from "react";

import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

import Image from "@/assets/icons/image-placeholder.svg";

interface IMangaPosterProps {
	poster: string;
	setPoster: (poster: string, posterFile: File) => void;
}

const MangaPoster: React.FC<IMangaPosterProps> = ({ poster, setPoster }) => {
	const inputRef = useRef<HTMLInputElement>(null);

	function updateImage(e: ChangeEvent<HTMLInputElement>) {
		if (!e.target?.files) return;
		const posterFile = e.target?.files[0];
		const poster = URL.createObjectURL(posterFile);
		setPoster(poster, posterFile);
	}

	function uploadImage() {
		if (inputRef.current) inputRef.current.click();
	}

	function deletePoster() {
		setPoster("", null);
	}

	return (
		<section className="w-full">
			<input
				type="file"
				accept="image/*"
				ref={inputRef}
				onChange={updateImage}
				className="hidden"
			/>
			{poster === "" ? (
				//no poster
				<div
					className="flex flex-col items-center justify-center w-full py-3 border rounded-lg cursor-pointer border-gray aspect-[760/200]"
					onClick={uploadImage}
				>
					<Image className="h-60 w-96" />
					<h4 className="text-xl font-semibold text-gray">
						Click to upload manga poster
					</h4>
				</div>
			) : (
				//with poster
				<div className="relative pb-5">
					<img
						src={poster}
						alt="Manga Poster"
						className="w-full aspect-[760/200] rounded-lg min-h-52"
					/>
					<div className="absolute bottom-0 flex items-center gap-2 justify-center w-full">
						<div className="rounded-full bg-white border border-[#e5e5e5] hover:border-green-600">
							<IconButton
								aria-label="edit"
								className="hover:text-green-600"
								size="small"
								onClick={uploadImage}
							>
								<EditOutlinedIcon />
							</IconButton>
						</div>
						<div className="rounded-full bg-white border border-[#e5e5e5] hover:border-red-600">
							<IconButton
								aria-label="delete"
								className="hover:text-red-600"
								size="small"
								onClick={deletePoster}
							>
								<DeleteOutlineOutlinedIcon />
							</IconButton>
						</div>
					</div>
				</div>
			)}
		</section>
	);
};

export default MangaPoster;
