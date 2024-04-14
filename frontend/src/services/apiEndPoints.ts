const backendUri = "http://localhost:8080";

const apiEndPoints = {
	mangaCreate: `${backendUri}/mangas/new`,
	mangaUpdate: `${backendUri}/mangas`,
	mangaGet: `${backendUri}/mangas`,
	mangaDelete: `${backendUri}/mangas`,
	mangas: `${backendUri}/mangas`
};

export default apiEndPoints;
