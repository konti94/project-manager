import { ReactNode, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import StepProgressBar from 'react-step-progress';

import 'react-step-progress/dist/index.css';

function AddNewProject(props: any): JSX.Element {
	const projectNameRef = useRef<HTMLInputElement>(null);
	const projectNameErrorRef = useRef<HTMLDivElement>(null);
	const projectDescriptionRef = useRef<HTMLTextAreaElement>(null);
	const projectCoWorkerNameRef = useRef<HTMLInputElement>(null);
	const projectCoWorkerPositionRef = useRef<HTMLInputElement>(null);
	const addNewWorkerToastRef = useRef<HTMLInputElement>(null);
	const projectAttachmentLabelRef = useRef<HTMLInputElement>(null);
	const projectAttachmentUrlRef = useRef<HTMLInputElement>(null);
	const addNewAttachmentToastRef = useRef<HTMLInputElement>(null);

	const navigate = useNavigate();

	let projectNameValue: string = '';
	let projectDescriptionValue: string = '';
	let workersList: object[] = [];
	let workerCounter: number = 1;
	let attachmentsList: object[] = [];
	let attachmentCounter: number = 1;

	const createStep1Content = (): ReactNode => {
		return (
			<div className='container mt-5 pt-4 px-0'>
				<form className='mb-4'>
					<div className='mb-3 w-50'>
						<div className='d-flex'>
							<label htmlFor='projectName' className='form-label'>
								Projekt neve:
							</label>
							<span className='ms-1 text-danger'>*</span>
						</div>
						<input
							type='text'
							id='projectName'
							className='form-control'
							placeholder='Példa projekt'
							ref={projectNameRef}
							onKeyUp={handleProjectNameKeyUp}
							maxLength={255}
							required
						/>
						<div
							id='projectNameErrorMessage'
							className='invalid-feedback d-none'
							ref={projectNameErrorRef}></div>
					</div>
					<div className='mb-3 w-50'>
						<label
							htmlFor='projectDescription'
							className='form-label'>
							Projekt leírása:
						</label>
						<textarea
							id='projectDescription'
							className='form-control'
							placeholder='Példa leírás'
							cols={30}
							rows={6}
							ref={projectDescriptionRef}
							minLength={50}
							maxLength={500}
							onChange={handleProjectDescriptionKeyUp}></textarea>
						<span className='mt-2 explanation'>
							Minimum 50, maximum 500 karakter
						</span>
					</div>
				</form>
				<p className='d-flex align-items-center'>
					<span className='me-1 text-danger'>*</span>
					<span className='fst-italic required-field-text'>
						kötelező mező
					</span>
				</p>
			</div>
		);
	};

	const createStep2Content = (): ReactNode => {
		return (
			<>
				<div className='container mt-5 pt-4 px-0'>
					<form className='mb-4'>
						<div className='d-flex align-items-center justify-content-between gap-4 mb-4'>
							<div className='w-50'>
								<label
									htmlFor='projectCoWorkerName'
									className='form-label'>
									Dolgozó neve:
								</label>
								<input
									type='text'
									id='projectCoWorkerName'
									className='form-control'
									placeholder='Példa Béla'
									ref={projectCoWorkerNameRef}
									defaultValue={''}
								/>
							</div>
							<div className='w-50'>
								<label
									htmlFor='projectCoWorkerPosition'
									className='form-label'>
									Dolgozó pozíciója:
								</label>
								<input
									type='text'
									id='projectCoWorkerPosition'
									className='form-control'
									placeholder='Példa pozíció'
									ref={projectCoWorkerPositionRef}
									defaultValue={''}
								/>
							</div>
						</div>
						<button
							type='button'
							id='addNewCoWorker'
							className='btn btn-primary py-2 px-4'
							onClick={handleAddNewWorker}>
							Hozzáadás
						</button>
					</form>
					{/* <ul className='p-0 list-unstyled'>
						{workersList.map((worker: any, i: number) => (
							<li
								className='d-flex align-items-center justify-content-between gap-4 mb-4'
								key={i}>
								<span>{worker.id}</span>
								<span>{worker.name}</span>
								<span>{worker.position}</span>
							</li>
						))}
					</ul> */}
				</div>
				<div className='toast-container position-fixed bottom-0 end-0 p-3'>
					<div
						className='toast align-items-center text-bg-success border-0'
						role='alert'
						aria-live='assertive'
						aria-atomic='true'
						ref={addNewWorkerToastRef}>
						<div className='d-flex'>
							<div className='toast-body'>Sikeres hozzáadás</div>
							<button
								type='button'
								className='btn-close btn-close-white me-2 m-auto'
								data-bs-dismiss='toast'
								aria-label='Close'></button>
						</div>
					</div>
				</div>
			</>
		);
	};

	const createStep3Content = (): ReactNode => {
		return (
			<>
				<div className='container mt-5 pt-4 px-0'>
					<form className='mb-4'>
						<div className='d-flex align-items-center justify-content-between gap-4 mb-4'>
							<div className='w-50'>
								<label
									htmlFor='projectAttachmentLabel'
									className='form-label'>
									Csatolmány címke:
								</label>
								<input
									type='text'
									id='projectAttachmentLabel'
									className='form-control'
									placeholder='Példa címke'
									ref={projectAttachmentLabelRef}
									defaultValue={''}
								/>
							</div>
							<div className='w-50'>
								<label
									htmlFor='projectAttachmentUrl'
									className='form-label'>
									Csatolmány url:
								</label>
								<input
									type='text'
									id='projectAttachmentUrl'
									className='form-control'
									placeholder='https://www.example.com'
									ref={projectAttachmentUrlRef}
									defaultValue={''}
								/>
							</div>
						</div>
						<button
							type='button'
							id='addNewAttachment'
							className='btn btn-primary py-2 px-4'
							onClick={handleAddNewAttachment}>
							Hozzáadás
						</button>
					</form>
				</div>
				<div className='toast-container position-fixed bottom-0 end-0 p-3'>
					<div
						className='toast align-items-center text-bg-success border-0'
						role='alert'
						aria-live='assertive'
						aria-atomic='true'
						ref={addNewAttachmentToastRef}>
						<div className='d-flex'>
							<div className='toast-body'>Sikeres hozzáadás</div>
							<button
								type='button'
								className='btn-close btn-close-white me-2 m-auto'
								data-bs-dismiss='toast'
								aria-label='Close'></button>
						</div>
					</div>
				</div>
			</>
		);
	};

	const handleProjectNameKeyUp = () => {
		projectNameValue = projectNameRef.current?.value || '';
	};

	const handleProjectDescriptionKeyUp = () => {
		projectDescriptionValue = projectDescriptionRef.current?.value || '';
	};

	const handleAddNewWorker = () => {
		const workerName: string = projectCoWorkerNameRef.current?.value || '';
		const workerPosition: string =
			projectCoWorkerPositionRef.current?.value || '';

		workersList.push({
			id: workerCounter,
			name: workerName,
			position: workerPosition,
		});

		addNewWorkerToastRef.current?.classList.add('show');

		setTimeout(() => {
			addNewWorkerToastRef.current?.classList.remove('show');
		}, 5000);

		workerCounter += 1;
	};

	const handleAddNewAttachment = () => {
		const attachmentLabel: string =
			projectAttachmentLabelRef.current?.value || '';
		const attachmentUrl: string =
			projectAttachmentUrlRef.current?.value || '';

		attachmentsList.push({
			id: attachmentCounter,
			label: attachmentLabel,
			url: attachmentUrl,
		});

		addNewAttachmentToastRef.current?.classList.add('show');

		setTimeout(() => {
			addNewAttachmentToastRef.current?.classList.remove('show');
		}, 5000);

		attachmentCounter += 1;
	};

	const step1Validator = (): boolean => {
		if (projectNameValue === '') {
			projectNameRef.current?.classList.add('is-invalid');
			projectNameErrorRef.current?.classList.remove('d-none');
			projectNameErrorRef.current?.append('Ez a mező kötelező');
			return false;
		}
		return true;
	};

	const onFormSubmit = (): void => {
		(async () => {
			try {
				const response = await fetch('/projects.json', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						id: props.projects.length + 1,
						title: projectNameValue,
						description: projectDescriptionValue,
						workers: workersList,
						attachments: attachmentsList,
					}),
				});
				const result = await response.json();
				navigate('/');
			} catch (error) {
				console.error(error);
			}
		})();
	};

	return (
		<div className='container-lg py-5'>
			<StepProgressBar
				startingStep={0}
				onSubmit={onFormSubmit}
				steps={[
					{
						label: 'Alap adatok',
						name: 'step 1',
						content: createStep1Content(),
						validator: step1Validator,
					},
					{
						label: 'Dolgozók',
						name: 'step 2',
						content: createStep2Content(),
					},
					{
						label: 'Csatolmányok (linkek)',
						name: 'step 3',
						content: createStep3Content(),
					},
				]}
				previousBtnName='Előző'
				nextBtnName='Következő'
			/>
		</div>
	);
}

export default AddNewProject;
