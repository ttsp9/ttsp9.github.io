import assert from 'node:assert'
import { readFileSync, writeFileSync } from 'node:fs'

export type TMdListComponentItem = {
	href: string
	title: string
	description: string
}

export type TMdListItem = {
	href: string,
	title?: string,
	description?: string,
}

export const mdList = (items: TMdListItem[]) => {
	const md_list_items = items.map((item: TMdListItem) => {
		const href = item.href
		const title = item.title || item.href
		const description = item.description ? `- ${item.description}` : ''
		const md_list_item = `- [${title}](${href})${description}`

		return md_list_item
	})

	return md_list_items.join('\n')
}
	 
export const compile = (src_path: string, target: string, data: any = {}) => {
	const src = readFileSync(src_path, 'utf-8')
	let compiled = src

	for (const [key, value] of Object.entries(data)) {
		const regex = new RegExp(`\\$\\{${key}\\}`, 'g')
		compiled = compiled.replace(regex, String(value))
	}

	writeFileSync(
		target, 
		compiled, 
		'utf-8'
	)

	return compiled
}