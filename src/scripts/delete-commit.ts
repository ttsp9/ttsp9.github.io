import { execSync } from 'child_process'

const delete_commit = (commit_id: any) => {
	if (!commit_id) {
		throw new Error('Commit ID is required.')
	}

	try {
		// Remove the commit from the current branch
		execSync(`git rebase --onto ${commit_id}^ ${commit_id}`, { stdio: 'inherit' })
		console.log(`Commit ${commit_id} has been deleted from the current branch.`)
	} catch (error) {
		throw new Error(`Error deleting the commit: ${error}`)
	}
}

// Get the commit ID from the command-line arguments and call the function
const commit_id = process.argv[2]

try {
	delete_commit(commit_id)
} catch (error: any) {
	console.error(error.message)
	process.exit(1)
}
