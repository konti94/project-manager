import { useEffect } from 'react';

function ListProjects(props: any): JSX.Element {
	const { projects, setProjects } = props;

	useEffect(() => {
		const fetchProjects = async () => {
			try {
				const response = await fetch('projects.json');
				const data = await response.json();
				setProjects(data);
			} catch (error) {
				console.error(error);
			}
		};

		fetchProjects();
	}, [projects]);

	return (
		<div className='container-lg py-5 d-flex flex-wrap gap-4'>
			{projects.map((project: any) => (
				<div className='card' key={project.id}>
					<img src={project.image} className='card-img-top' alt='' />
					<div className='card-body d-flex flex-column pb-4'>
						<h2 className='card-title mb-3'>{project.title}</h2>
						<p className='card-text mb-5'>{project.description}</p>
						<button className='btn btn-primary'>
							Show details
						</button>
					</div>
				</div>
			))}
		</div>
	);
}

export default ListProjects;
