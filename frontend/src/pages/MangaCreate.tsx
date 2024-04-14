import { routes } from "@/routes/routes";
import { createMangaApi } from "@/services/manga";

import BackBtn from "@/components/UI/Buttons/BackBtn";
import MangaForm from "@/components/MangaForm/MangaForm";

import { useNavigate } from "react-router-dom";
import { IManga, emptyManga } from "@/types/manga";

const MangaCreate = () => {
	const navigate = useNavigate();
	function createManga(manga: IManga) {
		createMangaApi(manga)
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
				manga={emptyManga}
				btnLabel="create"
				onSubmit={createManga}
				title="New Manga"
			/>
		</main>
	);
};

export default MangaCreate;
