import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import BackBtn from "@/components/UI/Buttons/BackBtn";
import MangaForm from "@/components/MangaForm/MangaForm";

import { routes } from "@/routes/routes";
import { IManga, emptyManga } from "@/types/manga";
import { getMangaApi, updateMangaApi } from "@/services/manga";

const MangaEdit = () => {
	const id = useParams().id ?? "";
	const navigate = useNavigate();
	const [manga, setManga] = useState<IManga>(emptyManga);

	async function fetchManga() {
		getMangaApi(id)
			.then((res) => {
				setManga(res.data.manga);
			})
			.catch((err) => {
				console.log(err);
			});
	}

	useEffect(() => {
		fetchManga();
	}, []);

	function updateManga(manga: IManga) {
		updateMangaApi(manga)
			.then(() => {
				setTimeout(() => {
					navigate(routes.noAuth.mangas.path);
				}, 200);
			})
			.catch((err) => console.log(err));
	}

	return (
		<main className="px-10 py-5">
			<BackBtn />
			<MangaForm
				manga={manga}
				btnLabel="Save"
				onSubmit={updateManga}
				title="Edit Manga"
			/>
		</main>
	);
};

export default MangaEdit;
