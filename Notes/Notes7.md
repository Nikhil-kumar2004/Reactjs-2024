# Rules:
1) every tag must be a colosing tag
- so use <img ... /> end with '/'.

2) use className instead of class as class is reserved in jsx
- also have to use htmlfor instead of for as for also reserved.

# props
- - It makes our components reusable
- we can make a components folder and store some components there based on property(in react) not html,js,css etc.
- e.g. a component is a card and can make use of structure of that card just by changing some data using props.
- card must be jsx.

- can write properties to be changing every time inside <Card /> but can't place arr,obj directly inside have to declare it first inside function and then calling it like {myArr}.
- props is an object so, use props.__ or <new syntax> use {name,para} instead of props and call name,para directly without '.' operator.
-{name,para}-->variable name should be same in both Card.jsx and App.jsx