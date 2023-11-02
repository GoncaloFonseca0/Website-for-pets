
import { ReactDOM } from "react";
import {createRoot} from "react-dom";
import Pet from "./Pet";


const App = ()=> {
  <div>
    <h1>Adopt Me!</h1>
    <Pet name="Luna" animal="Dog" breed="Havanese"></Pet>
    <Pet name="Pepper" animal="Bird" breed="Cockatiel"></Pet>
    <Pet name="Doink" animal="Cat" breed="Mix"></Pet>
  </div>
}


const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App/>);
