# custom react
- as we can see (see customreact folder) html syntax is simplar then js syntax so to made it easy we use jsx-->js+html
- and react/vite all these platform uses bundlar to parse html to js as react don't understand html as react need js to make tree structure
- we can write the function above and call it like App() but for the sake of optimization and code convention.
- <App /> -->jsx syntax-->definitely a function(App()) is expected inside < /> -->hence passing an object will give error as .render is defined before(syntax) and expecting a function.
although at the end of the day function is parsed into object but still passing of object is not expected.

# Additional points
- React provide us with a method "createElement" from which we can make elements(tags with values) and it's syntax is predefined. and then we can store that method into a varible and that varible can be then called inside the dom render.(01vitebasic).

- react has a bulk of optimization techniques and algorithms behind the scene that's why we need to follow syntax in certain cases which makes react powerful.

- - use {} when want to use varibles inside html.
- variable inside {} is not expression it's evaluated expression i.e. result should be putted inside not raw code like html/js.
