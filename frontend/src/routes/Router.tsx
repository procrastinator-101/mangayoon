import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import AuthRoute from "./AuthRoute";
import NoAuthRoute from "./NoAuthRoute";

import { routes } from "./routes";

const Router: React.FC = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route element={<NoAuthRoute />}>
						{Object.values(routes.noAuth).map((route, idx) => (
							<Route {...route} key={idx} />
						))}
					</Route>

					<Route element={<AuthRoute />}>
						{Object.values(routes.auth).map((route, idx) => (
							<Route {...route} key={idx} />
						))}
					</Route>

					<Route
						path="*"
						element={
							<Navigate to={routes.noAuth.landing.path} replace />
						}
					/>
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default Router;
