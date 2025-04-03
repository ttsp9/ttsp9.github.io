export type TDataType = {
	[key: string]: Array<{
		href: string;
		[key: string]: { 
			title: string;
			description?: string;
		} | string;
	}>
}

export const data: TDataType = {
	clients: [
		{
			href: 'https://arenavs.com',
			en: {title: 'WEB3 Gaming Platform Arena'},
			ru: {title: 'Игровая платформа WEB3 Arena'},
		},
		{
			href: 'https://tfm.com',
			en: {title: 'TFM'},
			ru: {title: 'TFM'},
		},
		{
			href: 'https://t.me/MemesLabBot',
			en: {title: 'Memes Lab Bot'},
			ru: {title: 'Бот для создания мемов'},
		},
		{
			href: 'https://platinum.fund',
			en: {title: 'Platinum Fund'},
			ru: {title: 'Platinum Fund'},
		}
	],
	tools: [
		{
			href: 'https://pytorch.org',
			en: { title: 'PyTorch' },
			ru: { title: 'PyTorch' }
		},
		{
			href: 'https://lightning.ai/docs/torchmetrics/stable',
			en: { title: 'TorchMetrics' },
			ru: { title: 'TorchMetrics' }
		},
		{
			href: 'https://behave.readthedocs.io',
			en: { title: 'Behave' },
			ru: { title: 'Behave' }
		},
		{
			href: 'https://docs.pytest.org',
			en: { title: 'PyTest' },
			ru: { title: 'PyTest' }
		},
		{
			href: 'https://locust.io',
			en: { title: 'Locust' },
			ru: { title: 'Locust' }
		},
		{
			href: 'https://playwright.dev',
			en: { title: 'Playwrite' },
			ru: { title: 'Playwrite' }
		},
		{
			href: 'https://www.cypress.io',
			en: { title: 'Cypress' },
			ru: { title: 'Cypress' }
		},
		{
			href: 'https://jestjs.io',
			en: { title: 'Jest' },
			ru: { title: 'Jest' }
		}
	]
}