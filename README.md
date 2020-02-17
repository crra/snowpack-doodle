# snowpack-doodle

Simple example that uses:

- Bundler: [Snowpack](https://www.snowpack.dev/)
- Component Framework: [Preact](https://preactjs.com/) including JSX and Fragments
- Router: [Wouter](https://github.com/molefrog/wouter)
  - _NOTE_: there is an error during the installation because of the missing React dependency (Preact is used instead). This warning can be ignored. Don't know how this can be suppressed.
- Transpiler: [Babel](https://babeljs.io/)
- CSS Grid: [Template](https://codepen.io/mirisuzanne/pen/JjPeQYP?editors=0100)

## Build

```sh
npm run build
```

## Development

Including live-reload

```sh
npm run start
```

## TODOs

- optimize CSS (assets)
- add styling system (e.g. styled-components)