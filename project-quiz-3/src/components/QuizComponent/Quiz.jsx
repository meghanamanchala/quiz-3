import React, { Component } from 'react';
import './Quiz.css'
import { Link } from 'react-router-dom';
export default class Quiz extends Component {
    constructor(props) {
        super(props)
        this.state = {
            index: 0,
            score: 0
        }
    }
    handleQuit = () => {
        alert("Are you sure you want to quit")
    }
    handlePrevious = () => {
        this.setState(prevState => {
            if (prevState.index - 1 >= 0) {
                return {
                    index: prevState.index - 1
                }
            } else {
                return {
                    index: 0
                }
            }

        })
    }
    handleNext = () => {
        this.setState(prevState => {
            if (prevState.index + 1 <= 14) {
                return {
                    index: prevState.index + 1
                }
            } else {
                return {
                    index: 14
                }
            }
        })
    }
    handleFinish = () => {
        this.setState({ index: 0 })
        this.setState({ score: 0 })
    }
    evaluate = (answer, selectedAnswer) => {
        console.log(answer);
        console.log(selectedAnswer);
        if (answer == selectedAnswer) {
            alert("Your answer is correct")
            this.setState(prevState => {
                return { score: prevState.score + 1 }
            }, () => {
                console.log(this.state.score);
                localStorage.setItem("score", this.state.score);
            })
        } else {
            alert("Your answer is wrong")
        }
        localStorage.setItem("attempted", this.state.index + 1)
        this.handleNext()
    }
    render() {
        const { data } = this.props
        return (
            <div className='page-container'>
                <div className='container'>
                    <div className='top-section'>
                        <div className='page-section'>
                            <h4 className='page'>{this.state.index + 1} of 15</h4>
                        </div>
                        <div className='Question-section'>
                            <div className='Question-heading'><h1>Question</h1></div>
                            <div><h4 className='question'>{data[this.state.index].question}</h4></div>
                        </div>
                    </div>
                    <div className='bottom-section'>
                        <div className='option-section'>
                            <div className="section">
                                <div className='option-button'><input type="button" value={data[this.state.index].optionA} onClick={() => this.evaluate(data[this.state.index].answer, data[this.state.index].optionA)} /></div>
                                <div className='option-button'><input type="button" value={data[this.state.index].optionB} onClick={() => this.evaluate(data[this.state.index].answer, data[this.state.index].optionB)} /></div>
                            </div>
                            <div className='section'>
                                <div className='option-button'><input type="button" value={data[this.state.index].optionC} onClick={() => this.evaluate(data[this.state.index].answer, data[this.state.index].optionC)} /></div>
                                <div className='option-button'><input type="button" value={data[this.state.index].optionD} onClick={() => this.evaluate(data[this.state.index].answer, data[this.state.index].optionD)} /></div>
                            </div>
                        </div>
                        <div className='button-section'>
                            <div className='button'><button className='previous-btn' onClick={this.handlePrevious}>Previous</button></div>
                            <div className='button'><button className='next-btn' onClick={this.handleNext}>Next</button></div>
                            <div className='button'><button className='quit-btn' onClick={this.handleQuit}>Quit</button></div>
                            <div className='button'>
                                <Link to="/result">
                                    <button className='finish-btn' onClick={this.handleFinish}>Finish</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}