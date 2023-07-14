import {
	BrowserRouter as Router,
	Route,
	Routes,
	BrowserRouter,
} from "react-router-dom"
import Home from "./routes/Home"
import Detail from "./routes/Detail"


function App() {
	return (
		// react-router-dom V6
		<BrowserRouter>
			<Routes>
				<Route path="/movie/:id" element={<Detail />} />
				<Route path="/" element={<Home />} />
			</Routes>
		</BrowserRouter>


		// react router dom V5
		// <Router>
		// 	<Switch>
		// 		<Route path="/movie/:id">
		// 			<Detail />
		// 		</Route>
		// 		<Route path="/">
		// 			<Home />
		// 		</Route>
		// 	</Switch>
		// </Router>
	); 
}

export default App;
