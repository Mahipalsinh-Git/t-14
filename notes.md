# Extra

```bash
bun add prettier-plugin-tailwindcss -D
```

Change files / add more:

- `.vscode/settings.json`
- `.vscode/extensions.json`
- `eslint.config.js`

## Pre-commit hooks — husky (https://typicode.github.io/husky/)

```bash
bun add husky lint-staged -D
```

Add below in `package.json`:

```json
"lint-staged": {
  "*": [
    "eslint --no-warn-ignored",
    "prettier --write"
  ]
}
```

## Conventioanl commits

- https://www.conventionalcommits.org/en/v1.0.0/#summary
- https://commitlint.js.org/
