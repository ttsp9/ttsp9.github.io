const commit_types = [
	'build', 
	'chore', 
	'ci', 
	'docs', 
	'style', 
	'refactor', 
	'perf', 
	'test', 
	'feat', 
	'fix', 
	'revert'
]
const commit_message = process.argv[2] + ''

const format_message = (commit_message: string) => {
	const message = commit_message.trim()
	const splitted = message.split(':')
	const type = (splitted[0] || 'any').trim() // Use 'any' as the default type

	if (!commit_types.includes(type) && type !== 'any') {
		throw new Error(`Invalid commit type: ${type}`)
	}
	let subject = splitted.slice(1).join(':').trim()
	subject = subject.replace(/\s+/g, ' ') // Ensure no more than one space
	subject = subject.charAt(0).toUpperCase() + subject.slice(1) // Capitalize first letter
	if (!subject.endsWith('.')) {
		subject += '.' // Add period if missing
	}
    
	const formatted_message = `${type}: ${subject}`
    
	return formatted_message
}

const formatted_message = format_message(commit_message)

process.stdout.write(formatted_message)