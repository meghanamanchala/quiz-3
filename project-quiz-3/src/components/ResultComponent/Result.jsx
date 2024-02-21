// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
import './Result.css'
import { Link } from 'react-router-dom';

export default class Result extends Component {
    constructor(props) {
        super(props)

        this.state = {
            score: localStorage.getItem('score') || 0,
            attempted: localStorage.getItem('attempted')
        }
        let score = localStorage.getItem('score')
        console.log(score);
    }
    handlePlayAgain = () => {
        localStorage.setItem('score', 0)
        localStorage.setItem('attempted', 0)
    }
    render() {
        return (
            <div className='result-container'>
                <div className='heading'>
                    <h1>Result</h1>
                </div>
                <div className='report-section'>
                    <div className='report-headings'>
                        <div className='report'><h3>You need more practice!</h3></div>
                        <div className='score'><h2>Your score is {this.state.score}</h2></div>
                    </div>
                    <div className='overall-report'>
                        <div className='report1'>
                            <div className='report-name'>Total number of questions</div>
                            <div className='report-score'>15</div>
                        </div>
                        <div className='report2'>
                            <div className='report-name'>Number of attempted questions</div>
                            <div className='report-score'>{this.state.attempted}</div>
                        </div>
                        <div className='report3'>
                            <div className='report-name'>Number of correct answers</div>
                            <div className='report-score'>{this.state.score}</div>
                        </div>
                        <div className='report4'>
                            <div className='report-name'>Number of wrong answers</div>
                            <div className='report-score'>{this.state.attempted - this.state.score}</div>
                        </div>
                    </div>
                </div>
                <div className='button-section'>
                    <div className='playAgain-btn'>
                        <Link to="/quiz">
                            <button onClick={this.handlePlayAgain}>Play Again</button>
                        </Link>
                    </div>
                    <div className='home-btn'>
                        <Link to="/">
                            <button>Back to home</button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}