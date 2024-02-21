// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../HomeComponent/Home';
import Quiz from '../QuizComponent/Quiz';
import Result from '../ResultComponent/Result';
import quizQuestion from '../resources/quizQuestion.json'
const AllRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/quiz' element={<Quiz data={quizQuestion} />}></Route>
                <Route path='/result' element={<Result />}></Route>
            </Routes>
        </div>
    );
}

export default AllRoutes;