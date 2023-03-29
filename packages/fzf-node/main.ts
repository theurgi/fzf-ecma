import { exec, spawn } from 'node:child_process'

/**
 * Represents an option type for the fzf function.
 */
type OptionType = string | '--multi'

/**
 * Determines if the options array contains the '--multi' option.
 * @param options - An array of OptionType elements or undefined.
 * @returns True if the options array contains '--multi', false otherwise.
 */
function isMulti(options: OptionType[] | undefined): options is '--multi'[] {
	return options?.includes('--multi') || false
}

/**
 * Invokes the fzf CLI tool to perform fuzzy search on a list of selections.
 * @template T - The type of options passed to the fzf function.
 * @param selections - An array of strings representing the list of items to search.
 * @param options - An optional array of options to pass to the fzf CLI tool.
 * @returns A promise that resolves to a single selected item (string) or an array of selected items (string[]), depending on the options provided.
 */
export async function fzf<T extends OptionType>(
	selections: string[],
	options?: T[]
): Promise<T extends '--multi' ? string[] : string> {
	if (!exec('fzf').pid) {
		process.stderr.write(
			`The 'fzf' executable is required for fzf-node but was not found in your PATH.`
		)
		process.stdout.write(
			'See https://github.com/junegunn/fzf#installation for fzf installation instructions.'
		)
		process.exit(1)
	}

	const fzf = spawn('fzf', [...(options || '')], {
		stdio: ['pipe', 'pipe', 'inherit'],
	})

	fzf.stdout.setEncoding('utf8')
	fzf.stdin.write(selections.join('\n'))
	fzf.stdin.end()

	if (isMulti(options)) {
		return new Promise((resolve) => {
			fzf.stdout.on('data', (selection: string) => {
				resolve(selection.split('\n').filter(Boolean))
			})
		}) as unknown as T extends '--multi' ? string[] : string
	}

	return new Promise((resolve) => {
		fzf.stdout.on('data', (selection: string) => {
			resolve(selection)
		})
	}) as unknown as T extends '--multi' ? string[] : string
}
