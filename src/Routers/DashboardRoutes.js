import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import App from '../Components/App';
import Detail from '../Components/Detail';

const DashboardRoutes = () => {
	return (

		<div>
			<BrowserRouter>
				<Routes>
					<Route path='/home' element={<App />} />
					<Route path="*" element={<Navigate to="/home" />} />
					<Route path='/detail' element={<Detail />} />
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default DashboardRoutes
