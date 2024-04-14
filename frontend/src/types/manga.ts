export interface IManga {
	id: string;
	name: string;
	description: string;
	poster: string;
	posterFile?: Blob;
	chapters: number;
	genres: string[];
}

export const emptyManga: IManga = {
	id: "",
	name: "",
	description: "",
	poster: "",
	chapters: 0,
	genres: [],
};
