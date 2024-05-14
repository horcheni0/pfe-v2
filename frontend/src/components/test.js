import React from 'react';
import './test.css';
import myImage from '../assest/images.jpg'; 

function Test() {
    return (
        <div id="app">
            <div className="title">
                <div>
                    <a href="#" className="hero-link" target="_blank">Collections</a>
                </div>

                <div className="title-inner">
                    <div className="cafe">
                        <div className="cafe-inner">New</div>
                    </div>
                    
                    <div className="mozart">
                        <div className="mozart-inner">For Everyone</div>
                    </div>
                </div>
            </div>

            <div className="image">
                <img src={myImage} alt='' />
            </div>
        </div>
    );
}

export default Test;
