# Run
- to run js we need to use script tag inside html
- i.e. we need to call the scripts.
- <App /> -->jsx syntax
# node_module
- all the dependencies that are inside the package.json and places into node_module folder after installation.
# package-lock.json
- it's same as package.json but dependencies are locked that they have to run in this version only.
- stable version of p.json
# Readme.md
- markdown file 
- have no impact on code.
# index.html
- main page that's loaded
- single page that's loaded so, called spa ->single page application.(as we have single div that changed everytime.)
- it's updated everytime using dom and it appears like page is changing.

- it has <noscript> tag which tells that if js is not enabled in that browser then message inside the tag is to be given.
# Index.js
- we'll import react and reactdom inside index.js
- React- core foundational library
- ReactDOM- implementation of react on web -->it's a tree structure.

- reactdom have method named createRoot and makes root on given position so we have to pass the reference of a position in html.
- and then we are rendering the js funtion onto that html position.
- we are making custom tag using jsx e.g. <App />

# react-script
- we are not loading index.js inside index.html but react-script loads it in into the index.html in the background.

- vite don't give react-script therefore,it calls main.js inside index.html in it's default code.

# practices
- - all the js files have to be exported and imported in order to run it into another file.

- - components(js files/functions) should be of the type jsx
- create-react-app will not give error but it's a good practice that the function that returning html should be jsx and that is not returning anything should be js.
- vite will give error so make sure to use jsx.

- - component files should have it's file name as well as function starting from uppercase.
- functions must be starting from uppercase other wise don't print anything in case of create-react-app and gives error in case of vite.
- file name if starts with lowecase doesn't give error but it's a good practice to name it as well by uppercase.

- - while returning in a function ->it returns a single element.
- if you have multiple elements, enclose it inside <></>-->empty(called fragment) is also fine.