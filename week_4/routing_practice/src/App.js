import './App.css';
import Index from './components/home';
import ParamsComponent from './components/ParamsComponent';
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className="App">

      <Routes>
        <Route element={<Index/>} path="/home"/>
        <Route element={<ParamsComponent />} path="/:word" />
        <Route element={<ParamsComponent />} path="/:word/:color/:bgColor" />
      </Routes>

    </div>
    </BrowserRouter>
  );
}

export default App;