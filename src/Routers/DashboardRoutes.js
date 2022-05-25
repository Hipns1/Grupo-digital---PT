import { Navigate, Route, Routes } from 'react-router-dom';
import App from '../Components/App';

const DashboardRoutes = () => {
	return (

		<div>
			<Routes>
				<Route path='/home' element={<App />} />
				<Route path="*" element={<Navigate to="/home"/>}/>
			</Routes>
		</div>
	)
}

export default DashboardRoutes
