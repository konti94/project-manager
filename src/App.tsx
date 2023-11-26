import { useState } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import ListProjects from './components/ListProjects';
import AddNewProject from './components/AddNewProject';

function App() {
	const [projects, setProjects] = useState([]);

	function getClassName({ isActive }: any) {
		if (isActive) {
			return 'nav-link active';
		}
		return 'nav-link';
	}

	return (
		<BrowserRouter>
			<nav className='navbar navbar-expand-lg bg-light'>
				<div className='container-fluid'>
					<ul className='navbar-nav me-auto mb-2 mb-lg-0'>
						<li className='nav-item'>
							<NavLink to='/' className={getClassName}>
								Projektek
							</NavLink>
						</li>
						<li className='nav-item'>
							<NavLink to='/new-project' className={getClassName}>
								Új projekt
							</NavLink>
						</li>
					</ul>
				</div>
			</nav>

			<Routes>
				<Route
					path='/'
					element={
						<ListProjects
							projects={projects}
							setProjects={setProjects}
						/>
					}></Route>
				<Route
					path='/new-project'
					element={<AddNewProject projects={projects} />}></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
