function customElement(Element,container){
    const tag=document.createElement(Element.type);
    tag.innerHTML=Element.children;
    for(const key in Element.props) {
        if(key != children){
            tag.setAttribute(key,Element.props[key])
        }     
    }
    container.appendChild(tag);
}
const createElem={
    type:"a",
    props:{
        href:"https://google.com",
        target:"_blank"
    },
    children:"click me to enter google"
}
const rootElement=document.getElementById('root')
customElement(createElem,rootElement);