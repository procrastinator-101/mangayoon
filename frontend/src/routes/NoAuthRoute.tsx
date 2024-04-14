import { Outlet } from "react-router-dom";

const NoAuthRoute = () => {
	return (
		<>
			<Outlet />
		</>
	);
};

export default NoAuthRoute;
