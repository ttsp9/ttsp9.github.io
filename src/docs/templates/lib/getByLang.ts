import type { TDataType } from '@/src/docs/templates/data'

export type TLang = 'en' | 'ru' 

export const getByLang = (lang: TLang, key: string, data: any = {}) => {
	const mapped = data[key]?.map((item: any) => {
		const langData = item[lang]

		return {
			href: item.href,
			title: langData?.title || '',
			description: langData?.description || ''
		}
	})

	return mapped
}