import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { store } from '../src/Redux/store/store.js'
import DashboardRoutes from './Routers/DashboardRoutes.js'
import "../src/Styles/AllStyles.module.scss"

ReactDOM.render(
	<Provider store={store}>
		<DashboardRoutes />
	</Provider>,
	document.getElementById('root')
)
