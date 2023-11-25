import { ReactNode, useRef } from 'react';
import StepProgressBar from 'react-step-progress';

import 'react-step-progress/dist/index.css';

function AddNewProject(props: any): JSX.Element {
	const projectNameRef = useRef<HTMLInputElement>(null);
	const projectNameErrorRef = useRef<HTMLDivElement>(null);
	const projectDescriptionRef = useRef<HTMLTextAreaElement>(null);
	const workersListRef = useRef<HTMLUListElement>(null);

	let projectNameValue: string = '';

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
							maxLength={500}></textarea>
						<span className='mt-2 explanation'>
							Minimum 50, maximum 500 karakter
						</span>
					</div>
					<div className='w-50'>
						<label htmlFor='formFile' className='form-label'>
							Projekthez tartozó kép:
						</label>
						<input
							id='projectPicture'
							className='form-control'
							type='file'
						/>
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
			<div className='container mt-5 pt-4 px-0'>
				<form className='mb-4'>
					<ul className='p-0 list-unstyled' ref={workersListRef}>
						<li className='d-flex align-items-center justify-content-between gap-4 mb-4 p-4 border rounded'>
							<div className='w-50'>
								<label
									htmlFor='projectCoWorkerName1'
									className='form-label'>
									Dolgozó neve:
								</label>
								<input
									type='text'
									id='projectCoWorkerName1'
									className='form-control'
									placeholder='Példa Béla'
								/>
							</div>
							<div className='w-50'>
								<label
									htmlFor='projectCoWorkerPosition1'
									className='form-label'>
									Dolgozó pozíciója:
								</label>
								<input
									type='text'
									id='projectCoWorkerPosition1'
									className='form-control'
									placeholder='Példa pozíció'
								/>
							</div>
						</li>
					</ul>
					<button
						type='button'
						id='addNewCoWorker'
						className='btn btn-primary py-2 px-4'
						onClick={handleAddNewWorker}>
						Új hozzáadása
					</button>
				</form>
			</div>
		);
	};

	const createStep3Content = (): ReactNode => {
		return (
			<div className='container mt-5 pt-4 px-0'>
				<form className='mb-4'>
					<ul className='p-0 list-unstyled'>
						<li className='mb-4 p-4 border rounded'>
							<div className='mb-4 fs-3'>
								<span>1. </span>
								csatolmány
							</div>
							<div className='d-flex align-items-center justify-content-between gap-4'>
								<div className='w-50'>
									<label
										htmlFor='projectAttachmentLabel1'
										className='form-label'>
										Csatolmány címke:
									</label>
									<input
										type='text'
										id='projectAttachmentLabel1'
										className='form-control'
										placeholder='Példa címke'
									/>
								</div>
								<div className='w-50'>
									<label
										htmlFor='projectAttachmentUrl1'
										className='form-label'>
										Csatolmány url:
									</label>
									<input
										type='text'
										id='projectAttachmentUrl1'
										className='form-control'
										placeholder='https://www.example.com'
									/>
								</div>
							</div>
						</li>
					</ul>
					<button
						type='button'
						id='addNewCoWorker'
						className='btn btn-primary py-2 px-4'>
						Új hozzáadása
					</button>
				</form>
			</div>
		);
	};

	const handleProjectNameKeyUp = () => {
		projectNameValue = projectNameRef.current?.value || '';
	};

	const handleAddNewWorker = () => {};

	const step1Validator = (): boolean => {
		if (projectNameValue === '') {
			projectNameRef.current?.classList.add('is-invalid');
			projectNameErrorRef.current?.classList.remove('d-none');
			projectNameErrorRef.current?.append('Ez a mező kötelező');
			return false;
		}
		return true;
	};

	function onFormSubmit(): void {}

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
