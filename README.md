# fzf-ecma

fzf-ecma is a monorepo containing JavaScript bindings (with TypeScript support)
for the popular golang [fzf](https://github.com/junegunn/fzf) fuzzy finder. It
currently includes implementations for [Bun](https://bun.sh/) and
[Node.js](https://nodejs.org/).

**Why wrap a golang library? Why not rewrite it in JavaScript?**

1. That would take a lot of work
2. fzf is _Blazingly fast_ ™️
3. fzf is very well maintained

> Note: All packages in this repository require fzf to be installed on your
> system and available in your PATH.

## Packages

See each package's README for specific installation and usage details.

<table>
  <tr>
    <th>Package</th>
    <th>Latest</th>
    <th>Changelog</th>
  </tr>
  <tr>
    <td><a href="packages/fzf-node/">fzf-node</a></td>
    <td>
     <a href="https://www.npmjs.com/package/fzf-node">
      <img src="https://img.shields.io/npm/v/fzf-node">
     </a>
    </td>
    <td><a href="packages/fzf-node/CHANGELOG.md">Changelog</a></td>
  </tr>
  <tr>
    <td><a href="packages/fzf-bun/">fzf-bun</a></td>
    <td>
     <a href="https://www.npmjs.com/package/fzf-bun">
      <img src="https://img.shields.io/npm/v/fzf-bun">
     </a>
    </td>
    <td><a href="packages/fzf-bun/CHANGELOG.md">Changelog</a></td>
  </tr>
  <tr>
    <td><a href="packages/fzf-deno/">fzf-deno</a></td>
    <td>TODO</td>
    <td></td>
  </tr>
</table>

## Basic usage

Simply provide `fzf` with an array of strings and an array of fzf options. When
this script is executed, it will spawn fzf as a child process in your SHELL. For
all available fzf options see the [fzf docs](https://github.com/junegunn/fzf).

```ts
import { fzf } from 'fzf-bun'

// Run `man fzf` in your shell to see all available fzf options
const fzfOptions = ['--multi', '--preview-window=up', '--preview', 'echo {}']

const selections = ['Pen ✒️', 'Pineapple 🍍', 'Apple 🍎', 'Pen ✒️']

const selection = await fzf(selections, fzfOptions)

// Do something with selection
console.log(selection)
```

## Contributing

Contributions are welcome! Please read the [contributing
guidelines](CONTRIBUTING.md) before submitting pull requests or opening issues.

## License

[MIT](./LICENSE)
