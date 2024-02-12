// eslint-disable-next-line no-unused-vars
import React from "react";
import {Routes,Route} from 'react-router-dom';
import './App.css'
import HomeComponent from "./components/HomeComponent/HomeComponent";
import QuizComponent from "./components/QuizComponent/QuizComponent";
import ResultComponent from "./components/ResultComponent/ResultComponent";


function App(){
  return(
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeComponent />}/>
        <Route path="/quiz" element={<QuizComponent />}/>
        <Route path="/result" element={<ResultComponent />}/>


      </Routes>
    </div>
  )
}
export default App;