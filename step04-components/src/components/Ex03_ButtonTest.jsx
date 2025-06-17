import React from 'react';

import Ex03_Button from './Ex03_Button'; // Importing the Ex03_Button component

import mail_img from '../assets/images/mail.png'; // Importing an image for the button
import location_img from '../assets/images/location.png'; // Importing another image for the button
import search_img from '../assets/images/search.png'; // Importing another image for the button

import './Ex03_ButtonTest.css'; // Importing the CSS file for styling


const Ex03_ButtonTest = () => {
    return (
        <div className="buttonContainer">
            <Ex03_Button text="Mail" img={mail_img} />
            <Ex03_Button text="Location" img={location_img} />
            <Ex03_Button text="Search" img={search_img} />

            <img src="public/emotion5.png" alt="Emotion" className="img" />
        </div>
    );
};

export default Ex03_ButtonTest;