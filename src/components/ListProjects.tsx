import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';

function ListProjects(props: any): JSX.Element {
	const { projects, setProjects } = props;
	const [filteredList, setFilteredList] = useState([]);
	const searchInputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		(async () => {
			try {
				const response = await fetch('projects.json');
				const data = await response.json();
				setProjects(data);
			} catch (error) {
				console.error(error);
			}
		})();
	}, [projects]);

	const handleSearchClick = () => {
		const searchInput = searchInputRef.current?.value;

		setFilteredList(
			projects.filter(
				(project: any) =>
					project.title.toLowerCase().includes(searchInput) ||
					project.description.toLowerCase().includes(searchInput)
			)
		);
	};

	return (
		<>
			<div className='container-lg pt-5 d-flex justify-content-center'>
				<form className='d-flex align-items-center w-50' role='search'>
					<input
						className='form-control me-2'
						type='search'
						placeholder='Keresés'
						ref={searchInputRef}
					/>
					<button
						className='btn btn-outline-primary'
						type='button'
						onClick={handleSearchClick}>
						Keresés
					</button>
				</form>
			</div>
			<div className='container-lg py-5 d-flex flex-wrap gap-4'>
				{filteredList.length > 0
					? filteredList.map((project: any) => (
							<div className='card' key={project.id}>
								<img
									src={project.image}
									className='card-img-top'
									alt=''
								/>
								<div className='card-body d-flex flex-column pb-4'>
									<h2 className='card-title mb-3'>
										{project.title}
									</h2>
									<p className='card-text mb-5'>
										{project.description}
									</p>
									<Link
										to={'/project/' + project.id}
										className='btn btn-primary'>
										Részletek
									</Link>
								</div>
							</div>
					  ))
					: projects.map((project: any) => (
							<div className='card' key={project.id}>
								<img
									src={project.image}
									className='card-img-top'
									alt=''
								/>
								<div className='card-body d-flex flex-column pb-4'>
									<h2 className='card-title mb-3'>
										{project.title}
									</h2>
									<p className='card-text mb-5'>
										{project.description}
									</p>
									<Link
										to={'/project/' + project.id}
										className='btn btn-primary'>
										Részletek
									</Link>
								</div>
							</div>
					  ))}
			</div>
		</>
	);
}

export default ListProjects;
