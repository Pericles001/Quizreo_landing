import logo from './logo.svg';
import {BreakpointProvider} from "react-socks";
import {About} from "./components";
import './App.css';

function App() {
    return (
        <BreakpointProvider>
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
               <About/>
                </header>
            </div>
        </BreakpointProvider>
    );
}

export default App;
