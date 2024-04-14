export interface IPathParam {
	key: string;
	value: string;
}
export function setPathParams(path: string, params: IPathParam[]) {
	const newpath = path.replaceAll(
		/(\/?)(:)([^\/]+)(\/|$)/g,
		(match, del, prefix, name, trail) => {
			const candidate = params.find((param) => param.key === name);
			return candidate ? del + candidate.value + trail : match;
		}
	);
	return newpath;
}
