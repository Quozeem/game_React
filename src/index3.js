import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import React from "react";
import ReactDOM  from "react-dom";
import App from './components/App'
import './style.css'


const nums=[1,2,3,4,5]
const squared=nums.map((items)=>{
   // (function(items){
        return items * items
   // })
})  
console.log(squared)
const uppercase=["ade","ola","apops","pola"]
const upper=uppercase.map(( name)=>
{
    return name[0].toUpperCase() + name.slice(1)
})
console.log(upper)
const color=['violent','blue','red','orange','lemon','black']
const Elements=color.map((colors)=>{
    return `<h3>${colors}</h3>`
})
console.log(Elements)
ReactDOM.render(<div>
    <App/>
   </div>,document.querySelector('.container'));