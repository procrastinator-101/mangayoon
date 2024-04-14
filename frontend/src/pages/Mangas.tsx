import { Button } from "@mui/material";
import { useEffect, useState } from "react";

import MangaCard from "@/components/Pages/Mangas/MangaCard";

import { IManga } from "@/types/manga";
import { routes } from "@/routes/routes";
import { deleteMangaApi, getMangasApi } from "@/services/manga";

const Mangas = () => {
	const [mangas, setMangas] = useState<IManga[]>([]);

	function fetchMangas() {
		getMangasApi()
			.then((res) => {
				setMangas(res.data.mangas);
			})
			.catch((err) => {
				console.log(err);
			});
	}

	useEffect(() => {
		fetchMangas();
	}, []);

	function deleteManga(id: string) {
		deleteMangaApi(id)
			.then(() => {
				fetchMangas();
			})
			.catch((err) => {
				console.log(err);
			});
	}

	return (
		<div className="px-10 py-5">
			<header className="flex justify-between items-center gap-16 py-2">
				<h1 className="text-5xl font-semibold text-black-light">
					Mangas
				</h1>
				<a href={routes.noAuth.mangaCreate.path}>
					<Button variant="contained">Add Manga</Button>
				</a>
			</header>
			<main className="w-full grid grid-cols-3 gap-6 pt-6">
				{mangas.map((manga) => (
					<div className="manga-item" key={manga.id}>
						<MangaCard
							{...manga}
							key={manga.id}
							deleteManga={deleteManga}
						/>
					</div>
				))}
			</main>
		</div>
	);
};

export default Mangas;
