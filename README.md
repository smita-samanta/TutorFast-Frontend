# TutorFast Frontend

## Getting Started

First install the needed `nodejs` packages with 

```bash
yarn
```

or 

```bash
npm install
```

. Then this project can be run with a dev server locally with

```bash
yarn server
```

or

```bash
npm run server
```
.

The server can be accessed via `localhost:3000`.

## Building Production Bundle

A production ready `bundle.js` can be made with

```bash
yarn build
```

or 

```bash
npm run build
```

and can be found at `build/bundle.js`.

## Serving Production Bundle

A production server can be run after generating `bundle.js` with 

```bash
yarn start
```

or

```bash
npm start
```

.  This server will serve everything in the `build/` and `html` directories.  So be careful what you put in those.