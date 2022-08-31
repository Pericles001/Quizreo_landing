import logo from './logo.svg';
import {BreakpointProvider} from "react-socks";
import {About, Feature, Footer, Navbar} from "./components";
import './App.css';

function App() {
    return (
        <BreakpointProvider>
            <div className="App">
                <Navbar/>
                <About/>
                <Feature/>
                <Footer/>
            </div>
        </BreakpointProvider>
    );
}

export default App;
