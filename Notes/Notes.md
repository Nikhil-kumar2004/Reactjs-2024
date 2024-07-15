# Reactjs-2024                                
- React is a library.
-library vs framework
- React is to used when we have complex frontend e.g. on 1 click changes takes place in 4-5 places.
- most project don't need react in initial phase
# why react was introduced:
- due to phantom read problem:
i.e. state->js & UI -> DOM and there was syncing problem between js and dom which leads to inconsistency.
- browser only understands html,css and js so react code is converted to them.
# components of react
- - react mainly have 2 attachments-->react-dom & react-native
- react-dom for working on web
- react-native for working on mobile apps.
# new concepts
- npm-->node package manager -->installer of libraries.
- npx-->node package executer -->only to execute not install.
- - npx create-react-app 01basicreact -->to run react project-->slow.
# package.json
- package.json -->first to be seen when doing project --> and there we see how to start the script or build.
- react and react dom are the main libraries.
- web-vitals->to track the performace

- build->react to html,css,js
- eject ->to eject from react and may run some other framework.
- scripts-->runs the project or ready it for the production.
- linting -->red line for error-->adjust
- browser support.
- ls-->list and cd-->change directory.
to run script-->npm run start.
# vite
- - we'll be using vite as it's fast.
- vite is a bundler.
- npm create vite@latest
- it doesn't have node_modules -->npm install ->required packages will be installed.
- it only have 2 main dependencies.
- npm run dev

- - we'll work mainly inside src folder.