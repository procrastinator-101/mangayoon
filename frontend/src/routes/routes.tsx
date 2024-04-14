import { ReactElement } from "react";

import Landing from "@/pages/Landing";
import Mangas from "@/pages/Mangas";
import Manga from "@/pages/Manga";
import MangaEdit from "@/pages/MangaEdit";
import MangaCreate from "@/pages/MangaCreate";

interface IRoute {
	path: string;
	element: ReactElement;
}

interface IRoutes {
	noAuth: {
		landing: IRoute;
		mangas: IRoute;
		manga: IRoute;
		mangaEdit: IRoute;
		mangaCreate: IRoute;
	};
	auth: {
		home: IRoute;
	};
}

export const routes: IRoutes = {
	noAuth: {
		landing: {
			path: "/",
			element: <Landing />,
		},
		mangas: {
			path: "/mangas",
			element: <Mangas />,
		},
		manga: {
			path: "/mangas/:id",
			element: <Manga />,
		},
		mangaEdit: {
			path: "/mangas/:id/edit",
			element: <MangaEdit />,
		},
		mangaCreate: {
			path: "/mangas/new",
			element: <MangaCreate />,
		},
	},
	auth: {
		home: {
			path: "/home",
			element: <Landing />,
		},
	},
};
