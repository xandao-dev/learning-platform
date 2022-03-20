import svelteLogo from '../assets/trainings/svelte.png';
import reactLogo from '../assets/trainings/react.png';
import { trainings, ITraining } from '../store/trainings';
import { trainingModules, ITrainingModule } from '../store/trainingModules';
import { moduleLessons, IModuleLesson } from '../store/moduleLessons';
import { get } from 'svelte/store';

export function fillInitialTrainings() {
	if (!get(trainings).length) {
		const initialTrainings: ITraining[] = [
			{
				id: '00569d59-5bc9-491e-94ec-a5906188727e',
				name: 'Curso de Svelte',
				description: 'Um curso para introdução ao Svelte utilizando Vite',
				image: svelteLogo,
				workload: '20h',
				startDate: 1600000000000,
				endDate: 9999999999999,
				enabled: true,
			},
			{
				id: '42f0aa21-3bbd-46af-9586-0153c6f32a0d',
				name: 'Curso de React',
				description: 'Como criar aplicativos utilizando React',
				image: reactLogo,
				workload: '30h',
				startDate: 1600000000000,
				endDate: 9999999999999,
				enabled: false,
			},
		];
		trainings.createBulk(initialTrainings);
	}

	if (!get(trainingModules).length) {
		const initialModules: ITrainingModule[] = [
			{
				id: '7f6b5ef4-bdfe-45f3-9e39-11be40e24eb0',
				trainingId: '00569d59-5bc9-491e-94ec-a5906188727e',
				image: svelteLogo,
				name: 'Introdução',
				description: 'Como iniciar com o Svelte',
				enabled: true,
			},
			{
				id: '052114fc-c4e1-4eb9-b94d-9702f908ca1e',
				trainingId: '00569d59-5bc9-491e-94ec-a5906188727e',
				image: svelteLogo,
				name: 'Componentes',
				description: 'Aprenda a criar componentes',
				enabled: true,
			},
			{
				id: '315a8e35-d03a-486c-854a-53529199bfbc',
				trainingId: '00569d59-5bc9-491e-94ec-a5906188727e',
				image: svelteLogo,
				name: 'Props e Estados',
				description: 'Aprenda sobre props e estados',
				enabled: false,
			},
			{
				id: 'e18f402f-d449-4855-ae6a-e02f2d4842b3',
				trainingId: '00569d59-5bc9-491e-94ec-a5906188727e',
				image: svelteLogo,
				name: 'Reatividade',
				description: 'Aprenda sobre reatividade',
				enabled: true,
			},
			{
				id: '435e01e3-1686-4946-83a2-dc98f883af22',
				trainingId: '42f0aa21-3bbd-46af-9586-0153c6f32a0d',
				image: reactLogo,
				name: 'Introdução',
				description: 'Iniciando com React',
				enabled: true,
			},
			{
				id: '3e3c29cc-9cfa-49f4-9920-7486ddbed030',
				trainingId: '42f0aa21-3bbd-46af-9586-0153c6f32a0d',
				image: reactLogo,
				name: 'JSX',
				description: 'Aprenda sobre JSX',
				enabled: true,
			},
			{
				id: 'aeba495c-7799-4a0f-a066-5e4e1af80740',
				trainingId: '42f0aa21-3bbd-46af-9586-0153c6f32a0d',
				image: reactLogo,
				name: 'Componentes',
				description: 'Aprenda a criar componentes',
				enabled: false,
			},
		];
		trainingModules.createBulk(initialModules);
	}

	if (!get(trainings).length) {
		const initialLessons: IModuleLesson[] = [
			{
				id: '507e7d63-0f5e-4024-8805-cbca03bce1d9',
				moduleId: '7f6b5ef4-bdfe-45f3-9e39-11be40e24eb0',
				name: 'Primeira aula',
				content: 'Conteúdo da primeira aula de introdução',
			},
			{
				id: '4374e4d1-0372-4b35-bfc3-6eb1e629f4d2',
				moduleId: '7f6b5ef4-bdfe-45f3-9e39-11be40e24eb0',
				name: 'Segunda aula',
				content: 'Conteúdo da segunda aula de introdução',
			},
			{
				id: '96a2cd5f-61ef-43cb-b032-737e1986d3a5',
				moduleId: '7f6b5ef4-bdfe-45f3-9e39-11be40e24eb0',
				name: 'Terceira aula',
				content: 'Conteúdo da terceira aula de introdução',
			},
			{
				id: 'c40d00c6-dedf-4af7-80ed-fe901c5e3f79',
				moduleId: '052114fc-c4e1-4eb9-b94d-9702f908ca1e',
				name: 'Quarta aula',
				content: 'Conteúdo da quarta aula de componentes',
			},
			{
				id: '694a8071-8499-46ef-acaa-206127dc664c',
				moduleId: '315a8e35-d03a-486c-854a-53529199bfbc',
				name: 'Quinta aula',
				content: 'Conteúdo da quinta aula de props e estados',
			},
			{
				id: 'f030c663-8e46-46fb-9a9f-9c3eb39a4db4',
				moduleId: '315a8e35-d03a-486c-854a-53529199bfbc',
				name: 'Sexta aula',
				content: 'Conteúdo da sexta aula de props e estados',
			},
			{
				id: '9853be7c-3523-4f1a-9070-31533a58de0a',
				moduleId: 'e18f402f-d449-4855-ae6a-e02f2d4842b3',
				name: 'Sétima aula',
				content: 'Conteúdo da sétima aula de reatividade',
			},
			{
				id: 'cb9fe8e5-d602-4069-8cfb-7b1c66324b6f',
				moduleId: '435e01e3-1686-4946-83a2-dc98f883af22',
				name: 'Primeira aula',
				content: 'Conteúdo da primeira aula de React',
			},
			{
				id: '60b28cc0-56bc-4b28-8457-99ca1c908da5',
				moduleId: '3e3c29cc-9cfa-49f4-9920-7486ddbed030',
				name: 'Segunda aula',
				content: 'Conteúdo da segunda aula de React',
			},
			{
				id: 'ef949f1a-e53d-4da1-8352-e8aaee8d177c',
				moduleId: 'aeba495c-7799-4a0f-a066-5e4e1af80740',
				name: 'Terceira aula',
				content: '',
			},
		];
		moduleLessons.createBulk(initialLessons);
	}
}
