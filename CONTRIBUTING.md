# Contributing

## Getting Started

1. Fork the repository on GitHub.
2. Clone your fork to your local machine:

```bash
git clone https://github.com/<your-username>/fzf-ecma.git
```

3. Add the original repository as a remote:

```bash
git remote add upstream https://github.com/theurgi/fzf-ecma.git
```

4. Install dependencies and set up the project:

```
pnpm install
```

5. Create a new branch for your changes:

```bash
git checkout -b feature/my-new-feature
```

## Making Changes

1. Make your changes in the new branch.
2. Write tests for your changes, if applicable.
3. Ensure all tests pass by running:

```bash
pnpm test
```

4. Ensure the project builds without errors by running:

```
pnpm build
```

5. If your changes affect the package version or require a changelog update, run
   `pnpm changeset` and follow the prompts to generate the appropriate
   changeset:

```
pnpm changeset
```

6. Commit your changes with a clear and descriptive commit message.
7. Pull the latest changes from the upstream repository and rebase your branch:

```bash
git fetch upstream
git rebase upstream/main
```

8. Push your changes to your fork:

```bash
git push origin feature/my-new-feature
```

## Reporting Issues

If you find a bug or have a suggestion for improvement, please open a new issue
in the original repository. Provide a clear and descriptive title, as well as
any relevant information to help reproduce the issue or understand the
suggestion.
