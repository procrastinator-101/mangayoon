import { routes } from "@/routes/routes";
import { Navigate } from "react-router-dom";

const Landing = () => {
	return <Navigate to={routes.noAuth.mangas.path} />;
};

export default Landing;
