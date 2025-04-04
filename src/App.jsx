//Task 2: Use the Component

import React from "react";
import Greeting from "./components/greeting";

function App() {
    return(
        <div>
            <h1>Welcome to an Antiguan Production</h1>
            
            <a 
            className="App-link"
            href="https://reactjs.org" 
            target="_blank" 
            rel="noopener noreferrer">
                            </a>    
            <Greeting/>
        </div>
    );
}
export default App;