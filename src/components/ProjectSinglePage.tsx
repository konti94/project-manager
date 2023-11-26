import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ProjectSinglePage(): JSX.Element {
	const { projectId } = useParams();
	const [project, setProject] = useState([]);

	useEffect(() => {
		(async () => {
			try {
				const response = await fetch('/projects.json');
				const data = await response.json();
				setProject(
					data.filter((item: any) => item.id === Number(projectId))
				);
			} catch (error) {
				console.error(error);
			}
		})();
	}, []);

	return (
		<div className='container-lg p-5'>
			{project.map((item: any) => (
				<div
					className='d-flex flex-column align-items-center'
					key={item.id}>
					<img src={item?.image} alt='' className='mb-4' />
					<h2 className='mb-3'>{item?.title}</h2>
					<p className='mb-3'>{item?.description}</p>
					<div className='d-flex flex-wrap gap-4 mb-4 w-75'>
						{item?.workers.map((worker: any) => (
							<div className='card rounded border p-4'>
								<h3 className='fs-5'>{worker?.name}</h3>
								<span>{worker?.position}</span>
							</div>
						))}
					</div>
					<div className='w-75'>
						{item?.attachments.map((attachment: any) => (
							<div className='d-flex gap-4 w-100'>
								<span>{attachment?.label}</span>
								<a
									href={attachment?.url}
									target='_blank'
									rel='noreferrer'>
									{attachment?.url}
								</a>
							</div>
						))}
					</div>
				</div>
			))}
		</div>
	);
}

export default ProjectSinglePage;
