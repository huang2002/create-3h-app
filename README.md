# create-3h-app

> A simple app initializer.

## Introduction

This is a CLI tool that helps you quickly initialize
a development environment for your awesome front-end app.

## Usage

```txt
$ create-3h-app --help
A simple app initializer.

Usage:
  create-3h-app [options]

Options:
  --name, -n <pkg>              The name of the package
  --author, -a <name>           The author of the package
  --desc, -d <description>      The description of the package
  --keywords, -k <words...>     The keywords of the package
  --repo, -r <repository>       The repository of the package
  --no-install                  Do not install dependencies instantly
  --help, -h                    Show help info

```

## Example

```bash
npm init 3h-app -- -n my-awesome-app -a Peter -d "This is my awesome app".
# or
npx create-3h-app -n my-awesome-app -a Peter -d "This is my awesome app".
```

## Template Structure

```txt
my-awesome-app/
+-- public/
| +-- index.html
| `-- index.css
+-- src/
| `-- index.js
+-- test/
| `-- index.html
+-- .gitignore
+-- LICENSE
+-- README.md
+-- rollup.config.js
`-- dev-server.js
```

## Workflow

Generally, you

1. Write your source code in the `src` folder;
2. Test your app using the dev server (by executing `npm test`)
    which loads your source code directly;
3. Build your app by executing `npm run build`;
4. Deploy your app in the `public` directory...

## Built-in Scripts

| name    | description            |
|:--------|:-----------------------|
| `test`  | Launch the dev server. |
| `build` | Build your code.       |

The development server employs [`herver`](https://github.com/huang2002/herver)
to serve your app for testing. It will serve your source code
directly from `src` so that after you change something
in your source code, you just need to refresh your page to test it.
Other resource files are supposed to be put in the `public` folder,
and they will be served properly by the development server.
Additionally, files of local libs inside `/node_modules`
can be loaded using URLs starting with `/node_modules`.

After building your code by executing `npm run build`,
a bundled JavaScript file(`index.js`) will be placed
in the `public` folder, which will be transformed by `babel`,
bundled by `rollup` and minified by `terser`.
Finally, you should get your app in the `public` folder.
