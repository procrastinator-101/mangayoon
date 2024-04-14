import { IManga } from "@/types/manga";
import axios from "axios";
import apiEndPoints from "./apiEndPoints";

export const createMangaApi = async (manga: IManga) => {
	const formData = new FormData();
	const { poster, id, posterFile, ...payload } = manga;

	if (posterFile) formData.append("poster", posterFile);
	formData.append("data", JSON.stringify(payload));

	return axios.post(apiEndPoints.mangaCreate, formData, {
		headers: {
			"Content-Type": "multipart/form-data",
		},
	});
};

export const updateMangaApi = async (manga: IManga) => {
	const formData = new FormData();
	const { poster, id, posterFile, ...payload } = manga;

	if (posterFile) formData.append("poster", posterFile);
	formData.append("data", JSON.stringify(payload));

	return axios.put(apiEndPoints.mangaUpdate + "/" + id, formData, {
		headers: {
			"Content-Type": "multipart/form-data",
		},
	});
};

export const getMangasApi = async () => {
	return axios.get(apiEndPoints.mangas);
};

export const getMangaApi = async (id: string) => {
	return axios.get(apiEndPoints.mangaGet + "/" + id);
};

export const deleteMangaApi = async (id: string) => {
	return axios.delete(apiEndPoints.mangaDelete + "/" + id);
};
