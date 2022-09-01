import logo from './logo.svg';
import {BreakpointProvider} from "react-socks";
import {About, Features, Footer, Navbar} from "./components";
import './App.css';

function App() {
    return (
        <BreakpointProvider>
            <div className="App">
                <Navbar/>
                <About source="https://cdn.pixabay.com/photo/2018/09/22/12/31/cat-3695213_1280.jpg" det="Quiz sample" width="80%" />
                <Features/>
                <Footer/>
            </div>
        </BreakpointProvider>
    );
}

export default App;
