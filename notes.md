Extra
bun add prettier-plugin-tailwindcss -D

change files / add more
.vscode/settngs.json
.vscode/extension.json
eslint.config.js

pre-commit hooks - husky (https://typicode.github.io/husky/)
bun add husky lint-staged -D

add below in package.json  
"lint-staged": {
"*": [
"eslint --no-warn-ignored",
"prettier --write"
]
}
