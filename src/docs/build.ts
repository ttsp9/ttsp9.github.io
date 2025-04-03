import { compile, mdList } from '@/src/docs/docs-components'
import { data } from '@/src/docs/templates/data'
import { getByLang } from '@/src/docs/templates/lib/getByLang'

const clients_en = getByLang('en', 'clients', data)
const clients_ru = getByLang('ru', 'clients', data)

const tools_en = getByLang('en', 'tools', data)
const tools_ru = getByLang('ru', 'tools', data)

compile(
	'./src/docs/templates/readme.tpl.md', 
	'./README.md', 
	{
		clients: mdList(clients_en),
		tools: mdList(tools_en),
	}
)

compile(
	'./src/docs/templates/readme.tpl.ru.md', 
	'./docs/ru/readme.md', 
	{
		clients: mdList(clients_ru),
		tools: mdList(tools_ru),
	}
)