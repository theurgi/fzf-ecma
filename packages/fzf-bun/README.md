# fzf-bun

[Bun](https://bun.sh/) bindings for the golang [fzf](https://github.com/junegunn/fzf) fuzzy finder.

## Installation

```sh
bun add fzf-bun
```

## Usage

```ts
import { fzf } from 'fzf-bun'

// Run `man fzf` in your shell to see all available fzf options
const fzfOptions = ['--multi', '--preview-window=up', '--preview', 'echo {}']

const selections = ['Pen ✒️', 'Pineapple 🍍', 'Apple 🍎', 'Pen ✒️']

const selection = await fzf(selections, fzfOptions)

// Do something with selection
console.log(selection)
```

## API

### fzf(selections: string[], options?: OptionType[])

Runs fzf as a child process with the specified options and returns the selected item(s).

### Return type

`Promise<T extends '--multi' ? string[] : string>`

If the `--multi` fzf option is provided to `options?: OptionType[]` then `fzf`
will return `Promise<string[]>` other wise it will return `Promise<string>`.
