import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import App from '../Components/App';
import Detail from '../Components/Detail';
import Listar from '../Components/Listar';
import NavBar from '../Components/NavBar';

const DashboardRoutes = () => {
	return (

		<div>
			<BrowserRouter>
				<NavBar />
				<Routes>
					<Route path='/home' element={<App />} />
					<Route path="*" element={<Navigate to="/home" />} />
					<Route path='/detail' element={<Detail />} />
					<Route path='/favorite' element={<Listar />} />
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default DashboardRoutes
