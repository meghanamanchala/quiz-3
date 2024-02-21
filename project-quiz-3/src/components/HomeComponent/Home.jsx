import React, { Component } from 'react';
import './Home.css'
import { Link } from 'react-router-dom';
export default class Home extends Component {
    render() {
        return (
            <div className='main-container'>
                <div><h2 className='title'>Quiz App</h2></div>
                <div>
                    <Link to="/quiz">
                        <button className='play-btn'>Play</button>
                    </Link>
                </div>
            </div>
        );
    }
}