import React from "react";
import ReactDOM  from "react-dom";




//Importing the important functions 
import "./index.css";
import App from "./App";
import Moviesdata from "./Movie_data";
import Netcards from "./Netcards";



/*Using the ReactDom.render method in this render method we are defining the map funcion which is using the moviesdata array and in this map function we are using the netcards function */
ReactDOM.render(
<>
<div className="heading">
   <h1>Netfilx</h1> 
</div>
<App/>
{Moviesdata.map(Netcards)}
</>,
document.getElementById("root")

);

/*
import { render } from 'react-dom';
const container = document.getElementById('app');
render(<App tab="home" />, container);

// After
import { createRoot } from 'react-dom/client';
const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />);
*/